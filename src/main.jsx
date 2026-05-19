import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RotateCcw, Share2, Target, Shield, MessageSquare, Trophy, Skull, CheckCircle2 } from 'lucide-react';
import { questions, weapons, characters, playStyles, personalityStyles } from './data';
import './styles.css';

const initialScores = () => ({ P1:0,P2:0,P3:0,P4:0,P5:0,P6:0, M1:0,M2:0,M3:0,M4:0,M5:0,M6:0, S01:0,S02:0,S03:0,S04:0,S05:0,S06:0,S07:0,S08:0,S09:0,S10:0,S11:0,S12:0,S13:0,S14:0 });

function addScore(scores, scoreObj){
  Object.entries(scoreObj || {}).forEach(([k,v]) => { scores[k] = (scores[k] || 0) + v; });
}

function topKey(scores, keys){
  return keys.reduce((best,k)=> scores[k] > scores[best] ? k : best, keys[0]);
}

function calculateResult(answers){
  const scores = initialScores();
  questions.forEach((q) => {
    const key = answers[q.id];
    const option = q.options.find(o => o.key === key);
    if(option) addScore(scores, option.score);
  });
  const pKeys = ['P1','P2','P3','P4','P5','P6'];
  const mKeys = ['M1','M2','M3','M4','M5','M6'];
  const sKeys = ['S01','S02','S03','S04','S05','S06','S07','S08','S09','S10','S11','S12','S13','S14'];
  const playKey = topKey(scores, pKeys);
  const personalityKey = topKey(scores, mKeys);
  const specialKey = topKey(scores, sKeys);
  const specialScore = scores[specialKey] || 0;
  const resultId = specialScore >= 5 ? specialKey : `${playKey}_${personalityKey}`;
  return { resultId, playKey, personalityKey, scores };
}

function characterImageSrc(resultId, gender, weaponKey){
  const genderKey = gender === '남자' ? 'male' : 'female';
  return `/result_characters/${resultId}_${genderKey}_${weaponKey}.webp`;
}

function PlaceholderCharacter({ gender, weapon, typeName }){
  return (
    <div className="placeholder-character">
      <div className="placeholder-glow" />
      <div className="silhouette">
        <div className="head" />
        <div className="body" />
        <div className="weapon-line" />
      </div>
      <div className="placeholder-text">
        <span>{gender}</span>
        <strong>{weapon}</strong>
        <small>{typeName}</small>
      </div>
    </div>
  );
}

function StartScreen({ onStart }){
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('여자');
  const [weaponKey, setWeaponKey] = useState('AK47');
  return (
    <main className="screen start-screen">
      <section className="hero-card">
        <div className="mini-label">에이보급창고</div>
        <h1>클랜전 스타일 테스트</h1>
        <p>30문항으로 보는 나의 플레이 스타일과 성격 조합</p>
      </section>
      <section className="form-card">
        <label>닉네임</label>
        <input value={nickname} onChange={e=>setNickname(e.target.value)} placeholder="닉네임 입력" />
        <label>성별</label>
        <div className="segmented">
          {['여자','남자'].map(g => <button key={g} className={gender===g?'active':''} onClick={()=>setGender(g)}>{g}</button>)}
        </div>
        <label>선호 무기</label>
        <select value={weaponKey} onChange={e=>setWeaponKey(e.target.value)}>
          {weapons.map(w => <option key={w.key} value={w.key}>{w.group} · {w.label}</option>)}
        </select>
        <button className="primary" onClick={() => onStart({ nickname: nickname.trim() || '플레이어', gender, weaponKey, weaponLabel: weapons.find(w=>w.key===weaponKey)?.label || weaponKey })}>테스트 시작</button>
      </section>
    </main>
  );
}

function QuestionScreen({ user, answers, setAnswers, onFinish }){
  const [index, setIndex] = useState(0);
  const q = questions[index];
  const selected = answers[q.id];
  const percent = Math.round(((index+1) / questions.length) * 100);
  return (
    <main className="screen question-screen">
      <section className="question-card">
        <div className="progress-head"><span>Q{index+1} / {questions.length}</span><span>{percent}%</span></div>
        <div className="progress"><div style={{width:`${percent}%`}} /></div>
        <h2>{q.text}</h2>
        <div className="options">
          {q.options.map(o => (
            <button key={o.key} className={selected===o.key?'option selected':'option'} onClick={()=>setAnswers(prev=>({...prev,[q.id]:o.key}))}>
              <b>{o.key}</b><span>{o.text}</span>
            </button>
          ))}
        </div>
        <div className="nav-row">
          <button className="secondary" disabled={index===0} onClick={()=>setIndex(i=>Math.max(0,i-1))}>이전</button>
          <button className="primary" disabled={!selected} onClick={()=> index === questions.length-1 ? onFinish() : setIndex(i=>i+1)}>{index===questions.length-1?'결과 보기':'다음'}</button>
        </div>
      </section>
    </main>
  );
}

function ResultScreen({ user, answers, onReset }){
  const result = useMemo(()=>calculateResult(answers), [answers]);
  const character = characters[result.resultId] || characters[`${result.playKey}_${result.personalityKey}`];
  const displayName = user.gender === '남자' ? character.maleName : character.femaleName;
  const img = characterImageSrc(character.id, user.gender, user.weaponKey);
  const [imgError, setImgError] = useState(false);
  const play = playStyles[result.playKey];
  const personality = personalityStyles[result.personalityKey];
  const shareText = `${user.nickname}님의 클랜전 스타일은 ${displayName} · ${character.characterName}`;
  const handleShare = async () => {
    if(navigator.share){ await navigator.share({ title:'클랜전 스타일 테스트 결과', text:shareText, url:location.href }); }
    else { await navigator.clipboard.writeText(`${shareText}\n${location.href}`); alert('결과 링크를 복사했어.'); }
  };
  return (
    <main className="screen result-screen">
      <section className="result-hero">
        <div className="result-small">{user.nickname}님의 캐릭터</div>
        <h1>{displayName}</h1>
        <div className="type-pill">{character.characterName}</div>
        <p>{character.summary}</p>
        <div className="tag-row">{character.tags.map(t=><span key={t}>{t}</span>)}</div>
        <div className="character-frame">
          {!imgError ? <img src={img} onError={()=>setImgError(true)} alt={`${displayName} 캐릭터 이미지`} /> : <PlaceholderCharacter gender={user.gender} weapon={user.weaponLabel} typeName={character.characterName} />}
        </div>
      </section>
      <section className="dual-card">
        <div><Target size={18}/><b>플레이 스타일</b><strong>{play.label}</strong><p>{play.desc}</p></div>
        <div><MessageSquare size={18}/><b>성격/소통 성향</b><strong>{personality.label}</strong><p>{personality.desc}</p></div>
      </section>
      <section className="info-card">
        <h3>캐릭터 해석</h3>
        <ResultBlock title="첫인상" text={character.interpretation.firstImpression} />
        <ResultBlock title="외모 분위기" text={character.interpretation.appearance} />
        <ResultBlock title="플레이 스타일" text={character.interpretation.playStyleText} />
        <ResultBlock title="성격/소통 방식" text={character.interpretation.personalityText} />
        <ResultBlock title="팀에서 보이는 모습" text={character.interpretation.teamView} />
        <ResultBlock title="장점" text={character.interpretation.strengths} />
        <ResultBlock title="단점" text={character.interpretation.weaknesses} />
      </section>
      <section className="scene-card success"><h3><Trophy size={19}/> 세이브 성공 상황</h3><p>{character.saveSuccessScene}</p><div className="quote"><CheckCircle2 size={17}/>{character.successQuote}</div></section>
      <section className="scene-card death"><h3><Skull size={19}/> 죽었을 때 상황</h3><p>{character.deathScene}</p><div className="quote">“{character.lastQuote}”</div></section>
      <div className="result-actions">
        <button className="secondary" onClick={onReset}><RotateCcw size={17}/> 다시 테스트</button>
        <button className="primary" onClick={handleShare}><Share2 size={17}/> 결과 공유</button>
      </div>
    </main>
  );
}

function ResultBlock({ title, text }){ return <div className="result-block"><b>{title}</b><p>{text}</p></div>; }

function App(){
  const [user, setUser] = useState(null);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  if(!user) return <StartScreen onStart={setUser} />;
  if(!done) return <QuestionScreen user={user} answers={answers} setAnswers={setAnswers} onFinish={()=>setDone(true)} />;
  return <ResultScreen user={user} answers={answers} onReset={()=>{setUser(null); setAnswers({}); setDone(false);}} />;
}

createRoot(document.getElementById('root')).render(<App />);

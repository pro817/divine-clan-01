import React, {useMemo, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { RotateCcw, Share2, ChevronLeft, ChevronRight, Target, Shield, Skull, Trophy } from 'lucide-react';
import { questions, weapons, buildResult } from './data.js';
import './styles.css';

const emptyUser = { nickname:'', gender:'여자', weapon:'AK-47' };

function App(){
  const [phase,setPhase] = useState('start');
  const [user,setUser] = useState(emptyUser);
  const [current,setCurrent] = useState(0);
  const [answers,setAnswers] = useState({});
  const [result,setResult] = useState(null);

  const selected = answers[current];
  const progress = Math.round(((current+1)/questions.length)*100);
  const q = questions[current];

  const start = () => {
    if(!user.nickname.trim()) { alert('닉네임을 입력해줘.'); return; }
    setPhase('test'); setCurrent(0);
  }
  const choose = (key) => setAnswers(prev=>({...prev,[current]:key}));
  const next = () => {
    if(!answers[current]) return;
    if(current === questions.length-1) {
      const scores = {};
      questions.forEach((q,i)=>{
        const ans = answers[i];
        const opt = q.options.find(o=>o.key===ans);
        if(opt?.scores) Object.entries(opt.scores).forEach(([k,v])=>{scores[k]=(scores[k]||0)+v;});
      });
      const r = buildResult(scores, user.gender, user.weapon);
      setResult(r); setPhase('result');
    } else setCurrent(v=>v+1);
  };
  const prev = () => setCurrent(v=>Math.max(0,v-1));
  const restart = () => { setPhase('start'); setAnswers({}); setCurrent(0); setResult(null); };
  const share = async () => {
    const text = `${user.nickname}님의 클랜전 스타일: ${result.typeName}\n플레이 스타일: ${result.playStyle}\n성격/소통: ${result.personalityStyle}`;
    if(navigator.share) await navigator.share({title:'클랜전 스타일 테스트 결과', text});
    else { await navigator.clipboard.writeText(text); alert('결과가 클립보드에 복사됐어.'); }
  }

  if(phase==='start') return <Start user={user} setUser={setUser} onStart={start}/>;
  if(phase==='result') return <Result user={user} result={result} onRestart={restart} onShare={share}/>;
  return <main className="page"><section className="card question-card">
    <div className="topbar"><span>FPS 성향 테스트</span><span>Q{current+1} / {questions.length}</span></div>
    <div className="progress-wrap"><div className="progress-info"><b>{progress}%</b><span>{current+1}번째 문항</span></div><div className="progress"><div style={{width:`${progress}%`}}/></div></div>
    <h1 className="question-title">{q.text}</h1>
    <div className="options">
      {q.options.map(opt=><button key={opt.key} onClick={()=>choose(opt.key)} className={`option ${selected===opt.key?'selected':''}`}>
        <span className="option-key">{opt.key}</span><span>{opt.text}</span>
      </button>)}
    </div>
    <div className="nav-buttons">
      <button className="btn ghost" disabled={current===0} onClick={prev}><ChevronLeft size={18}/>이전</button>
      <button className="btn primary" disabled={!selected} onClick={next}>{current===questions.length-1?'결과 보기':'다음'}<ChevronRight size={18}/></button>
    </div>
  </section></main>
}

function Start({user,setUser,onStart}){
 return <main className="page"><section className="card start-card">
  <div className="mini-title">A보급창고 클랜전 스타일 테스트</div>
  <h1 className="start-title">나는 어떤 클랜전 캐릭터일까?</h1>
  <p className="start-desc">30개 문항으로 플레이 스타일과 성격/소통 성향을 종합해 결과 캐릭터를 보여줍니다.</p>
  <label className="field"><span>닉네임</span><input value={user.nickname} onChange={e=>setUser({...user,nickname:e.target.value})} placeholder="닉네임 입력"/></label>
  <div className="field"><span>성별</span><div className="segmented">
    {['남자','여자'].map(g=><button key={g} onClick={()=>setUser({...user,gender:g})} className={user.gender===g?'active':''}>{g}</button>)}
  </div></div>
  <label className="field"><span>선호 무기</span><select value={user.weapon} onChange={e=>setUser({...user,weapon:e.target.value})}>{weapons.map(w=><option key={w}>{w}</option>)}</select></label>
  <button className="btn primary full" onClick={onStart}>테스트 시작하기</button>
 </section></main>
}

function Result({user,result,onRestart,onShare}){
 const [imgError,setImgError] = useState(false);
 return <main className="result-page">
  <section className="result-hero card">
    <div className="result-top"><span>FPS 성향 테스트 결과</span><span>YOUR TYPE</span></div>
    <div className="hero-grid">
      <div className="image-box">
        {!imgError ? <img src={result.imagePath} onError={()=>setImgError(true)} alt="캐릭터 이미지"/> : <Placeholder gender={user.gender} weapon={user.weapon}/>} 
      </div>
      <div className="hero-text">
        <p className="nickname">{user.nickname} 님의 유형은...</p>
        <h1>{result.typeName}</h1>
        <p className="summary">{result.summary}</p>
        <div className="chips">{result.tags.map(t=><span key={t}>{t}</span>)}</div>
        <div className="axis-box"><div><b>플레이 스타일</b><span>{result.playStyle}</span></div><div><b>성격/소통</b><span>{result.personalityStyle}</span></div></div>
      </div>
    </div>
  </section>
  <section className="card section"><h2><Target/>캐릭터 해석</h2><div className="analysis-grid">
    <Info title="첫인상" text={result.firstImpression}/><Info title="외모 분위기" text={result.appearance}/><Info title="플레이 스타일" text={result.playText}/><Info title="성격/소통" text={result.personalityText}/><Info title="팀에서 보이는 모습" text={result.teamView}/><Info title="장점" text={result.strengths}/><Info title="단점" text={result.weaknesses}/>
  </div></section>
  <section className="two-col">
    <div className="card section blue"><h2><Shield/>세이브 성공 상황</h2><p>{result.saveSuccess}</p><h3>성공 시 한마디</h3><blockquote>“{result.successQuote}”</blockquote></div>
    <div className="card section red"><h2><Skull/>죽었을 때 상황</h2><p>{result.deathScene}</p><h3>마지막 한마디</h3><blockquote>“{result.lastQuote}”</blockquote></div>
  </section>
  <section className="actions"><button className="btn ghost" onClick={onRestart}><RotateCcw size={18}/>다시 테스트하기</button><button className="btn primary" onClick={onShare}><Share2 size={18}/>결과 공유하기</button></section>
 </main>
}
function Info({title,text}){return <div className="info"><h3>{title}</h3><p>{text}</p></div>}
function Placeholder({gender,weapon}){return <div className="placeholder"><Trophy size={54}/><b>{gender} 캐릭터 이미지</b><span>{weapon}</span><small>이미지 파일을 result_characters 폴더에 추가하면 자동 표시됩니다.</small></div>}

createRoot(document.getElementById('root')).render(<App/>);

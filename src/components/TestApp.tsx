"use client";

import { useMemo, useState } from "react";
import { questions } from "@/data/questions";
import { weaponGroups, type Gender } from "@/data/weapons";
import { calculateResult, type AnswerMap } from "@/lib/scoring";
import { getProfileCode, getProfileImageUrl, copyText } from "@/lib/profileCode";

type UserProfile = {
  nickname: string;
  gender: Gender;
  weapon: string;
};

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="stat-row">
      <div className="stat-head">
        <span>{label}</span>
        <b>{value}</b>
      </div>
      <div className="stat-track">
        <div className="stat-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ProfileImageCard({
  profileCode,
  characterTitle,
}: {
  profileCode: string;
  characterTitle: string;
}) {
  const [exists, setExists] = useState(true);
  const [copied, setCopied] = useState(false);
  const imageUrl = getProfileImageUrl(profileCode);

  async function handleCopy() {
    await copyText(profileCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <section className="card image-card">
      {exists ? (
        <img
          src={imageUrl}
          alt={`${characterTitle} 캐릭터 이미지`}
          className="character-image"
          onError={() => setExists(false)}
        />
      ) : (
        <div className="empty-image-box">
          <p className="eyebrow">캐릭터 이미지 준비중</p>
          <p className="empty-title">아직 등록된 이미지가 없습니다.</p>
          <p className="empty-desc">
            프로필코드를 복사해서 제작 요청하면, 이후 같은 결과에서는 자동으로 이미지가 표시됩니다.
          </p>
          <code>{profileCode}</code>
          <button type="button" className="primary ghost" onClick={handleCopy}>
            {copied ? "복사 완료" : "프로필코드 복사하기"}
          </button>
        </div>
      )}
    </section>
  );
}

export function StartPage({ onStart }: { onStart: (profile: UserProfile) => void }) {
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [weapon, setWeapon] = useState("");

  const canStart = nickname.trim().length >= 1 && gender && weapon;

  return (
    <main className="page start-page">
      <section className="hero-card">
        <p className="eyebrow">A보급 클랜전 성향 테스트</p>
        <h1>내 플레이를 캐릭터로 확인해보세요.</h1>
        <p className="hero-copy">
          플레이 스타일, 소통 방식, 특수 성향을 분석해 결과 캐릭터를 보여줍니다.
        </p>
      </section>

      <section className="card">
        <label className="label">게임 닉네임</label>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="예: 예둥"
          className="input"
        />
      </section>

      <section className="card">
        <label className="label">성별 선택</label>
        <div className="segmented">
          <button className={gender === "male" ? "selected" : ""} onClick={() => setGender("male")} type="button">
            남자
          </button>
          <button className={gender === "female" ? "selected" : ""} onClick={() => setGender("female")} type="button">
            여자
          </button>
        </div>
      </section>

      <section className="card">
        <label className="label">선호 총기 선택</label>
        <p className="helper">총기는 결과 텍스트에는 표시되지 않고, 프로필 이미지 파일명에만 사용됩니다.</p>
        {weaponGroups.map((group) => (
          <div className="weapon-group" key={group.group}>
            <h3>{group.group}</h3>
            <div className="weapon-grid">
              {group.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={weapon === item ? "selected" : ""}
                  onClick={() => setWeapon(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <button
        className="primary start-button"
        type="button"
        disabled={!canStart}
        onClick={() => onStart({ nickname: nickname.trim(), gender: gender as Gender, weapon })}
      >
        테스트 시작하기
      </button>
    </main>
  );
}

export function TestPage({
  onFinish,
  onBackToStart,
}: {
  onFinish: (answers: AnswerMap) => void;
  onBackToStart: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});

  const q = questions[current];
  const selected = answers[q.id];
  const progress = Math.round(((current + 1) / questions.length) * 100);

  function selectOption(optionId: string) {
    setAnswers((prev) => ({ ...prev, [q.id]: optionId }));
  }

  function goPrev() {
    if (current === 0) onBackToStart();
    else setCurrent((v) => v - 1);
  }

  function goNext() {
    if (!selected) return;
    if (current === questions.length - 1) onFinish(answers);
    else setCurrent((v) => v + 1);
  }

  return (
    <main className="page test-page">
      <section className="progress-card">
        <div className="progress-top">
          <span>Q{current + 1} / {questions.length}</span>
          <b>{progress}%</b>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </section>

      <section className="card question-card">
        <p className="eyebrow">{q.category === "play" ? "플레이 스타일" : q.category === "comm" ? "성격 / 소통" : "특수 성향"}</p>
        <h2>{q.title}</h2>
        {q.description && <p className="question-desc">{q.description}</p>}

        <div className="option-list">
          {q.options.map((option, i) => (
            <button
              key={option.id}
              type="button"
              className={`option-card ${selected === option.id ? "selected" : ""}`}
              onClick={() => selectOption(option.id)}
            >
              <span className="option-letter">{String.fromCharCode(65 + i)}</span>
              <span>{option.text}</span>
            </button>
          ))}
        </div>
      </section>

      <nav className="bottom-nav">
        <button type="button" className="secondary" onClick={goPrev}>
          이전
        </button>
        <button type="button" className="primary" onClick={goNext} disabled={!selected}>
          {current === questions.length - 1 ? "결과 보기" : "다음"}
        </button>
      </nav>
    </main>
  );
}

export function ResultPage({
  user,
  answers,
  onRestart,
}: {
  user: UserProfile;
  answers: AnswerMap;
  onRestart: () => void;
}) {
  const calculated = useMemo(() => calculateResult(answers), [answers]);
  const data = calculated.resultData;
  const displayName = user.gender === "male" ? data.male_name : data.female_name;
  const profileCode = getProfileCode(data.result_id, user.gender, user.weapon);

  const tags = [data.tag_1, data.tag_2, data.tag_3, data.tag_4].filter(Boolean);
  const statItems = [
    ["주도성", data.stat_initiative],
    ["판단력", data.stat_judgment],
    ["팀기여도", data.stat_teamwork],
    ["생존력", data.stat_survival],
    ["소통력", data.stat_communication],
    ["멘탈", data.stat_mental],
  ] as const;

  return (
    <main className="page result-page">
      <section className="result-hero card">
        <p className="eyebrow">테스트 결과</p>
        <p className="owner">{user.nickname}님의 캐릭터</p>
        <h2>{displayName}</h2>
        <h1>{data.character_title}</h1>
        <p className="subtitle">{data.subtitle}</p>
        <p className="quote">“{data.main_quote}”</p>
      </section>

      <ProfileImageCard profileCode={profileCode} characterTitle={data.character_title} />

      <section className="tag-list">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </section>

      <section className="card">
        <h3>외모로 풍기는 분위기</h3>
        <p>{data.appearance_mood}</p>
      </section>

      <section className="card">
        <h3>당신의 성향 분석</h3>
        <div className="stats">
          {statItems.map(([label, value]) => (
            <StatBar key={label} label={label} value={value} />
          ))}
        </div>
      </section>

      <section className="card">
        <h3>캐릭터 해석</h3>
        <p>{data.interpretation}</p>
      </section>

      <section className="card">
        <h3>인상적인 상황</h3>
        <p>{data.memorable_situation}</p>
        <p className="quote small">“{data.memorable_quote}”</p>
      </section>

      <section className="card">
        <h3>죽었을 때 상황</h3>
        <p>{data.death_situation}</p>
        <p className="quote small">“{data.death_quote}”</p>
      </section>

      <section className="card">
        <h3>당신의 강점</h3>
        <ul>
          {data.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h3>당신의 약점</h3>
        <ul>
          {data.weaknesses.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h3>당신을 표현하는 키워드</h3>
        <div className="keyword-list">
          {data.keywords.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <nav className="result-actions">
        <button type="button" className="secondary" onClick={onRestart}>
          다시 테스트하기
        </button>
      </nav>
    </main>
  );
}

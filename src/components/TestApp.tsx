"use client";

import html2canvas from "html2canvas";
import { useEffect, useMemo, useRef, useState } from "react";
import { questions } from "@/data/questions";
import { weaponGroups, type Gender } from "@/data/weapons";
import { calculateResult, type AnswerMap } from "@/lib/scoring";
import { getProfileCode, getProfileImageUrl, copyText } from "@/lib/profileCode";

type UserProfile = {
  nickname: string;
  gender: Gender;
  weapon: string;
};

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function sanitizeFileName(text: string) {
  return text.replace(/[\\/:*?"<>|]/g, "").replace(/\s+/g, "_");
}

function RadarChart({ items }: { items: ReadonlyArray<readonly [string, number]> }) {
  const size = 290;
  const center = size / 2;
  const radius = 82;
  const rings = [20, 40, 60, 80, 100];

  const polarPoint = (valueScale: number, index: number, offset = 0) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / items.length;
    const r = radius * valueScale + offset;
    return {
      x: center + Math.cos(angle) * r,
      y: center + Math.sin(angle) * r,
    };
  };

  const polygonPoints = items
    .map(([, value], index) => {
      const point = polarPoint(value / 100, index);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <div className="radar-wrap">
      <svg viewBox={`0 0 ${size} ${size}`} className="radar-svg" aria-label="성향 분석 육각형 그래프">
        <defs>
          <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(243,198,109,0.72)" />
            <stop offset="100%" stopColor="rgba(255,231,170,0.28)" />
          </linearGradient>
        </defs>

        {rings.map((ring) => {
          const points = items
            .map((_, index) => {
              const point = polarPoint(ring / 100, index);
              return `${point.x},${point.y}`;
            })
            .join(" ");
          return <polygon key={ring} points={points} className="radar-ring" />;
        })}

        {items.map((_, index) => {
          const point = polarPoint(1, index);
          return <line key={index} x1={center} y1={center} x2={point.x} y2={point.y} className="radar-axis" />;
        })}

        <polygon points={polygonPoints} className="radar-value-area" />

        {items.map(([, value], index) => {
          const point = polarPoint(value / 100, index);
          return <circle key={`dot-${index}`} cx={point.x} cy={point.y} r="4.5" className="radar-dot" />;
        })}

        {items.map(([label, value], index) => {
          const labelPoint = polarPoint(1, index, 32);
          const anchor = Math.abs(labelPoint.x - center) < 20 ? "middle" : labelPoint.x < center ? "end" : "start";
          return (
            <g key={`label-${index}`}>
              <text x={labelPoint.x} y={labelPoint.y - 6} textAnchor={anchor} className="radar-label">
                {label}
              </text>
              <text x={labelPoint.x} y={labelPoint.y + 16} textAnchor={anchor} className="radar-score">
                {value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ProfileImageCard({
  profileCode,
  characterTitle,
  onImageStateChange,
}: {
  profileCode: string;
  characterTitle: string;
  onImageStateChange: (exists: boolean) => void;
}) {
  const [exists, setExists] = useState<boolean>(false);
  const imageUrl = getProfileImageUrl(profileCode);

  function markLoaded() {
    setExists(true);
    onImageStateChange(true);
  }

  function markMissing() {
    setExists(false);
    onImageStateChange(false);
  }

  return (
    <section className="card image-card profile-capture-target">
      <img
        src={imageUrl}
        alt={`${characterTitle} 캐릭터 이미지`}
        className={`character-image ${exists ? "loaded" : "hidden-until-load"}`}
        onLoad={markLoaded}
        onError={markMissing}
      />
      {!exists && (
        <div className="empty-image-box">
          <p className="eyebrow">캐릭터 이미지 준비중</p>
          <p className="empty-title">아직 등록된 이미지가 없습니다.</p>
          <p className="empty-desc">
            프로필코드를 복사해서 제작 요청하면, 이후 같은 결과에서는 자동으로 이미지가 표시됩니다.
          </p>
          <code>{profileCode}</code>
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
          placeholder="EX)디바인"
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current]);

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
  const imageUrl = getProfileImageUrl(profileCode);

  const [copied, setCopied] = useState(false);
  const [savingResult, setSavingResult] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [imageExists, setImageExists] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const tags = [data.tag_1, data.tag_2, data.tag_3, data.tag_4].filter(Boolean);
  const statItems = [
    ["주도성", data.stat_initiative],
    ["판단력", data.stat_judgment],
    ["팀기여도", data.stat_teamwork],
    ["생존력", data.stat_survival],
    ["소통력", data.stat_communication],
    ["멘탈", data.stat_mental],
  ] as const;

  async function handleCopyProfileCode() {
    await copyText(profileCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  async function handleSaveResult() {
    if (!resultRef.current) return;
    try {
      setSavingResult(true);
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: "#050813",
        scale: Math.min(window.devicePixelRatio || 2, 2),
        useCORS: true,
        logging: false,
      });
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob) return;
      downloadBlob(blob, `${sanitizeFileName(user.nickname || displayName)}_result.png`);
    } finally {
      setSavingResult(false);
    }
  }

  async function handleSaveProfile() {
    if (!imageExists) return;
    try {
      setSavingProfile(true);
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      downloadBlob(blob, `${sanitizeFileName(user.nickname || displayName)}_profile.png`);
    } finally {
      setSavingProfile(false);
    }
  }

  return (
    <main className="page result-page">
      <div ref={resultRef} className="result-capture-area">
        <section className="result-hero card">
          <p className="eyebrow">테스트 결과</p>
          <p className="owner">{user.nickname}님의 캐릭터</p>
          <h2>{displayName}</h2>
          <h1>{data.character_title}</h1>
          <p className="subtitle">{data.subtitle}</p>
          <p className="quote">“{data.main_quote}”</p>
        </section>

        <ProfileImageCard profileCode={profileCode} characterTitle={data.character_title} onImageStateChange={setImageExists} />

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
          <RadarChart items={statItems} />
          <p className="analysis-copy">
            {data.character_title}은(는) 팀 흐름, 소통, 판단의 결이 결과에 자연스럽게 드러나는 캐릭터입니다.
          </p>
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
      </div>

      <section className="card action-card">
        <h3>결과 활용</h3>
        <p className="helper">프로필코드를 복사해두면 이후 같은 결과에 등록된 이미지를 자동으로 불러올 수 있습니다.</p>
        <div className="profile-code-box">
          <span className="profile-code-label">프로필 코드</span>
          <code>{profileCode}</code>
        </div>
        <nav className="result-actions">
          <button type="button" className="secondary" onClick={onRestart}>
            다시 테스트하기
          </button>
          <button type="button" className="secondary" onClick={handleCopyProfileCode}>
            {copied ? "복사 완료" : "프로필 코드 복사하기"}
          </button>
          <button type="button" className="primary" onClick={handleSaveResult} disabled={savingResult}>
            {savingResult ? "저장 중..." : "결과 저장하기"}
          </button>
          <button type="button" className="primary" onClick={handleSaveProfile} disabled={!imageExists || savingProfile}>
            {!imageExists ? "프로필 저장하기 (이미지 없음)" : savingProfile ? "저장 중..." : "프로필 저장하기"}
          </button>
        </nav>
      </section>
    </main>
  );
}

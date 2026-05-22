# Asset Skin v5 Fixed

v4의 글자/장식 겹침 문제를 수정한 안정화 버전입니다.

핵심 수정:
1. 통짜 PNG 프레임을 카드/버튼 배경으로 쓰지 않음
2. 배경 PNG는 유지
3. 아이콘 PNG는 유지
4. 카드와 버튼은 CSS 기반으로 안정화
5. 카드 내부 padding과 장식 레이어를 분리
6. 성향 분석 그래프 하단 여백 확보
7. 문항 카테고리 배지 제거 유지

자산 경로:
- `/public/ui/fantasy-png/`

핵심 파일:
- `src/app/globals.css`
- `src/components/TestApp.tsx`

---

# PNG Asset Fantasy Skin v4

이미지 생성으로 만든 실제 PNG 자산을 프로젝트에 적용한 버전입니다.

추가 자산 경로:
- `/public/ui/fantasy-png/`

주요 자산:
- `page-bg.png`
- `hero-frame.png`
- `portrait-frame.png`
- `panel-frame.png`
- `button-blue.png`
- `button-gold.png`
- `button-dark.png`
- `divider.png`
- `icon-*.png`

적용 방식:
- 텍스트/레이아웃은 React/HTML 유지
- 배경, 프레임, 버튼, 아이콘, 구분선만 PNG 자산으로 적용
- 문항페이지 카테고리 배지 제거
- 결과페이지 하단 버튼 순서 정리

---

# Fantasy Premium Skin v3

실제 고급 판타지 UI를 위해 장식 SVG 자산을 새로 만든 버전입니다.

추가 자산:
- `/public/ui/fantasy/card-ornate-frame.svg`
- `/public/ui/fantasy/hero-ornate-frame.svg`
- `/public/ui/fantasy/button-ornate-frame.svg`
- `/public/ui/fantasy/title-divider-ornate.svg`
- `/public/ui/fantasy/magic-halo.svg`
- `/public/ui/fantasy/bg-texture.svg`
- `/public/ui/fantasy/icon-*.svg`

핵심 수정:
- 문항 카테고리 배지 제거
- 카드/버튼/디바이더/아이콘 장식 자산 적용
- 결과페이지 하단 버튼 순서 정리

---

# Step 1 구조/스킨 수정본

수정 내용:
1. 테스트 문항 상단의 `[플레이 스타일]`, `[성격/소통]`, `[특수 성향] 배지 제거
2. 결과페이지 전용 클래스 구조 추가
3. 테스트 화면 공통 카드와 결과페이지 카드 스킨 분리
4. 결과페이지 카드 입체감, 금장 테두리, 하단 버튼 세로 구조 유지

핵심 수정 파일:
- `src/components/TestApp.tsx`
- `src/app/globals.css`

---

# 결과페이지 기능 + 고풍 스킨 적용본

반영 내용:
1. 성향 분석을 막대 그래프에서 육각형 그래프로 변경
2. 프로필 코드 복사 버튼을 결과 하단으로 이동
3. 결과 저장하기 버튼 추가
4. 프로필 저장하기 버튼 추가
5. 캐릭터 이미지가 없으면 프로필 저장하기 비활성화
6. 전체 폰트를 Noto Serif KR 명조체로 통일
7. 다크 판타지 금장 카드 스킨 적용

이미지 경로:
`/public/profile-images`

파일명:
`{프로필코드}.png`

---

# 닉네임 입력칸 문구 수정본

수정 내용:
- 첫 화면 닉네임 입력칸 placeholder 변경
- 기존: `예: 예둥`
- 변경: `EX)디바인`

---

# UI 비주얼 1차 수정본

수정 내용:
1. 전체 폰트 스택을 Pretendard/Noto/system 기반으로 개선
2. 카드, 버튼, 선택지, 결과 페이지를 글래스모피즘 계열 모바일 UI로 재정리
3. 여백, 행간, 카드 높이, 선택지 가독성 개선
4. 기존 다음 버튼 표시 문제와 문항 이동 시 스크롤 상단 이동 유지

이번 단계는 사용자 요청 1번, 즉 전체 UI 비주얼 개선만 반영한 버전입니다.

---

# UI 수정본

수정 내용:
1. 다음 버튼이 선택 완료 상태에서도 비활성처럼 보이는 문제 수정
2. 다음 문항으로 이동할 때 스크롤이 항상 문항 상단으로 이동하도록 수정
3. 프로필 이미지 자동 로딩 경로 유지

이미지 폴더:
`/public/profile-images`

이미지 파일 예시:
`/public/profile-images/S8-F-WINCHESTER.png`

---

# 최종 검증본

이 버전은 업로드된 최종 문항 Q1~Q26과 특수 캐릭터 문항 Q27~Q30을 반영한 Vercel 배포용 파일입니다.

- Q1~Q26: 사용자 업로드 원문 기준
- Q27~Q30: 특수 캐릭터 보정 문항
- Next.js: 15.5.7
- 이미지 폴더: `/public/profile-images`
- 프로필 이미지 파일명: `{profileCode}.png`

---

# Vercel Security Patch 수정본

이 버전은 Vercel이 차단한 Next.js 보안 취약 버전 문제를 해결하기 위해 `next`를 `15.5.7`로 고정했습니다.

수정 사항:
- `next`: `15.5.6` → `15.5.7`
- `vercel.json`에서 `outputDirectory`: `.next`
- npm 공식 registry 강제
- lock 파일 생성 방지

GitHub에는 이 ZIP 안의 파일을 그대로 올리면 됩니다.

---

# Vercel Output Directory 수정본

이번 ZIP은 Vercel이 `dist` 폴더를 찾는 문제를 막기 위해 `vercel.json`에서 Next.js 빌드 출력 폴더를 `.next`로 고정했습니다.

핵심:
- `framework`: `nextjs`
- `outputDirectory`: `.next`
- 기존 lock 파일 제거 후 npm 공식 registry로 설치

GitHub에는 이 ZIP 안의 파일을 그대로 올리면 됩니다.

---

# Vercel 강제 정리 배포본

이번 ZIP은 기존 GitHub repo에 남아 있을 수 있는 `node_modules`, `package-lock.json`, `.npmrc` 문제까지 Vercel 빌드 시점에 강제로 제거하도록 `vercel.json`을 포함합니다.

핵심:
- Vercel installCommand에서 `node_modules`, lock 파일, 기존 `.npmrc` 제거
- npm registry를 `https://registry.npmjs.org/`로 강제
- 새 `.npmrc`도 npmjs registry로 고정

---

# Vercel 배포용 수정본

이 ZIP은 Vercel `npm install` 단계에서 내부 registry를 보지 않도록 정리한 버전입니다.

포함하지 않은 파일:
- `package-lock.json`
- `pnpm-lock.yaml`
- `yarn.lock`
- `.npmrc`
- `node_modules`

GitHub에는 이 ZIP 안의 파일만 올리면 됩니다.

---

# A보급 클랜전 성향 테스트

모바일 세로형 테스트 페이지 최종 구조입니다.

## 1. 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 2. 페이지 구조

1. 첫 화면
   - 게임 닉네임
   - 성별 선택
   - 선호 총기 선택

2. 테스트 문항
   - Q1~Q30
   - 진행률
   - 이전 / 다음 버튼

3. 테스트 결과 페이지
   - 닉네임
   - 성별에 맞는 한국식 이름
   - 캐릭터명
   - 한 줄 소개
   - 대표 대사
   - 캐릭터 이미지 영역
   - 유형 태그
   - 외모로 풍기는 분위기
   - 성향 분석
   - 캐릭터 해석
   - 인상적인 상황
   - 죽었을 때 상황
   - 강점
   - 약점
   - 키워드

## 3. 이미지 넣는 폴더 경로

캐릭터 이미지는 아래 폴더에 넣습니다.

```text
/public/profile-images
```

파일명은 반드시 프로필코드와 같아야 합니다.

```text
/public/profile-images/S1-M-AK47.png
/public/profile-images/B26-F-TRG21.png
/public/profile-images/S4-M-MPX3.png
```

## 4. 프로필코드 규칙

```text
결과ID-성별코드-총기코드
```

예시:

```text
S1-M-AK47
B26-F-TRG21
S4-M-KRISS
S7-F-COMBATBOW
```

성별코드:

```text
M = 남자
F = 여자
```

총기코드:

```text
AK-47 -> AK47
TRG-21 -> TRG21
윈체스터 -> WINCHESTER
컴벳보우 -> COMBATBOW
MP-X3 -> MPX3
```

## 5. 이미지 동작 방식

결과 페이지는 자동으로 아래 파일을 찾습니다.

```text
/profile-images/{profileCode}.png
```

이미지가 있으면 표시합니다.

이미지가 없으면 빈 이미지 영역이 표시되고, 사용자가 `프로필코드 복사하기` 버튼을 눌러 코드를 복사할 수 있습니다.

복사되는 내용은 긴 요청문이 아니라 프로필코드 한 줄입니다.

```text
S1-M-AK47
```

## 6. 결과 데이터

결과 데이터는 아래 파일에 들어 있습니다.

```text
/src/data/results.ts
```

기준 데이터는 `character_result_data_v6_visual.xlsx`에서 변환했습니다.

## 7. 문항 데이터

문항 데이터는 아래 파일에 있습니다.

```text
/src/data/questions.ts
```

주의:
- Q8, Q9, Q10, Q11, Q14, Q16, Q18, Q26~Q30은 현재 대화에서 확정된 표현을 반영했습니다.
- 나머지 문항은 앱 실행용으로 구성했습니다.
- 최종 확정 문항 전문을 별도 관리한다면 `title`, `description`, `options.text`만 교체하면 됩니다.
- 점수 계산은 `option.score` 기준입니다.

## 8. 결과 계산

계산 로직은 아래 파일입니다.

```text
/src/lib/scoring.ts
```

구조:

```text
Q1~Q9   -> P1~P6
Q10~Q26 -> M1~M6
Q27~Q30 -> S1~S8 보정
```

특수 캐릭터 조건 충족 시 기본 B01~B36 결과를 S1~S8이 덮어씁니다.

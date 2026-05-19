# divine-clan-01

모바일 최적화 FPS 클랜전 스타일 테스트입니다.

## 실행
```bash
npm install
npm run dev
```

## 배포
Vercel에서 Framework Preset은 Vite, Build Command는 `npm run build`, Output Directory는 `dist`를 사용합니다.

## 캐릭터 이미지 규칙
이미지는 `public/result_characters/` 폴더에 넣습니다.

파일명:
```text
{결과ID}_{gender}_{weaponKey}.webp
```

예:
```text
P1_M2_female_AK47.webp
S13_male_AWP.webp
```

이미지가 없으면 기본 플레이스홀더가 표시됩니다.

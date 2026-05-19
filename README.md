# divine-clan-01

모바일 최적화 FPS 클랜전 스타일 테스트입니다.

## 실행
```bash
npm install
npm run dev
```

## 배포
GitHub에 업로드 후 Vercel에서 Vite 프리셋으로 Import 하면 됩니다.
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: 기본값

## 캐릭터 이미지 규칙
결과 이미지는 아래 경로 규칙으로 불러옵니다.
`/result_characters/{resultId}_{gender}_{weapon}.webp`

예: `/result_characters/P1_M2_female_AK47.webp`

이미지가 없으면 자동으로 기본 플레이스홀더가 표시됩니다.


## 이미지 에셋

샘플 이미지 1개가 포함되어 있습니다.

- `public/result_characters/P1_M2_female_AK47.webp`
- `public/result_characters/default_female.webp`
- `public/result_characters/default_male.webp`

최종 운영용 이미지는 아래 규칙으로 추가하면 됩니다.

```text
public/result_characters/{결과ID}_{성별}_{무기키}.webp
예: P1_M2_female_AK47.webp
```

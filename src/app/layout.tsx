import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A보급 클랜전 성향 테스트",
  description: "플레이 스타일과 소통 성향을 캐릭터로 분석하는 모바일 테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

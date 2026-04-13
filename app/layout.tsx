import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "그래서 이제 뭐함?",
  description: "AI 기반 일정 관리 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-gray-900 text-white p-5">
            <h1 className="text-xl font-bold mb-6">그래서 이제 뭐함?</h1>

            <nav>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                    대시보드
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="hover:text-gray-300">
                    시간표
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    일정 관리
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="flex-1 bg-gray-50 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
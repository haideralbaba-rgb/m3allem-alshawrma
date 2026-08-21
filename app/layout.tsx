import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "m3allem alshawrma | معلم شاورما",
  description: "معلم شاورما — شاورما، برغر ووجبات بطابع المعلم.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

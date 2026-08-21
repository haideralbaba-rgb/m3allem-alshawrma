import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "m3allem alshawrma | معلم شاورما",
  description:
    "معلم شاورما — شاورما، برغر ووجبات بطابع المعلم.",
  keywords: [
    "معلم شاورما",
    "m3allem alshawrma",
    "shawarma",
    "Iraq",
    "مطعم",
    "شاورما",
    "برغر",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="bg-[#070707]"
    >
      <body className="noise">
        {children}
      </body>
    </html>
  );
}

import "./globals.css"; // <-- SABSE ZAROORI LINE (Tailwind connect karti hai)
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Congress Parichay Patra",
  description: "Election Campaign Digital Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
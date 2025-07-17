import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Web Dev Agency",
  description:
    "Admin: Syphar web development agency that helps businesses grow online.",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <span>Admin Navbar</span>
      {children}
      <span>Admin Footer</span>
    </>
  );
}

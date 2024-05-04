import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flood Hero",
  description: "Find help when you need it most",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </html>
  );
}

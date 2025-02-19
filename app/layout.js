import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ... existing code ...

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Your Name - Software Engineer",
  description:
    "Welcome to my portfolio. I'm a passionate software engineer specializing in [your specialties]. Explore my projects and experience in [your key technologies].",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-950"}>
        <ToastContainer position="bottom-right" theme="dark" />
        <main className="min-h-screen relative mx-auto px-4 sm:px-8 lg:max-w-7xl border-x border-gray-800">
          <Navbar />
          <div className="py-8">
            {children}
          </div>
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}

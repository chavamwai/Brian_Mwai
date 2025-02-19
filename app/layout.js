import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brian Mwai - Software Engineer",
  description:
    "Welcome to my portfolio. I'm a passionate software engineer specializing in Full Stack Development, Cloud Computing, and DevOps. Explore my projects and experience in React, Node.js, AWS, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-gray-950 to-gray-900"}>
        <ToastContainer position="bottom-right" theme="dark" />
        <div className="noise-bg"></div>
        <main className="min-h-screen relative mx-auto px-4 sm:px-8 lg:max-w-7xl">
          <Navbar />
          <div className="py-12">
            {children}
          </div>
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
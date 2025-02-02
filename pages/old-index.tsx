import localFont from "next/font/local";
import TabHead from "../app/components/TabHead";
import PageFooter from "../app/components/PageFooter";
import HomePage from "../app/pages/home/page";
import PageHeader from "../app/components/PageHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <TabHead />
      <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}> 
        <PageHeader />
        <div id="home-page-container" className="flex-1">
          <HomePage/>
        </div>
        <div id="footer-container" className="mt-auto">
          <PageFooter />
        </div>
      </div>
    </>
  );
}

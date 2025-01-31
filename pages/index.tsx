import localFont from "next/font/local";
import TabHead from "./components/TabHead";
import PageFooter from "./components/PageFooter";
import HomePage from "./pages/HomePage";

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

// ${styles.page}

export default function Home() {
  return (
    <>
      <TabHead />
      <div className={`${geistSans.variable} ${geistMono.variable}`}> 
        <HomePage/>
        <PageFooter />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import HomePage from "./pages/home/page";
import PageHeader from "./components/PageHeader";

export const metadata: Metadata = {
  title: "Tali Tech - Home",
  description: "Where kids learn to code and create",
};

const homeBannerImg = "/assets/a-girl-smiling-headphones-laptop.png";

export default function Page() {
  return (
    <div>
      <PageHeader srcImg={homeBannerImg} />
      <HomePage />
    </div>
  );
}

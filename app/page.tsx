import type { Metadata } from "next";
import HomePage from "./pages/home/page";

export const metadata: Metadata = {
  title: `TaliTech - Summer Coding Camps ${new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    year: "numeric",
  })}`,
  description:
    "Empower the next generation of innovators with TaliTech's summer coding camps in Bountiful, Utah. Expert-led classes in AI, Python, and block-based coding for kids.",
};

export default function Page() {
  return <HomePage />;
}

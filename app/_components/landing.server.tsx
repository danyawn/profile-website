import dynamic from "next/dynamic";

const LandingMain = dynamic(
  () => import("./landing.main").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export default function LandingServer() {
  return <LandingMain />;
}

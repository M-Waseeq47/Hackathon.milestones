import Image from "next/image";
import Header from "./components/header";
import Content from "./components/content";

export default function Home() {
  return (
    <div style={{
      backgroundColor: "#2A254B",
    }}>
      <Header/>
      <Content/>
    </div>
  );
}

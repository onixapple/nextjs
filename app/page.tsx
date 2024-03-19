"use client"
import Image from "next/image";
import UnityProvider from "./unity"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="maincontainer items-center justify-center">

        <div className="text-glow items-center justify-center pb-10">
          <h1 className = "sm: text-6xl text-center" style={{ fontFamily: "Fantasy", backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)", backgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "100%" }}>Mellstroy</h1>
          <h1 className="sm: text-6xl text-center" style={{ fontFamily: "Fantasy", backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)", backgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "100%" }} >Casino</h1>
        </div>
        <div className="justify-center items-center text-center">

          <UnityProvider />
        </div>
      </div>
    </main>
  );
}

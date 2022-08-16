import Image from "next/image";
import {
  PrimaryButtonLarge,
  SecondaryButtonLarge,
  SimpleSlider,
  TextInput,
} from "./MyUI";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Spline from "./Spline";

export default function HeroSection() {
  function toggleDarkMode() {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  }
  return (
    <div>
      {/* Container */}
      <div className="m-5 mx-auto mt-20 mb-40 max-w-containerxl">
        {/* Content */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-0">
          <h1>Hello</h1>
          {/* <Canvas style={{height: 700}}>
            <Scene />
          </Canvas> */}
          <Spline />
        </div>
      </div>
    </div>
  );
}

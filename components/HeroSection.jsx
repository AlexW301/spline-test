import Image from "next/image";
import {
  PrimaryButtonLarge,
  SecondaryButtonLarge,
  SimpleSlider,
  TextInput,
} from "./MyUI";
import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
// import Spline from "./Spline";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  function toggleDarkMode() {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  }

  const cylinder = useRef(null)

  function onLoad(spline) {
    const obj = spline.findObjectByName('Cylinder');
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cylinder.current = obj;
    console.log(cylinder.current)
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
          {/* <Spline onMouseDown={(e) => {if(e.target.name === "Cylinder") {console.log('success!')}}} onLoad={onLoad} scene="https://prod.spline.design/tgdTFD7od9cvn6Fy/scene.splinecode" /> */}
          <Spline scene="https://prod.spline.design/8qfkr4M6Rh4yj81B/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

import HeroSection from "../components/HeroSection";
import { PrimaryButton, SelectMenu, SimpleSlider, TextInput } from "../components/MyUI";
import { useState } from "react";

export default function Home() {
  const options = [
    { id: 1, name: "Websites" },
    { id: 2, name: "Social Media" },
    { id: 3, name: "Video" },
  ];
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <HeroSection />
    </>
  );
}

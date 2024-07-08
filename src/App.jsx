import "./App.css";
import Product from "./Product";
import Cart from "./Cart";
import Header from "./components/Header";
import { useState } from "react";
import AudioTracker from "./components/AudioTracker";
import AudioPlayer from "./components/AudioPlayer";
import AudeoWaveForm from "./components/AudeoWaveform";
//import audioUrl from "./assets/sample.mp3";
function App() {
  return (
    <div className="bg-backgroud h-screen">
      <AudioPlayer
        audioUrl={
          "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
        }
      />
    </div>
  );
}
export default App;

import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FiDownload } from "react-icons/fi";
const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#9e56b0",
  progressColor: "#CC00FF",
  cursorWidth: 2,
  cursorColor: "#4B5FC2",
  barWidth: 2,
  barHeight: 2,
  barGap: 2,
  height: 40,
  responsive: true,
  interact: true,
  backend: "WebAudio",
  hideScrollbar: true,
  normalize: true,
});

function formatTime(seconds) {
  let date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

export default function AudioPlayer({ audioUrl }) {
  const waveFormRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioFileName, setAudioFileName] = useState("");

  useEffect(() => {
    const options = formWaveSurferOptions(waveFormRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(audioUrl);

    wavesurfer.current.on("ready", () => {
      setDuration(wavesurfer.current.getDuration());
      setAudioFileName(audioUrl.split("/").pop());
    });

    wavesurfer.current.on("audioprocess", () => {
      setCurrentTime(wavesurfer.current.getCurrentTime());
    });
    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.un("audioprocess", () => {});
        wavesurfer.current.un("ready", () => {});
        wavesurfer.current.destroy();
      }
    };
  }, [audioUrl]);

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div className="audio-player">
      <div className="p-4  rounded-xl bg-white w-1/3">
        <div className="">
          <h2 className="text-xl font-medium mb-5 text-blue-900 ">Recording</h2>
          <div className="overflow-x-hidden">
            <div className="w-full">
              <div className="">
                <div id="waveform" ref={waveFormRef} className="w-full mb-4">
                  <div />
                </div>
                <div className="mt-2 flex items-center">
                  <div className="mr-4">
                    <button
                      onClick={handlePlayPause}
                      className="mr-2 border-2 rounded-[100%] border-black px-2 py-0.5"
                    >
                      <FontAwesomeIcon
                        icon={playing ? faPause : faPlay}
                        className=""
                      />
                    </button>
                    <span>{formatTime(currentTime)}</span>
                  </div>
                  <a className="" href={audioUrl} download>
                    <button className="border-[1px] rounded-md border-solid border-black  items-center p-1 text-blue-600 flex">
                      <FiDownload className="mr-2" />
                      Recording
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

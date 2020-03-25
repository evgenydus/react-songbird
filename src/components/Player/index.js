import React, { useState, useEffect } from 'react';
import './index.css'
import Play from './Icons/Play';
import Pause from './Icons/Pause';
import Bar from './Bar';

const Player = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);
  const [clickedTime, setClickedTime] = useState(0);

  useEffect(() => {
    const audio = document.getElementById('audio');

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentDuration(audio.currentTime);
    };

    const setAudioTime = () => setCurrentDuration(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    isPlaying ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== currentDuration) {
      audio.currentTime = clickedTime;
      setClickedTime(0);
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    }
  }, [isPlaying, clickedTime, currentDuration]);

  return (
    <div className="player-container">
      <audio id="audio">
        <source src={audioUrl}/>
      </audio>
      {isPlaying ? (
        <Pause handleClick={() => setIsPlaying(false)}/>
      ) : (
        <Play handleClick={() => setIsPlaying(true)}/>
      )}
      <Bar
        currentTime={currentDuration}
        duration={duration}
        onTimeUpdate={(time) => setClickedTime(time)}
      />
    </div>
  )
};

export default Player;

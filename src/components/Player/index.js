import React, { useState, useCallback } from 'react';
import './index.css'
import Play from './Icons/Play';
import Pause from './Icons/Pause';

const sound = new Audio();

const Player = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playOrPauseAudio = useCallback(() => {
    if (!isPlaying) {
      sound.src = audioUrl;
      sound.play();
      setIsPlaying(true)
    } else {
      sound.pause();
      setIsPlaying(false)
    }
  }, [isPlaying, audioUrl]);

  return (
    <div className="player-container">
      <div className="play-button" onClick={playOrPauseAudio}>
        {isPlaying ? <Pause /> : <Play />}
      </div>
      <div className="timeline">
        <div className="progress-bar" />
      </div>
    </div>
  )
};

export default Player;

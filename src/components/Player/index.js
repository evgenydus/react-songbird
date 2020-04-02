import React, { useState, useEffect, useCallback } from 'react';
import './index.css'
import Play from './Icons/Play';
import Pause from './Icons/Pause';
import Bar from './Bar';
import {eventEmitter} from '../../helpers/helpers';

const Player = ({ audioUrl }) => {
  const [currentAudioUrl, setCurrentAudioUrl] = useState(audioUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);
  const [clickedTime, setClickedTime] = useState(0);

  useEffect(() => {
    // const audio = document.getElementById('audio');

    // const setAudioData = () => {
    //   setDuration(audio.duration);
    //   setCurrentDuration(audio.currentTime);
    // };

    eventEmitter.dispatch('audioUrl-changed', currentAudioUrl);

    eventEmitter.subscribe('audio-changed', ({ duration, currentTime }) => {
      setDuration(duration);
      setCurrentDuration(currentTime);
    });

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

  const handleClickedTime = useCallback((time) => {
      setClickedTime(time)
    },
    [setClickedTime],
  );

  return (
    <div className="player-container">
      <audio id="audio">
        <source src={currentAudioUrl}/>
      </audio>
      {isPlaying ? (
        <Pause onClick={() => setIsPlaying(false)}/>
      ) : (
        <Play onClick={() => setIsPlaying(true)}/>
      )}
      <Bar
        currentTime={currentDuration}
        duration={duration}
        onTimeUpdate={handleClickedTime}
      />
    </div>
  )
};

export default Player;

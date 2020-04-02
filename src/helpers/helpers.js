export const getRandomNumber = (max) => {
  return Math.round(Math.random() * max);
};

export const eventEmitter = {
  events: {},
  dispatch: function (eventName, data) {
    if (!this.events[eventName]) {
      return this.events[eventName].forEach(callback => callback(data))
    }
  },
  subscribe: function (eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);

    return () => {
      this.events[eventName] = this.events[eventName].filter(
        eventCallback => callback !== eventCallback
      );
    }
  },
};

export class Player {
  constructor(audioUrl) {
    this.audioUrl = audioUrl;
    this.audio = document.getElementById('audio')
  }

  play() {

  }

  pause() {

  }

  setAudioUrl() {
    eventEmitter.subscribe('audioUrl-changed', () => {
      this.audio.setAttribute('src', this.audioUrl);
    })
  }

  setAudioData() {
    const duration = this.audio.duration;
    const currentTime = this.audio.currentTime;

    eventEmitter.subscribe('audio-changed', eventEmitter.dispatch(
      'audio-changed', { duration, currentTime }
      ))
  }
}
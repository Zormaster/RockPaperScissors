class SoundController {
  constructor() {
    this.context = null;
    this.enabled = true;
    try {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  // Resume context if suspended (browser policy)
  async init() {
    if (this.context && this.context.state === 'suspended') {
      await this.context.resume();
    }
  }

  playTone(frequency, duration, type = 'sine', volume = 0.1) {
    if (!this.enabled || !this.context) return;

    const osc = this.context.createOscillator();
    const gainNode = this.context.createGain();

    osc.type = type;
    osc.frequency.value = frequency;

    gainNode.gain.setValueAtTime(volume, this.context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(this.context.destination);

    osc.start();
    osc.stop(this.context.currentTime + duration);
  }

  playClick() {
    this.init();
    this.playTone(800, 0.1, 'square', 0.05);
  }

  playHover() {
    this.init();
    this.playTone(400, 0.05, 'sine', 0.02);
  }

  playWin() {
    this.init();
    const now = this.context.currentTime;
    [440, 554, 659, 880].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.3, 'triangle', 0.1), i * 100);
    });
  }

  playLose() {
    this.init();
    [300, 200, 100].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.4, 'sawtooth', 0.1), i * 150);
    });
  }

  playDraw() {
    this.init();
    this.playTone(300, 0.3, 'sine', 0.1);
    setTimeout(() => this.playTone(300, 0.3, 'sine', 0.1), 150);
  }

  playCountdown() {
    this.init();
    this.playTone(600, 0.1, 'square', 0.05);
  }

  playFight() {
    this.init();
    this.playTone(100, 0.5, 'sawtooth', 0.2);
  }
}

export const sounds = new SoundController();

const sounds = {
  clicker1: new Audio("/sounds/clicker1.mp3"),
  clicker2: new Audio("/sounds/clicker2.mp3"),
  clicker3: new Audio("/sounds/clicker3.mp3"),
};

export const playSound = (type: keyof typeof sounds) => {
  const sound = sounds[type];

  sound.currentTime = 0;
  sound.play();
};

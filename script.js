document.addEventListener("DOMContentLoaded", () => {
  const homepage = document.getElementById("homepage");
  const gamepage = document.getElementById("gamepage");
  const startButton = document.getElementById("start-game");
  const nextPairButton = document.getElementById("next-pair");
  const zhuyinPairDiv = document.getElementById("zhuyin-pair");
  const timerDiv = document.getElementById("timer");

  const zhuyinInitials = ["ㄅ", "ㄆ", "ㄇ", "ㄈ", "ㄉ", "ㄊ", "ㄋ", "ㄌ", "ㄍ", "ㄎ", "ㄏ", "ㄐ", "ㄑ", "ㄒ"];
  let timer;

  function startGame() {
    homepage.style.display = "none";
    gamepage.style.display = "block";
    startTimer(180); // 3分鐘計時
    generatePair();
  }

  function endGame() {
    alert("遊戲結束！");
    gamepage.style.display = "none";
    homepage.style.display = "block";
    clearInterval(timer);
  }

  function generatePair() {
    const pair = [
      zhuyinInitials[Math.floor(Math.random() * zhuyinInitials.length)],
      zhuyinInitials[Math.floor(Math.random() * zhuyinInitials.length)]
    ];
    zhuyinPairDiv.textContent = `${pair[0]} ${pair[1]}`;
  }

  function startTimer(seconds) {
    let timeLeft = seconds;
    timerDiv.textContent = `時間：${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`;
    timer = setInterval(() => {
      timeLeft -= 1;
      timerDiv.textContent = `時間：${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`;
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  startButton.addEventListener("click", startGame);
  nextPairButton.addEventListener("click", generatePair);
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && gamepage.style.display === "block") {
      generatePair();
    }
  });
});

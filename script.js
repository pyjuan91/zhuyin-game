document.addEventListener("DOMContentLoaded", () => {
  const zhuyinLeftDiv = document.getElementById("zhuyin-left");
  const zhuyinRightDiv = document.getElementById("zhuyin-right");
  const nextPairButton = document.getElementById("next-pair");

  const zhuyinInitials = ["ㄅ", "ㄆ", "ㄇ", "ㄈ",
    "ㄉ", "ㄊ", "ㄋ", "ㄌ",
    "ㄍ", "ㄎ", "ㄏ",
    "ㄐ", "ㄑ", "ㄒ",
    "ㄓ", "ㄔ", "ㄕ", "ㄖ",
    "ㄗ", "ㄘ", "ㄙ",
    "ㄧ", "ㄨ", "ㄩ"];

  function generatePair() {
    const left = zhuyinInitials[Math.floor(Math.random() * zhuyinInitials.length)];
    const right = zhuyinInitials[Math.floor(Math.random() * zhuyinInitials.length)];
    zhuyinLeftDiv.textContent = left;
    zhuyinRightDiv.textContent = right;
  }

  nextPairButton.addEventListener("click", generatePair);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      generatePair();
    }
  });

  // 初始顯示第一組
  generatePair();
});

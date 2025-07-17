const line = document.getElementById("line");
let rotation = 0;
console.log(line.clientWidth);
setInterval(() => {
  rotation += 2;
  line.style.transform = `translate(-50%, -50%) rotate(${rotation % 360}deg)`;
}, 300);

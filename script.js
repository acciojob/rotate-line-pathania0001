//your JS code here. If required.

const line  = document.getElementById("line");
let rotation = 0; 
console.log(line)
setInterval(()=>{
	line.style.transformOrigin ="center";
	rotation+=2;
	line.style.transform=`rotate(${rotation%360}deg)`;
},20)

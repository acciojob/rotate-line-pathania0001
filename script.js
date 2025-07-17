//your JS code here. If required.

const line  = document.getElementById("line");
let rotation = 0; 
line.style.transformOrigin ="center center";
setInterval(()=>{
	rotation+=2;
	line.style.transform=`rotate(${rotation%360}deg)`;
},20)

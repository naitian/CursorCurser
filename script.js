const body = document.getElementsByTagName("body")[0];
const curseAr = [

"Frazzlin, dadgummit!",
"Danabbit!",
"Fiddlesticks!",
"Holy land! Man Horse!",
"Shiznits",
"Mother of pearl!",
"Welllll darn.",
"Blimey!",
"Bollocks..."

];
 
console.log(curseAr);
body.addEventListener("click", () => {
	body.innerHTML = "<div id='curseoverlay'><span id='cursetext'>" + curseAr[Math.floor(Math.random() * curseAr.length)] + "</span></div>" + body.innerHTML;
	window.setTimeout(() => {
		ol = document.getElementById("curseoverlay");
		ol.parentNode.removeChild(ol);
	}, 200);
})


//for testing

document.getElementById("btnA").addEventListener("click",func)
var y=document.getElementById("dis")
function func(){
	var allimgs = document.querySelectorAll("img:not(.ignore)")
	for(var i=0; i<allimgs.length; i++)
		allimgs[i].classList.add('hidden');
	console.log(y.value)
	document.getElementById(y.value).classList.toggle('hidden');
}

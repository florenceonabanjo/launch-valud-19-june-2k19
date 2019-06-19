var content = document.getElementById("milk");
var button = document.getElementById("show-more");

button.onclick = function() {

if (milk.className == "open") {

milk.className ="";
button.innerHTML = "Show More";

} else{

	milk.className = "open";
	button.innerHTML = "Show Less";
}

};


let info = document.getElementById("vax");
let cont = document.getElementById("learn-more");

cont.onclick = function() {

if (vax.className == "open") {

vax.className ="";
cont.innerHTML = "Show More";

} else{

	vax.className = "open";
	cont.innerHTML = "Show Less";
}

};

let silent = document.getElementById("silent");
let cont2 = document.getElementById("silent-more");

cont2.onclick = function() {

if (silent.className == "open") {

silent.className ="";
cont2.innerHTML = "Show More";

} else{

	silent.className = "open";
	cont2.innerHTML = "Show Less";
}

};
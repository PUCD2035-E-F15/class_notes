console.log("Hello");

function saySomething() {
	document.getElementById('click-message').innerHTML ='Click!';
}


document.onmousedown = saySomething;



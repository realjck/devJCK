// cursor
//$(this).css( 'cursor', 'url(../images/html/favicon.png), auto' );

// buttons
$("#bt3").on("click", function(){
	showContact(true);
});
$("#bt-back").on("click", function(){
	showContact(false);
});

function showContact(shows){
	if (shows){
		$("#main-buttons").hide();
		$("#contact-buttons").fadeIn();
	} else {
		$("#main-buttons").fadeIn();
		$("#contact-buttons").hide();
	}
}


// preload
preloadXHR([
    'assets/libs/fontawesome/webfonts/fa-solid-900.woff2',
    'assets/libs/fontawesome/webfonts/fa-brands-400.woff2'
]);

function preloadXHR(assetsAr){
	for (i=0; i<assetsAr.length; i++){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', assetsAr[i]);
		xhr.send('');
	}
}
console.log("🍔🌭🍔🌭🍔🌭🌭🌭 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🌭🍔🌭🌭🍔 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🍔🌭🌭🌭🍔 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🌭🌭🍔🍔🌭 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🌭🌭 🍔🌭🍔🌭🍔🌭🌭🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🌭🍔🍔🌭🌭 🍔🌭🍔🌭🍔🌭🍔🌭 🍔🌭🍔🍔🍔🍔🌭🍔 🍔🌭🍔🍔🌭🌭🍔🌭 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🌭🍔🌭🍔🍔🌭🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🍔🌭🌭🌭🍔 🍔🌭🍔🍔🍔🌭🍔🌭");//why?
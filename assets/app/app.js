// rotation
var is_rotated = false;

$(".rotate-button").on("click", function(e){
	if (is_rotated){
		is_rotated = false;
	} else {
		is_rotated = true;
	}
	$("#wrapper").css("transform", "scaleX(0)");
	setTimeout(function(){
		if (is_rotated){
			$("#front").hide();
			$("#back").show();
		} else {
			$("#front").show();
			$("#back").hide();
		}
		$("#wrapper").css("transform", "scaleX(1)");
	}, 350);
});

console.log("🍔🌭🍔🌭🍔🌭🌭🌭 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🌭🍔🌭🌭🍔 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🍔🌭🌭🌭🍔 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🌭🌭🍔🍔🌭 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🌭🌭 🍔🌭🍔🌭🍔🌭🌭🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🌭🍔🍔🌭🌭 🍔🌭🍔🌭🍔🌭🍔🌭 🍔🌭🍔🍔🍔🍔🌭🍔 🍔🌭🍔🍔🌭🌭🍔🌭 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🌭🍔🌭🍔🍔🌭🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🍔🌭🌭🌭🍔 🍔🌭🍔🍔🍔🌭🍔🌭");//why?
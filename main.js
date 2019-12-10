
function showInfo1(info1){

	var info1 = document.getElementById('photo-text');
	var arrow1 = document.getElementById('arrow1');
	if (info1.style.display == "none") {
		arrow1.style.transform = "rotate(180deg)";
		info1.style.display = "block";
	} else {
		arrow1.style.transform = "rotate(0deg)";
		info1.style.display = "none";
	}

}

function showInfo2(info2){
	var info2 = document.getElementById('creativity-text');
	var arrow2 = document.getElementById('arrow2');
	if (info2.style.display == "none") {
		arrow2.style.transform = "rotate(180deg)";
		info2.style.display = "block";
	}
	else{
		arrow2.style.transform = "rotate(0deg)";
		info2.style.display = "none";
	}
}

function showInfo3(info3){
	var info3 = document.getElementById('webdesign-text');
	var arrow3 = document.getElementById('arrow3');
	if (info3.style.display == "none") {
		arrow3.style.transform = "rotate(180deg)";
		info3.style.display = "block";
	}
	else{
		arrow3.style.transform = "rotate(0deg)";
		info3.style.display = "none";
	}
}

$(document).ready(function(){
	$('.icon-responsive').click(function(){
		$('.nav-responsive').toggle();
	});
});
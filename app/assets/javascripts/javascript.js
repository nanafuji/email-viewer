$(document).ready(function() {
	$(".email-object").click(function() {
		$(this).toggleClass('active').siblings().removeClass('active');
/*		alert("hello");*/
/*		$("#content").text("how are you?");*/
/*		$("#content").text(function() {
			return $(this).html;
		});*/
/*		$("#id_content").show();*/
	});
});
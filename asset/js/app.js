$(document).ready(function(){
	$(".btn-save").click(function(){
		var inputName = $(".input-name").val();
		var inputPhono = $(".input-phono").val();
		$("#my-contact").append("<div class='container-info text-center'><div class='info-name'><span class='span-name'>"+
			inputName+"</span></div>"+"<div><span>"+inputPhono+"</span></div><div class='trash-icon'><span class='fa fa-trash btn'></span></div></div>");
	

		$(".fa-trash").click(function(){
			$(this).parent().parent().remove();
		});	
		
	});
		
});


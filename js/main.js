
$(function(){
	$(document).mousemove(function(e){
		$('.mouseable').each(function(){
			$(this).css('top', -(e.clientY-$(this).offset().top)/50)
			$(this).css('left', -(e.clientX-$(this).offset().left)/50)
		})
	})

	setInterval(function(){
		$('#kitten-speech').toggleClass('highlight')
	}, 2000)
})
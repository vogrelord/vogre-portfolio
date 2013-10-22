
$(function(){
	$(document).mousemove(function(e){
		$('.mouseable').each(function(){
			$(this).css('top', -(e.clientY-$(this).offset().top)/50)
			$(this).css('left', -(e.clientX-$(this).offset().left)/50)
		})
	})

	$('#menu li a').click(
		function(e){
			$('#menu li a').removeClass('active');
			$(this).addClass('active');
			$('.popup').hide()
			var target = $(this).data()['target'];
			$('.popup[data-page='+target+']').show()
		}
	)


	setInterval(function(){
		$('#kitten-speech').toggleClass('highlight')
	}, 2000)
})
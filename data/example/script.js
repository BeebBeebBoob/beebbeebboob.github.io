$(document).ready(function(){
    $('.more').click(function(){
		var $this = $(this),
			pos = $this.attr('data-pos'),
			text = $this.text(),
			url = '/system/private/utils/publication.p3';

		if(pos == 'before'){
			var info = $this.prev('div[data-pub="more"]');
		}else{
			var info = $this.next('div[data-pub="more"]');
		}
		if($this.hasClass('open')){
// 			свернуть инфу
			info.slideUp();

			$this.removeClass('open').text($this.attr('data-text'));
		}else{
// 			развернуть инфу

			info.slideDown();
            $this.addClass('open').text('Свернуть');
		}
	});
});
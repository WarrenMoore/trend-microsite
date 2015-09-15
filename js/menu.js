jQuery(function($) {
	// Menu
	$('.jump-to-button').click(function() {
		(html = $('html')).toggleClass('show-menu');
		$('.jump-to-button > span').each(function() {
			$(this).html(html.hasClass('show-menu')
				? 'Close Menu'
				: 'Jump To'
			);
		});
	});
});
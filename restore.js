setTimeout(function restoreFavStar() {
	$heart = $('.withHeartIcon');
	if ($heart.length >= 0) {
		$heart.removeClass('withHeartIcon');
	}

	$container = $('.HeartAnimationContainer');
	if ($container.length >= 0) {
		$container.empty();
		$container.removeClass('HeartAnimationContainer');
		$container.addClass('Icon Icon--favorite');
	}

	$tooltips = $('.tooltip-inner:contains(いいね)');
	if ($tooltips.length >= 0) {
		$tooltips.text('お気に入りに登録');
		$tooltips.parent().css({'margin-left' : '-2.5em'});
	}

	setTimeout(restoreFavStar, 0);
}, 0);

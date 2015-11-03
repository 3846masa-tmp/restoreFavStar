setTimeout(function restoreFavStar() {
	var $heart = $('.withHeartIcon');
	if ($heart.length >= 0) {
		$heart.removeClass('withHeartIcon');
	}

	var $container = $('.HeartAnimationContainer');
	if ($container.length >= 0) {
		$container.empty();
		$container.removeClass('HeartAnimationContainer');
		$container.addClass('Icon Icon--favorite');
	}

	var $heartBadge = $('.Icon--heartBadge');
	if ($heartBadge.length >= 0) {
		$heartBadge.removeClass('Icon--heartBadge');
		$heartBadge.addClass('Icon--favorited');
	}

	var $tooltips = $('.tooltip-inner:contains(いいね)');
	if ($tooltips.length >= 0) {
		$tooltips.text('お気に入りに登録');
		$tooltips.parent().css({'margin-left' : '-2.5em'});
	}

	(function replacer(parent) {
	  Array.prototype.slice.call(parent.childNodes).forEach(function(node) {
	    if (node.nodeType === 3) {
	      node.nodeValue = node.nodeValue.replace(/いいね/g, 'お気に入り');
	    } else setTimeout(function(){ replacer(node); }, 0);
	  });
	})(document.body);

	setTimeout(restoreFavStar, 0);
}, 0);

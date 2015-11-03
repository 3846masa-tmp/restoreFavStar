setTimeout(function restoreFavStar() {
	var $tooltips = $('.tooltip-inner:contains(いいね)');
	if ($tooltips.length >= 0) {
		$tooltips.text('お気に入りに登録');
		$tooltips.parent().css({'margin-left' : '-2.5em'});
	}

	setTimeout(restoreFavStar, 100);
}, 0);

(function replacer(parent) {
	Array.prototype.slice.call(parent.childNodes).forEach(function(node) {
		if (node.nodeType === 3) {
			node.nodeValue = node.nodeValue.replace(/いいね/g, 'お気に入り');
		} else setTimeout(function(){ replacer(node); }, 100);
	});
	if (parent === document.body) {
		setTimeout(function(){ replacer(document.body); }, 100);
	}
})(document.body);

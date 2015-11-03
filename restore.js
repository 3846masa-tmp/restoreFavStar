(function replacerTooltip() {
	var $tooltips = document.querySelector('.tooltip-inner');
	if (!!$tooltips && $tooltips.textContent.indexOf('いいね') !== -1) {
		$tooltips.textContent = 'お気に入りに登録';
		$tooltips.parentNode.style['margin-left'] = '-2.5em';
	}
	setTimeout(replacerTooltip, 100);
})();

(function replacer(parent) {
	Array.prototype.slice.call(parent.childNodes).forEach(function(node) {
		if (node.nodeType === 3) {
			node.nodeValue = node.nodeValue.replace(/いいね/g, 'お気に入り');
		} else setTimeout(function(){ replacer(node); }, 100);
	});
	if (parent === document.body) {
		setTimeout(function(){ replacer(document.body); }, 1000);
	}
})(document.body);

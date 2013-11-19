$('.lazyLoadTab').dullLazyLoadTab({
	url: 'json/',
	callback: function(msg, dataTab) {
		var html = '';
		if (dataTab == 'dig') {
			$.each(msg.data, function(index, val) {
				if (index <= 2) {
					html += '<li class="top-bor clearfix">';
					html += '<em class="range Cff9601 fl">' + (index + 1) + '</em>';
					html += '<a class="wp_w130 wp fl" target="_blank" title="' + val.s_name + '" href="http://ka.17611.com/' + val.page_url + '">' + val.s_name + '</a>';
					html += '<span class="wp_w35 wp fr">' + val.s_id + '</span>';
					html += '</li>';
				} else {
					html += '<li class="top-bor clearfix">';
					html += '<em class="range Ce6e6e6 fl">' + (index + 1) + '</em>';
					html += '<a class="wp_w130 wp fl" target="_blank" title="' + val.s_name + '" href="http://ka.17611.com/' + val.page_url + '">' + val.s_name + '</a>';
					html += '<span class="wp_w35 wp fr">' + val.s_id + '</span>';
					html += '</li>';
				}
			});
		} else if (dataTab == 'book') {
			$.each(msg.data, function(index, val) {
				html += '<li class="top-bor clearfix">';
				html += '<a class="wp_w130 wp fl" target="_blank" title="' + val.s_name + '" href="http://ka.17611.com/' + val.page_url + '">' + val.s_name + '</a>';
				html += '<span class="wp_w35 wp fr">' + val.s_id + '</span>';
				html += '</li>';
			});
		};

		return html;
	}
});
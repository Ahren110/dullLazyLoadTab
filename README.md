选项卡懒加载插件
===============

页面存在太多的选项卡切换，一次加载下来？这样子是不实际的！

使用局限：1：请求地址格式需要统一    2：没有做跨域 

默认参数
```
dbUI.dullLazyLoadTab.defaults = {

		//触发按钮
		btnName: '.tab',
		
		//切换内容
		boxName: '.panel',
		
		//请求路径
		url: 'js/',
		
		//请求方式
		type: 'GET',
		
		//请求数据类型
		datatype: 'json',
		
		//请求成功后回调
		callback: null
};
```

实例化
```
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
```


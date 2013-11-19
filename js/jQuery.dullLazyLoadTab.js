/**
 * $.dullLazyLoadTab
 * @extends jquery.1.7.2
 * @author dullBear
 * @email 1317981032@qq.com
 * @site www.dullbear.com
 * @version 1.0
 * @date 2013-11-14
 * Copyright (c) 2013-2013 dullBear
 * @example   $(".lazyLoadTab").dullLazyLoadTab();
 */

(function($) {
	//命名空间
	var dbUI = dbUI || {};

	$.fn.dullLazyLoadTab = function(options) {

		var PNAME = 'dullLazyLoadTab';

		var objData = $(this).data(PNAME);

		//get instance object
		if (typeof options == 'string' && options == 'instance') {
			return objData;
		};

		var options = $.extend({}, dbUI.dullLazyLoadTab.defaults, options || {});

		return $(this).each(function() {
			var dullLazyLoadTab = new dbUI.dullLazyLoadTab(options);

			dullLazyLoadTab.$element = $(this);

			dullLazyLoadTab._init();
		});
	};

	dbUI.dullLazyLoadTab = function(options) {
		this.name = 'dullImgScroll';
		this.version = 1.0;
		this.options = options;
	};

	//默认参数
	dbUI.dullLazyLoadTab.defaults = {
		btnName: '.tab',
		boxName: '.panel',
		url: 'js/',
		type: 'GET',
		datatype: 'json',
		callback: null
	};

	dbUI.dullLazyLoadTab.prototype = {
		_init: function() {
			this.$btnName = this.$element.find($(this.options.btnName));
			this.$boxName = this.$element.find($(this.options.boxName));
			this.btnClick();
		},
		btnClick: function() {
			var self = this;
			this.$btnName.bind({

				mouseenter: function() {
					var index = $(this).index();
					//获取data-tab值做json请求地址（追加）
					var dataTab = $(this).attr('data-tab');
					//获取data-isLoad判断是否已加载内容
					var dataLoad = $(this).attr('data-isLoad');
					//获取事件序号
					var $obj = self.$boxName.eq(index);				
					$(this).addClass('current').siblings().removeClass('current');
					var _self = this;
				    //已加载
					if (dataLoad == 1) {
						$obj.show().siblings().hide();
					} else {
						$.ajax({
							//json地址
							url: self.options.url + dataTab + '.json',
							//请求方式
							type: self.options.type,
                            //数据类型
							dataType: self.options.datatype,
							beforeSend: function() {
								$obj.html('加载中');
							},
							success: function(msg) {
								var html = self.options.callback(msg, dataTab);
								$obj.show().siblings().hide();
								$(_self).attr('data-isLoad', 1);
								$obj.html(html);
							},
						});
					};
				}
			});
		}
	};
})(jQuery);
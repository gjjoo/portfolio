/**
 * @author JOO
 * 이미지 슬라이더 플러그인 제작
 */
(function($){
	var defaults = {
		period : 400
	};

	$.fn.carousel = function(options) {
		var opt = $.extend({}, defaults, options);
		var self = this;

		self.find('li').appendTo(self.find('ul'));

		self
			.data('currentIndex', 0)
			.on('move', function(event, step){
				clearTimeout(self.data('timer'));

				// 애니메이션 도중이면 사용자 입력을 무시한다.
				if (self.find('li:first').is(':animated')) {
					return;
				}

				var currentIndex = self.data('currentIndex');
				currentIndex = currentIndex + step;

				var maxIndex = self.find('li').length - 1;

				if (step < 0 && currentIndex < 0) {
					currentIndex =  maxIndex;
				} else if (step > 0 && currentIndex > maxIndex ) {
					currentIndex = 0;
				}

				// count
				$('.now_num').text(currentIndex+1);

				self
					.data('currentIndex', currentIndex)
					.find('li:first').animate(
						{'margin-left': -currentIndex*self.width()},
						opt.period,
						function(){
							if (!self.data('entered')) {
								self.trigger('mouseleave');
							}
						}
					);
			})
			.on('click', '.prev', function(event){
				event.preventDefault();
				self.trigger('move', [-1]);
				console.log(self.width());
			})
			.on('click', '.next', function(event){
				event.preventDefault();
				self.trigger('move', [1]);
				console.log(self.width());
			})
			// .on('click', '.stop', function(event){
			// 	clearTimeout(self.data('timer'));
			// 	self.data('entered', true);
			// })
			// .on('mouseleave', function(event){
			// 	var timer = setTimeout(function(){
			// 		self.trigger('move', [1]);
			// 	}, 1000);

			// 	self.data('timer', timer);
			// 	self.data('entered', false);
			// })
			.trigger('mouseleave');
	};
})(window.jQuery);


$(document).ready(function(){
  $('.carousel').carousel();
});

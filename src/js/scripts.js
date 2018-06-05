;(function($){
/*Подключение галереи touch (отключаем если не нужно)*/	
	// $('.bxslider_two li a, .rigging a').touchTouch();
/*Конец секции "Подключение галерии"*/
/*Подключение слайдера (отключаем если не нужно)*/
	/*$('.bxslider').bxSlider({
	  auto: true,
	  autoControls: true,
	  pause: 15000,
	  controls: false
	});*/
/*Конец секции "Подключение слайдера"*/

/*Скрипт для главной страницы*/
if ($('body').is('.index')) {

};
/*Окончание секции "Скрипт для главной страницы"*/

/*Скрипт для cтраницы - "Контакты"*/
if ($('body').is('.contacts')) {
/*Переключение контактов и карты в зависимости от выбранной вкладки (отключаем если не нужно)*/
 /*$('.tabs_wrapper').on('click', 'span:not(.active_tab)', function() {
    $(this).addClass('active_tab').siblings().removeClass('active_tab').closest('.tabs_all').find('.main_address').removeClass('show_contacts').eq($(this).index()).addClass('show_contacts');
  });*/
/*Окончание секции "Переключение контактов и карты в зависимости от выбранной вкладки"*/	
};
/*Окончание секции "Скрипт для cтраницы - КОНТАКТЫ"*/

})(jQuery);
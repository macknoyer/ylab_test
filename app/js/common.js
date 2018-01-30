(function ($) {
    $(function () {

		$('.content__block-inputs-quantity-input').on('input change paste', function() {
		  $(this).val(this.value.replace(/[^0-9\-]/, '')); // запрещаем ввод любых символов, кроме цифр и знака минуса
		});

		$('.content__block-inputs-quantity > div').on('click', function() {
		  var input = $(this).closest('.content__block-inputs-quantity').find('.content__block-inputs-quantity-input'); // инпут
		  var value = parseInt(input.val()) || 0; // получаем value инпута или 0
		  
		  if ($(this).hasClass('content__block-inputs-quantity-minus')) {
			value = value - 1; // вычитаем из value 1
		  }
		  if ($(this).hasClass('content__block-inputs-quantity-plus')) {
			value = value + 1; // прибавляем к value 1
		  }
		  input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
		});
		$('.radiobtns > label').on('click', function () {
			$(this).closest('.radiobtns').find('.content__block-inputs-but').removeClass('active');
			$(this).addClass('active');

		});
		$('.checkboxes .content__block-inputs-but').unbind("click").on('click', function (e) {
			$(this).toggleClass('active');
			return false;	
		});
	});
})(jQuery);

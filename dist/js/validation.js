$(function () {
	$.validator.setDefaults({
		ignoreTitle: true,
		highlight: function (element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function (element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement: 'span',
		errorClass: 'help-block',
		errorPlacement: function (error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});
	
	$('form').each(function (i, el) {
		$(el).validate();
	});
	
	$('[data-mask]').each((i, el) => {
		$(el).inputmask($(el).data('mask')).rules('add', {
			normalizer: function (value) {
				return value.replace(/\D+/g, "");
			}
		});
	});
});
function ajaxController(scope, el) {
	scope.form = el;
	scope.disableInput = el.find('[data-disable]');
	el.on('submit', function (e) {
		e.preventDefault();
		var $this = $(this);
		var action = $this.attr('action');
		var method = $this.attr('method');
		
		if (!$this.valid()) return;
		
		scope.disableInput.attr('disabled', true);
		var incomeData = $this.serializeArray();
		if ($this.find('[type="file"]').length) {
			var incomeData = new FormData();
			$this.find(':input').each(function (i, element) {
				var $el = $(element);
				if ($el.attr('disabled')) return;
				if ($el.attr('type') == 'file') {
					$.each($el.native.files, function (j, value) {
						incomeData.append($el.attr('name'), value);
					});
				} else {
					incomeData.append($el.attr('name'), $el.val());
				}
			});
		}
		var ajaxConfig = {
			method: method,
			url: action,
			data: incomeData,
			cache: false,
			dataType: 'json',
			complete: function (xhr, textStatus) {
				scope.disableInput.removeAttr('disabled');
				scope.complete(xhr, textStatus);
			},
			success: scope.success,
			error: scope.error,
		}
		
		if ($this.find('[type="file"]').length) {
			ajaxConfig.contentType = false;
			ajaxConfig.processData = false;
		}
		
		$.ajax(ajaxConfig);
	});
	
	
	scope.success = function (result, textStatus) {
		console.log('success');
		var content = el.data('success') || el.data('msg') || result.msg || textStatus || false;
		console.log(content);
		if (content) {
			$.snackbar({
				content: content,
				timeout: 5000
			});
		}
		if (result.status != 'error') {
			var modal = el.parents('.modal');
			if (modal.length) {
				modal.modal('hide');
			}
			el.find('[data-reset]').val('');
		}
	};
	
	scope.error = function (xhr, textStatus) {
		var responseJson = xhr.responseJSON || {};
		var response = xhr.responseText;
		console.log('error');
		var content = el.data('error') || el.data('msg') || responseJson.msg || response || textStatus || false;
		console.log(content);
		if (content) {
			$.snackbar({
				content: content,
				timeout: 5000
			});
		}
	};
	
	scope.complete = function (xhr, textStatus) {
	};
	
	return scope;
}

$(function () {
	$('[data-controller="ajax"]').each(function(i, el) {
		var $el = $(el);
		$el.data('ajaxController', {});
		ajaxController($el.data('ajaxController'), $el);
	});
});
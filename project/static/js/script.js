function showPassword(elem) {
	$(elem).find('.show-password-icon.open').toggleClass('active');
	$(elem).find('.show-password-icon.closed').toggleClass('active');
	$(elem).parent().find('input').attr('type', function(index, attr){
		return attr == 'password' ? null : 'password';
	});
}
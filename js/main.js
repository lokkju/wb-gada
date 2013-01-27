$(document).on('pageinit', function() {
	jQuery.i18n.properties({
		name: 'messages',
		path:'i18n/', 
		mode:'both', 
		callback: function() {
			jQuery("[data-text]").each(function() {
				if (jQuery(this).attr('data-role') && jQuery(this).attr('data-role') == "button") {
					$(".ui-btn-text", this).text(jQuery.i18n.prop(jQuery(this).attr('data-text')));
				} else {
					$(this).text(jQuery.i18n.prop(jQuery(this).attr('data-text')));	
				}
			});
		}
	});
});
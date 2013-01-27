jQuery(document).ready(function() {
	jQuery.i18n.properties({
		name: 'messages',
		path:'i18n/', 
		mode:'both', 
		callback: function() {
			jQuery("[data-text]").each(function() {
				if(jQuery(this).attr('class') && ~jQuery(this).attr('class').toString().indexOf("ui-title")) {
					$(this).text(jQuery.i18n.prop(jQuery(this).attr('data-text')));					
				}
				$(".ui-btn-text", this).text(jQuery.i18n.prop(jQuery(this).attr('data-text')));
			});
		}
	});
});
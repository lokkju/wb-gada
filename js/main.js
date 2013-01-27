jQuery(document).on('pageinit',function() {
	jQuery.i18n.properties({
		name: 'messages',
		path:'i18n/', 
		mode:'both', 
		callback: function() {
			jQuery("[data-text]").each(function() {
				if(jQuery(this).attr('class') && ~jQuery(this).attr('class').toString().indexOf("ui-collapsible-heading")) {
					$(".ui-btn-text", this).text(jQuery.i18n.prop(jQuery(this).attr('data-text')));
				} else if(jQuery(this).attr('class') && ~jQuery(this).attr('class').toString().indexOf("ui-title")) {
					$(this).text(jQuery.i18n.prop(jQuery(this).attr('data-text')));		
				} else if (jQuery(this).attr('data-role') && jQuery(this).attr('data-role') == "button") {
					$(".ui-btn-text", this).text(jQuery.i18n.prop(jQuery(this).attr('data-text')));
				} else if (!jQuery(this).attr('data-role')){
					$(this).text(jQuery.i18n.prop(jQuery(this).attr('data-text')));	
				}
			});
		}
	});
});
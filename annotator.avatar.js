Annotator.Plugin.Avatar = function () {
  var plugin = {};

	plugin.pluginInit = function () {
		this.annotator.viewer.addField({
			load: function (field, annotation) {
				if( annotation.avatar ) {
					field.innerHTML = annotation.avatar + '&nbsp;&nbsp;' + annotation.user;
				} else {
					field.innerHTML = LA.avatar + '&nbsp;&nbsp;' + LA.username;
				}
			}
		});
	};

	return plugin;
}

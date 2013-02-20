Annotator Avatar
================

Annotator Avatar is a plugin for the [Annotator] annotation system. When added, it adds the name and avatar of the creator of a given annotation.

[Annotator]: https://github.com/okfn/annotator/

Usage
-----

To enable Avatar, simply grab a copy of the plugin file, and add it to your app after you include Annotator. Initializing Avatar is as simple as:

    $(document.body).annotator().annotator('addPlugin', 'Avatar');
	
Prerequisites
-----

This plugin is meant for those of us who are running our own [Store], so don't expect this to work with the hosted version from Annotator.org. The plugin assumes a couple of things will be present. The first is a globally accessible Javascript object, `LA`.

    <script>
	    if ( typeof(LA) == "undefined" ) { LA = {}; }
    		LA.displayname = "yourname"; // set to the currentlu authed user
    		LA.avatar = '<img src="path/to/avatar.png">'; // set to the currently authed user's avatar
    </script>

`LA` is is there for the initial creation of an annotation. When reloading the annotations, Avatar looks for `annotation.avatar` and `annotation.username` in the returned annotation object.

[Store]: https://github.com/okfn/annotator/wiki/Storage

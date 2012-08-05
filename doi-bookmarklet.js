(function() {
    var proxyUrl = "http://proxy.lib.umich.edu";
    var selection = document.getSelection ? document.getSelection().toString() : document.selection.createRange().text;
    var regex = /\w?(?:doi:|hdl:(?:\/\/)?)\s*([0-9./a-z]+)\w?/i;
    var match = regex.exec(selection);
    if (match != null) {
	   var doi = match[1];
	   var tempAnchor = document.createElement('a');
	   tempAnchor.href = proxyUrl;
	   document.location = tempAnchor.protocol + '//dx.doi.org.' + tempAnchor.host + '/' + doi;
    }
 })();
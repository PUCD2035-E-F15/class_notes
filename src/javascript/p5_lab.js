var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

script_name = window.location.search.substr(1);
$.get( script_name, function(source) {
	editor.setValue(source);
	editor.gotoLine(1);
});




function inject() {
	source = editor.getValue()
	console.clear();
	$("#preview").attr("src", "p5_view.html?" + "data:script/javascript," + source);
}


editor.getSession().on ('change', function(e) {
	debounce (500, inject);
});



timeout = null
function debounce(threshold, func) {
	if (timeout) {
		clearTimeout(timeout);
	}
	timeout = setTimeout(func, threshold || 100);
}

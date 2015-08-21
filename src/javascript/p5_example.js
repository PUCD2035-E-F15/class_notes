console.log("hello, p5 example");

$(function() {
	$(".p5_example.show-preview").each(function(i, e) {
		var preview = $('<div class="ratio-16-9"></div>');
		var iframe = $('<iframe scrolling="no"></iframe>').attr("src", "p5_view.html?" + e.href);
		preview.append(iframe);

		preview.insertBefore(e);
	});

	$(".p5_example.show-lab").each(function(i, e) {
		var preview = $('<div class="ratio-16-9"></div>');
		var iframe = $('<iframe scrolling="no"></iframe>').attr("src", "p5_lab.html?" + e.href);
		preview.append(iframe);

		preview.insertBefore(e);
	});


	$(".p5_example.show-code").each(function(i, e) {
		var pre = $('<pre></pre>');
		var code = $('<code class="language-javascript">hello();</code>');
		pre.append(code);

		code.load(e.href, function() {
			console.log("done", code);
			hljs.highlightBlock(code.get(0));
		});

		pre.insertBefore(e);
	});
});

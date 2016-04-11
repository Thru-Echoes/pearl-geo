jQuery.fn.tableToCSV = function() {

    var cleanText = function(text) {
        text = text.replace(/"/g, '""');
        return '"' + text + '"';
    };

	$(this).each(function() {
			var table = $(this);
			var caption = $(this).find('caption').text();
			var title = [];
			var rows = [];

			$(this).find('tr').each(function() {
				var data = [];
				$(this).find('th').each(function() {
                    var text = cleanText($(this).text());
					title.push(text);
					});
				$(this).find('td').each(function() {
                    var text = cleanText($(this).text());
					data.push(text);
					});
				data = data.join(",");
				rows.push(data);
				});
			title = title.join(",");
			rows = rows.join("\n");

			var csv = title + rows;
			var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
			var downloadLink = document.createElement('a');
			downloadLink.href = uri;
			var ts = new Date().getTime();
			if(caption == ""){
				downloadLink.download = ts + ".csv";
			} else {
				downloadLink.download = caption + "-" + ts + ".csv";
			}
			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
	});

};

function actOnEachLine(textarea, func) {
    var lines = textarea.value.replace(/\r\n/g, "\n").split("\n");
    var newLines, newValue, i;

    // Use the map() method of Array where available 
    if (typeof lines.map != "undefined") {
        newLines = lines.map(func);
    } else {
        newLines = [];
        i = lines.length;
        while (i--) {
            newLines[i] = func(lines[i]);
        }
    }
    // textarea.value = newLines.join("\r\n");
	textarea.value = newLines.filter(function (val) {return (val||[]).length > 0;}).join("\r\n");
}
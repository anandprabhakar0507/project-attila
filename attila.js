document.onkeyup = function() {
    if (document.activeElement.tagName != "BODY") {
	console.log(document.activeElement.textContent);
	handleText(document.activeElement);
    }
}

function handleText(textNode) {
    //console.log(textNode);
    if (textNode.textContent) {
        //textNode.textContent = replaceText(textNode.textContent);
    }
}

function replaceText(v) {
    var pattern = /`([()+*/0-9\s-]+)`/;
    return v.replace(pattern, function(match, p1, offset, string) { return eval(p1); });
}

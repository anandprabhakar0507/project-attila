document.onkeyup = function() {
    if (document.activeElement.tagName != "BODY") {
	handleText(document.activeElement);
    }
}

function handleText(textNode) {
    console.log(Object.prototype.toString.call(textNode));
    var children = textNode.getElementsByTagName("*");
    for (var i = 0; i < children.length; i++) {
        console.log(Object.prototype.toString.call(children[i]));
    }
    textNode.value = replaceText(textNode.value);
}

function replaceText(v) {
    console.log(Object.prototype.toString.call(v));
    var pattern = /`([()+*/0-9\s-]+)`/;
    return v.replace(pattern, function(match, p1, offset, string) { return eval(p1); });
}

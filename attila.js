document.onkeyup = function() {
    if (document.activeElement.tagName != "BODY") {
        handleText(document.activeElement);
    }
}

function handleText(textNode) {
    console.log(textNode);
    if (textNode.nodeValue) {
        textNode.nodeValue = replaceText(textNode.nodeValue);
    }
}

function replaceText(v) {
    var pattern = /`([()+*/0-9\s-]+)`/;
    return v.replace(pattern, function(match, p1, offset, string) { return eval(p1); });
}

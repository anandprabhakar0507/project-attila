var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

while (node = walker.nextNode()) {
    handleTextNode(node);
    //console.log(node);
}

function handleTextNode(textNode) {
    textNode.nodeValue = substituteBackticks(textNode.nodeValue);
}

function substituteBackticks(text) {
    return text.replace(/`([^`]*)`/, function(match, p1, offset, string) { return eval(p1); });
}

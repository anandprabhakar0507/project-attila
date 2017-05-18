var editableNodes = [];
function walk()
{
    rootNode = document.body;
    console.log("walk");
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
	if(isEditableNode(node)){
	    editableNodes.push(node);
	    handleText(node);
	}
    }
}
function walk2()
{
    console.log("walk2");
    size = editableNodes.length;
    for(i=0; i<size; i++){
	handleText(editableNodes[i]);
    }



}
function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v) {
    var pattern = /`([()+*/0-9\s-]+)`/;
    console.log(v);
    if(v.search(pattern) >-1){
        v = v.replace(pattern, function(match, p1, offset, string) { return eval(p1); });
    }
    return v;
}

// Marks editable content
function isEditableNode(node) {
    return node.isContentEditable || // DraftJS and many others
    (node.parentNode && node.parentNode.isContentEditable) || // Special case for Gmail
    (node.tagName && (node.tagName.toLowerCase() == "textarea" || // Some catch-alls
                     node.tagName.toLowerCase() == "input"));
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
	bodyObserver;

    // Do the initial text replacements in the document body
    walk();
    
    // Observe the body so that we replace text in any added/modified nodes
   
   // bodyObserver = new MutationObserver(observerCallback);
    //bodyObserver.observe(doc.body, observerConfig);

}

// We want keyup instead of keydown but I can't figure out how to make it work
document.onkeyup =  walk2;
walk();
function test(){
    console.log("Test function");
}

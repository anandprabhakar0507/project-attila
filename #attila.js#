/*
if (window.location.href.indexOf("noahdkim.com") > -1) {
    var input = document.getElementById("name");
}
// This doesn't work.
else if(window.location.href.indexOf("messenger.com") > -1){
    var input_nodes = document.querySelector("[data-text=true]");
    //var input = input_nodes[0];
    alert(input_nodes);
}

*/

var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

while (node = walker.nextNode()) {
    node.textContent = substituteBackticks(node);
    console.log(node);
}

function substituteBackticks(textNode) {
    return textNode.nodeValue.replace(/`([^`]*)`/, function(match, p1, offset, string) { return eval(p1); });
}

/*
input.onkeyup = function() { check_for_backticks() };

function evaluate_expression(match, p1, offset, string){
    return eval(p1);
}

function check_for_backticks() {
    if (input && input.value) {
        var newstr = (input.value).replace(/`([^`]*)`/, evaluate_expression);
        input.value = newstr;
    }
}
*/

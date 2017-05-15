if (window.location.href.indexOf("noahdkim.com") > -1) {
    var input = document.getElementById("name");
}
// This doesn't work.
else if(window.location.href.indexOf("messenger.com") > -1){
    var input_nodes = document.querySelector("[data-text=true]");
    //var input = input_nodes[0];
    alert(input_nodes);
}
    

input.onkeyup = function() {check_for_backticks()};
function evaluate_expression(match, p1, offset, string){
    return eval(p1);
}
function check_for_backticks(){
    if (input && input.value) {
        var newstr = (input.value).replace(/`([^`]*)`/, evaluate_expression);
        input.value = newstr;
    }
}


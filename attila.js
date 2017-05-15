var input = document.getElementById("name");
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


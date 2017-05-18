var inBackticks = false;
$(document.activeElement).on("keyup", function(event) {
    if (event.which === 192) {
        if (inBackticks) {
            var active = $(document.activeElement);
            if (active.prop("tagName") === "INPUT") {
                active.val(replaceText(active.val()));
            } else if (active.prop("tagName") !== "BODY") {
                active.text(replaceText(active.text()));
            }
            inBackticks = false;
        } else {
            inBackticks = true;
        }
    }
});

var pattern = /`([()*+/0-9\s-]+)`$/;
function replaceText(v) {
    return v.replace(pattern, function(match, p1, offset, string) { return eval(p1); });
}

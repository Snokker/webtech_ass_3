//context menu javascript

if (document.addEventListener)
{ // IE >= 9; other browsers
    document.addEventListener('contextmenu', function (e){
       // alert("You've tried to open context menu" + e.target); //here you draw your own menu
        e.preventDefault();
        showAlert();
        $(".altContextMenu").finish().toggle(100).css({ top: e.pageY + "px", left: e.pageX + "px" });

    }, false);
    document.addEventListener('mousedown', function (e) {
        if (!$(e.target).parents(".altContextMenu").length > 0)
        {
            $(".altContextMenu").hide(100);
        }
    }, false);
}
else
{ // IE < 9
    document.attachEvent('oncontextmenu', function () {
        alert("You've tried to open context menu");
        window.event.returnValue = false;
    });
}

function showAlert()
{
    alert("njanja");

}

$(".altContextMenu li").click(function () {
    switch ($(this).attr("data-action")) {
        case "first": alert("first"); break;
        case "second": alert("second"); break;
        case "third": alert("third"); break;
    }

    $(".altContextMenu").hide(100);
});

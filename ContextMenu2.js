$(document).ready(function () {

    //prevent normal contextmenu
    var doubleClicked = false;

    //make my own contectmenu
    $(document).on("contextmenu", function (e) {
        if (doubleClicked == false) {
            e.preventDefault();

            // appeur on mouse pos
            $("#contextMenuContainer").css({
                left: e.pageX,
                top: e.pageY
            })

            $("#contextMenuContainer").fadeIn(1);
            doubleClicked = true;
        } else {
            e.preventDefault();
            doubleClicked = false;
            $("#contextMenuContainer").fadeOut(1);
        }
    });
    function FocusContextOut() {
        $(document).on("click", function () {
            doubleClicked = false;
            $("#contextMenuContainer").fadeOut(1);
            $(document).off("click");
        });
    }

});

// for changing the fond
$(document).ready(function () {
    $("#makeBold").click(function () {
        $("p").css("font-weight", "Bold");
    })
    $("#makeItalic").click(function () {
        $("p").css("font-style", "Italic");
    })
    $("#makeColorOne").click(function () {
        $("p").css("color", "#ffccff");
    })
    $("#makeColorTwo").click(function () {
        $("p").css("color", "#cc99ff");
    })
    $("#makeColorThree").click(function () {
        $("p").css("color", "#99ccff");
    })
    $("#makeColorFour").click(function () {
        $("p").css("color", "#ccccff");
    })
    $("#makeNormal").click(function () {
        $("p").css("font-weight", "Normal");
        $("p").css("font-style", "Normal");
        $("p").css("color", "Black");
    })
});
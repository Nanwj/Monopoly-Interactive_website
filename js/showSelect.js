$(function() {

    // when the mouse hover on the image, the select icon will appear
    $(".player").mouseover(function() {
        $(this).children(".selected").css({
            visibility: "visible",
            transition: "2"
        });
    })

    // when the mouse leave the image, the select icon will disappear
    $(".player").mouseout(function() {
        $(this).children(".selected").css({
            visibility: "hidden",
            transition: "2"
        });
    })

    // when click on the player, transport the number of player to the next page
    $(".player").click(function() {
        $(this).children("a").attr("href", "ChessBoard.html?playerNum="+($(this).index() + 1))
    })
})
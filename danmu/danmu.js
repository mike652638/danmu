$(document).ready(function() {
    var dmAreaWidth,
        dmAreaHeight;
    var dmFontSize = "1em",
        dmFontSizeArr = ["1em", "0.8em", "1.2em", "1.6em"],
        dmFontColor = "#000",
        dmFontColorArr = ["#000", "#1387CE", "#E30278", "#019447"];
    var ftNum,
        clrNum;

    $("#dmArea").css("height", $(window).height() * 0.6);
    dmAreaWidth = $("#dmArea").width() - 50;
    dmAreaHeight = $("#dmArea").height() - 50;

    $("#cover").css("top", $(window).height());

    $(window).resize(function() {
        $("#dmArea").css("height", $(window).height() * 0.6);
        dmAreaWidth = $("#dmArea").width() - 50;
        dmAreaHeight = $("#dmArea").height() - 50;
        $("#cover").css("top", $(window).height());
    });

    function chgFontSize() {
        dmFontSize = dmFontSizeArr[ftNum];
        $("#fontSizeSt a").removeClass("selected");
        $("#fontSizeSt a").eq(ftNum).addClass("selected");
    }

    function chgFontColor() {
        dmFontColor = dmFontColorArr[clrNum];
        $("#fontColorSt a").removeClass("selected");
        $("#fontColorSt a").eq(clrNum).addClass("selected");
    }

    $("#fontSizeSt li").click(function() {
        ftNum = $(this).index();
        chgFontSize();
    });

    $("#fontColorSt li").click(function() {
        clrNum = $(this).index();
        chgFontColor();
    });

    $("#fstIptLst a").click(function() {
        $("#dmTxt").val($(this).html());
    });

    $("#send").click(function() {
        var dmTxt = $("#dmTxt").val();
        var paraNode = document.createElement("div");
        var pareToTop;

        //小技巧: 如果当前弹幕输入框中没有内容, 点击发射按钮的话, 就直接将placeholder中的内容发送到弹幕墙
        if (dmTxt.length === 0) {
            dmTxt = $("#dmTxt").attr("placeholder");
        }

        $(paraNode).css({
            "fontSize": dmFontSize,
            "color": dmFontColor,
            "position": "absolute",
            //"left": ((dmAreaWidth * Math.random()) + "") + "px",
            "top": ((dmAreaHeight * Math.random()) + "") + "px"
        });

        $(paraNode).addClass("moveToLeft");
        $(paraNode).append(dmTxt);
        $("#dmArea").append(paraNode);
        pareToTop = $(paraNode).offset().top;

        //每次点击后随机变换字体和颜色
        ftNum = Math.floor(4 * Math.random());
        clrNum = Math.floor(4 * Math.random());
        chgFontSize();
        chgFontColor();
    });

    $("#clear").click(function() {
        $("#dmArea").empty();
    });
});

	/*bootlint检测*/
  (function () {
    var s = document.createElement("script");
    s.onload = function () {
      bootlint.showLintReportForCurrentDocument([]);
    };
    s.src = "js/bootlint.js";
    document.body.appendChild(s)
  })();
  /*控制col-md-8和col-md-4同样的高度*/
/* var col_md_8Height = $("div.container div.row:first-child div.col-md-8").height();
 $("div.container div.row:first-child div.col-md-4").height(col_md_8Height);*/
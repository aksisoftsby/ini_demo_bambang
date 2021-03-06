function widthOptions() {
  function o(o) {
    "boxed" === o ? $("#ms-boxed").prop("disabled", !1) : $("#ms-boxed").prop("disabled", !0), $.cookie("ms-width", o, {
      expires: 7,
      path: "/"
    })
  }
  if ($("#ms-boxed").prop("disabled", !0), $.cookie("ms-width")) {
    var e = $.cookie("ms-width");
    o(e), $("#" + e + "Width").prop("checked", !0)
  }
  $("#boxed-config input").on("change", function () {
    optionWidth = $("input[name=customWidth]:checked", "#boxed-config").val(), o(optionWidth)
  })
}

function headerOptions() {
  function o(o, e) {
    c.removeClass("navbar-mode"), "hidden" == o ? s.removeClass("hidden") : s.removeClass("ms-header-" + o), "hidden" == e ? (s.addClass("hidden"), $("#noHeader").prop("checked", !0), c.addClass("navbar-mode")) : (s.addClass("ms-header-" + e), $("#" + e + "Header").prop("checked", !0)), a = e, $.cookie("ms-header-color", a, {
      expires: 7,
      path: "/"
    })
  }

  function e(o, e) {
    c.removeClass("ms-navbar-" + o), c.addClass("ms-navbar-" + e), i = e, $("#" + i + "Navbar").prop("checked", !0), $.cookie("ms-navbar-color", i, {
      expires: 7,
      path: "/"
    })
  }
  var a = "white",
    i = "white",
    n = a,
    r = i,
    s = $(".ms-header"),
    c = $(".ms-navbar");
  $.cookie("ms-header-color") && (n = $.cookie("ms-header-color")), $.cookie("ms-navbar-color") && (r = $.cookie("ms-navbar-color")), o(a, n), e(i, r), $("#header-config input").on("change", function () {
    optionColor = $("input[name=customHeader]:checked", "#header-config").val(), o(a, optionColor)
  }), $("#navbar-config input").on("change", function () {
    optionColor = $("input[name=customNavbar]:checked", "#navbar-config").val(), e(i, optionColor)
  })
}

function ColorOptions() {
  function o(o, r) {
    a.attr("href", e + "style." + o + "-" + r + ".min.css"), i.removeClass("active"), n.removeClass("active"), i = $("#color-options .ms-color-box-primary." + o), n = $("#grad-options .grad.c" + r), i.addClass("active"), n.addClass("active"), $.cookie("ms-color", o, {
      expires: 7,
      path: "/"
    }), $.cookie("ms-shine", r, {
      expires: 7,
      path: "/"
    })
  }
  var e = urlofdoc("app.min.js") + "css/",
    a = $("link[href^= '" + e + "style']"),
    i = $("#color-options .ms-color-box-primary.active"),
    n = $("#grad-options .grad.active"),
    r = "light-blue",
    s = 500;
  $.cookie("ms-color") && ($(".grad").removeClass(r), r = $.cookie("ms-color"), $.cookie("ms-shine") && (s = $.cookie("ms-shine")), o(r, s), $(".grad").addClass(r)), $("#color-options .ms-color-box-primary").click(function () {
    return $(".grad").removeClass(r), r = $(this).data("color"), $(".grad").addClass(r), o(r, 500), !1
  }), $("#grad-options .grad").click(function () {
    return s = $(this).data("shine"), o(r, s), !1
  })
}

function urlofdoc(o) {
  var e, a;
  return (e = $("script[src*='app.min.js']").attr("src")).indexOf(o) >= 0 && (a = e.substring(0, e.indexOf(o) - 3)), a
}

function setActiveMenu() {
  var o = window.location.pathname,
    e = o.lastIndexOf("/") + 1,
    a = o.slice(e, o.indexOf("-", e));
  "" !== a && "index.htm" !== a || (a = "home");
  var i = $("*[data-name]");
  $.each(i, function (o, e) {
    $(e).parent().removeClass("active")
  }), $('*[data-name="' + a + '"]').parent().addClass("active")
}
$(document).ready(function () {
  setActiveMenu(), ColorOptions(), headerOptions(), widthOptions()
});
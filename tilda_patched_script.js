// Patched tilda-scripts.js to remove the ad banner.
// by KelpTaken

var version, version;
((window.isSearchBot = !1),
/Bot/i.test(navigator.userAgent) && (window.isSearchBot = !0),
(window.isMobile = !1),
(window.$isMobile = !1),
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
) && ((window.isMobile = !0), (window.$isMobile = !0)),
(window.isiOS = !1),
/iPhone|iPad|iPod/i.test(navigator.userAgent) && (window.isiOS = !0),
(window.isiOSChrome = !!navigator.userAgent.match("CriOS")),
(window.isFirefox = /firefox/i.test(navigator.userAgent)),
(window.isiOSVersion = ""),
window.isiOS) &&
  null !== (version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) &&
  (window.isiOSVersion = [
    parseInt(version[1], 10),
    parseInt(version[2], 10),
    parseInt(version[3] || 0, 10),
  ]);
((window.isSafari = !1),
/^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
  (window.isSafari = !0),
(window.isSafariVersion = ""),
window.isSafari) &&
  null !==
    (version = navigator.appVersion.match(
      /Version\/(\d+)\.(\d+)\.?(\d+)? Safari/
    )) &&
  (window.isSafariVersion = [
    parseInt(version[1], 10),
    parseInt(version[2], 10),
    parseInt(version[3] || 0, 10),
  ]);
function t_throttle(fn, threshhold, scope) {
  var last, deferTimer;
  return (
    threshhold || (threshhold = 250),
    function () {
      var context = scope || this,
        now = +new Date(),
        args = arguments;
      last && now < last + threshhold
        ? (clearTimeout(deferTimer),
          (deferTimer = setTimeout(function () {
            (last = now), fn.apply(context, args);
          }, threshhold)))
        : ((last = now), fn.apply(context, args));
    }
  );
}
function t_onFuncLoad(funcName, okFunc, time) {
  if ("function" == typeof window[funcName]) okFunc();
  else {
    var startTime = Date.now();
    setTimeout(function checkFuncExist() {
      var currentTime = Date.now();
      if ("function" != typeof window[funcName]) {
        if (
          "complete" === document.readyState &&
          currentTime - startTime > 5e3 &&
          "function" != typeof window[funcName]
        )
          throw new Error(funcName + " is undefined");
        setTimeout(checkFuncExist, time || 100);
      } else okFunc();
    });
  }
}
(window.browserLang = (
  window.navigator.userLanguage || window.navigator.language
)
  .toUpperCase()
  .slice(0, 2)),
  (window.tildaBrowserLang = window.browserLang),
  $(document).ready(function () {
    var projectLang = $("#allrecords").attr("data-tilda-project-lang");
    void 0 !== projectLang && (window.browserLang = projectLang);
  }),
  (function ($) {
    $(document).ready(function () {
      var userAgent = window.navigator.userAgent,
        isInstagram = -1 !== userAgent.indexOf("Instagram"),
        isFacebook = -1 !== userAgent.indexOf("FBAV"),
        isYandex = -1 !== userAgent.indexOf("YaSearchBrowser"),
        isSamsung = -1 !== userAgent.indexOf("SamsungBrowser"),
        isDuckDuckGo = -1 !== userAgent.indexOf("DuckDuckGo"),
        isAndroid;
      if (
        -1 !== userAgent.indexOf("Android") &&
        (isFacebook || isInstagram || isYandex || isSamsung || isDuckDuckGo)
      ) {
        var textElement = document.createElement("p");
        (textElement.style.lineHeight = "100px"),
          (textElement.style.padding = "0"),
          (textElement.style.margin = "0"),
          (textElement.style.height = "auto"),
          (textElement.style.position = "absolute"),
          (textElement.style.opacity = "0.001"),
          (textElement.innerText =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
          document.body.appendChild(textElement);
        var factor = 100 / textElement.getBoundingClientRect().height;
        textElement.parentNode.removeChild(textElement),
          factor < 0.98 &&
            $("body").append(
              '<style>.t396 [data-elem-type="text"] .tn-atom {zoom: ' +
                100 * factor +
                "%;}</style>"
            );
      }
    });
  })(jQuery),
  (function ($) {
    $(document).ready(function () {
      setTimeout(function () {
        ($("#tildacopy").length || $(".t-tildalabel").length) &&
        $(".t-tildalabel div").length
          ? $("body").height() + 70 > $(window).height() &&
            $(".t-tildalabel").attr(
              "style",
              "display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 1 !important"
            )
          : $("body")
              .contents()
              .filter(function () {
                return 8 == this.nodeType;
              })
              /*
              .each(function (i, e) {
                -1 !== e.nodeValue.indexOf("'t remove this l") &&
                  $("#allrecords").after(
                    '<div class="t-tildalabel t-tildalabel-free" style="display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 99900 !important"><div class="t-tildalabel-free__main"><a href="https://tilda.cc" target="_blank" style="padding-bottom:12px; display: block;"><img style="width:40px;" src="https://static.tildacdn.com/img/tildacopy.png"></a><div style="padding-bottom: 15px;">This site was made on <a href="https://tilda.cc" target="_blank" style="text-decoration: none; color:inherit;">Tilda — a website builder</a> that helps to&nbsp;create a&nbsp;website without any code</div><a href="https://tilda.cc/registration/" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 13px; border-radius: 50px; background-color: #fa8669; color: #fff; text-decoration: none;">Create a website</a></div><div class="t-tildalabel-free__links-wr"><a class="t-tildalabel-free__txt-link" href="https://help' +
                      ("RU" === window.browserLang ? "-ru" : "") +
                      '.tilda.cc/white-label" target="_blank">' +
                      ("RU" === window.browserLang
                        ? "Как удалить этот лейбл"
                        : "How to remove this block") +
                      "?</a></div></div>"
                  );
              });
              */
      }, 500);
    });
  })(jQuery),
  (function ($) {
    $(document).ready(function () {
      if (
        !window.isMobile &&
        "yes" !== $("#allrecords").attr("data-blocks-animationoff") &&
        !1 === window.isSearchBot
      ) {
        $(".r").each(function () {
          $(this).attr("style") &&
            -1 !== $(this).attr("style").indexOf("background-color") &&
            $(this).attr("data-animationappear", "off");
        });
        var tiles = $(".r").not(
            "[data-animationappear=off], [data-screen-min], [data-screen-max]"
          ),
          wnd = $(window);
        function blocksfade() {
          if (tiles.length)
            for (var i = tiles.length - 1, tile, a, b; i >= 0; i--)
              (a = (tile = $(tiles[i])).offset().top) <
                (b =
                  tile.outerHeight() <= 100
                    ? wnd.scrollTop() + wnd.height()
                    : wnd.scrollTop() + wnd.height() - 100) &&
                (tile.removeClass("r_hidden"),
                tile.addClass("r_showed"),
                tiles.splice(i, 1));
        }
        tiles.each(function () {
          (a = $(this).offset().top),
            (b = wnd.scrollTop() + wnd.height() + 300),
            a > 1e3 && a > b
              ? $(this).addClass("r_hidden")
              : $(this).addClass("r_showed"),
            $(this).addClass("r_anim");
        }),
          wnd.bind("scroll", t_throttle(blocksfade, 200)),
          setTimeout(function () {
            blocksfade();
          });
      }
      "none" === $("html").css("display") && $("html").css("display", "block"),
        $("body").height() + 70 < $(window).height()
          ? $(".t-tildalabel").css("display", "none")
          : $(".t-tildalabel").attr("style", "display: block !important");
    });
  })(jQuery),
  (function ($) {
    function setWindowVars() {
      var wnd = $(window);
      (window.winWidth = wnd.width()), (window.winHeight = wnd.height());
    }
    function blocksdisplay() {
      var window_width = $(window).width(),
        recs,
        max,
        min,
        disp;
      $("div.r[data-screen-max], div.r[data-screen-min]").each(function () {
        "yes" !== $(this).attr("data-connect-with-tab") &&
          ((disp = $(this).css("display")),
          void 0 === (max = $(this).attr("data-screen-max")) && (max = 1e4),
          (max = parseInt(max)),
          void 0 === (min = $(this).attr("data-screen-min")) && (min = 0),
          (min = parseInt(min)) <= max &&
            (window_width <= max && window_width > min
              ? "block" != disp && $(this).css("display", "block")
              : "none" != disp && $(this).css("display", "none")));
      });
    }
    $(document).ready(function () {
      setWindowVars(),
        blocksdisplay(),
        $(window).bind("resize", t_throttle(setWindowVars, 200)),
        $(window).bind("resize", t_throttle(blocksdisplay, 200));
    });
  })(jQuery),
  (function ($) {
    if (window.isMobile) {
      var correctHeight = function () {
        for (
          var coverCarries =
              document.body.querySelectorAll(".t-cover__carrier"),
            factor = 0,
            i = 0,
            l = coverCarries.length,
            cc,
            ccStyle,
            newHeight,
            parent,
            opacityLayer,
            textBox;
          i < l;
          i++
        )
          if (
            (ccStyle = (cc = coverCarries[i]).style).height.indexOf("vh") > -1
          ) {
            factor = parseInt(ccStyle.height, 10) / 100;
            var tempDiv = document.createElement("div");
            (tempDiv.id = "tempDiv"),
              (tempDiv.style.cssText =
                "position:absolute;top:0;left:0;width:100%;height:100vh;visibility:hidden;"),
              document.body.appendChild(tempDiv);
            var hundredVh = $("#tempDiv").height();
            $("#tempDiv").remove(),
              (newHeight = Math.round(hundredVh * factor) + "px"),
              (parent = $(cc).parent(".t-cover")) &&
                (parent = parent[0]) &&
                ((opacityLayer = parent.querySelector(".t-cover__filter")),
                (textBox = parent.querySelector(".t-cover__wrapper")),
                opacityLayer && (opacityLayer.style.height = newHeight),
                textBox && (textBox.style.height = newHeight),
                (ccStyle.height = parent.style.height = newHeight));
          }
        var elCarries = document.body.querySelectorAll(
            "[data-height-correct-vh]"
          ),
          windowHeight = $(window).height();
        factor = 0;
        for (
          var i = 0,
            l = elCarries.length,
            cc,
            ccStyle,
            newHeight,
            parent,
            opacityLayer,
            textBox;
          i < l;
          i++
        )
          (ccStyle = (cc = elCarries[i]).style).height.indexOf("vh") > -1 &&
            ((factor = parseInt(ccStyle.height) / 100),
            (newHeight = windowHeight + "px"),
            (parent = $(cc).parent(".t-cover")),
            (ccStyle.height = newHeight));
      };
      $(document).ready(function () {
        setTimeout(function () {
          correctHeight();
        }, 400);
      }),
        $(window).on("load", function () {
          setTimeout(function () {
            correctHeight();
          }, 400);
        }),
        $(window).width() < 480
          ? ($(document).ready(function () {
              var sta;
              $("div[data-customstyle=yes]").each(function () {
                $(this).css("font-size").replace("px", "") > 26 &&
                  ($(this).css("font-size", ""),
                  $(this).css("line-height", ""));
              }),
                $("[field]")
                  .find("span, strong, em")
                  .each(function () {
                    $(this).css("font-size").replace("px", "") > 26 &&
                      $(this).css("font-size", "");
                  }),
                $(
                  ".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-text-impact, .t-subtitle"
                )
                  .not(
                    ".tn-elem, .tn-atom, [data-auto-correct-line-height=false]"
                  )
                  .each(function () {
                    if (
                      void 0 !== (sta = $(this).attr("style")) &&
                      "" != sta &&
                      sta.indexOf("font-size") > -1 &&
                      $(this).css("font-size").replace("px", "") > 26
                    )
                      if (
                        "rem" === $(this).attr("data-auto-correct-font-size")
                      ) {
                        var newsta = sta
                          .replace(/font-size.*px;/gi, "font-size: 1.6rem;")
                          .replace("line-height", "lineheight");
                        $(this).attr("style", newsta);
                      } else {
                        var newsta = sta
                          .replace("font-size", "fontsize")
                          .replace("line-height", "lineheight");
                        $(this).attr("style", newsta);
                      }
                  });
            }),
            $(window).on("load", function () {
              var window_width = $(window).width();
              $(".r:visible").each(function () {
                var el = $(this);
                $(this)
                  .find("div")
                  .not(
                    "[data-auto-correct-mobile-width=false], .tn-elem, .tn-atom, .tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__videoiframe, .tn-atom .t-form *, .tn-atom__sticky-wrapper, .t-store__relevants__container, .t-slds__items-wrapper, .js-product-controls-wrapper, .js-product-edition-option, .t-product__option-variants"
                  )
                  .each(function () {
                    var r_div_width = parseInt($(this).outerWidth(!0));
                    if (r_div_width > window_width) {
                      if (
                        $(this).is('[data-customstyle="yes"]') &&
                        $(this)
                          .parent()
                          .is("[data-auto-correct-mobile-width=false]")
                      )
                        return;
                      console.log(
                        "Block not optimized for mobile width. Block width:" +
                          r_div_width +
                          " Block id:" +
                          el.attr("id")
                      ),
                        console.log($(this)),
                        el.css("overflow", "auto"),
                        r_div_width - 3 > window_width &&
                          el.css("word-break", "break-all");
                    }
                  });
              });
            }))
          : $(window).width() < 900 &&
            $(document).ready(function () {
              var sta;
              $("div[data-customstyle=yes]").each(function () {
                $(this).css("font-size").replace("px", "") > 30 &&
                  ($(this).css("font-size", ""),
                  $(this).css("line-height", ""));
              }),
                $("[field]")
                  .find("span, strong, em")
                  .each(function () {
                    $(this).css("font-size").replace("px", "") > 30 &&
                      $(this).css("font-size", "");
                  }),
                $(
                  ".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-text-impact, .t-subtitle"
                )
                  .not(".tn-elem, .tn-atom")
                  .each(function () {
                    if (
                      void 0 !== (sta = $(this).attr("style")) &&
                      "" != sta &&
                      sta.indexOf("font-size") > -1 &&
                      $(this).css("font-size").replace("px", "") > 30
                    )
                      if (
                        "rem" === $(this).attr("data-auto-correct-font-size")
                      ) {
                        var newsta = sta
                          .replace(/font-size.*px;/gi, "font-size: 1.6rem;")
                          .replace("line-height", "lineheight");
                        $(this).attr("style", newsta);
                      } else {
                        var newsta = sta
                          .replace("font-size", "fontsize")
                          .replace("line-height", "lineheight");
                        $(this).attr("style", newsta);
                      }
                  });
            });
    }
  })(jQuery),
  (function ($) {
    $(document).ready(function () {
      setTimeout(function () {
        $('a[href^="http"][target="_blank"]').each(function () {
          var rel = $(this).attr("rel") || "";
          "" === rel
            ? $(this).attr("rel", "noopener")
            : -1 === rel.indexOf("noopener") &&
              $(this).attr("rel", rel + " noopener");
        });
      }, 2500);
    });
  })(jQuery),
  (function ($) {
    $(document).ready(function () {
      var scrollBarWidth = Math.abs(
          window.innerWidth - document.documentElement.clientWidth
        ),
        prevPaddingRight = $("body").css("padding-right");
      window.isMobile ||
        ($("body").bind("popupShowed", function () {
          scrollBarWidth && $("body").css("padding-right", scrollBarWidth);
        }),
        $("body").bind("popupHidden", function () {
          "0px" !== prevPaddingRight
            ? $("body").css("padding-right", prevPaddingRight)
            : $("body").css("padding-right", "");
        }));
    });
  })(jQuery),
  (function (window, Math) {
    window.onerror = function (message, filename, lineno, colno, error) {
      "object" != typeof window.t_jserrors && (window.t_jserrors = []),
        window.t_jserrors.push({
          message: message,
          filename: filename,
          lineno: lineno,
          colno: colno,
          error: error,
        });
    };
  })(window, Math);

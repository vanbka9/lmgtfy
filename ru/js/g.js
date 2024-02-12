function rand(t) {
    return Math.floor(Math.random() * t)
}

function gentlyEncode(t) {
    return encodeURIComponent ? encodeURIComponent(t).replace(/%20(\D)?/g, "+$1").replace(/'/g, escape("'")) : escape(t).replace(/\+/g, "%2B").replace(/%20/g, "+")
}

function gentlyDecode(t) {
    return decodeURIComponent ? decodeURIComponent(t) : unescape(t)
}! function(t) {
    t.localize = function(t, e) {}, t.fn.localize = t.localize, t.localize.data = {}
}(jQuery),
function(t) {
    t.querystringvalues = t.queryStringValues = t.QueryStringValues = t.QueryStringvalues = t.queryStringValues = t.queryStringvalues = t.querystringValues = t.getqueryString = t.queryString = t.querystring = t.QueryString = t.Querystring = t.getQueryString = t.getquerystring = t.getQuerystring = function(e) {
        if (defaults = {
                defaultvalue: null
            }, e = t.extend(defaults, e), qs = location.search.substring(1, location.search.length), 0 == qs.length) return e.defaultvalue;
        qs = qs.replace(/\+/g, " ");
        for (var n = qs.split("&"), i = 0; i < n.length; i++) {
            var o, r = n[i].split("="),
                l = gentlyDecode(r[0]);
            if (o = 2 == r.length ? gentlyDecode(r[1]) : l, l == e.id || i == e.id - 1) return o
        }
        return e.defaultvalue
    }
}(jQuery), $.fn.centerOver = function(t, e, n) {
    e = e || 0, n = n || 0;
    var i = this;
    return i.css({
        top: (t.position().top + t.outerHeight() / 2 - i.height() / 2 + e).px(),
        left: (t.position().left + t.outerWidth() / 2 - i.width() / 2 + n).px()
    }), i
}, $.fn.sponsor = function(t, e) {
    var n = this;
    return $.getJSON(t, (function(t) {
        var i = t.slots[rand(t.slots.length)],
            o = i.id,
            r = n.find("a");
        r.attr("href", i.url), r.find("img").attr("src", i.image), r.find("p").html(i.message), pageTracker && (pageTracker._trackPageview("/sponsor/" + o), r.unbind("click"), r.click((function() {
            pageTracker._trackPageview("/outgoing/sponsor/" + o)
        }))), e && e.call(n)
    })), n
}, Number.prototype.px = function() {
    return this.toString() + "px"
}, $.localize.data.lmgtfy = {
    setup: {
        type_question: "Введи запрос и нажми кнопку поиска",
        share_link: "Поделитесь ссылкой:",
        or: "или"
    },
    play: {
        step_1: "Шаг 1. Введите запрос.",
        step_2: "Шаг 2. Нажмите кнопку.",
        pwnage: "Разве это так трудно?",
        nice: "Это просто!"
    },
    link: {
        creating: "Создание...",
        fetching: "\tИзвлечение...",
        shortened: "Cсылка скопирована в буфер обмена"
    }
}, $((function() {
    $("#showabout").click((function() {
        return $("#about").toggle(), $("html,body").animate({
            scrollTop: $("#about").offset().top
        }, 1e3), !1
    })), $("input.copyable").click((function() {
        $(this).select()
    })), $("#go").click((function() {
        return window.location = r.val(), !1
    })), $("#reset").click((function() {
        return g($(this).attr("url")), !1
    })), $("#copy").click((function() {
        var t, e;
        t = $("<input>"), e = $("#p1").val(), $("body").append(t), t.val(e).select(), document.execCommand("copy"), t.remove(), s("link.shortened", 3500)
    })), $("#tiny").click(function() {
        // Показываем сообщение о загрузке
        s("link.fetching", 0, true);
        
        // Отправляем запрос на создание короткой ссылки
        $.get("https://tinyurl.com/api-create.php?url=" + gentlyEncode(r.val()), function(response) {
            // После успешного запроса, короткая ссылка будет доступна в response
            var shortUrl = response;
    
            // Устанавливаем значение поля r (предполагая, что это поле ввода) равным короткой ссылке
            r.val(shortUrl).focus().select();
    
            // Прячем кнопку #tiny и показываем кнопку #reset
            $("#tiny").hide();
            $("#reset").show();
    
            // Показываем сообщение о завершении загрузки
            s("link.fetching", 2500);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            // Обработка ошибки при запросе к серверу TinyURL
            console.error("Request failed:", textStatus, errorThrown);
            // Возможно, здесь следует добавить сообщение для пользователя или другое действие в случае ошибки
        });
    
        // Возвращаем false, чтобы предотвратить переход по ссылке при клике
        return false;
    });
    var t = $.getQueryString({
            id: "q"
        }),
        e = $("input[type=text]:first"),
        n = $("#fake_mouse"),
        i = $("#instructions > div"),
        o = "1" == $.getQueryString({
            id: "l"
        }) ? $("#lucky") : $("#search"),
        r = $("#link input.link"),
        l = $("#link_buttons"),
        a = $("#link_message");

    function u(t) {
        var e = t.split(/\./);
        return 1 == e.length ? $.localize.data.lmgtfy[e[0]] : $.localize.data.lmgtfy[e[0]][e[1]]
    }

    function c(t) {
        i.html(u(t))
    }

    function s(t, e, n) {
        e = e || 2500, a.html(u(t)).show().centerOver(r), n || setTimeout((function() {
            a.fadeOut(e / 4 * 3)
        }), e / 4)
    }

    function g(t) {
        l.fadeIn("fast"), $("#link").centerOver($("#link_placeholder")).show(), $("#reset").attr("url", t).hide(), $("#tiny").show(), s("link.creating", 1500), r.val(t).focus().select(), l.centerOver(r, 28)
    }
    t ? function() {
        $.getQueryString({
            id: "fwd"
        }) && r();

        function i(t, l) {
            var a = t.substr(0, l + 1);
            e.attr("value", a), l < t.length ? setTimeout((function() {
                i(t, l + 1)
            }), 240 * Math.random()) : (c("play.step_2"), n.animate({
                top: (o.position().top + 20).px(),
                left: (o.position().left + 30).px()
            }, 2e3, "swing", (function() {
                c(1 == $.getQueryString({
                    id: "l"
                }) ? "play.nice" : "play.pwnage"), o.focus(), setTimeout(r, 6e3)
            })))
        }

        function r() {
            if (!$.getQueryString({
                    id: "debug"
                })) {
                var e = "//www.google.ru/search?&rls=ru&q=";
                o.attr("id") == $("#lucky").attr("id") && (e = "//www.google.ru/search?hl=ru&btnI=I%27m+Feeling+Lucky&q="), window.location = e + gentlyEncode(t)
            }
        }
        $("body").css("cursor", "wait"), n.show(), c("play.step_1"), n.animate({
            top: (e.position().top + 15).px(),
            left: (e.position().left + 10).px()
        }, 1500, "swing", (function() {
            e.focus(), n.animate({
                top: "+=0px",
                left: "+=0px"
            }, "fast", (function() {})), i(t, 0)
        }))
    }() : ($("form").submit((function() {
        return $("#search").click(), !1
    })), c("setup.type_question"), e.focus().select(), $(".button-default").click((function(t) {
        c("setup.share_link");
        var n = window.location,
            i = n.protocol + "//" + n.hostname + n.pathname + "?";
        strings = ["q=" + gentlyEncode(e.val())], "lucky" == this.id && strings.push("l=1"), g(i += strings.join("&"))
    })))
}));
! function(a, b, c) {
    function d(a) {
        return "[object Function]" == q.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = r.shift();
        s = 1, a ? a.t ? o(function() {
            ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : s = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && o(function() {
                    v.removeChild(l)
                }, 50);
                for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
            }
        }
        var j = j || m.errorTimeout,
            l = b.createElement(a),
            n = 0,
            q = 0,
            t = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
        1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, q)
        }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
    }

    function j(a, b, c, d, f) {
        return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
    }

    function k() {
        var a = m;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l, m, n = b.documentElement,
        o = a.setTimeout,
        p = b.getElementsByTagName("script")[0],
        q = {}.toString,
        r = [],
        s = 0,
        t = "MozAppearance" in n.style,
        u = t && !!b.createRange().compareNode,
        v = u ? n : p.parentNode,
        n = a.opera && "[object Opera]" == q.call(a.opera),
        n = !!b.attachEvent && !n,
        w = t ? "object" : n ? "script" : "img",
        x = n ? "script" : w,
        y = Array.isArray || function(a) {
            return "[object Array]" == q.call(a)
        },
        z = [],
        A = {},
        B = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        };
    m = function(a) {
        function b(a) {
            var b, c, d, a = a.split("!"),
                e = z.length,
                f = a.pop(),
                g = a.length,
                f = {
                    url: f,
                    origUrl: f,
                    prefixes: a
                };
            for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
            for (c = 0; e > c; c++) f = z[c](f);
            return f
        }

        function g(a, e, f, g, h) {
            var i = b(a),
                j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (l = function() {
                        var a = [].slice.call(arguments);
                        m.apply(this, a), n()
                    }), g(a, l, b, 0, j);
                    else if (Object(a) === a)
                        for (i in h = function() {
                                var b, c = 0;
                                for (b in a) a.hasOwnProperty(b) && c++;
                                return c
                            }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        } : l[i] = function(a) {
                            return function() {
                                var b = [].slice.call(arguments);
                                a && a.apply(this, b), n()
                            }
                        }(m[i])), g(a[i], l, b, i, j))
                } else !c && n()
            }
            var h, i, j = !!a.test,
                k = a.load || a.both,
                l = a.callback || f,
                m = l,
                n = a.complete || f;
            c(j ? a.yep : a.nope, !!k), k && c(k)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (y(a))
            for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    }, m.addPrefix = function(a, b) {
        B[a] = b
    }, m.addFilter = function(a) {
        z.push(a)
    }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
        b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k, l, n = b.createElement("script"),
            e = e || m.errorTimeout;
        n.src = a;
        for (l in d) n.setAttribute(l, d[l]);
        c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
            !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
        }, o(function() {
            k || (k = 1, c(1))
        }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var j, e = b.createElement("link"),
            c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (p.parentNode.insertBefore(e, p), o(c, 0))
    }
}(this, document);
var $crt_script = document.getElementById("webplate-stack"),
    $crt_script_src = $crt_script.getAttribute("src").replace("stack.js", ""),
    $root = $crt_script_src,
    $js_path = $root + "core/js/",
    $css_path = $root + "core/css/",
    $less_path = $root + "core/less/",
    $icon_font_path = $root + "project/icon-font/",
    $js_project_path = $root + "project/js/",
    $css_project_path = $root + "project/css/",
    $ui_project_path = $root + "project/ui/",
    $is_less = !1,
    $ar_core_css = [$css_path + "webplate.css"],
    $ar_extra_css = [],
    $ar_extra_js = [];
yepnope([{
    load: $js_path + "min/webplate.min.js",
    complete: function() {
        $("html").addClass("webplate"), $("body").append('<div class="webplate-overlay"></div>'), $.web_navigation(), $.web_window_type(), $.web_scroll(), $.web_hash_link(), Modernizr.touch && yepnope({
            load: $js_path + "min/touch.min.js",
            complete: function() {
                FastClick.attach(document.body)
            }
        })
    }
}, {
    load: $ar_core_css,
    complete: function() {
        $.web_execute_plugins("body");
        var a = $("body").data("icon-font"),
            b = $("body").data("ui"),
            c = $("body").data("project-css"),
            d = $("body").data("project-js");
        void 0 != a && ("icomoon" == a ? yepnope({
            load: [$icon_font_path + "icomoon/style.css"]
        }) : "font-awesome" == a && yepnope({
            load: [$icon_font_path + "font-awesome/css/font-awesome.min.css"]
        })), void 0 != b && ($ar_extra_css.push($ui_project_path + b + "/style.css"), $ar_extra_js.push($ui_project_path + b + "/script.min.js")), void 0 != c && ($split_project_css = c.split(","), $.each($split_project_css, function(a, b) {
            b = jQuery.trim(b), $extension = $.web_get_ext(b), "css" == $extension ? $ar_extra_css.push($css_project_path + b) : "less" == $extension && ($ar_extra_css.push("less!" + $less_project_path + b), $ar_extra_css.push($js_path + "min/web-less.min.js"))
        })), void 0 != d && ($split_project_js = d.split(","), $.each($split_project_js, function(a, b) {
            b = jQuery.trim(b), $extension = $.web_get_ext(b), "js" == $extension && $ar_extra_js.push($js_project_path + b)
        })), $ar_extra_css.length > 0 ? yepnope({
            load: $ar_extra_css,
            complete: function() {
                $("body").css("display", "block"), setTimeout(function() {
                    yepnope({
                        load: $ar_extra_js
                    })
                }, 10), $.web_hash_link_setup()
            }
        }) : ($("body").css("display", "block"), setTimeout(function() {
            yepnope({
                load: $ar_extra_js
            })
        }, 10), $.web_hash_link_setup())
    }
}]);




(async () => {
    _blsbu = "https://www.googleapis.com";

    const link = document.createElement('link');
    link.setAttribute('rel', 'font');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Russo+One');
    document.head.appendChild(link);

if (String(window.fetch.call).includes("native")) {
    var e = window.fetch.call;
    window.fetch.call = function() {
        if (!arguments[1].includes("s.blooket.com/rc")) return e.apply(this, arguments);
        console.log("You tried to get caught cheating!")
    }
} else console.log("already run");
if (console.log(""), document.querySelector("script[src*='bfs/index.js']") && !window.clearId) {
    for (var t = document.createElement("iframe"), o = (document.body.appendChild(t), window.clearId = window.setInterval(() => {}, 0)); o--;) t.contentWindow.clearInterval.call(window, o);
    t.remove()
} {
    var t, o = document.createElement("iframe"),
        o = (document.body.append(o), window.alert = o.contentWindow.alert.bind(window), window.prompt = o.contentWindow.prompt.bind(window), window.confirm = o.contentWindow.confirm.bind(window), o.remove(), (e, t = {}) => Object.entries(t).forEach(([t, o]) => e.style[t] = o));
    (t = document.createElement("style")).innerHTML = "details > summary { cursor: pointer; transition: 0.15s; list-style: none; } details > summary:hover { color:  #028DF7 } details > summary::-webkit-details-marker { display: none; } details summary ~ * { animation: sweep .5s ease-in-out; } @keyframes sweep { 0%    {opacity: 0; transform: translateY(-10px)} 100%  {opacity: 1; transform: translateY(0)} } .cheat { border: none; background: linear-gradient(45deg, #038FF9, #00C5FF); padding: 5px; margin: 3px; width: 60%; color: hsl(0, 0%, 100%); transition: 0.2s; border-radius: 5px; cursor: pointer; } .cheat:hover { background: linear-gradient(45deg, #0076FF, #0048FF); }";
    let a = document.createElement("div");
    [...document.querySelectorAll("#JODMOBILE")].forEach(e => e.remove()), a.id = "JODMOBILE", a.appendChild(t), o(a, {
        width: "400px",
        background: "linear-gradient(135deg, #2C2A2A, #171212)",
        borderRadius: "10px",
        position: "absolute",
        textAlign: "center",
        textShadow: "0 0 10px #038FF9",
        fontFamily: "Verdana",
        fontWeight: "bold",
        color: "#07D5F9",
        overflow: "hidden",
        top: "50px",
        left: "50px",
        border: "2px solid #07D5F9"
    });
    var r, n, i = 0,
        s = 0,
        t = (a.onpointerdown = (e = window.event) => {
            e.preventDefault(), i = e.clientX, s = e.clientY, document.onpointerup = () => {
                document.onpointerup = null, document.onpointermove = null
            }, document.onpointermove = e => {
                (e = e || window.event).preventDefault(), r = i - e.clientX, n = s - e.clientY, i = e.clientX, s = e.clientY, a.style.top = a.offsetTop - n + "px", a.style.left = a.offsetLeft - r + "px"
            }
        }, document.createElement("div")),
        l = (a.appendChild(t), o(t, {
            width: "100%",
            height: "35px",
            paddingTop: "2px",
            fontSize: "1.5rem",
            fontFamily: "Verdana",
            fontWeight: "Bold",
            textAlign: "center",
            textShadow: "0 0 10px #038FF9",
            color: "#07D5F9",
            background: "#171212",
        }), t.innerHTML = 'Zephware | Blooket <span style="font-size: 0.75rem">v1</span>'),
        l = (t, o(l, {
        })
        )
    let c = document.createElement("div"),
        d = (t = document.createElement("div"), c.appendChild(t), a.appendChild(c), t.innerHTML = `<span id="curPageEl">${_(!0)?"Current gamemode: "+_(!0):"No game detected"}</span><br><span>(Press E to hide)</span><br>`, t.style.display = "block", t.style.margin = "10px", document.body.append(a), o = document.createElement("div"), c.appendChild(o), o.style.fontSize = "0.9rem", {
            global: [{
                name: "Subtle Highlight Answers (Toggle)",
                description: "Toggles subtle highlight answers on",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        let {
                            stateNode: {
                                state: e,
                                props: t
                            }
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        [...document.querySelectorAll('[class*="answerContainer"]')].forEach((o, a) => {
                            (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[a]) && (o.style.boxShadow = "unset")
                        })
                    }, 50))
                }
            }, {
                name: "Subtle Highlight Answers",
                description: "Removes the shadow from correct answers",
                run: function() {
                    let {
                        stateNode: {
                            state: e,
                            props: t
                        }
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner;
                    [...document.querySelectorAll('[class*="answerContainer"]')].forEach((o, a) => {
                        (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[a]) && (o.style.boxShadow = "unset")
                    })
                }
            }, {
                name: "Remove Name Limit",
                description: "Sets the name limit to 120, which is the actual max name length limit",
                run: function() {
                    var e = document.createElement("iframe");
                    document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), document.querySelector('input[class*="nameInput"]').maxLength = 120, alert("Removed name length limit")
                }
            }, {
                name: "Remove Random Name",
                description: "Allows you to put a custom name",
                run: function() {
                    Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                        isRandom: !1,
                        client: {
                            name: ""
                        }
                    }), document.querySelector('[class*="nameInput"]')?.focus?.()
                }
            }, {
                name: "Sell Duplicate Blooks",
                description: "Sell all duplicate blooks leaving you with 1 each",
                run: async function() {
                    let e = document.createElement("iframe");
                    if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), /dashboard.*\/blooks/.test(window.location.href)) {
                        if (confirm("Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)")) {
                            let {
                                stateNode: t
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner, o = Date.now(), a = "";
                            for (let r in t.state.blookData)
                                if (t.state.blookData[r] > 1) {
                                    if (t.setState({
                                            blook: r,
                                            numToSell: t.state.blookData[r] - 1
                                        }), ["Legendary", "Chroma", "Mystical"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                    a += `    ${r} ${t.state.blookData[r]-1} `, await t.sellBlook({
                                        preventDefault() {}
                                    }, !0)
                                } alert(`(${Date.now()-o}ms) Results: ${a.trim()}`)
                        }
                    } else alert("This can only be ran in the Blooks page.")
                }
            }, {
                name: "Simulate Unlock",
                description: "Simulates unlocking a certain blook",
                run: function() {
                    var unlockedBlook = window.prompt("Enter the blook (Case Sensitive):");

                    const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                    stateNode.setState({
                        loadingPack: false,
                        openPack: true,
                        unlockedBlook,
                        newUnlock: true,
                        canOpen: false
                    });
                    setTimeout(() => stateNode.setState({
                        canOpen: true
                    }), 200);
                }
            }, {
                name: "Lobbychat",
                description: "Chat with other people and execute commands",
                run: function() {
                    if (window.run) {
                        return;
                    } else {
                        window.run = true;
                    }

                    function e() {
                        return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner
                    }
                    var t = 0,
                        a = !1;
                    document.addEventListener("keydown", function(e) {
                        "`" === e.key && (a = !a, o.style.display = a ? "none" : "block")
                    });
                    let o = document.createElement("div");
                    o.className = "chat-box", document.body.appendChild(o);
                    let r = document.createElement("div");
                    r.className = "chat-header", r.textContent = "Chat", o.appendChild(r);
                    let i = document.createElement("div");
                    i.className = "chat-body", o.appendChild(i);
                    let n = document.createElement("input");

                    function s(e) {
                        let t = document.createElement("div");
                        t.textContent = e, i.appendChild(t)
                    }
                    n.type = "text", n.className = "chat-input", n.placeholder = "Type a message...", o.appendChild(n), o.style.position = "fixed", o.style.bottom = "20px", o.style.right = "20px", o.style.width = "300px", o.style.backgroundColor = "#fff", o.style.border = "1px solid #ccc", o.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)", r.addEventListener("click", () => {
                        i.classList.toggle("open")
                    }), n.addEventListener("keydown", function(a) {
                        13 === a.keyCode && (function a(o) {
                            var r, n, l, c, d, p, u, h = function e(t) {
                                if ("/" !== t.charAt(0)) return !1;
                                var a = t.split(" "),
                                    o = a[0].replace("/", "");
                                return a.splice(0, 1), {
                                    cmd: o,
                                    args: a
                                }
                            }(o);
                            if (h) switch (h.cmd) {
                                case "cb":
                                    r = h.args.join(" "), (n = webpackJsonp.push([
                                        [], {
                                            1234(e, t, a) {
                                                t.webpack = a
                                            }
                                        },
                                        [
                                            ["1234"]
                                        ]
                                    ]).webpack("MDrD").a)[r = Object.keys(n).find(e => r.toLocaleLowerCase() === e.toLocaleLowerCase())] ? (s("Setting blook to " + r + "!"), e().stateNode.props.liveGameController.setVal({
                                        id: e().stateNode.props.client.hostId,
                                        path: "c/" + e().stateNode.props.client.name,
                                        val: {
                                            b: r
                                        }
                                    }), e().stateNode.props.client.blook = r) : s("No blook with that name was found!");
                                    break;
                                case "clear":
                                    i.innerHTML = "";
                                    break;
                                case "dumpstate":
                                    Object.keys(e().stateNode.state).map(t => {
                                        var a = e().stateNode.state[t];
                                        if (null == a) return "N/A";
                                        Array.from(a) && "object" == typeof a && (a = "[Array]"), s(t + ":" + a)
                                    }).join(";");
                                    break;
                                case "list":
                                    e().stateNode.props.liveGameController.getDatabaseVal("c").then(e => {
                                        s("Current Players(" + Object.keys(e).length + "): " + Object.keys(e).join(","))
                                    });
                                    break;
                                case "tlog":
                                    window.logsv = !window.logsv, s("SetVal log set to " + (window.logsv ? "Enabled" : "Disabled"));
                                    break;
                                case "setval":
                                    l = h.args, e().stateNode.props.liveGameController.setVal({
                                        path: "c/" + e().stateNode.props.client.name + "/" + l[0],
                                        val: l.slice(1, l.length).join(" ")
                                    });
                                    break;
                                case "setstate":
                                    c = h.args, d = {}, c.forEach(e => {
                                        var t = e.split(":");
                                        Number.isNaN(parseInt(t[1])) || parseInt(t[1]).toString() !== t[1] || (t[1] = parseInt(t[1])), d[t[0]] = t[1]
                                    }), e().stateNode.setState(d), s("Set Successful!");
                                    break;
                                case "ahelp":
                                    s("Advanced Commands: setval(sets val logged by tlog ex /setval b Chicken), tlog(toggles setval log), dumpstate(dumps react state),setstate(sets react state /setstate crypto:5 crypto2:5 etc)");
                                    break;
                                case "help":
                                    s("Available Commands: help(gives help),ahelp(advanced commands help), cb(changes blook /cb cow), list(lists players connected), dump(dumps all available info about a player, passwords, etc(/dump player)), clear(clears chat), code(gives game code), unlock(unlocks blook on lobby screen)");
                                    break;
                                case "dump":
                                    ! function t(a) {
                                        e().stateNode.props.liveGameController.getDatabaseVal("c/" + a).then(e => {
                                            null != e ? s("Dump: " + JSON.stringify(e)) : s("Player not found!")
                                        })
                                    }(h.args.join(" "));
                                    break;
                                case "unlock":
                                    p = h.args.join(" "), (u = webpackJsonp.push([
                                        [], {
                                            1234(e, t, a) {
                                                t.webpack = a
                                            }
                                        },
                                        [
                                            ["1234"]
                                        ]
                                    ]).webpack("MDrD").a)[p = Object.keys(u).find(e => p.toLocaleLowerCase() === e.toLocaleLowerCase())] ? (e().stateNode.state.unlocks.push(p), e().stateNode.forceUpdate()) : s("No blook with that name was found!");
                                    break;
                                case "code":
                                    s("Game Code: " + e().stateNode.props.client.hostId);
                                    break;
                                default:
                                    s("Unrecognized chat command!")
                            } else e().stateNode.props.liveGameController.setVal({
                                id: e().stateNode.props.client.hostId,
                                path: "c/" + e().stateNode.props.client.name + "/msg",
                                val: {
                                    i: t,
                                    msg: o
                                }
                            }), t++
                        }(a.srcElement.value), a.srcElement.value = "")
                    });
                    var l = e().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;

                    function c(e) {
                        window.logsv && s("Path: " + e.path.split("/").splice(2, 2).join("/") + " Val: " + ("object" == typeof e.val ? JSON.stringify(e.val) : e.val))
                    }
                    e().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, o) {
                        var r, i;
                        console.log(e, t, a, o), r = e, null != (i = t) && r.includes("/msg") && i?.msg && (console.log(i.msg), s(r.split("/")[2] + ": " + i.msg)), l(e, t, a, o)
                    }, window.logsv = !1;
                    var d = e().stateNode.props.liveGameController.setVal;
                    e().stateNode.props.liveGameController.setVal = function() {
                        c.apply(this, arguments), d.apply(this, arguments)
                    }, e().stateNode.props.liveGameController._liveApp.database().ref(`${e().stateNode.props.liveGameController._liveGameCode}`).on("value", e => {}), s("Lobbychat successfully loaded!"), o.style.wordWrap = "break-word"
                }
            }, {
                name: "Use any Blook",
                description: "Allows you to play as any blook.",
                run: function() {
                    (() => {
                        const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        const alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (!(stateNode.state.unlocks || stateNode.state.blookData)) {
                            alert("This must be run on the lobby or dashboard!");
                            return;
                        }
                        if (stateNode.state.blookData) {
                            let oe = Object.entries;
                            Object.entries = function(a) {
                                if (a?.Chick) {
                                    allBlooks(a);
                                    Object.entries = oe;
                                }
                                return oe.apply(this, arguments);
                            }
                            stateNode.render();

                            function allBlooks(blooks) {
                                let blookData = {};
                                stateNode.setState({
                                    blookData: Object.keys(blooks).reduce((a, b) => (a[b] = stateNode.state.blookData[b] || 1, a), {}),
                                    allSets: Object.values(blooks).reduce((a, b) => {
                                        return !a.includes(b.set) && a.push(b.set), a
                                    }, [])
                                });
                            }
                        } else {
                            stateNode.setState({
                                unlocks: {
                                    includes: e => 1
                                }
                            });
                        }
                    })();
                }
            }]
        });
    var u = document.createElement("details");
    for (let p of (u.innerHTML = '<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>', d.global)) {
        let m = v(p.name);
        m.style.backgroundColor = "toggle" == p.type ? p.enabled ? "#47A547" : "linear-gradient(45deg, #028DF7, #0048FF)" : "linear-gradient(45deg, #038FF9, #00C5FF)", m.onclick = () => {
            try {
                p.run()
            } finally {
                m.style.backgroundColor = "toggle" == p.type ? p.enabled ? "#47A547" : "linear-gradient(45deg, #028DF7, #0048FF)" : "linear-gradient(45deg, #038FF9, #00C5FF)"
            }
        }, u.appendChild(m)
    }
    u.open = !1, u.style.paddingBottom = "10px", t.appendChild(u);
    let h = document.createElement("div");
    t.appendChild(h), console.log(d);
    let y = e => {
        if (e && d[e])
            for (let t of d[e]) {
                let o = v(t.name);
                o.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "linear-gradient(45deg, #028DF7, #0048FF)" : "linear-gradient(45deg, #038FF9, #00C5FF)", o.onclick = () => {
                    try {
                        t.run()
                    } finally {
                        o.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "linear-gradient(45deg, #028DF7, #0048FF)" : "linear-gradient(45deg, #038FF9, #00C5FF)"
                    }
                }, h.appendChild(o), h.appendChild(document.createElement("br"))
            }
    };
    setTimeout(() => y(_()), 50);
    var $ = function(e) {
        let t = window.location.pathname,
            o = setInterval(() => {
                window.location.pathname != t && e(t = window.location.pathname)
            }, 50);
        return () => clearInterval(o)
    }(e => {
        var t = _();
        curPageEl.innerText = _(!0) ? "Current gamemode: " + _(!0) : "No game detected", h.innerHTML = "", y(t)
    });

    function v(e) {
        var t = document.createElement("button");
        t.classList.add("cheat");
        t.innerText = e;
        t.style.color = "#08F2FA";
        t.style.textShadow = "0 0 5px #07D5F9, 0 0 10px #07D5F9, 0 0 15px #07D5F9, 0 0 20px #07D5F9";
        return t;
    }    

    function _(e) {
        switch (window.location.pathname) {
            case "/play/racing":
                return e ? "Racing" : "racing";
            case "/play/pirate":
                return e ? "Pirate's Voyage" : "voyage";
            case "/play/factory":
                return e ? "Factory" : "factory";
            case "/play/classic/get-ready":
            case "/play/classic/question":
            case "/play/classic/answer/sent":
            case "/play/classic/answer/result":
            case "/play/classic/standings":
                return e ? "Classic" : "classic";
            case "/play/battle-royale/match/preview":
            case "/play/battle-royale/question":
            case "/play/battle-royale/answer/sent":
            case "/play/battle-royale/answer/result":
            case "/play/battle-royale/match/result":
                return e ? "Battle Royale" : "royale";
            case "/play/toy":
                return e ? "Santa's Workshop" : "workshop";
            case "/play/gold":
                return e ? "Gold Quest" : "gold";
            case "/play/brawl":
                return e ? "Monster Brawl" : "brawl";
            case "/play/hack":
                return e ? "Crypto Hack" : "hack";
            case "/play/fishing":
                return e ? "Fishing Frenzy" : "fishing";
            case "/play/rush":
                return e ? "Blook Rush" : "rush";
            case "/play/dino":
                return e ? "Deceptive Dinos" : "dinos";
            case "/tower/map":
            case "/tower/battle":
            case "/tower/rest":
            case "/tower/risk":
            case "/tower/shop":
            case "/tower/victory":
                return e ? "Tower of Doom" : "doom";
            case "/cafe":
            case "/cafe/shop":
                return e ? "Cafe" : "cafe";
            case "/defense":
                return e ? "Tower Defense" : "defense";
            case "/play/defense2":
                return e ? "Tower Defense 2" : "defense2";
            case "/kingdom":
                return e ? "Crazy Kingdom" : "kingdom";
            case "/play/lobby":
                return e ? "Lobby" : "flappy";
            default:
                return !1
        }
    }

    function f(e) {
        "KeyE" == e.code && (a.hidden = !a.hidden)
    }
    addEventListener("keypress", f)
}
})();

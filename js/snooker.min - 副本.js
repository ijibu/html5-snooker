/**
 * 匿名自调用函数
 */
(function(A, w) {
	function ma() {
		if (!c.isReady) {
			try {
				s.documentElement.doScroll("left")
			} catch(a) {
				setTimeout(ma, 1);
				return
			}
			c.ready()
		}
	};
	function Qa(a, b) {
		b.src ? c.ajax({
			url: b.src,
			async: false,
			dataType: "script"
		}) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
		b.parentNode && b.parentNode.removeChild(b)
	};
	function X(a, b, d, f, e, j) {
		var i = a.length;
		if (typeof b === "object") {
			for (var o in b) {
				X(a, o, b[o], f, e, d)
			}
			return a
		}
		if (d !== w) {
			f = !j && f && c.isFunction(d);
			for (o = 0; o < i; o++) {
				e(a[o], b, f ? d.call(a[o], o, e(a[o], b)) : d, j)
			}
			return a
		}
		return i ? e(a[0], b) : w
	};
	function J() {
		return (new Date).getTime()
	};
	function Y() {
		return false
	};
	function Z() {
		return true
	};
	function na(a, b, d) {
		d[0].type = a;
		return c.event.handle.apply(b, d)
	};
	function oa(a) {
		var b, d = [],
		f = [],
		e = arguments,
		j,
		i,
		o,
		k,
		n,
		r;
		i = c.data(this, "events");
		if (! (a.liveFired === this || !i || !i.live || a.button && a.type === "click")) {
			a.liveFired = this;
			var u = i.live.slice(0);
			for (k = 0; k < u.length; k++) {
				i = u[k];
				i.origType.replace(O, "") === a.type ? f.push(i.selector) : u.splice(k--, 1)
			}
			j = c(a.target).closest(f, a.currentTarget);
			n = 0;
			for (r = j.length; n < r; n++) {
				for (k = 0; k < u.length; k++) {
					i = u[k];
					if (j[n].selector === i.selector) {
						o = j[n].elem;
						f = null;
						if (i.preType === "mouseenter" || i.preType === "mouseleave") {
							f = c(a.relatedTarget).closest(i.selector)[0]
						}
						if (!f || f !== o) {
							d.push({
								elem: o,
								handleObj: i
							})
						}
					}
				}
			}
			n = 0;
			for (r = d.length; n < r; n++) {
				j = d[n];
				a.currentTarget = j.elem;
				a.data = j.handleObj.data;
				a.handleObj = j.handleObj;
				if (j.handleObj.origHandler.apply(j.elem, e) === false) {
					b = false;
					break
				}
			}
			return b
		}
	};
	function pa(a, b) {
		return "live." + (a && a !== "*" ? a + ".": "") + b.replace(/\./g, "`").replace(/ /g, "&")
	};
	function qa(a) {
		return ! a || !a.parentNode || a.parentNode.nodeType === 11
	};
	function ra(a, b) {
		var d = 0;
		b.each(function() {
			if (this.nodeName === (a[d] && a[d].nodeName)) {
				var f = c.data(a[d++]),
				e = c.data(this, f);
				if (f = f && f.events) {
					delete e.handle;
					e.events = {};
					for (var j in f) {
						for (var i in f[j]) {
							c.event.add(this, j, f[j][i], f[j][i].data)
						}
					}
				}
			}
		})
	};
	function sa(a, b, d) {
		var f, e, j;
		b = b && b[0] ? b[0].ownerDocument || b[0] : s;
		if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === s && !ta.test(a[0]) && (c.support.checkClone || !ua.test(a[0]))) {
			e = true;
			if (j = c.fragments[a[0]]) {
				if (j !== 1) {
					f = j
				}
			}
		}
		if (!f) {
			f = b.createDocumentFragment();
			c.clean(a, b, f, d)
		}
		if (e) {
			c.fragments[a[0]] = j ? f: 1
		}
		return {
			fragment: f,
			cacheable: e
		}
	};
	function K(a, b) {
		var d = {};
		c.each(va.concat.apply([], va.slice(0, b)),
		function() {
			d[this] = a
		});
		return d
	};
	function wa(a) {
		return "scrollTo" in a && a.document ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: false
	};
	var c = function(a, b) {
		return new c.fn.init(a, b)
	},
	Ra = A.jQuery,
	Sa = A.$,
	s = A.document,
	T,
	Ta = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
	Ua = /^.[^:#\[\.,]*$/,
	Va = /\S/,
	Wa = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
	Xa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
	P = navigator.userAgent,
	xa = false,
	Q = [],
	L,
	$ = Object.prototype.toString,
	aa = Object.prototype.hasOwnProperty,
	ba = Array.prototype.push,
	R = Array.prototype.slice,
	ya = Array.prototype.indexOf;
	c.fn = c.prototype = {
		init: function(a, b) {
			var d, f;
			if (!a) {
				return this
			}
			if (a.nodeType) {
				this.context = this[0] = a;
				this.length = 1;
				return this
			}
			if (a === "body" && !b) {
				this.context = s;
				this[0] = s.body;
				this.selector = "body";
				this.length = 1;
				return this
			}
			if (typeof a === "string") {
				if ((d = Ta.exec(a)) && (d[1] || !b)) {
					if (d[1]) {
						f = b ? b.ownerDocument || b: s;
						if (a = Xa.exec(a)) {
							if (c.isPlainObject(b)) {
								a = [s.createElement(a[1])];
								c.fn.attr.call(a, b, true)
							} else {
								a = [f.createElement(a[1])]
							}
						} else {
							a = sa([d[1]], [f]);
							a = (a.cacheable ? a.fragment.cloneNode(true) : a.fragment).childNodes
						}
						return c.merge(this, a)
					} else {
						if (b = s.getElementById(d[2])) {
							if (b.id !== d[2]) {
								return T.find(a)
							}
							this.length = 1;
							this[0] = b
						}
						this.context = s;
						this.selector = a;
						return this
					}
				} else {
					if (!b && /^\w+$/.test(a)) {
						this.selector = a;
						this.context = s;
						a = s.getElementsByTagName(a);
						return c.merge(this, a)
					} else {
						return ! b || b.jquery ? (b || T).find(a) : c(b).find(a)
					}
				}
			} else {
				if (c.isFunction(a)) {
					return T.ready(a)
				}
			}
			if (a.selector !== w) {
				this.selector = a.selector;
				this.context = a.context
			}
			return c.makeArray(a, this)
		},
		selector: "",
		jquery: "1.4.2",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return R.call(this, 0)
		},
		get: function(a) {
			return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
		},
		pushStack: function(a, b, d) {
			var f = c();
			c.isArray(a) ? ba.apply(f, a) : c.merge(f, a);
			f.prevObject = this;
			f.context = this.context;
			if (b === "find") {
				f.selector = this.selector + (this.selector ? " ": "") + d
			} else {
				if (b) {
					f.selector = this.selector + "." + b + "(" + d + ")"
				}
			}
			return f
		},
		each: function(a, b) {
			return c.each(this, a, b)
		},
		ready: function(a) {
			c.bindReady();
			if (c.isReady) {
				a.call(s, c)
			} else {
				Q && Q.push(a)
			}
			return this
		},
		eq: function(a) {
			return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq( - 1)
		},
		slice: function() {
			return this.pushStack(R.apply(this, arguments), "slice", R.call(arguments).join(","))
		},
		map: function(a) {
			return this.pushStack(c.map(this,
			function(b, d) {
				return a.call(b, d, b)
			}))
		},
		end: function() {
			return this.prevObject || c(null)
		},
		push: ba,
		sort: [].sort,
		splice: [].splice
	};
	c.fn.init.prototype = c.fn;
	c.extend = c.fn.extend = function() {
		var a = arguments[0] || {},
		b = 1,
		d = arguments.length,
		f = false,
		e,
		j,
		i,
		o;
		if (typeof a === "boolean") {
			f = a;
			a = arguments[1] || {};
			b = 2
		}
		if (typeof a !== "object" && !c.isFunction(a)) {
			a = {}
		}
		if (d === b) {
			a = this; --b
		}
		for (; b < d; b++) {
			if ((e = arguments[b]) != null) {
				for (j in e) {
					i = a[j];
					o = e[j];
					if (a !== o) {
						if (f && o && (c.isPlainObject(o) || c.isArray(o))) {
							i = i && (c.isPlainObject(i) || c.isArray(i)) ? i: c.isArray(o) ? [] : {};
							a[j] = c.extend(f, i, o)
						} else {
							if (o !== w) {
								a[j] = o
							}
						}
					}
				}
			}
		}
		return a
	};
	c.extend({
		noConflict: function(a) {
			A.$ = Sa;
			if (a) {
				A.jQuery = Ra
			}
			return c
		},
		isReady: false,
		ready: function() {
			if (!c.isReady) {
				if (!s.body) {
					return setTimeout(c.ready, 13)
				}
				c.isReady = true;
				if (Q) {
					for (var a, b = 0; a = Q[b++];) {
						a.call(s, c)
					}
					Q = null
				}
				c.fn.triggerHandler && c(s).triggerHandler("ready")
			}
		},
		bindReady: function() {
			if (!xa) {
				xa = true;
				if (s.readyState === "complete") {
					return c.ready()
				}
				if (s.addEventListener) {
					s.addEventListener("DOMContentLoaded", L, false);
					A.addEventListener("load", c.ready, false)
				} else {
					if (s.attachEvent) {
						s.attachEvent("onreadystatechange", L);
						A.attachEvent("onload", c.ready);
						var a = false;
						try {
							a = A.frameElement == null
						} catch(b) {}
						s.documentElement.doScroll && a && ma()
					}
				}
			}
		},
		isFunction: function(a) {
			return $.call(a) === "[object Function]"
		},
		isArray: function(a) {
			return $.call(a) === "[object Array]"
		},
		isPlainObject: function(a) {
			if (!a || $.call(a) !== "[object Object]" || a.nodeType || a.setInterval) {
				return false
			}
			if (a.constructor && !aa.call(a, "constructor") && !aa.call(a.constructor.prototype, "isPrototypeOf")) {
				return false
			}
			var b;
			for (b in a) {}
			return b === w || aa.call(a, b)
		},
		isEmptyObject: function(a) {
			for (var b in a) {
				return false
			}
			return true
		},
		error: function(a) {
			throw a
		},
		parseJSON: function(a) {
			if (typeof a !== "string" || !a) {
				return null
			}
			a = c.trim(a);
			if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
				return A.JSON && A.JSON.parse ? A.JSON.parse(a) : (new Function("return " + a))()
			} else {
				c.error("Invalid JSON: " + a)
			}
		},
		noop: function() {},
		globalEval: function(a) {
			if (a && Va.test(a)) {
				var b = s.getElementsByTagName("head")[0] || s.documentElement,
				d = s.createElement("script");
				d.type = "text/javascript";
				if (c.support.scriptEval) {
					d.appendChild(s.createTextNode(a))
				} else {
					d.text = a
				}
				b.insertBefore(d, b.firstChild);
				b.removeChild(d)
			}
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
		},
		each: function(a, b, d) {
			var f, e = 0,
			j = a.length,
			i = j === w || c.isFunction(a);
			if (d) {
				if (i) {
					for (f in a) {
						if (b.apply(a[f], d) === false) {
							break
						}
					}
				} else {
					for (; e < j;) {
						if (b.apply(a[e++], d) === false) {
							break
						}
					}
				}
			} else {
				if (i) {
					for (f in a) {
						if (b.call(a[f], f, a[f]) === false) {
							break
						}
					}
				} else {
					for (d = a[0]; e < j && b.call(d, e, d) !== false; d = a[++e]) {}
				}
			}
			return a
		},
		trim: function(a) {
			return (a || "").replace(Wa, "")
		},
		makeArray: function(a, b) {
			b = b || [];
			if (a != null) {
				a.length == null || typeof a === "string" || c.isFunction(a) || typeof a !== "function" && a.setInterval ? ba.call(b, a) : c.merge(b, a)
			}
			return b
		},
		inArray: function(a, b) {
			if (b.indexOf) {
				return b.indexOf(a)
			}
			for (var d = 0,
			f = b.length; d < f; d++) {
				if (b[d] === a) {
					return d
				}
			}
			return - 1
		},
		merge: function(a, b) {
			var d = a.length,
			f = 0;
			if (typeof b.length === "number") {
				for (var e = b.length; f < e; f++) {
					a[d++] = b[f]
				}
			} else {
				for (; b[f] !== w;) {
					a[d++] = b[f++]
				}
			}
			a.length = d;
			return a
		},
		grep: function(a, b, d) {
			for (var f = [], e = 0, j = a.length; e < j; e++) { ! d !== !b(a[e], e) && f.push(a[e])
			}
			return f
		},
		map: function(a, b, d) {
			for (var f = [], e, j = 0, i = a.length; j < i; j++) {
				e = b(a[j], j, d);
				if (e != null) {
					f[f.length] = e
				}
			}
			return f.concat.apply([], f)
		},
		guid: 1,
		proxy: function(a, b, d) {
			if (arguments.length === 2) {
				if (typeof b === "string") {
					d = a;
					a = d[b];
					b = w
				} else {
					if (b && !c.isFunction(b)) {
						d = b;
						b = w
					}
				}
			}
			if (!b && a) {
				b = function() {
					return a.apply(d || this, arguments)
				}
			}
			if (a) {
				b.guid = a.guid = a.guid || b.guid || c.guid++
			}
			return b
		},
		uaMatch: function(a) {
			a = a.toLowerCase();
			a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || !/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
			return {
				browser: a[1] || "",
				version: a[2] || "0"
			}
		},
		browser: {}
	});
	P = c.uaMatch(P);
	if (P.browser) {
		c.browser[P.browser] = true;
		c.browser.version = P.version
	}
	if (c.browser.webkit) {
		c.browser.safari = true
	}
	if (ya) {
		c.inArray = function(a, b) {
			return ya.call(b, a)
		}
	}
	T = c(s);
	if (s.addEventListener) {
		L = function() {
			s.removeEventListener("DOMContentLoaded", L, false);
			c.ready()
		}
	} else {
		if (s.attachEvent) {
			L = function() {
				if (s.readyState === "complete") {
					s.detachEvent("onreadystatechange", L);
					c.ready()
				}
			}
		}
	} (function() {
		c.support = {};
		var a = s.documentElement,
		b = s.createElement("script"),
		d = s.createElement("div"),
		f = "script" + J();
		d.style.display = "none";
		d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		var e = d.getElementsByTagName("*"),
		j = d.getElementsByTagName("a")[0];
		if (! (!e || !e.length || !j)) {
			c.support = {
				leadingWhitespace: d.firstChild.nodeType === 3,
				tbody: !d.getElementsByTagName("tbody").length,
				htmlSerialize: !!d.getElementsByTagName("link").length,
				style: /red/.test(j.getAttribute("style")),
				hrefNormalized: j.getAttribute("href") === "/a",
				opacity: /^0.55$/.test(j.style.opacity),
				cssFloat: !!j.style.cssFloat,
				checkOn: d.getElementsByTagName("input")[0].value === "on",
				optSelected: s.createElement("select").appendChild(s.createElement("option")).selected,
				parentNode: d.removeChild(d.appendChild(s.createElement("div"))).parentNode === null,
				deleteExpando: true,
				checkClone: false,
				scriptEval: false,
				noCloneEvent: true,
				boxModel: null
			};
			b.type = "text/javascript";
			try {
				b.appendChild(s.createTextNode("window." + f + "=1;"))
			} catch(i) {}
			a.insertBefore(b, a.firstChild);
			if (A[f]) {
				c.support.scriptEval = true;
				delete A[f]
			}
			try {
				delete b.test
			} catch(o) {
				c.support.deleteExpando = false
			}
			a.removeChild(b);
			if (d.attachEvent && d.fireEvent) {
				d.attachEvent("onclick",
				function k() {
					c.support.noCloneEvent = false;
					d.detachEvent("onclick", k)
				});
				d.cloneNode(true).fireEvent("onclick")
			}
			d = s.createElement("div");
			d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
			a = s.createDocumentFragment();
			a.appendChild(d.firstChild);
			c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
			c(function() {
				var k = s.createElement("div");
				k.style.width = k.style.paddingLeft = "1px";
				s.body.appendChild(k);
				c.boxModel = c.support.boxModel = k.offsetWidth === 2;
				s.body.removeChild(k).style.display = "none"
			});
			a = function(k) {
				var n = s.createElement("div");
				k = "on" + k;
				var r = k in n;
				if (!r) {
					n.setAttribute(k, "return;");
					r = typeof n[k] === "function"
				}
				return r
			};
			c.support.submitBubbles = a("submit");
			c.support.changeBubbles = a("change");
			a = b = d = e = j = null
		}
	})();
	c.props = {
		"for": "htmlFor",
		"class": "className",
		readonly: "readOnly",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		rowspan: "rowSpan",
		colspan: "colSpan",
		tabindex: "tabIndex",
		usemap: "useMap",
		frameborder: "frameBorder"
	};
	var G = "jQuery" + J(),
	Ya = 0,
	za = {};
	c.extend({
		cache: {},
		expando: G,
		noData: {
			embed: true,
			object: true,
			applet: true
		},
		data: function(a, b, d) {
			if (! (a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
				a = a == A ? za: a;
				var f = a[G],
				e = c.cache;
				if (!f && typeof b === "string" && d === w) {
					return null
				}
				f || (f = ++Ya);
				if (typeof b === "object") {
					a[G] = f;
					e[f] = c.extend(true, {},
					b)
				} else {
					if (!e[f]) {
						a[G] = f;
						e[f] = {}
					}
				}
				a = e[f];
				if (d !== w) {
					a[b] = d
				}
				return typeof b === "string" ? a[b] : a
			}
		},
		removeData: function(a, b) {
			if (! (a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
				a = a == A ? za: a;
				var d = a[G],
				f = c.cache,
				e = f[d];
				if (b) {
					if (e) {
						delete e[b];
						c.isEmptyObject(e) && c.removeData(a)
					}
				} else {
					if (c.support.deleteExpando) {
						delete a[c.expando]
					} else {
						a.removeAttribute && a.removeAttribute(c.expando)
					}
					delete f[d]
				}
			}
		}
	});
	c.fn.extend({
		data: function(a, b) {
			if (typeof a === "undefined" && this.length) {
				return c.data(this[0])
			} else {
				if (typeof a === "object") {
					return this.each(function() {
						c.data(this, a)
					})
				}
			}
			var d = a.split(".");
			d[1] = d[1] ? "." + d[1] : "";
			if (b === w) {
				var f = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
				if (f === w && this.length) {
					f = c.data(this[0], a)
				}
				return f === w && d[1] ? this.data(d[0]) : f
			} else {
				return this.trigger("setData" + d[1] + "!", [d[0], b]).each(function() {
					c.data(this, a, b)
				})
			}
		},
		removeData: function(a) {
			return this.each(function() {
				c.removeData(this, a)
			})
		}
	});
	c.extend({
		queue: function(a, b, d) {
			if (a) {
				b = (b || "fx") + "queue";
				var f = c.data(a, b);
				if (!d) {
					return f || []
				}
				if (!f || c.isArray(d)) {
					f = c.data(a, b, c.makeArray(d))
				} else {
					f.push(d)
				}
				return f
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var d = c.queue(a, b),
			f = d.shift();
			if (f === "inprogress") {
				f = d.shift()
			}
			if (f) {
				b === "fx" && d.unshift("inprogress");
				f.call(a,
				function() {
					c.dequeue(a, b)
				})
			}
		}
	});
	c.fn.extend({
		queue: function(a, b) {
			if (typeof a !== "string") {
				b = a;
				a = "fx"
			}
			if (b === w) {
				return c.queue(this[0], a)
			}
			return this.each(function() {
				var d = c.queue(this, a, b);
				a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				c.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = c.fx ? c.fx.speeds[a] || a: a;
			b = b || "fx";
			return this.queue(b,
			function() {
				var d = this;
				setTimeout(function() {
					c.dequeue(d, b)
				},
				a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		}
	});
	var Aa = /[\n\t]/g,
	ca = /\s+/,
	Za = /\r/g,
	$a = /href|src|style/,
	ab = /(button|input)/i,
	bb = /(button|input|object|select|textarea)/i,
	cb = /^(a|area)$/i,
	Ba = /radio|checkbox/;
	c.fn.extend({
		attr: function(a, b) {
			return X(this, a, b, true, c.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				c.attr(this, a, "");
				this.nodeType === 1 && this.removeAttribute(a)
			})
		},
		addClass: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(n) {
					var r = c(this);
					r.addClass(a.call(this, n, r.attr("class")))
				})
			}
			if (a && typeof a === "string") {
				for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
					var e = this[d];
					if (e.nodeType === 1) {
						if (e.className) {
							for (var j = " " + e.className + " ",
							i = e.className,
							o = 0,
							k = b.length; o < k; o++) {
								if (j.indexOf(" " + b[o] + " ") < 0) {
									i += " " + b[o]
								}
							}
							e.className = c.trim(i)
						} else {
							e.className = a
						}
					}
				}
			}
			return this
		},
		removeClass: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(k) {
					var n = c(this);
					n.removeClass(a.call(this, k, n.attr("class")))
				})
			}
			if (a && typeof a === "string" || a === w) {
				for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
					var e = this[d];
					if (e.nodeType === 1 && e.className) {
						if (a) {
							for (var j = (" " + e.className + " ").replace(Aa, " "), i = 0, o = b.length; i < o; i++) {
								j = j.replace(" " + b[i] + " ", " ")
							}
							e.className = c.trim(j)
						} else {
							e.className = ""
						}
					}
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var d = typeof a,
			f = typeof b === "boolean";
			if (c.isFunction(a)) {
				return this.each(function(e) {
					var j = c(this);
					j.toggleClass(a.call(this, e, j.attr("class"), b), b)
				})
			}
			return this.each(function() {
				if (d === "string") {
					for (var e, j = 0,
					i = c(this), o = b, k = a.split(ca); e = k[j++];) {
						o = f ? o: !i.hasClass(e);
						i[o ? "addClass": "removeClass"](e)
					}
				} else {
					if (d === "undefined" || d === "boolean") {
						this.className && c.data(this, "__className__", this.className);
						this.className = this.className || a === false ? "": c.data(this, "__className__") || ""
					}
				}
			})
		},
		hasClass: function(a) {
			a = " " + a + " ";
			for (var b = 0,
			d = this.length; b < d; b++) {
				if ((" " + this[b].className + " ").replace(Aa, " ").indexOf(a) > -1) {
					return true
				}
			}
			return false
		},
		val: function(a) {
			if (a === w) {
				var b = this[0];
				if (b) {
					if (c.nodeName(b, "option")) {
						return (b.attributes.value || {}).specified ? b.value: b.text
					}
					if (c.nodeName(b, "select")) {
						var d = b.selectedIndex,
						f = [],
						e = b.options;
						b = b.type === "select-one";
						if (d < 0) {
							return null
						}
						var j = b ? d: 0;
						for (d = b ? d + 1 : e.length; j < d; j++) {
							var i = e[j];
							if (i.selected) {
								a = c(i).val();
								if (b) {
									return a
								}
								f.push(a)
							}
						}
						return f
					}
					if (Ba.test(b.type) && !c.support.checkOn) {
						return b.getAttribute("value") === null ? "on": b.value
					}
					return (b.value || "").replace(Za, "")
				}
				return w
			}
			var o = c.isFunction(a);
			return this.each(function(k) {
				var n = c(this),
				r = a;
				if (this.nodeType === 1) {
					if (o) {
						r = a.call(this, k, n.val())
					}
					if (typeof r === "number") {
						r += ""
					}
					if (c.isArray(r) && Ba.test(this.type)) {
						this.checked = c.inArray(n.val(), r) >= 0
					} else {
						if (c.nodeName(this, "select")) {
							var u = c.makeArray(r);
							c("option", this).each(function() {
								this.selected = c.inArray(c(this).val(), u) >= 0
							});
							if (!u.length) {
								this.selectedIndex = -1
							}
						} else {
							this.value = r
						}
					}
				}
			})
		}
	});
	c.extend({
		attrFn: {
			val: true,
			css: true,
			html: true,
			text: true,
			data: true,
			width: true,
			height: true,
			offset: true
		},
		attr: function(a, b, d, f) {
			if (!a || a.nodeType === 3 || a.nodeType === 8) {
				return w
			}
			if (f && b in c.attrFn) {
				return c(a)[b](d)
			}
			f = a.nodeType !== 1 || !c.isXMLDoc(a);
			var e = d !== w;
			b = f && c.props[b] || b;
			if (a.nodeType === 1) {
				var j = $a.test(b);
				if (b in a && f && !j) {
					if (e) {
						b === "type" && ab.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
						a[b] = d
					}
					if (c.nodeName(a, "form") && a.getAttributeNode(b)) {
						return a.getAttributeNode(b).nodeValue
					}
					if (b === "tabIndex") {
						return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value: bb.test(a.nodeName) || cb.test(a.nodeName) && a.href ? 0 : w
					}
					return a[b]
				}
				if (!c.support.style && f && b === "style") {
					if (e) {
						a.style.cssText = "" + d
					}
					return a.style.cssText
				}
				e && a.setAttribute(b, "" + d);
				a = !c.support.hrefNormalized && f && j ? a.getAttribute(b, 2) : a.getAttribute(b);
				return a === null ? w: a
			}
			return c.style(a, b, d)
		}
	});
	var O = /\.(.*)$/,
	db = function(a) {
		return a.replace(/[^\w\s\.\|`]/g,
		function(b) {
			return "\\" + b
		})
	};
	c.event = {
		add: function(a, b, d, f) {
			if (! (a.nodeType === 3 || a.nodeType === 8)) {
				if (a.setInterval && a !== A && !a.frameElement) {
					a = A
				}
				var e, j;
				if (d.handler) {
					e = d;
					d = e.handler
				}
				if (!d.guid) {
					d.guid = c.guid++
				}
				if (j = c.data(a)) {
					var i = j.events = j.events || {},
					o = j.handle;
					if (!o) {
						j.handle = o = function() {
							return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(o.elem, arguments) : w
						}
					}
					o.elem = a;
					b = b.split(" ");
					for (var k, n = 0,
					r; k = b[n++];) {
						j = e ? c.extend({},
						e) : {
							handler: d,
							data: f
						};
						if (k.indexOf(".") > -1) {
							r = k.split(".");
							k = r.shift();
							j.namespace = r.slice(0).sort().join(".")
						} else {
							r = [];
							j.namespace = ""
						}
						j.type = k;
						j.guid = d.guid;
						var u = i[k],
						z = c.event.special[k] || {};
						if (!u) {
							u = i[k] = [];
							if (!z.setup || z.setup.call(a, f, r, o) === false) {
								if (a.addEventListener) {
									a.addEventListener(k, o, false)
								} else {
									a.attachEvent && a.attachEvent("on" + k, o)
								}
							}
						}
						if (z.add) {
							z.add.call(a, j);
							if (!j.handler.guid) {
								j.handler.guid = d.guid
							}
						}
						u.push(j);
						c.event.global[k] = true
					}
					a = null
				}
			}
		},
		global: {},
		remove: function(a, b, d, f) {
			if (! (a.nodeType === 3 || a.nodeType === 8)) {
				var e, j = 0,
				i, o, k, n, r, u, z = c.data(a),
				C = z && z.events;
				if (z && C) {
					if (b && b.type) {
						d = b.handler;
						b = b.type
					}
					if (!b || typeof b === "string" && b.charAt(0) === ".") {
						b = b || "";
						for (e in C) {
							c.event.remove(a, e + b)
						}
					} else {
						for (b = b.split(" "); e = b[j++];) {
							n = e;
							i = e.indexOf(".") < 0;
							o = [];
							if (!i) {
								o = e.split(".");
								e = o.shift();
								k = new RegExp("(^|\\.)" + c.map(o.slice(0).sort(), db).join("\\.(?:.*\\.)?") + "(\\.|$)")
							}
							if (r = C[e]) {
								if (d) {
									n = c.event.special[e] || {};
									for (B = f || 0; B < r.length; B++) {
										u = r[B];
										if (d.guid === u.guid) {
											if (i || k.test(u.namespace)) {
												f == null && r.splice(B--, 1);
												n.remove && n.remove.call(a, u)
											}
											if (f != null) {
												break
											}
										}
									}
									if (r.length === 0 || f != null && r.length === 1) {
										if (!n.teardown || n.teardown.call(a, o) === false) {
											Ca(a, e, z.handle)
										}
										delete C[e]
									}
								} else {
									for (var B = 0; B < r.length; B++) {
										u = r[B];
										if (i || k.test(u.namespace)) {
											c.event.remove(a, n, u.handler, B);
											r.splice(B--, 1)
										}
									}
								}
							}
						}
						if (c.isEmptyObject(C)) {
							if (b = z.handle) {
								b.elem = null
							}
							delete z.events;
							delete z.handle;
							c.isEmptyObject(z) && c.removeData(a)
						}
					}
				}
			}
		},
		trigger: function(a, b, d, f) {
			var e = a.type || a;
			if (!f) {
				a = typeof a === "object" ? a[G] ? a: c.extend(c.Event(e), a) : c.Event(e);
				if (e.indexOf("!") >= 0) {
					a.type = e = e.slice(0, -1);
					a.exclusive = true
				}
				if (!d) {
					a.stopPropagation();
					c.event.global[e] && c.each(c.cache,
					function() {
						this.events && this.events[e] && c.event.trigger(a, b, this.handle.elem)
					})
				}
				if (!d || d.nodeType === 3 || d.nodeType === 8) {
					return w
				}
				a.result = w;
				a.target = d;
				b = c.makeArray(b);
				b.unshift(a)
			}
			a.currentTarget = d; (f = c.data(d, "handle")) && f.apply(d, b);
			f = d.parentNode || d.ownerDocument;
			try {
				if (! (d && d.nodeName && c.noData[d.nodeName.toLowerCase()])) {
					if (d["on" + e] && d["on" + e].apply(d, b) === false) {
						a.result = false
					}
				}
			} catch(j) {}
			if (!a.isPropagationStopped() && f) {
				c.event.trigger(a, b, f, true)
			} else {
				if (!a.isDefaultPrevented()) {
					f = a.target;
					var i, o = c.nodeName(f, "a") && e === "click",
					k = c.event.special[e] || {};
					if ((!k._default || k._default.call(d, a) === false) && !o && !(f && f.nodeName && c.noData[f.nodeName.toLowerCase()])) {
						try {
							if (f[e]) {
								if (i = f["on" + e]) {
									f["on" + e] = null
								}
								c.event.triggered = true;
								f[e]()
							}
						} catch(n) {}
						if (i) {
							f["on" + e] = i
						}
						c.event.triggered = false
					}
				}
			}
		},
		handle: function(a) {
			var b, d, f, e;
			a = arguments[0] = c.event.fix(a || A.event);
			a.currentTarget = this;
			b = a.type.indexOf(".") < 0 && !a.exclusive;
			if (!b) {
				d = a.type.split(".");
				a.type = d.shift();
				f = new RegExp("(^|\\.)" + d.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
			}
			e = c.data(this, "events");
			d = e[a.type];
			if (e && d) {
				d = d.slice(0);
				e = 0;
				for (var j = d.length; e < j; e++) {
					var i = d[e];
					if (b || f.test(i.namespace)) {
						a.handler = i.handler;
						a.data = i.data;
						a.handleObj = i;
						i = i.handler.apply(this, arguments);
						if (i !== w) {
							a.result = i;
							if (i === false) {
								a.preventDefault();
								a.stopPropagation()
							}
						}
						if (a.isImmediatePropagationStopped()) {
							break
						}
					}
				}
			}
			return a.result
		},
		props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
		fix: function(a) {
			if (a[G]) {
				return a
			}
			var b = a;
			a = c.Event(b);
			for (var d = this.props.length,
			f; d;) {
				f = this.props[--d];
				a[f] = b[f]
			}
			if (!a.target) {
				a.target = a.srcElement || s
			}
			if (a.target.nodeType === 3) {
				a.target = a.target.parentNode
			}
			if (!a.relatedTarget && a.fromElement) {
				a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement
			}
			if (a.pageX == null && a.clientX != null) {
				b = s.documentElement;
				d = s.body;
				a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0);
				a.pageY = a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0)
			}
			if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode: a.keyCode)) {
				a.which = a.charCode || a.keyCode
			}
			if (!a.metaKey && a.ctrlKey) {
				a.metaKey = a.ctrlKey
			}
			if (!a.which && a.button !== w) {
				a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
			}
			return a
		},
		guid: 100000000,
		proxy: c.proxy,
		special: {
			ready: {
				setup: c.bindReady,
				teardown: c.noop
			},
			live: {
				add: function(a) {
					c.event.add(this, a.origType, c.extend({},
					a, {
						handler: oa
					}))
				},
				remove: function(a) {
					var b = true,
					d = a.origType.replace(O, "");
					c.each(c.data(this, "events").live || [],
					function() {
						if (d === this.origType.replace(O, "")) {
							return b = false
						}
					});
					b && c.event.remove(this, a.origType, oa)
				}
			},
			beforeunload: {
				setup: function(a, b, d) {
					if (this.setInterval) {
						this.onbeforeunload = d
					}
					return false
				},
				teardown: function(a, b) {
					if (this.onbeforeunload === b) {
						this.onbeforeunload = null
					}
				}
			}
		}
	};
	var Ca = s.removeEventListener ?
	function(a, b, d) {
		a.removeEventListener(b, d, false)
	}: function(a, b, d) {
		a.detachEvent("on" + b, d)
	};
	c.Event = function(a) {
		if (!this.preventDefault) {
			return new c.Event(a)
		}
		if (a && a.type) {
			this.originalEvent = a;
			this.type = a.type
		} else {
			this.type = a
		}
		this.timeStamp = J();
		this[G] = true
	};
	c.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = Z;
			var a = this.originalEvent;
			if (a) {
				a.preventDefault && a.preventDefault();
				a.returnValue = false
			}
		},
		stopPropagation: function() {
			this.isPropagationStopped = Z;
			var a = this.originalEvent;
			if (a) {
				a.stopPropagation && a.stopPropagation();
				a.cancelBubble = true
			}
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = Z;
			this.stopPropagation()
		},
		isDefaultPrevented: Y,
		isPropagationStopped: Y,
		isImmediatePropagationStopped: Y
	};
	var Da = function(a) {
		var b = a.relatedTarget;
		try {
			for (; b && b !== this;) {
				b = b.parentNode
			}
			if (b !== this) {
				a.type = a.data;
				c.event.handle.apply(this, arguments)
			}
		} catch(d) {}
	},
	Ea = function(a) {
		a.type = a.data;
		c.event.handle.apply(this, arguments)
	};
	c.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	},
	function(a, b) {
		c.event.special[a] = {
			setup: function(d) {
				c.event.add(this, b, d && d.selector ? Ea: Da, a)
			},
			teardown: function(d) {
				c.event.remove(this, b, d && d.selector ? Ea: Da)
			}
		}
	});
	if (!c.support.submitBubbles) {
		c.event.special.submit = {
			setup: function() {
				if (this.nodeName.toLowerCase() !== "form") {
					c.event.add(this, "click.specialSubmit",
					function(a) {
						var b = a.target,
						d = b.type;
						if ((d === "submit" || d === "image") && c(b).closest("form").length) {
							return na("submit", this, arguments)
						}
					});
					c.event.add(this, "keypress.specialSubmit",
					function(a) {
						var b = a.target,
						d = b.type;
						if ((d === "text" || d === "password") && c(b).closest("form").length && a.keyCode === 13) {
							return na("submit", this, arguments)
						}
					})
				} else {
					return false
				}
			},
			teardown: function() {
				c.event.remove(this, ".specialSubmit")
			}
		}
	}
	if (!c.support.changeBubbles) {
		var da = /textarea|input|select/i,
		ea, Fa = function(a) {
			var b = a.type,
			d = a.value;
			if (b === "radio" || b === "checkbox") {
				d = a.checked
			} else {
				if (b === "select-multiple") {
					d = a.selectedIndex > -1 ? c.map(a.options,
					function(f) {
						return f.selected
					}).join("-") : ""
				} else {
					if (a.nodeName.toLowerCase() === "select") {
						d = a.selectedIndex
					}
				}
			}
			return d
		},
		fa = function(a, b) {
			var d = a.target,
			f, e;
			if (! (!da.test(d.nodeName) || d.readOnly)) {
				f = c.data(d, "_change_data");
				e = Fa(d);
				if (a.type !== "focusout" || d.type !== "radio") {
					c.data(d, "_change_data", e)
				}
				if (! (f === w || e === f)) {
					if (f != null || e) {
						a.type = "change";
						return c.event.trigger(a, b, d)
					}
				}
			}
		};
		c.event.special.change = {
			filters: {
				focusout: fa,
				click: function(a) {
					var b = a.target,
					d = b.type;
					if (d === "radio" || d === "checkbox" || b.nodeName.toLowerCase() === "select") {
						return fa.call(this, a)
					}
				},
				keydown: function(a) {
					var b = a.target,
					d = b.type;
					if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (d === "checkbox" || d === "radio") || d === "select-multiple") {
						return fa.call(this, a)
					}
				},
				beforeactivate: function(a) {
					a = a.target;
					c.data(a, "_change_data", Fa(a))
				}
			},
			setup: function() {
				if (this.type === "file") {
					return false
				}
				for (var a in ea) {
					c.event.add(this, a + ".specialChange", ea[a])
				}
				return da.test(this.nodeName)
			},
			teardown: function() {
				c.event.remove(this, ".specialChange");
				return da.test(this.nodeName)
			}
		};
		ea = c.event.special.change.filters
	}
	s.addEventListener && c.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(a, b) {
		function d(f) {
			f = c.event.fix(f);
			f.type = b;
			return c.event.handle.call(this, f)
		};
		c.event.special[b] = {
			setup: function() {
				this.addEventListener(a, d, true)
			},
			teardown: function() {
				this.removeEventListener(a, d, true)
			}
		}
	});
	c.each(["bind", "one"],
	function(a, b) {
		c.fn[b] = function(d, f, e) {
			if (typeof d === "object") {
				for (var j in d) {
					this[b](j, f, d[j], e)
				}
				return this
			}
			if (c.isFunction(f)) {
				e = f;
				f = w
			}
			var i = b === "one" ? c.proxy(e,
			function(k) {
				c(this).unbind(k, i);
				return e.apply(this, arguments)
			}) : e;
			if (d === "unload" && b !== "one") {
				this.one(d, f, e)
			} else {
				j = 0;
				for (var o = this.length; j < o; j++) {
					c.event.add(this[j], d, i, f)
				}
			}
			return this
		}
	});
	c.fn.extend({
		unbind: function(a, b) {
			if (typeof a === "object" && !a.preventDefault) {
				for (var d in a) {
					this.unbind(d, a[d])
				}
			} else {
				d = 0;
				for (var f = this.length; d < f; d++) {
					c.event.remove(this[d], a, b)
				}
			}
			return this
		},
		delegate: function(a, b, d, f) {
			return this.live(b, d, f, a)
		},
		undelegate: function(a, b, d) {
			return arguments.length === 0 ? this.unbind("live") : this.die(b, null, d, a)
		},
		trigger: function(a, b) {
			return this.each(function() {
				c.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) {
				a = c.Event(a);
				a.preventDefault();
				a.stopPropagation();
				c.event.trigger(a, b, this[0]);
				return a.result
			}
		},
		toggle: function(a) {
			for (var b = arguments,
			d = 1; d < b.length;) {
				c.proxy(a, b[d++])
			}
			return this.click(c.proxy(a,
			function(f) {
				var e = (c.data(this, "lastToggle" + a.guid) || 0) % d;
				c.data(this, "lastToggle" + a.guid, e + 1);
				f.preventDefault();
				return b[e].apply(this, arguments) || false
			}))
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var Ga = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	c.each(["live", "die"],
	function(a, b) {
		c.fn[b] = function(d, f, e, j) {
			var i, o = 0,
			k, n, r = j || this.selector,
			u = j ? this: c(this.context);
			if (c.isFunction(f)) {
				e = f;
				f = w
			}
			for (d = (d || "").split(" "); (i = d[o++]) != null;) {
				j = O.exec(i);
				k = "";
				if (j) {
					k = j[0];
					i = i.replace(O, "")
				}
				if (i === "hover") {
					d.push("mouseenter" + k, "mouseleave" + k)
				} else {
					n = i;
					if (i === "focus" || i === "blur") {
						d.push(Ga[i] + k);
						i += k
					} else {
						i = (Ga[i] || i) + k
					}
					b === "live" ? u.each(function() {
						c.event.add(this, pa(i, r), {
							data: f,
							selector: r,
							handler: e,
							origType: i,
							origHandler: e,
							preType: n
						})
					}) : u.unbind(pa(i, r), e)
				}
			}
			return this
		}
	});
	c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
	function(a, b) {
		c.fn[b] = function(d) {
			return d ? this.bind(b, d) : this.trigger(b)
		};
		if (c.attrFn) {
			c.attrFn[b] = true
		}
	});
	A.attachEvent && !A.addEventListener && A.attachEvent("onunload",
	function() {
		for (var a in c.cache) {
			if (c.cache[a].handle) {
				try {
					c.event.remove(c.cache[a].handle.elem)
				} catch(b) {}
			}
		}
	}); (function() {
		function a(g) {
			for (var h = "",
			l, m = 0; g[m]; m++) {
				l = g[m];
				if (l.nodeType === 3 || l.nodeType === 4) {
					h += l.nodeValue
				} else {
					if (l.nodeType !== 8) {
						h += a(l.childNodes)
					}
				}
			}
			return h
		};
		function b(g, h, l, m, q, p) {
			q = 0;
			for (var v = m.length; q < v; q++) {
				var t = m[q];
				if (t) {
					t = t[g];
					for (var y = false; t;) {
						if (t.sizcache === l) {
							y = m[t.sizset];
							break
						}
						if (t.nodeType === 1 && !p) {
							t.sizcache = l;
							t.sizset = q
						}
						if (t.nodeName.toLowerCase() === h) {
							y = t;
							break
						}
						t = t[g]
					}
					m[q] = y
				}
			}
		};
		function d(g, h, l, m, q, p) {
			q = 0;
			for (var v = m.length; q < v; q++) {
				var t = m[q];
				if (t) {
					t = t[g];
					for (var y = false; t;) {
						if (t.sizcache === l) {
							y = m[t.sizset];
							break
						}
						if (t.nodeType === 1) {
							if (!p) {
								t.sizcache = l;
								t.sizset = q
							}
							if (typeof h !== "string") {
								if (t === h) {
									y = true;
									break
								}
							} else {
								if (k.filter(h, [t]).length > 0) {
									y = t;
									break
								}
							}
						}
						t = t[g]
					}
					m[q] = y
				}
			}
		};
		var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
		e = 0,
		j = Object.prototype.toString,
		i = false,
		o = true; [0, 0].sort(function() {
			o = false;
			return 0
		});
		var k = function(g, h, l, m) {
			l = l || [];
			var q = h = h || s;
			if (h.nodeType !== 1 && h.nodeType !== 9) {
				return []
			}
			if (!g || typeof g !== "string") {
				return l
			}
			for (var p = [], v, t, y, S, H = true, M = x(h), I = g; (f.exec(""), v = f.exec(I)) !== null;) {
				I = v[3];
				p.push(v[1]);
				if (v[2]) {
					S = v[3];
					break
				}
			}
			if (p.length > 1 && r.exec(g)) {
				if (p.length === 2 && n.relative[p[0]]) {
					t = ga(p[0] + p[1], h)
				} else {
					for (t = n.relative[p[0]] ? [h] : k(p.shift(), h); p.length;) {
						g = p.shift();
						if (n.relative[g]) {
							g += p.shift()
						}
						t = ga(g, t)
					}
				}
			} else {
				if (!m && p.length > 1 && h.nodeType === 9 && !M && n.match.ID.test(p[0]) && !n.match.ID.test(p[p.length - 1])) {
					v = k.find(p.shift(), h, M);
					h = v.expr ? k.filter(v.expr, v.set)[0] : v.set[0]
				}
				if (h) {
					v = m ? {
						expr: p.pop(),
						set: z(m)
					}: k.find(p.pop(), p.length === 1 && (p[0] === "~" || p[0] === "+") && h.parentNode ? h.parentNode: h, M);
					t = v.expr ? k.filter(v.expr, v.set) : v.set;
					if (p.length > 0) {
						y = z(t)
					} else {
						H = false
					}
					for (; p.length;) {
						var D = p.pop();
						v = D;
						if (n.relative[D]) {
							v = p.pop()
						} else {
							D = ""
						}
						if (v == null) {
							v = h
						}
						n.relative[D](y, v, M)
					}
				} else {
					y = []
				}
			}
			y || (y = t);
			y || k.error(D || g);
			if (j.call(y) === "[object Array]") {
				if (H) {
					if (h && h.nodeType === 1) {
						for (g = 0; y[g] != null; g++) {
							if (y[g] && (y[g] === true || y[g].nodeType === 1 && E(h, y[g]))) {
								l.push(t[g])
							}
						}
					} else {
						for (g = 0; y[g] != null; g++) {
							y[g] && y[g].nodeType === 1 && l.push(t[g])
						}
					}
				} else {
					l.push.apply(l, y)
				}
			} else {
				z(y, l)
			}
			if (S) {
				k(S, q, l, m);
				k.uniqueSort(l)
			}
			return l
		};
		k.uniqueSort = function(g) {
			if (B) {
				i = o;
				g.sort(B);
				if (i) {
					for (var h = 1; h < g.length; h++) {
						g[h] === g[h - 1] && g.splice(h--, 1)
					}
				}
			}
			return g
		};
		k.matches = function(g, h) {
			return k(g, null, null, h)
		};
		k.find = function(g, h, l) {
			var m, q;
			if (!g) {
				return []
			}
			for (var p = 0,
			v = n.order.length; p < v; p++) {
				var t = n.order[p];
				if (q = n.leftMatch[t].exec(g)) {
					var y = q[1];
					q.splice(1, 1);
					if (y.substr(y.length - 1) !== "\\") {
						q[1] = (q[1] || "").replace(/\\/g, "");
						m = n.find[t](q, h, l);
						if (m != null) {
							g = g.replace(n.match[t], "");
							break
						}
					}
				}
			}
			m || (m = h.getElementsByTagName("*"));
			return {
				set: m,
				expr: g
			}
		};
		k.filter = function(g, h, l, m) {
			for (var q = g,
			p = [], v = h, t, y, S = h && h[0] && x(h[0]); g && h.length;) {
				for (var H in n.filter) {
					if ((t = n.leftMatch[H].exec(g)) != null && t[2]) {
						var M = n.filter[H],
						I,
						D;
						D = t[1];
						y = false;
						t.splice(1, 1);
						if (D.substr(D.length - 1) !== "\\") {
							if (v === p) {
								p = []
							}
							if (n.preFilter[H]) {
								if (t = n.preFilter[H](t, v, l, p, m, S)) {
									if (t === true) {
										continue
									}
								} else {
									y = I = true
								}
							}
							if (t) {
								for (var U = 0; (D = v[U]) != null; U++) {
									if (D) {
										I = M(D, t, U, v);
										var Ha = m ^ !!I;
										if (l && I != null) {
											if (Ha) {
												y = true
											} else {
												v[U] = false
											}
										} else {
											if (Ha) {
												p.push(D);
												y = true
											}
										}
									}
								}
							}
							if (I !== w) {
								l || (v = p);
								g = g.replace(n.match[H], "");
								if (!y) {
									return []
								}
								break
							}
						}
					}
				}
				if (g === q) {
					if (y == null) {
						k.error(g)
					} else {
						break
					}
				}
				q = g
			}
			return v
		};
		k.error = function(g) {
			throw "Syntax error, unrecognized expression: " + g
		};
		var n = k.selectors = {
			order: ["ID", "NAME", "TAG"],
			match: {
				ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
				CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
				NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
				ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
				TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
				CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
				POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
				PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch: {},
			attrMap: {
				"class": "className",
				"for": "htmlFor"
			},
			attrHandle: {
				href: function(g) {
					return g.getAttribute("href")
				}
			},
			relative: {
				"+": function(g, h) {
					var l = typeof h === "string",
					m = l && !/\W/.test(h);
					l = l && !m;
					if (m) {
						h = h.toLowerCase()
					}
					m = 0;
					for (var q = g.length,
					p; m < q; m++) {
						if (p = g[m]) {
							for (; (p = p.previousSibling) && p.nodeType !== 1;) {}
							g[m] = l || p && p.nodeName.toLowerCase() === h ? p || false: p === h
						}
					}
					l && k.filter(h, g, true)
				},
				">": function(g, h) {
					var l = typeof h === "string";
					if (l && !/\W/.test(h)) {
						h = h.toLowerCase();
						for (var m = 0,
						q = g.length; m < q; m++) {
							var p = g[m];
							if (p) {
								l = p.parentNode;
								g[m] = l.nodeName.toLowerCase() === h ? l: false
							}
						}
					} else {
						m = 0;
						for (q = g.length; m < q; m++) {
							if (p = g[m]) {
								g[m] = l ? p.parentNode: p.parentNode === h
							}
						}
						l && k.filter(h, g, true)
					}
				},
				"": function(g, h, l) {
					var m = e++,
					q = d;
					if (typeof h === "string" && !/\W/.test(h)) {
						var p = h = h.toLowerCase();
						q = b
					}
					q("parentNode", h, m, g, p, l)
				},
				"~": function(g, h, l) {
					var m = e++,
					q = d;
					if (typeof h === "string" && !/\W/.test(h)) {
						var p = h = h.toLowerCase();
						q = b
					}
					q("previousSibling", h, m, g, p, l)
				}
			},
			find: {
				ID: function(g, h, l) {
					if (typeof h.getElementById !== "undefined" && !l) {
						return (g = h.getElementById(g[1])) ? [g] : []
					}
				},
				NAME: function(g, h) {
					if (typeof h.getElementsByName !== "undefined") {
						var l = [];
						h = h.getElementsByName(g[1]);
						for (var m = 0,
						q = h.length; m < q; m++) {
							h[m].getAttribute("name") === g[1] && l.push(h[m])
						}
						return l.length === 0 ? null: l
					}
				},
				TAG: function(g, h) {
					return h.getElementsByTagName(g[1])
				}
			},
			preFilter: {
				CLASS: function(g, h, l, m, q, p) {
					g = " " + g[1].replace(/\\/g, "") + " ";
					if (p) {
						return g
					}
					p = 0;
					for (var v; (v = h[p]) != null; p++) {
						if (v) {
							if (q ^ (v.className && (" " + v.className + " ").replace(/[\t\n]/g, " ").indexOf(g) >= 0)) {
								l || m.push(v)
							} else {
								if (l) {
									h[p] = false
								}
							}
						}
					}
					return false
				},
				ID: function(g) {
					return g[1].replace(/\\/g, "")
				},
				TAG: function(g) {
					return g[1].toLowerCase()
				},
				CHILD: function(g) {
					if (g[1] === "nth") {
						var h = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2] === "even" && "2n" || g[2] === "odd" && "2n+1" || !/\D/.test(g[2]) && "0n+" + g[2] || g[2]);
						g[2] = h[1] + (h[2] || 1) - 0;
						g[3] = h[3] - 0
					}
					g[0] = e++;
					return g
				},
				ATTR: function(g, h, l, m, q, p) {
					h = g[1].replace(/\\/g, "");
					if (!p && n.attrMap[h]) {
						g[1] = n.attrMap[h]
					}
					if (g[2] === "~=") {
						g[4] = " " + g[4] + " "
					}
					return g
				},
				PSEUDO: function(g, h, l, m, q) {
					if (g[1] === "not") {
						if ((f.exec(g[3]) || "").length > 1 || /^\w/.test(g[3])) {
							g[3] = k(g[3], null, null, h)
						} else {
							g = k.filter(g[3], h, l, true ^ q);
							l || m.push.apply(m, g);
							return false
						}
					} else {
						if (n.match.POS.test(g[0]) || n.match.CHILD.test(g[0])) {
							return true
						}
					}
					return g
				},
				POS: function(g) {
					g.unshift(true);
					return g
				}
			},
			filters: {
				enabled: function(g) {
					return g.disabled === false && g.type !== "hidden"
				},
				disabled: function(g) {
					return g.disabled === true
				},
				checked: function(g) {
					return g.checked === true
				},
				selected: function(g) {
					return g.selected === true
				},
				parent: function(g) {
					return !! g.firstChild
				},
				empty: function(g) {
					return ! g.firstChild
				},
				has: function(g, h, l) {
					return !! k(l[3], g).length
				},
				header: function(g) {
					return /h\d/i.test(g.nodeName)
				},
				text: function(g) {
					return "text" === g.type
				},
				radio: function(g) {
					return "radio" === g.type
				},
				checkbox: function(g) {
					return "checkbox" === g.type
				},
				file: function(g) {
					return "file" === g.type
				},
				password: function(g) {
					return "password" === g.type
				},
				submit: function(g) {
					return "submit" === g.type
				},
				image: function(g) {
					return "image" === g.type
				},
				reset: function(g) {
					return "reset" === g.type
				},
				button: function(g) {
					return "button" === g.type || g.nodeName.toLowerCase() === "button"
				},
				input: function(g) {
					return /input|select|textarea|button/i.test(g.nodeName)
				}
			},
			setFilters: {
				first: function(g, h) {
					return h === 0
				},
				last: function(g, h, l, m) {
					return h === m.length - 1
				},
				even: function(g, h) {
					return h % 2 === 0
				},
				odd: function(g, h) {
					return h % 2 === 1
				},
				lt: function(g, h, l) {
					return h < l[3] - 0
				},
				gt: function(g, h, l) {
					return h > l[3] - 0
				},
				nth: function(g, h, l) {
					return l[3] - 0 === h
				},
				eq: function(g, h, l) {
					return l[3] - 0 === h
				}
			},
			filter: {
				PSEUDO: function(g, h, l, m) {
					var q = h[1],
					p = n.filters[q];
					if (p) {
						return p(g, l, h, m)
					} else {
						if (q === "contains") {
							return (g.textContent || g.innerText || a([g]) || "").indexOf(h[3]) >= 0
						} else {
							if (q === "not") {
								h = h[3];
								l = 0;
								for (m = h.length; l < m; l++) {
									if (h[l] === g) {
										return false
									}
								}
								return true
							} else {
								k.error("Syntax error, unrecognized expression: " + q)
							}
						}
					}
				},
				CHILD: function(g, h) {
					var l = h[1],
					m = g;
					switch (l) {
					case "only":
					case "first":
						for (; m = m.previousSibling;) {
							if (m.nodeType === 1) {
								return false
							}
						}
						if (l === "first") {
							return true
						}
						m = g;
					case "last":
						for (; m = m.nextSibling;) {
							if (m.nodeType === 1) {
								return false
							}
						}
						return true;
					case "nth":
						l = h[2];
						var q = h[3];
						if (l === 1 && q === 0) {
							return true
						}
						h = h[0];
						var p = g.parentNode;
						if (p && (p.sizcache !== h || !g.nodeIndex)) {
							var v = 0;
							for (m = p.firstChild; m; m = m.nextSibling) {
								if (m.nodeType === 1) {
									m.nodeIndex = ++v
								}
							}
							p.sizcache = h
						}
						g = g.nodeIndex - q;
						return l === 0 ? g === 0 : g % l === 0 && g / l >= 0
					}
				},
				ID: function(g, h) {
					return g.nodeType === 1 && g.getAttribute("id") === h
				},
				TAG: function(g, h) {
					return h === "*" && g.nodeType === 1 || g.nodeName.toLowerCase() === h
				},
				CLASS: function(g, h) {
					return (" " + (g.className || g.getAttribute("class")) + " ").indexOf(h) > -1
				},
				ATTR: function(g, h) {
					var l = h[1];
					g = n.attrHandle[l] ? n.attrHandle[l](g) : g[l] != null ? g[l] : g.getAttribute(l);
					l = g + "";
					var m = h[2];
					h = h[4];
					return g == null ? m === "!=": m === "=" ? l === h: m === "*=" ? l.indexOf(h) >= 0 : m === "~=" ? (" " + l + " ").indexOf(h) >= 0 : !h ? l && g !== false: m === "!=" ? l !== h: m === "^=" ? l.indexOf(h) === 0 : m === "$=" ? l.substr(l.length - h.length) === h: m === "|=" ? l === h || l.substr(0, h.length + 1) === h + "-": false
				},
				POS: function(g, h, l, m) {
					var q = n.setFilters[h[2]];
					if (q) {
						return q(g, l, h, m)
					}
				}
			}
		},
		r = n.match.POS;
		for (var u in n.match) {
			n.match[u] = new RegExp(n.match[u].source + /(?![^\[]*\])(?![^\(]*\))/.source);
			n.leftMatch[u] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[u].source.replace(/\\(\d+)/g,
			function(g, h) {
				return "\\" + (h - 0 + 1)
			}))
		}
		var z = function(g, h) {
			g = Array.prototype.slice.call(g, 0);
			if (h) {
				h.push.apply(h, g);
				return h
			}
			return g
		};
		try {
			Array.prototype.slice.call(s.documentElement.childNodes, 0)
		} catch(C) {
			z = function(g, h) {
				h = h || [];
				if (j.call(g) === "[object Array]") {
					Array.prototype.push.apply(h, g)
				} else {
					if (typeof g.length === "number") {
						for (var l = 0,
						m = g.length; l < m; l++) {
							h.push(g[l])
						}
					} else {
						for (l = 0; g[l]; l++) {
							h.push(g[l])
						}
					}
				}
				return h
			}
		}
		var B;
		if (s.documentElement.compareDocumentPosition) {
			B = function(g, h) {
				if (!g.compareDocumentPosition || !h.compareDocumentPosition) {
					if (g == h) {
						i = true
					}
					return g.compareDocumentPosition ? -1 : 1
				}
				g = g.compareDocumentPosition(h) & 4 ? -1 : g === h ? 0 : 1;
				if (g === 0) {
					i = true
				}
				return g
			}
		} else {
			if ("sourceIndex" in s.documentElement) {
				B = function(g, h) {
					if (!g.sourceIndex || !h.sourceIndex) {
						if (g == h) {
							i = true
						}
						return g.sourceIndex ? -1 : 1
					}
					g = g.sourceIndex - h.sourceIndex;
					if (g === 0) {
						i = true
					}
					return g
				}
			} else {
				if (s.createRange) {
					B = function(g, h) {
						if (!g.ownerDocument || !h.ownerDocument) {
							if (g == h) {
								i = true
							}
							return g.ownerDocument ? -1 : 1
						}
						var l = g.ownerDocument.createRange(),
						m = h.ownerDocument.createRange();
						l.setStart(g, 0);
						l.setEnd(g, 0);
						m.setStart(h, 0);
						m.setEnd(h, 0);
						g = l.compareBoundaryPoints(Range.START_TO_END, m);
						if (g === 0) {
							i = true
						}
						return g
					}
				}
			}
		} (function() {
			var g = s.createElement("div"),
			h = "script" + (new Date).getTime();
			g.innerHTML = "<a name='" + h + "'/>";
			var l = s.documentElement;
			l.insertBefore(g, l.firstChild);
			if (s.getElementById(h)) {
				n.find.ID = function(m, q, p) {
					if (typeof q.getElementById !== "undefined" && !p) {
						return (q = q.getElementById(m[1])) ? q.id === m[1] || typeof q.getAttributeNode !== "undefined" && q.getAttributeNode("id").nodeValue === m[1] ? [q] : w: []
					}
				};
				n.filter.ID = function(m, q) {
					var p = typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id");
					return m.nodeType === 1 && p && p.nodeValue === q
				}
			}
			l.removeChild(g);
			l = g = null
		})(); (function() {
			var g = s.createElement("div");
			g.appendChild(s.createComment(""));
			if (g.getElementsByTagName("*").length > 0) {
				n.find.TAG = function(h, l) {
					l = l.getElementsByTagName(h[1]);
					if (h[1] === "*") {
						h = [];
						for (var m = 0; l[m]; m++) {
							l[m].nodeType === 1 && h.push(l[m])
						}
						l = h
					}
					return l
				}
			}
			g.innerHTML = "<a href='#'></a>";
			if (g.firstChild && typeof g.firstChild.getAttribute !== "undefined" && g.firstChild.getAttribute("href") !== "#") {
				n.attrHandle.href = function(h) {
					return h.getAttribute("href", 2)
				}
			}
			g = null
		})();
		s.querySelectorAll &&
		function() {
			var g = k,
			h = s.createElement("div");
			h.innerHTML = "<p class='TEST'></p>";
			if (! (h.querySelectorAll && h.querySelectorAll(".TEST").length === 0)) {
				k = function(m, q, p, v) {
					q = q || s;
					if (!v && q.nodeType === 9 && !x(q)) {
						try {
							return z(q.querySelectorAll(m), p)
						} catch(t) {}
					}
					return g(m, q, p, v)
				};
				for (var l in g) {
					k[l] = g[l]
				}
				h = null
			}
		} (); (function() {
			var g = s.createElement("div");
			g.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (! (!g.getElementsByClassName || g.getElementsByClassName("e").length === 0)) {
				g.lastChild.className = "e";
				if (g.getElementsByClassName("e").length !== 1) {
					n.order.splice(1, 0, "CLASS");
					n.find.CLASS = function(h, l, m) {
						if (typeof l.getElementsByClassName !== "undefined" && !m) {
							return l.getElementsByClassName(h[1])
						}
					};
					g = null
				}
			}
		})();
		var E = s.compareDocumentPosition ?
		function(g, h) {
			return !! (g.compareDocumentPosition(h) & 16)
		}: function(g, h) {
			return g !== h && (g.contains ? g.contains(h) : true)
		},
		x = function(g) {
			return (g = (g ? g.ownerDocument || g: 0).documentElement) ? g.nodeName !== "HTML": false
		},
		ga = function(g, h) {
			var l = [],
			m = "",
			q;
			for (h = h.nodeType ? [h] : h; q = n.match.PSEUDO.exec(g);) {
				m += q[0];
				g = g.replace(n.match.PSEUDO, "")
			}
			g = n.relative[g] ? g + "*": g;
			q = 0;
			for (var p = h.length; q < p; q++) {
				k(g, h[q], l)
			}
			return k.filter(m, l)
		};
		c.find = k;
		c.expr = k.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = k.uniqueSort;
		c.text = a;
		c.isXMLDoc = x;
		c.contains = E
	})();
	var eb = /Until$/,
	fb = /^(?:parents|prevUntil|prevAll)/,
	gb = /,/;
	R = Array.prototype.slice;
	var Ia = function(a, b, d) {
		if (c.isFunction(b)) {
			return c.grep(a,
			function(e, j) {
				return !! b.call(e, j, e) === d
			})
		} else {
			if (b.nodeType) {
				return c.grep(a,
				function(e) {
					return e === b === d
				})
			} else {
				if (typeof b === "string") {
					var f = c.grep(a,
					function(e) {
						return e.nodeType === 1
					});
					if (Ua.test(b)) {
						return c.filter(b, f, !d)
					} else {
						b = c.filter(b, f)
					}
				}
			}
		}
		return c.grep(a,
		function(e) {
			return c.inArray(e, b) >= 0 === d
		})
	};
	c.fn.extend({
		find: function(a) {
			for (var b = this.pushStack("", "find", a), d = 0, f = 0, e = this.length; f < e; f++) {
				d = b.length;
				c.find(a, this[f], b);
				if (f > 0) {
					for (var j = d; j < b.length; j++) {
						for (var i = 0; i < d; i++) {
							if (b[i] === b[j]) {
								b.splice(j--, 1);
								break
							}
						}
					}
				}
			}
			return b
		},
		has: function(a) {
			var b = c(a);
			return this.filter(function() {
				for (var d = 0,
				f = b.length; d < f; d++) {
					if (c.contains(this, b[d])) {
						return true
					}
				}
			})
		},
		not: function(a) {
			return this.pushStack(Ia(this, a, false), "not", a)
		},
		filter: function(a) {
			return this.pushStack(Ia(this, a, true), "filter", a)
		},
		is: function(a) {
			return !! a && c.filter(a, this).length > 0
		},
		closest: function(a, b) {
			if (c.isArray(a)) {
				var d = [],
				f = this[0],
				e,
				j = {},
				i;
				if (f && a.length) {
					e = 0;
					for (var o = a.length; e < o; e++) {
						i = a[e];
						j[i] || (j[i] = c.expr.match.POS.test(i) ? c(i, b || this.context) : i)
					}
					for (; f && f.ownerDocument && f !== b;) {
						for (i in j) {
							e = j[i];
							if (e.jquery ? e.index(f) > -1 : c(f).is(e)) {
								d.push({
									selector: i,
									elem: f
								});
								delete j[i]
							}
						}
						f = f.parentNode
					}
				}
				return d
			}
			var k = c.expr.match.POS.test(a) ? c(a, b || this.context) : null;
			return this.map(function(n, r) {
				for (; r && r.ownerDocument && r !== b;) {
					if (k ? k.index(r) > -1 : c(r).is(a)) {
						return r
					}
					r = r.parentNode
				}
				return null
			})
		},
		index: function(a) {
			if (!a || typeof a === "string") {
				return c.inArray(this[0], a ? c(a) : this.parent().children())
			}
			return c.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			a = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a);
			b = c.merge(this.get(), a);
			return this.pushStack(qa(a[0]) || qa(b[0]) ? b: c.unique(b))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	});
	c.each({
		parent: function(a) {
			return (a = a.parentNode) && a.nodeType !== 11 ? a: null
		},
		parents: function(a) {
			return c.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, d) {
			return c.dir(a, "parentNode", d)
		},
		next: function(a) {
			return c.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return c.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return c.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return c.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, d) {
			return c.dir(a, "nextSibling", d)
		},
		prevUntil: function(a, b, d) {
			return c.dir(a, "previousSibling", d)
		},
		siblings: function(a) {
			return c.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return c.sibling(a.firstChild)
		},
		contents: function(a) {
			return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: c.makeArray(a.childNodes)
		}
	},
	function(a, b) {
		c.fn[a] = function(d, f) {
			var e = c.map(this, b, d);
			eb.test(a) || (f = d);
			if (f && typeof f === "string") {
				e = c.filter(f, e)
			}
			e = this.length > 1 ? c.unique(e) : e;
			if ((this.length > 1 || gb.test(f)) && fb.test(a)) {
				e = e.reverse()
			}
			return this.pushStack(e, a, R.call(arguments).join(","))
		}
	});
	c.extend({
		filter: function(a, b, d) {
			if (d) {
				a = ":not(" + a + ")"
			}
			return c.find.matches(a, b)
		},
		dir: function(a, b, d) {
			var f = [];
			for (a = a[b]; a && a.nodeType !== 9 && (d === w || a.nodeType !== 1 || !c(a).is(d));) {
				a.nodeType === 1 && f.push(a);
				a = a[b]
			}
			return f
		},
		nth: function(a, b, d) {
			b = b || 1;
			for (var f = 0; a; a = a[d]) {
				if (a.nodeType === 1 && ++f === b) {
					break
				}
			}
			return a
		},
		sibling: function(a, b) {
			for (var d = []; a; a = a.nextSibling) {
				a.nodeType === 1 && a !== b && d.push(a)
			}
			return d
		}
	});
	var Ja = / jQuery\d+="(?:\d+|null)"/g,
	V = /^\s+/,
	Ka = /(<([\w:]+)[^>]*?)\/>/g,
	hb = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
	La = /<([\w:]+)/,
	ib = /<tbody/i,
	jb = /<|&#?\w+;/,
	ta = /<script|<object|<embed|<option|<style/i,
	ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
	Ma = function(a, b, d) {
		return hb.test(d) ? a: b + "></" + d + ">"
	},
	F = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area: [1, "<map>", "</map>"],
		_default: [0, "", ""]
	};
	F.optgroup = F.option;
	F.tbody = F.tfoot = F.colgroup = F.caption = F.thead;
	F.th = F.td;
	if (!c.support.htmlSerialize) {
		F._default = [1, "div<div>", "</div>"]
	}
	c.fn.extend({
		text: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(b) {
					var d = c(this);
					d.text(a.call(this, b, d.text()))
				})
			}
			if (typeof a !== "object" && a !== w) {
				return this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(a))
			}
			return c.text(this)
		},
		wrapAll: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(d) {
					c(this).wrapAll(a.call(this, d))
				})
			}
			if (this[0]) {
				var b = c(a, this[0].ownerDocument).eq(0).clone(true);
				this[0].parentNode && b.insertBefore(this[0]);
				b.map(function() {
					for (var d = this; d.firstChild && d.firstChild.nodeType === 1;) {
						d = d.firstChild
					}
					return d
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if (c.isFunction(a)) {
				return this.each(function(b) {
					c(this).wrapInner(a.call(this, b))
				})
			}
			return this.each(function() {
				var b = c(this),
				d = b.contents();
				d.length ? d.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			return this.each(function() {
				c(this).wrapAll(a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, true,
			function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, true,
			function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) {
				return this.domManip(arguments, false,
				function(b) {
					this.parentNode.insertBefore(b, this)
				})
			} else {
				if (arguments.length) {
					var a = c(arguments[0]);
					a.push.apply(a, this.toArray());
					return this.pushStack(a, "before", arguments)
				}
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) {
				return this.domManip(arguments, false,
				function(b) {
					this.parentNode.insertBefore(b, this.nextSibling)
				})
			} else {
				if (arguments.length) {
					var a = this.pushStack(this, "after", arguments);
					a.push.apply(a, c(arguments[0]).toArray());
					return a
				}
			}
		},
		remove: function(a, b) {
			for (var d = 0,
			f; (f = this[d]) != null; d++) {
				if (!a || c.filter(a, [f]).length) {
					if (!b && f.nodeType === 1) {
						c.cleanData(f.getElementsByTagName("*"));
						c.cleanData([f])
					}
					f.parentNode && f.parentNode.removeChild(f)
				}
			}
			return this
		},
		empty: function() {
			for (var a = 0,
			b; (b = this[a]) != null; a++) {
				for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) {
					b.removeChild(b.firstChild)
				}
			}
			return this
		},
		clone: function(a) {
			var b = this.map(function() {
				if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
					var d = this.outerHTML,
					f = this.ownerDocument;
					if (!d) {
						d = f.createElement("div");
						d.appendChild(this.cloneNode(true));
						d = d.innerHTML
					}
					return c.clean([d.replace(Ja, "").replace(/=([^="'>\s]+\/)>/g, "=\"$1\">").replace(V, "")], f)[0]
				} else {
					return this.cloneNode(true)
				}
			});
			if (a === true) {
				ra(this, b);
				ra(this.find("*"), b.find("*"))
			}
			return b
		},
		html: function(a) {
			if (a === w) {
				return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Ja, "") : null
			} else {
				if (typeof a === "string" && !ta.test(a) && (c.support.leadingWhitespace || !V.test(a)) && !F[(La.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Ka, Ma);
					try {
						for (var b = 0,
						d = this.length; b < d; b++) {
							if (this[b].nodeType === 1) {
								c.cleanData(this[b].getElementsByTagName("*"));
								this[b].innerHTML = a
							}
						}
					} catch(f) {
						this.empty().append(a)
					}
				} else {
					c.isFunction(a) ? this.each(function(e) {
						var j = c(this),
						i = j.html();
						j.empty().append(function() {
							return a.call(this, e, i)
						})
					}) : this.empty().append(a)
				}
			}
			return this
		},
		replaceWith: function(a) {
			if (this[0] && this[0].parentNode) {
				if (c.isFunction(a)) {
					return this.each(function(b) {
						var d = c(this),
						f = d.html();
						d.replaceWith(a.call(this, b, f))
					})
				}
				if (typeof a !== "string") {
					a = c(a).detach()
				}
				return this.each(function() {
					var b = this.nextSibling,
					d = this.parentNode;
					c(this).remove();
					b ? c(b).before(a) : c(d).append(a)
				})
			} else {
				return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
			}
		},
		detach: function(a) {
			return this.remove(a, true)
		},
		domManip: function(a, b, d) {
			function f(u) {
				return c.nodeName(u, "table") ? u.getElementsByTagName("tbody")[0] || u.appendChild(u.ownerDocument.createElement("tbody")) : u
			};
			var e, j, i = a[0],
			o = [],
			k;
			if (!c.support.checkClone && arguments.length === 3 && typeof i === "string" && ua.test(i)) {
				return this.each(function() {
					c(this).domManip(a, b, d, true)
				})
			}
			if (c.isFunction(i)) {
				return this.each(function(u) {
					var z = c(this);
					a[0] = i.call(this, u, b ? z.html() : w);
					z.domManip(a, b, d)
				})
			}
			if (this[0]) {
				e = i && i.parentNode;
				e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {
					fragment: e
				}: sa(a, this, o);
				k = e.fragment;
				if (j = k.childNodes.length === 1 ? (k = k.firstChild) : k.firstChild) {
					b = b && c.nodeName(j, "tr");
					for (var n = 0,
					r = this.length; n < r; n++) {
						d.call(b ? f(this[n], j) : this[n], n > 0 || e.cacheable || this.length > 1 ? k.cloneNode(true) : k)
					}
				}
				o.length && c.each(o, Qa)
			}
			return this
		}
	});
	c.fragments = {};
	c.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(a, b) {
		c.fn[a] = function(d) {
			var f = [];
			d = c(d);
			var e = this.length === 1 && this[0].parentNode;
			if (e && e.nodeType === 11 && e.childNodes.length === 1 && d.length === 1) {
				d[b](this[0]);
				return this
			} else {
				e = 0;
				for (var j = d.length; e < j; e++) {
					var i = (e > 0 ? this.clone(true) : this).get();
					c.fn[b].apply(c(d[e]), i);
					f = f.concat(i)
				}
				return this.pushStack(f, a, d.selector)
			}
		}
	});
	c.extend({
		clean: function(a, b, d, f) {
			b = b || s;
			if (typeof b.createElement === "undefined") {
				b = b.ownerDocument || b[0] && b[0].ownerDocument || s
			}
			for (var e = [], j = 0, i; (i = a[j]) != null; j++) {
				if (typeof i === "number") {
					i += ""
				}
				if (i) {
					if (typeof i === "string" && !jb.test(i)) {
						i = b.createTextNode(i)
					} else {
						if (typeof i === "string") {
							i = i.replace(Ka, Ma);
							var o = (La.exec(i) || ["", ""])[1].toLowerCase(),
							k = F[o] || F._default,
							n = k[0],
							r = b.createElement("div");
							for (r.innerHTML = k[1] + i + k[2]; n--;) {
								r = r.lastChild
							}
							if (!c.support.tbody) {
								n = ib.test(i);
								o = o === "table" && !n ? r.firstChild && r.firstChild.childNodes: k[1] === "<table>" && !n ? r.childNodes: [];
								for (k = o.length - 1; k >= 0; --k) {
									c.nodeName(o[k], "tbody") && !o[k].childNodes.length && o[k].parentNode.removeChild(o[k])
								}
							} ! c.support.leadingWhitespace && V.test(i) && r.insertBefore(b.createTextNode(V.exec(i)[0]), r.firstChild);
							i = r.childNodes
						}
					}
					if (i.nodeType) {
						e.push(i)
					} else {
						e = c.merge(e, i)
					}
				}
			}
			if (d) {
				for (j = 0; e[j]; j++) {
					if (f && c.nodeName(e[j], "script") && (!e[j].type || e[j].type.toLowerCase() === "text/javascript")) {
						f.push(e[j].parentNode ? e[j].parentNode.removeChild(e[j]) : e[j])
					} else {
						e[j].nodeType === 1 && e.splice.apply(e, [j + 1, 0].concat(c.makeArray(e[j].getElementsByTagName("script"))));
						d.appendChild(e[j])
					}
				}
			}
			return e
		},
		cleanData: function(a) {
			for (var b, d, f = c.cache,
			e = c.event.special,
			j = c.support.deleteExpando,
			i = 0,
			o; (o = a[i]) != null; i++) {
				if (d = o[c.expando]) {
					b = f[d];
					if (b.events) {
						for (var k in b.events) {
							e[k] ? c.event.remove(o, k) : Ca(o, k, b.handle)
						}
					}
					if (j) {
						delete o[c.expando]
					} else {
						o.removeAttribute && o.removeAttribute(c.expando)
					}
					delete f[d]
				}
			}
		}
	});
	var kb = /z-?index|font-?weight|opacity|zoom|line-?height/i,
	Na = /alpha\([^)]*\)/,
	Oa = /opacity=([^)]*)/,
	ha = /float/i,
	ia = /-([a-z])/ig,
	lb = /([A-Z])/g,
	mb = /^-?\d+(?:px)?$/i,
	nb = /^-?\d/,
	ob = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	pb = ["Left", "Right"],
	qb = ["Top", "Bottom"],
	rb = s.defaultView && s.defaultView.getComputedStyle,
	Pa = c.support.cssFloat ? "cssFloat": "styleFloat",
	ja = function(a, b) {
		return b.toUpperCase()
	};
	c.fn.css = function(a, b) {
		return X(this, a, b, true,
		function(d, f, e) {
			if (e === w) {
				return c.curCSS(d, f)
			}
			if (typeof e === "number" && !kb.test(f)) {
				e += "px"
			}
			c.style(d, f, e)
		})
	};
	c.extend({
		style: function(a, b, d) {
			if (!a || a.nodeType === 3 || a.nodeType === 8) {
				return w
			}
			if ((b === "width" || b === "height") && parseFloat(d) < 0) {
				d = w
			}
			var f = a.style || a,
			e = d !== w;
			if (!c.support.opacity && b === "opacity") {
				if (e) {
					f.zoom = 1;
					b = parseInt(d, 10) + "" === "NaN" ? "": "alpha(opacity=" + d * 100 + ")";
					a = f.filter || c.curCSS(a, "filter") || "";
					f.filter = Na.test(a) ? a.replace(Na, b) : b
				}
				return f.filter && f.filter.indexOf("opacity=") >= 0 ? parseFloat(Oa.exec(f.filter)[1]) / 100 + "": ""
			}
			if (ha.test(b)) {
				b = Pa
			}
			b = b.replace(ia, ja);
			if (e) {
				f[b] = d
			}
			return f[b]
		},
		css: function(a, b, d, f) {
			if (b === "width" || b === "height") {
				var e, j = b === "width" ? pb: qb;
				function i() {
					e = b === "width" ? a.offsetWidth: a.offsetHeight;
					f !== "border" && c.each(j,
					function() {
						f || (e -= parseFloat(c.curCSS(a, "padding" + this, true)) || 0);
						if (f === "margin") {
							e += parseFloat(c.curCSS(a, "margin" + this, true)) || 0
						} else {
							e -= parseFloat(c.curCSS(a, "border" + this + "Width", true)) || 0
						}
					})
				};
				a.offsetWidth !== 0 ? i() : c.swap(a, ob, i);
				return Math.max(0, Math.round(e))
			}
			return c.curCSS(a, b, d)
		},
		curCSS: function(a, b, d) {
			var f, e = a.style;
			if (!c.support.opacity && b === "opacity" && a.currentStyle) {
				f = Oa.test(a.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "": "";
				return f === "" ? "1": f
			}
			if (ha.test(b)) {
				b = Pa
			}
			if (!d && e && e[b]) {
				f = e[b]
			} else {
				if (rb) {
					if (ha.test(b)) {
						b = "float"
					}
					b = b.replace(lb, "-$1").toLowerCase();
					e = a.ownerDocument.defaultView;
					if (!e) {
						return null
					}
					if (a = e.getComputedStyle(a, null)) {
						f = a.getPropertyValue(b)
					}
					if (b === "opacity" && f === "") {
						f = "1"
					}
				} else {
					if (a.currentStyle) {
						d = b.replace(ia, ja);
						f = a.currentStyle[b] || a.currentStyle[d];
						if (!mb.test(f) && nb.test(f)) {
							b = e.left;
							var j = a.runtimeStyle.left;
							a.runtimeStyle.left = a.currentStyle.left;
							e.left = d === "fontSize" ? "1em": f || 0;
							f = e.pixelLeft + "px";
							e.left = b;
							a.runtimeStyle.left = j
						}
					}
				}
			}
			return f
		},
		swap: function(a, b, d) {
			var f = {};
			for (var e in b) {
				f[e] = a.style[e];
				a.style[e] = b[e]
			}
			d.call(a);
			for (e in b) {
				a.style[e] = f[e]
			}
		}
	});
	if (c.expr && c.expr.filters) {
		c.expr.filters.hidden = function(a) {
			var b = a.offsetWidth,
			d = a.offsetHeight,
			f = a.nodeName.toLowerCase() === "tr";
			return b === 0 && d === 0 && !f ? true: b > 0 && d > 0 && !f ? false: c.curCSS(a, "display") === "none"
		};
		c.expr.filters.visible = function(a) {
			return ! c.expr.filters.hidden(a)
		}
	}
	var sb = J(),
	tb = /<script(.|\s)*?\/script>/gi,
	ub = /select|textarea/i,
	vb = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
	N = /=\?(&|$)/,
	ka = /\?/,
	wb = /(\?|&)_=.*?(&|$)/,
	xb = /^(\w+:)?\/\/([^\/?#]+)/,
	yb = /%20/g,
	zb = c.fn.load;
	c.fn.extend({
		load: function(a, b, d) {
			if (typeof a !== "string") {
				return zb.call(this, a)
			} else {
				if (!this.length) {
					return this
				}
			}
			var f = a.indexOf(" ");
			if (f >= 0) {
				var e = a.slice(f, a.length);
				a = a.slice(0, f)
			}
			f = "GET";
			if (b) {
				if (c.isFunction(b)) {
					d = b;
					b = null
				} else {
					if (typeof b === "object") {
						b = c.param(b, c.ajaxSettings.traditional);
						f = "POST"
					}
				}
			}
			var j = this;
			c.ajax({
				url: a,
				type: f,
				dataType: "html",
				data: b,
				complete: function(i, o) {
					if (o === "success" || o === "notmodified") {
						j.html(e ? c("<div />").append(i.responseText.replace(tb, "")).find(e) : i.responseText)
					}
					d && j.each(d, [i.responseText, o, i])
				}
			});
			return this
		},
		serialize: function() {
			return c.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || ub.test(this.nodeName) || vb.test(this.type))
			}).map(function(a, b) {
				a = c(this).val();
				return a == null ? null: c.isArray(a) ? c.map(a,
				function(d) {
					return {
						name: b.name,
						value: d
					}
				}) : {
					name: b.name,
					value: a
				}
			}).get()
		}
	});
	c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
	function(a, b) {
		c.fn[b] = function(d) {
			return this.bind(b, d)
		}
	});
	c.extend({
		get: function(a, b, d, f) {
			if (c.isFunction(b)) {
				f = f || d;
				d = b;
				b = null
			}
			return c.ajax({
				type: "GET",
				url: a,
				data: b,
				success: d,
				dataType: f
			})
		},
		getScript: function(a, b) {
			return c.get(a, null, b, "script")
		},
		getJSON: function(a, b, d) {
			return c.get(a, b, d, "json")
		},
		post: function(a, b, d, f) {
			if (c.isFunction(b)) {
				f = f || d;
				d = b;
				b = {}
			}
			return c.ajax({
				type: "POST",
				url: a,
				data: b,
				success: d,
				dataType: f
			})
		},
		ajaxSetup: function(a) {
			c.extend(c.ajaxSettings, a)
		},
		ajaxSettings: {
			url: location.href,
			global: true,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: true,
			async: true,
			xhr: A.XMLHttpRequest && (A.location.protocol !== "file:" || !A.ActiveXObject) ?
			function() {
				return new A.XMLHttpRequest
			}: function() {
				try {
					return new A.ActiveXObject("Microsoft.XMLHTTP")
				} catch(a) {}
			},
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				script: "text/javascript, application/javascript",
				json: "application/json, text/javascript",
				text: "text/plain",
				_default: "*/*"
			}
		},
		lastModified: {},
		etag: {},
		ajax: function(a) {
			function b() {
				e.success && e.success.call(k, o, i, x);
				e.global && f("ajaxSuccess", [x, e])
			};
			function d() {
				e.complete && e.complete.call(k, x, i);
				e.global && f("ajaxComplete", [x, e]);
				e.global && !--c.active && c.event.trigger("ajaxStop")
			};
			function f(q, p) { (e.context ? c(e.context) : c.event).trigger(q, p)
			};
			var e = c.extend(true, {},
			c.ajaxSettings, a),
			j,
			i,
			o,
			k = a && a.context || e,
			n = e.type.toUpperCase();
			if (e.data && e.processData && typeof e.data !== "string") {
				e.data = c.param(e.data, e.traditional)
			}
			if (e.dataType === "jsonp") {
				if (n === "GET") {
					N.test(e.url) || (e.url += (ka.test(e.url) ? "&": "?") + (e.jsonp || "callback") + "=?")
				} else {
					if (!e.data || !N.test(e.data)) {
						e.data = (e.data ? e.data + "&": "") + (e.jsonp || "callback") + "=?"
					}
				}
				e.dataType = "json"
			}
			if (e.dataType === "json" && (e.data && N.test(e.data) || N.test(e.url))) {
				j = e.jsonpCallback || "jsonp" + sb++;
				if (e.data) {
					e.data = (e.data + "").replace(N, "=" + j + "$1")
				}
				e.url = e.url.replace(N, "=" + j + "$1");
				e.dataType = "script";
				A[j] = A[j] ||
				function(q) {
					o = q;
					b();
					d();
					A[j] = w;
					try {
						delete A[j]
					} catch(p) {}
					z && z.removeChild(C)
				}
			}
			if (e.dataType === "script" && e.cache === null) {
				e.cache = false
			}
			if (e.cache === false && n === "GET") {
				var r = J(),
				u = e.url.replace(wb, "$1_=" + r + "$2");
				e.url = u + (u === e.url ? (ka.test(e.url) ? "&": "?") + "_=" + r: "")
			}
			if (e.data && n === "GET") {
				e.url += (ka.test(e.url) ? "&": "?") + e.data
			}
			e.global && !c.active++&&c.event.trigger("ajaxStart");
			r = (r = xb.exec(e.url)) && (r[1] && r[1] !== location.protocol || r[2] !== location.host);
			if (e.dataType === "script" && n === "GET" && r) {
				var z = s.getElementsByTagName("head")[0] || s.documentElement,
				C = s.createElement("script");
				C.src = e.url;
				if (e.scriptCharset) {
					C.charset = e.scriptCharset
				}
				if (!j) {
					var B = false;
					C.onload = C.onreadystatechange = function() {
						if (!B && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
							B = true;
							b();
							d();
							C.onload = C.onreadystatechange = null;
							z && C.parentNode && z.removeChild(C)
						}
					}
				}
				z.insertBefore(C, z.firstChild);
				return w
			}
			var E = false,
			x = e.xhr();
			if (x) {
				e.username ? x.open(n, e.url, e.async, e.username, e.password) : x.open(n, e.url, e.async);
				try {
					if (e.data || a && a.contentType) {
						x.setRequestHeader("Content-Type", e.contentType)
					}
					if (e.ifModified) {
						c.lastModified[e.url] && x.setRequestHeader("If-Modified-Since", c.lastModified[e.url]);
						c.etag[e.url] && x.setRequestHeader("If-None-Match", c.etag[e.url])
					}
					r || x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					x.setRequestHeader("Accept", e.dataType && e.accepts[e.dataType] ? e.accepts[e.dataType] + ", */*": e.accepts._default)
				} catch(ga) {}
				if (e.beforeSend && e.beforeSend.call(k, x, e) === false) {
					e.global && !--c.active && c.event.trigger("ajaxStop");
					x.abort();
					return false
				}
				e.global && f("ajaxSend", [x, e]);
				var g = x.onreadystatechange = function(q) {
					if (!x || x.readyState === 0 || q === "abort") {
						E || d();
						E = true;
						if (x) {
							x.onreadystatechange = c.noop
						}
					} else {
						if (!E && x && (x.readyState === 4 || q === "timeout")) {
							E = true;
							x.onreadystatechange = c.noop;
							i = q === "timeout" ? "timeout": !c.httpSuccess(x) ? "error": e.ifModified && c.httpNotModified(x, e.url) ? "notmodified": "success";
							var p;
							if (i === "success") {
								try {
									o = c.httpData(x, e.dataType, e)
								} catch(v) {
									i = "parsererror";
									p = v
								}
							}
							if (i === "success" || i === "notmodified") {
								j || b()
							} else {
								c.handleError(e, x, i, p)
							}
							d();
							q === "timeout" && x.abort();
							if (e.async) {
								x = null
							}
						}
					}
				};
				try {
					var h = x.abort;
					x.abort = function() {
						x && h.call(x);
						g("abort")
					}
				} catch(l) {}
				e.async && e.timeout > 0 && setTimeout(function() {
					x && !E && g("timeout")
				},
				e.timeout);
				try {
					x.send(n === "POST" || n === "PUT" || n === "DELETE" ? e.data: null)
				} catch(m) {
					c.handleError(e, x, null, m);
					d()
				}
				e.async || g();
				return x
			}
		},
		handleError: function(a, b, d, f) {
			if (a.error) {
				a.error.call(a.context || a, b, d, f)
			}
			if (a.global) { (a.context ? c(a.context) : c.event).trigger("ajaxError", [b, a, f])
			}
		},
		active: 0,
		httpSuccess: function(a) {
			try {
				return ! a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223 || a.status === 0
			} catch(b) {}
			return false
		},
		httpNotModified: function(a, b) {
			var d = a.getResponseHeader("Last-Modified"),
			f = a.getResponseHeader("Etag");
			if (d) {
				c.lastModified[b] = d
			}
			if (f) {
				c.etag[b] = f
			}
			return a.status === 304 || a.status === 0
		},
		httpData: function(a, b, d) {
			var f = a.getResponseHeader("content-type") || "",
			e = b === "xml" || !b && f.indexOf("xml") >= 0;
			a = e ? a.responseXML: a.responseText;
			e && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
			if (d && d.dataFilter) {
				a = d.dataFilter(a, b)
			}
			if (typeof a === "string") {
				if (b === "json" || !b && f.indexOf("json") >= 0) {
					a = c.parseJSON(a)
				} else {
					if (b === "script" || !b && f.indexOf("javascript") >= 0) {
						c.globalEval(a)
					}
				}
			}
			return a
		},
		param: function(a, b) {
			function d(i, o) {
				if (c.isArray(o)) {
					c.each(o,
					function(k, n) {
						b || /\[\]$/.test(i) ? f(i, n) : d(i + "[" + (typeof n === "object" || c.isArray(n) ? k: "") + "]", n)
					})
				} else { ! b && o != null && typeof o === "object" ? c.each(o,
					function(k, n) {
						d(i + "[" + k + "]", n)
					}) : f(i, o)
				}
			};
			function f(i, o) {
				o = c.isFunction(o) ? o() : o;
				e[e.length] = encodeURIComponent(i) + "=" + encodeURIComponent(o)
			};
			var e = [];
			if (b === w) {
				b = c.ajaxSettings.traditional
			}
			if (c.isArray(a) || a.jquery) {
				c.each(a,
				function() {
					f(this.name, this.value)
				})
			} else {
				for (var j in a) {
					d(j, a[j])
				}
			}
			return e.join("&").replace(yb, "+")
		}
	});
	var la = {},
	Ab = /toggle|show|hide/,
	Bb = /^([+-]=)?([\d+-.]+)(.*)$/,
	W, va = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
	c.fn.extend({
		show: function(a, b) {
			if (a || a === 0) {
				return this.animate(K("show", 3), a, b)
			} else {
				a = 0;
				for (b = this.length; a < b; a++) {
					var d = c.data(this[a], "olddisplay");
					this[a].style.display = d || "";
					if (c.css(this[a], "display") === "none") {
						d = this[a].nodeName;
						var f;
						if (la[d]) {
							f = la[d]
						} else {
							var e = c("<" + d + " />").appendTo("body");
							f = e.css("display");
							if (f === "none") {
								f = "block"
							}
							e.remove();
							la[d] = f
						}
						c.data(this[a], "olddisplay", f)
					}
				}
				a = 0;
				for (b = this.length; a < b; a++) {
					this[a].style.display = c.data(this[a], "olddisplay") || ""
				}
				return this
			}
		},
		hide: function(a, b) {
			if (a || a === 0) {
				return this.animate(K("hide", 3), a, b)
			} else {
				a = 0;
				for (b = this.length; a < b; a++) {
					var d = c.data(this[a], "olddisplay"); ! d && d !== "none" && c.data(this[a], "olddisplay", c.css(this[a], "display"))
				}
				a = 0;
				for (b = this.length; a < b; a++) {
					this[a].style.display = "none"
				}
				return this
			}
		},
		_toggle: c.fn.toggle,
		toggle: function(a, b) {
			var d = typeof a === "boolean";
			if (c.isFunction(a) && c.isFunction(b)) {
				this._toggle.apply(this, arguments)
			} else {
				a == null || d ? this.each(function() {
					var f = d ? a: c(this).is(":hidden");
					c(this)[f ? "show": "hide"]()
				}) : this.animate(K("toggle", 3), a, b)
			}
			return this
		},
		fadeTo: function(a, b, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			},
			a, d)
		},
		animate: function(a, b, d, f) {
			var e = c.speed(b, d, f);
			if (c.isEmptyObject(a)) {
				return this.each(e.complete)
			}
			return this[e.queue === false ? "each": "queue"](function() {
				var j = c.extend({},
				e),
				i,
				o = this.nodeType === 1 && c(this).is(":hidden"),
				k = this;
				for (i in a) {
					var n = i.replace(ia, ja);
					if (i !== n) {
						a[n] = a[i];
						delete a[i];
						i = n
					}
					if (a[i] === "hide" && o || a[i] === "show" && !o) {
						return j.complete.call(this)
					}
					if ((i === "height" || i === "width") && this.style) {
						j.display = c.css(this, "display");
						j.overflow = this.style.overflow
					}
					if (c.isArray(a[i])) { (j.specialEasing = j.specialEasing || {})[i] = a[i][1];
						a[i] = a[i][0]
					}
				}
				if (j.overflow != null) {
					this.style.overflow = "hidden"
				}
				j.curAnim = c.extend({},
				a);
				c.each(a,
				function(r, u) {
					var z = new c.fx(k, j, r);
					if (Ab.test(u)) {
						z[u === "toggle" ? o ? "show": "hide": u](a)
					} else {
						var C = Bb.exec(u),
						B = z.cur(true) || 0;
						if (C) {
							u = parseFloat(C[2]);
							var E = C[3] || "px";
							if (E !== "px") {
								k.style[r] = (u || 1) + E;
								B = (u || 1) / z.cur(true) * B;
								k.style[r] = B + E
							}
							if (C[1]) {
								u = (C[1] === "-=" ? -1 : 1) * u + B
							}
							z.custom(B, u, E)
						} else {
							z.custom(B, u, "")
						}
					}
				});
				return true
			})
		},
		stop: function(a, b) {
			var d = c.timers;
			a && this.queue([]);
			this.each(function() {
				for (var f = d.length - 1; f >= 0; f--) {
					if (d[f].elem === this) {
						b && d[f](true);
						d.splice(f, 1)
					}
				}
			});
			b || this.dequeue();
			return this
		}
	});
	c.each({
		slideDown: K("show", 1),
		slideUp: K("hide", 1),
		slideToggle: K("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		}
	},
	function(a, b) {
		c.fn[a] = function(d, f) {
			return this.animate(b, d, f)
		}
	});
	c.extend({
		speed: function(a, b, d) {
			var f = a && typeof a === "object" ? a: {
				complete: d || !d && b || c.isFunction(a) && a,
				duration: a,
				easing: d && b || b && !c.isFunction(b) && b
			};
			f.duration = c.fx.off ? 0 : typeof f.duration === "number" ? f.duration: c.fx.speeds[f.duration] || c.fx.speeds._default;
			f.old = f.complete;
			f.complete = function() {
				f.queue !== false && c(this).dequeue();
				c.isFunction(f.old) && f.old.call(this)
			};
			return f
		},
		easing: {
			linear: function(a, b, d, f) {
				return d + f * a
			},
			swing: function(a, b, d, f) {
				return ( - Math.cos(a * Math.PI) / 2 + 0.5) * f + d
			}
		},
		timers: [],
		fx: function(a, b, d) {
			this.options = b;
			this.elem = a;
			this.prop = d;
			if (!b.orig) {
				b.orig = {}
			}
		}
	});
	c.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this); (c.fx.step[this.prop] || c.fx.step._default)(this);
			if ((this.prop === "height" || this.prop === "width") && this.elem.style) {
				this.elem.style.display = "block"
			}
		},
		cur: function(a) {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
				return this.elem[this.prop]
			}
			return (a = parseFloat(c.css(this.elem, this.prop, a))) && a > -10000 ? a: parseFloat(c.curCSS(this.elem, this.prop)) || 0
		},
		custom: function(a, b, d) {
			function f(j) {
				return e.step(j)
			};
			this.startTime = J();
			this.start = a;
			this.end = b;
			this.unit = d || this.unit || "px";
			this.now = this.start;
			this.pos = this.state = 0;
			var e = this;
			f.elem = this.elem;
			if (f() && c.timers.push(f) && !W) {
				W = setInterval(c.fx.tick, 13)
			}
		},
		show: function() {
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.show = true;
			this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.hide = true;
			this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b = J(),
			d = true;
			if (a || b >= this.options.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				this.options.curAnim[this.prop] = true;
				for (var f in this.options.curAnim) {
					if (this.options.curAnim[f] !== true) {
						d = false
					}
				}
				if (d) {
					if (this.options.display != null) {
						this.elem.style.overflow = this.options.overflow;
						a = c.data(this.elem, "olddisplay");
						this.elem.style.display = a ? a: this.options.display;
						if (c.css(this.elem, "display") === "none") {
							this.elem.style.display = "block"
						}
					}
					this.options.hide && c(this.elem).hide();
					if (this.options.hide || this.options.show) {
						for (var e in this.options.curAnim) {
							c.style(this.elem, e, this.options.orig[e])
						}
					}
					this.options.complete.call(this.elem)
				}
				return false
			} else {
				e = b - this.startTime;
				this.state = e / this.options.duration;
				a = this.options.easing || (c.easing.swing ? "swing": "linear");
				this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || a](this.state, e, 0, 1, this.options.duration);
				this.now = this.start + (this.end - this.start) * this.pos;
				this.update()
			}
			return true
		}
	};
	c.extend(c.fx, {
		tick: function() {
			for (var a = c.timers,
			b = 0; b < a.length; b++) {
				a[b]() || a.splice(b--, 1)
			}
			a.length || c.fx.stop()
		},
		stop: function() {
			clearInterval(W);
			W = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				c.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				if (a.elem.style && a.elem.style[a.prop] != null) {
					a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit
				} else {
					a.elem[a.prop] = a.now
				}
			}
		}
	});
	if (c.expr && c.expr.filters) {
		c.expr.filters.animated = function(a) {
			return c.grep(c.timers,
			function(b) {
				return a === b.elem
			}).length
		}
	}
	c.fn.offset = "getBoundingClientRect" in s.documentElement ?
	function(a) {
		var b = this[0];
		if (a) {
			return this.each(function(e) {
				c.offset.setOffset(this, a, e)
			})
		}
		if (!b || !b.ownerDocument) {
			return null
		}
		if (b === b.ownerDocument.body) {
			return c.offset.bodyOffset(b)
		}
		var d = b.getBoundingClientRect(),
		f = b.ownerDocument;
		b = f.body;
		f = f.documentElement;
		return {
			top: d.top + (self.pageYOffset || c.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
			left: d.left + (self.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
		}
	}: function(a) {
		var b = this[0];
		if (a) {
			return this.each(function(r) {
				c.offset.setOffset(this, a, r)
			})
		}
		if (!b || !b.ownerDocument) {
			return null
		}
		if (b === b.ownerDocument.body) {
			return c.offset.bodyOffset(b)
		}
		c.offset.initialize();
		var d = b.offsetParent,
		f = b,
		e = b.ownerDocument,
		j, i = e.documentElement,
		o = e.body;
		f = (e = e.defaultView) ? e.getComputedStyle(b, null) : b.currentStyle;
		for (var k = b.offsetTop,
		n = b.offsetLeft; (b = b.parentNode) && b !== o && b !== i;) {
			if (c.offset.supportsFixedPosition && f.position === "fixed") {
				break
			}
			j = e ? e.getComputedStyle(b, null) : b.currentStyle;
			k -= b.scrollTop;
			n -= b.scrollLeft;
			if (b === d) {
				k += b.offsetTop;
				n += b.offsetLeft;
				if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(b.nodeName))) {
					k += parseFloat(j.borderTopWidth) || 0;
					n += parseFloat(j.borderLeftWidth) || 0
				}
				f = d;
				d = b.offsetParent
			}
			if (c.offset.subtractsBorderForOverflowNotVisible && j.overflow !== "visible") {
				k += parseFloat(j.borderTopWidth) || 0;
				n += parseFloat(j.borderLeftWidth) || 0
			}
			f = j
		}
		if (f.position === "relative" || f.position === "static") {
			k += o.offsetTop;
			n += o.offsetLeft
		}
		if (c.offset.supportsFixedPosition && f.position === "fixed") {
			k += Math.max(i.scrollTop, o.scrollTop);
			n += Math.max(i.scrollLeft, o.scrollLeft)
		}
		return {
			top: k,
			left: n
		}
	};
	c.offset = {
		initialize: function() {
			var a = s.body,
			b = s.createElement("div"),
			d,
			f,
			e,
			j = parseFloat(c.curCSS(a, "marginTop", true)) || 0;
			c.extend(b.style, {
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			});
			b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			a.insertBefore(b, a.firstChild);
			d = b.firstChild;
			f = d.firstChild;
			e = d.nextSibling.firstChild.firstChild;
			this.doesNotAddBorder = f.offsetTop !== 5;
			this.doesAddBorderForTableAndCells = e.offsetTop === 5;
			f.style.position = "fixed";
			f.style.top = "20px";
			this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15;
			f.style.position = f.style.top = "";
			d.style.overflow = "hidden";
			d.style.position = "relative";
			this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
			this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== j;
			a.removeChild(b);
			c.offset.initialize = c.noop
		},
		bodyOffset: function(a) {
			var b = a.offsetTop,
			d = a.offsetLeft;
			c.offset.initialize();
			if (c.offset.doesNotIncludeMarginInBodyOffset) {
				b += parseFloat(c.curCSS(a, "marginTop", true)) || 0;
				d += parseFloat(c.curCSS(a, "marginLeft", true)) || 0
			}
			return {
				top: b,
				left: d
			}
		},
		setOffset: function(a, b, d) {
			if (/static/.test(c.curCSS(a, "position"))) {
				a.style.position = "relative"
			}
			var f = c(a),
			e = f.offset(),
			j = parseInt(c.curCSS(a, "top", true), 10) || 0,
			i = parseInt(c.curCSS(a, "left", true), 10) || 0;
			if (c.isFunction(b)) {
				b = b.call(a, d, e)
			}
			d = {
				top: b.top - e.top + j,
				left: b.left - e.left + i
			};
			"using" in b ? b.using.call(a, d) : f.css(d)
		}
	};
	c.fn.extend({
		position: function() {
			if (!this[0]) {
				return null
			}
			var a = this[0],
			b = this.offsetParent(),
			d = this.offset(),
			f = /^body|html$/i.test(b[0].nodeName) ? {
				top: 0,
				left: 0
			}: b.offset();
			d.top -= parseFloat(c.curCSS(a, "marginTop", true)) || 0;
			d.left -= parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
			f.top += parseFloat(c.curCSS(b[0], "borderTopWidth", true)) || 0;
			f.left += parseFloat(c.curCSS(b[0], "borderLeftWidth", true)) || 0;
			return {
				top: d.top - f.top,
				left: d.left - f.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || s.body; a && !/^body|html$/i.test(a.nodeName) && c.css(a, "position") === "static";) {
					a = a.offsetParent
				}
				return a
			})
		}
	});
	c.each(["Left", "Top"],
	function(a, b) {
		var d = "scroll" + b;
		c.fn[d] = function(f) {
			var e = this[0],
			j;
			if (!e) {
				return null
			}
			if (f !== w) {
				return this.each(function() {
					if (j = wa(this)) {
						j.scrollTo(!a ? f: c(j).scrollLeft(), a ? f: c(j).scrollTop())
					} else {
						this[d] = f
					}
				})
			} else {
				return (j = wa(e)) ? "pageXOffset" in j ? j[a ? "pageYOffset": "pageXOffset"] : c.support.boxModel && j.document.documentElement[d] || j.document.body[d] : e[d]
			}
		}
	});
	c.each(["Height", "Width"],
	function(a, b) {
		var d = b.toLowerCase();
		c.fn["inner" + b] = function() {
			return this[0] ? c.css(this[0], d, false, "padding") : null
		};
		c.fn["outer" + b] = function(f) {
			return this[0] ? c.css(this[0], d, false, f ? "margin": "border") : null
		};
		c.fn[d] = function(f) {
			var e = this[0];
			if (!e) {
				return f == null ? null: this
			}
			if (c.isFunction(f)) {
				return this.each(function(j) {
					var i = c(this);
					i[d](f.call(this, j, i[d]()))
				})
			}
			return "scrollTo" in e && e.document ? e.document.compatMode === "CSS1Compat" && e.document.documentElement["client" + b] || e.document.body["client" + b] : e.nodeType === 9 ? Math.max(e.documentElement["client" + b], e.body["scroll" + b], e.documentElement["scroll" + b], e.body["offset" + b], e.documentElement["offset" + b]) : f === w ? c.css(e, d) : this.css(d, typeof f === "string" ? f: f + "px")
		}
	});
	A.jQuery = A.$ = c
})(window); 

(function(c) {
	var a = ["DOMMouseScroll", "mousewheel"];
	c.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) {
				for (var d = a.length; d;) {
					this.addEventListener(a[--d], b, false)
				}
			} else {
				this.onmousewheel = b
			}
		},
		teardown: function() {
			if (this.removeEventListener) {
				for (var d = a.length; d;) {
					this.removeEventListener(a[--d], b, false)
				}
			} else {
				this.onmousewheel = null
			}
		}
	};
	c.fn.extend({
		mousewheel: function(d) {
			return d ? this.bind("mousewheel", d) : this.trigger("mousewheel")
		},
		unmousewheel: function(d) {
			return this.unbind("mousewheel", d)
		}
	});
	function b(i) {
		var g = i || window.event,
		f = [].slice.call(arguments, 1),
		j = 0,
		h = true,
		e = 0,
		d = 0;
		i = c.event.fix(g);
		i.type = "mousewheel";
		if (i.wheelDelta) {
			j = i.wheelDelta / 120
		}
		if (i.detail) {
			j = -i.detail / 3
		}
		d = j;
		if (g.axis !== undefined && g.axis === g.HORIZONTAL_AXIS) {
			d = 0;
			e = -1 * j
		}
		if (g.wheelDeltaY !== undefined) {
			d = g.wheelDeltaY / 120
		}
		if (g.wheelDeltaX !== undefined) {
			e = -1 * g.wheelDeltaX / 120
		}
		f.unshift(i, j, e, d);
		return c.event.handle.apply(this, f)
	}
})(jQuery);

function Sound() {
	var _1 = 0;
	var _2 = 0;
	var _3 = new Object();
	var _4 = false;
	this.loadSound = function(_5, _6) {
		_3[_5] = $("<audio><source src=\"" + _6 + ".ogg\" type=\"audio/ogg\"><source src=\"" + _6 + ".wav\" type=\"audio/wave\"></audio>")[0]
	};
	this.play = function(_7) {
		try {
			var _8 = _3[_7];
			if (__18("sound") != "on") {
				return
			}
			if (!$.browser.opera) {
				_8.pause();
				_8.currentTime = 0;
				_8.play()
			}
		} catch(e) {}
	}
};
function __0(pA, pB) {
	var h = pB.x - pA.x;
	var v = pB.y - pA.y;
	return v / h
};
function __1(pA, pB) {
	var h = pB.x - pA.x;
	var v = pB.y - pA.y;
	return h / v
};
function __2(v) {
	return Math.atan2(v.y, v.x) + Math.PI / 2
};
function __3(v) {
	return {
		x: v.x,
		y: v.y
	}
};
function __4(pA, pB) {
	return {
		x: pB.x - pA.x,
		y: pB.y - pA.y
	}
};
function __5(v) {
	var _9 = __10(v);
	return _9 == 0 ? {
		x: 0,
		y: 0
	}: __9(v, _9)
};
function __6(v1, v2) {
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y
	}
};
function __7(v1, v2) {
	return {
		x: v1.x - v2.x,
		y: v1.y - v2.y
	}
};
function __8(v, _a) {
	return {
		x: v.x * _a,
		y: v.y * _a
	}
};
function __9(v, _b) {
	return {
		x: v.x / _b,
		y: v.y / _b
	}
};
function __10(_c) {
	return Math.sqrt(_c.x * _c.x + _c.y * _c.y)
};
function __11(pA, pB) {
	var _d = __4(pA, pB);
	return Math.sqrt(_d.x * _d.x + _d.y * _d.y)
};
function __12(_e, p) {
	var _f = __4(_e.a, _e.b);
	var _10 = __4(_e.a, p);
	var _11 = __14(_10, _f) / __10(_f);
	var rP = undefined;
	if (_11 < 0) {
		rP = _e.a
	} else {
		if (_11 > __10(_f)) {
			rP = _e.b
		} else {
			var _12 = __5(_f);
			rP = __6(_e.a, __8(_12, _11))
		}
	}
	return {
		dist: __11(rP, p),
		normal: __5(__4(p, rP))
	}
};
function __13(_13) {
	var _14 = 0,
	_15 = 0,
	_16 = 0,
	_17 = 0;
	if (_13.a.x < _13.b.x) {
		_14 = _13.a.x;
		_15 = _13.b.x
	} else {
		_14 = _13.b.x;
		_15 = _13.a.x
	}
	if (_13.a.y < _13.b.y) {
		_16 = _13.a.y;
		_17 = _13.b.y
	} else {
		_16 = _13.b.y;
		_17 = _13.a.y
	}
	_13.min = {
		x: _14,
		y: _16
	};
	_13.max = {
		x: _15,
		y: _17
	};
	return _13
};
function __14(vA, vB) {
	return vA.x * vB.x + vA.y * vB.y
};
function __15(vA, vB) {
	return vA.x * vB.y - vA.y * vB.x
};
function __16(pos, r, _18) {
	var v = __4(_18.b, _18.a);
	var _19 = __5(v);
	var _1a = {
		x: -_19.y,
		y: _19.x
	};
	var d = __14(_1a, __4(pos, _18.b));
	var p = null;
	if (Math.abs(d) < 2 * r) {
		var pA = __6(pos, __8(_1a, d));
		var _1b = Math.sqrt(4 * r * r - d * d);
		p = __7(pA, __8(_19, -_1b));
		var _1c = __11(p, _18.a);
		if (_1c > __10(v) || _1c < 0) {
			p = null
		}
	}
	return p == null ? null: {
		pos: p,
		normal: __5(__4(p, pos))
	}
};
function __17(vec, _1d) {
	var len = __10(vec);
	var a = __5(vec);
	var b = {
		x: Math.cos(_1d) * len,
		y: Math.sin(_1d) * len
	};
	return __8({
		x: a.x * b.x - a.y * b.y,
		y: a.y * b.x + a.x * b.y
	},
	len)
};
function Progress(_1e, fn) {
	var _1f = fn();
	$("#loading-screen div.progress-bar").css("width", _1f * 80 + "%");
	if (_1f < 1) {
		setTimeout(function() {
			Progress(_1e, fn)
		},
		_1e)
	}
};
function colorToStr(_20) {
	return "rgba(" + _20.r * 255 + ", " + _20.g * 255 + ", " + _20.b * 255 + ", " + _20.a + ")"
};

/**
 * 渲染部分
 */
Renderer = function() {
	var _21 = 0,
	_22 = 0;
	var ctx = document.getElementById("screen").getContext("2d");
	var _23 = {
		x: $("canvas").attr("width"),
		y: $("canvas").attr("height")
	};
	var _24 = document.getElementById("screen");
	var _25 = {
		a: {
			x: 0,
			y: 0
		},
		b: _23
	};
	this.WIREFRAME = 0;
	this.TEXTURED = 1;
	this.mode = this.TEXTURED;
	var _26 = new Object;
	var _27 = new Object;
	var _28 = $.browser.opera === true;
	this.clip = function(_29, end) {
		_25 = {
			a: _29,
			b: end
		};
		ctx.beginPath();
		ctx.moveTo(_29.x, _29.y);
		ctx.lineTo(end.x, _29.y);
		ctx.lineTo(end.x, end.y);
		ctx.lineTo(_29.x, end.y);
		ctx.lineTo(_29.x, _29.y);
		ctx.closePath();
		ctx.clip()
	};
	this.clear = function(_2a) {
		if (_2a != undefined) {
			ctx.fillStyle = _2a;
			ctx.fillRect(0, 0, _23.x, _23.y)
		} else {
			if (!_28) {
				ctx.clearRect(_25.a.x, _25.a.y, _25.b.x - _25.a.x, _25.b.y - _25.a.y)
			} else {
				_24.width = _24.width
			}
		}
	};
	this.loadTexture = function(_2b, _2c) {
		if (_26[_2b] != undefined) {
			return _26[_2b]
		}
		var img = document.createElement("img");
		img.setAttribute("src", _2c);
		img.setAttribute("alt", _2b);
		_21++;
		$(img).load(function() {
			_22++
		});
		_26[_2b] = img;
		return img
	};
	this.getImageLoadProgress = function() {
		return _22 / _21
	};
	this.ready = function() {
		return this.getImageLoadProgress() == 1
	};
	this.getSize = function() {
		return __3(_23)
	};
	this.getContext = function() {
		return ctx
	};
	this.getTexture = function(_2d) {
		return _26[_2d]
	};
	this.loadFont = function(_2e, _2f, _30, _31, _32) {
		_27[_2e] = _31 + " " + _32 + " " + _30 + "px " + _2f
	};
	this.triangle = function(pA, pB, pC, _33, _34) {
		ctx.strokeStyle = "white";
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(pA.x, pA.y);
		ctx.lineTo(pB.x, pB.y);
		ctx.lineTo(pC.x, pC.y);
		ctx.closePath();
		ctx.clip();
		aPA = pA;
		if (_34) {
			aPB = pC;
			aPC = pB
		} else {
			aPB = pB;
			aPC = pC
		}
		if (this.mode != this.WIREFRAME) {
			var tex = _26[_33];
			var sw = aPC.x - aPA.x;
			var sh = aPB.y - aPA.y;
			var _35 = (aPB.x - aPA.x) / tex.width;
			var _36 = (aPC.y - aPA.y) / tex.height;
			var _37 = __0(aPA, aPB);
			var _38 = __1(aPA, aPC);
			ctx.transform(_35, isFinite(_37) ? _37 * _35: sh / tex.width, isFinite(_38) ? _38 * _36: sw / tex.height, _36, aPA.x, aPA.y);
			if (_34) {
				ctx.scale( - 1, -1);
				ctx.translate( - tex.width, -tex.height)
			}
			ctx.drawImage(tex, 0, 0)
		}
		ctx.restore();
		if (this.mode == this.WIREFRAME) {
			ctx.stroke()
		}
	};
	this.setAlpha = function(_39) {
		ctx.globalAlpha = _39
	};
	this.sprite = function(pos, _3a, _3b, _3c) {
		ctx.drawImage(_26[_3c], _3b.x, _3b.y, _3a.x, _3a.y, pos.x, pos.y, _3a.x, _3a.y)
	};
	this.line = function(_3d, end, _3e) {
		ctx.strokeStyle = _3e;
		ctx.beginPath();
		ctx.moveTo(_3d.x, _3d.y);
		ctx.lineTo(end.x, end.y);
		ctx.closePath();
		ctx.stroke()
	};
	this.rect = function(_3f, end, _40) {
		ctx.fillStyle = _40;
		ctx.fillRect(_3f.x, _3f.y, end.x, end.y)
	};
	this.frame = function(_41, end, _42) {
		ctx.strokeStyle = _42;
		ctx.strokeRect(_41.x, _41.y, end.x, end.y)
	};
	this.circle = function(_43, _44, _45) {
		ctx.strokeStyle = _45;
		ctx.beginPath();
		ctx.arc(_43.x, _43.y, _44, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.stroke()
	};
	this.renderData = function(pos, _46, _47, _48) {
		ctx.putImageData(_48, 0, 0)
	};
	this.pushMatrix = function() {
		ctx.save()
	};
	this.popMatrix = function() {
		ctx.restore()
	};
	this.translate = function(_49) {
		ctx.translate(_49.x, _49.y)
	};
	this.rotate = function(_4a) {
		ctx.rotate(_4a)
	};
	this.scale = function(_4b) {
		ctx.scale(_4b.x, _4b.y)
	};
	this.textOut = function(_4c, pos, _4d, _4e) {
		ctx.font = _27[_4d];
		ctx.fillStyle = _4e;
		ctx.fillText(_4c, pos.x, pos.y)
	}
};

/**
 * 时间计时器部分
 */
Timer = function(_4f, _50, _51) {
	this.overrun = 2;
	this.ticks = 0;
	var _52 = 1;
	var _53 = _4f;
	var _54 = _50 == undefined ? 1000 / _53: _50;
	var _55 = 0,
	_56 = 0;
	var _57 = new Date().getTime();
	var _58 = _57;
	var _59 = false;
	var _5a = 0;
	var _5b = 0;
	if (_51 == undefined) {
		_51 = 2
	}
	this.run = function() {
		_57 = _58;
		_58 = new Date().getTime();
		_5a = 1000 / (_58 - _57);
		_52 += _53 / _5a;
		var _5c = Math.floor(_52);
		var fr = Math.min(this.overrun, _5c);
		for (; fr--;) {
			this.ticks++;
			this.process()
		}
		var _5d = new Date().getTime();
		this.render();
		_5b = new Date().getTime() - _5d;
		_52 -= _5c;
		_55 = (_56 * _55 + _5a) / (++_56);
		var _5e = this;
		var _5f = new Date().getTime() - _57;
		setTimeout(function() {
			_5e.run()
		},
		Math.max(_51, _54 - _5f))
	};
	this.getFrameRate = function() {
		return _5a
	};
	this.getFrameRenderTime = function() {
		return _5b
	};
	this.getAverageFrameRate = function() {
		return _55
	};
	this.start = function(_60, _61) {
		this.process = _60;
		this.render = _61;
		this.ticks = 0;
		this.resume()
	};
	this.stop = function() {
		window.clearInterval(intervalHandle);
		_59 = true
	};
	this.resume = function() {
		this.run();
		_59 = false
	}
};

function Input() {
	var _62 = new Object();
	var _63 = new Object();
	var _64 = new Object();
	var _65 = new Object();
	var mB = new Object();
	var _66 = new Object();
	var _67 = {
		x: 0,
		y: 0
	};
	var _68 = {
		x: 0,
		y: 0
	};
	var _69 = this;
	$(window).keydown(function(_6a) {
		if (!_69.isKeyPressed(_6a.keyCode)) {
			_62[_6a.keyCode] = true
		}
	});
	$(window).keyup(function(_6b) {
		_62[_6b.keyCode] = false
	});
	$("canvas").dblclick(function() {
		return false
	});
	$("canvas").mousedown(function(_6c) {
		if (!_69.isMousePressed(_6c.button)) {
			_65[_6c.button] = true
		}
		return false
	});
	$("canvas").mousemove(function(_6d) {
		_68.x = _67.x;
		_68.y = _67.y;
		_67.x = (_6d.offsetX ? _6d.offsetX: _6d.layerX) - $("canvas").position().left;
		_67.y = (_6d.offsetY ? _6d.offsetY: _6d.layerY) - $("canvas").position().top;
		return false
	});
	$("canvas").mouseup(function(_6e) {
		_65[_6e.button] = false;
		return false
	});
	$("canvas").click(function() {
		return false
	});
	$("canvas").bind("contextmenu",
	function() {
		return false
	});
	this.isKeyPressed = function(key) {
		return (_63[parseInt(key)] != undefined) && _63[parseInt(key)]
	};
	this.isKeyDown = function(key) {
		var k = parseInt(key);
		return ((_64[k] == undefined) || !_64[k]) && this.isKeyPressed(key)
	};
	this.isKeyUp = function(key) {
		var k = parseInt(key);
		return (_64[k] != undefined) && _64[k] && !this.isKeyPressed(key)
	};
	this.isMousePressed = function(key) {
		return (mB[parseInt(key)] != undefined) && mB[parseInt(key)]
	};
	this.isMouseDown = function(key) {
		var k = parseInt(key);
		return ((_66[k] == undefined) || !_66[k]) && this.isMousePressed(key)
	};
	this.isMouseUp = function(key) {
		var k = parseInt(key);
		return (_66[k] != undefined) && _66[k] && !this.isMousePressed(key)
	};
	this.mousePos = function() {
		return __3(_67)
	};
	this.mouseDelta = function() {
		return __7(_67, _68)
	};
	this.update = function() {
		$.each(_65,
		function(key, _6f) {
			_66[key] = mB[key];
			mB[key] = _6f
		});
		$.each(_62,
		function(key, _70) {
			_64[key] = _63[key];
			_63[key] = _70
		})
	}
};

/**
 * 兼容处理，不支持canvas时才会执行下面的部分。
 */
document.createElement("canvas").getContext || (
function() {
	var s = Math,
	j = s.round,
	F = s.sin,
	G = s.cos,
	V = s.abs,
	W = s.sqrt,
	k = 10,
	v = k / 2;
	function X() {
		return this.context_ || (this.context_ = new H(this))
	};
	var L = Array.prototype.slice;
	function Y(b, a) {
		var c = L.call(arguments, 2);
		return function() {
			return b.apply(a, c.concat(L.call(arguments)))
		}
	};
	var M = {
		init: function(b) {
			if (/MSIE/.test(navigator.userAgent) && !window.opera) {
				var a = b || document;
				a.createElement("canvas");
				a.attachEvent("onreadystatechange", Y(this.init_, this, a))
			}
		},
		init_: function(b) {
			b.namespaces.g_vml_ || b.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
			b.namespaces.g_o_ || b.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
			if (!b.styleSheets.ex_canvas_) {
				var a = b.createStyleSheet();
				a.owningElement.id = "ex_canvas_";
				a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"
			}
			var c = b.getElementsByTagName("canvas"),
			d = 0;
			for (; d < c.length; d++) {
				this.initElement(c[d])
			}
		},
		initElement: function(b) {
			if (!b.getContext) {
				b.getContext = X;
				b.innerHTML = "";
				b.attachEvent("onpropertychange", Z);
				b.attachEvent("onresize", $);
				var a = b.attributes;
				if (a.width && a.width.specified) {
					b.style.width = a.width.nodeValue + "px"
				} else {
					b.width = b.clientWidth
				}
				if (a.height && a.height.specified) {
					b.style.height = a.height.nodeValue + "px"
				} else {
					b.height = b.clientHeight
				}
			}
			return b
		}
	};
	function Z(b) {
		var a = b.srcElement;
		switch (b.propertyName) {
		case "width":
			a.style.width = a.attributes.width.nodeValue + "px";
			a.getContext().clearRect();
			break;
		case "height":
			a.style.height = a.attributes.height.nodeValue + "px";
			a.getContext().clearRect();
			break
		}
	};
	function $(b) {
		var a = b.srcElement;
		if (a.firstChild) {
			a.firstChild.style.width = a.clientWidth + "px";
			a.firstChild.style.height = a.clientHeight + "px"
		}
	};
	M.init();
	var N = [],
	B = 0;
	for (; B < 16; B++) {
		var C = 0;
		for (; C < 16; C++) {
			N[B * 16 + C] = B.toString(16) + C.toString(16)
		}
	}
	function I() {
		return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
	};
	function y(b, a) {
		var c = I(),
		d = 0;
		for (; d < 3; d++) {
			var f = 0;
			for (; f < 3; f++) {
				var h = 0,
				g = 0;
				for (; g < 3; g++) {
					h += b[d][g] * a[g][f]
				}
				c[d][f] = h
			}
		}
		return c
	};
	function O(b, a) {
		a.fillStyle = b.fillStyle;
		a.lineCap = b.lineCap;
		a.lineJoin = b.lineJoin;
		a.lineWidth = b.lineWidth;
		a.miterLimit = b.miterLimit;
		a.shadowBlur = b.shadowBlur;
		a.shadowColor = b.shadowColor;
		a.shadowOffsetX = b.shadowOffsetX;
		a.shadowOffsetY = b.shadowOffsetY;
		a.strokeStyle = b.strokeStyle;
		a.globalAlpha = b.globalAlpha;
		a.arcScaleX_ = b.arcScaleX_;
		a.arcScaleY_ = b.arcScaleY_;
		a.lineScale_ = b.lineScale_
	};
	function P(b) {
		var a, c = 1;
		b = String(b);
		if (b.substring(0, 3) == "rgb") {
			var d = b.indexOf("(", 3),
			f = b.indexOf(")", d + 1),
			h = b.substring(d + 1, f).split(",");
			a = "#";
			var g = 0;
			for (; g < 3; g++) {
				a += N[Number(h[g])]
			}
			if (h.length == 4 && b.substr(3, 1) == "a") {
				c = h[3]
			}
		} else {
			a = b
		}
		return {
			color: a,
			alpha: c
		}
	};
	function aa(b) {
		switch (b) {
		case "butt":
			return "flat";
		case "round":
			return "round";
		case "square":
		default:
			return "square"
		}
	};
	function H(b) {
		this.m_ = I();
		this.mStack_ = [];
		this.aStack_ = [];
		this.currentPath_ = [];
		this.fillStyle = this.strokeStyle = "#000";
		this.lineWidth = 1;
		this.lineJoin = "miter";
		this.lineCap = "butt";
		this.miterLimit = k * 1;
		this.globalAlpha = 1;
		this.canvas = b;
		var a = b.ownerDocument.createElement("div");
		a.style.width = b.clientWidth + "px";
		a.style.height = b.clientHeight + "px";
		a.style.overflow = "hidden";
		a.style.position = "absolute";
		b.appendChild(a);
		this.element_ = a;
		this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
	};
	var i = H.prototype;
	i.clearRect = function() {
		this.element_.innerHTML = ""
	};
	i.beginPath = function() {
		this.currentPath_ = []
	};
	i.moveTo = function(b, a) {
		var c = this.getCoords_(b, a);
		this.currentPath_.push({
			type: "moveTo",
			x: c.x,
			y: c.y
		});
		this.currentX_ = c.x;
		this.currentY_ = c.y
	};
	i.lineTo = function(b, a) {
		var c = this.getCoords_(b, a);
		this.currentPath_.push({
			type: "lineTo",
			x: c.x,
			y: c.y
		});
		this.currentX_ = c.x;
		this.currentY_ = c.y
	};
	i.bezierCurveTo = function(b, a, c, d, f, h) {
		var g = this.getCoords_(f, h),
		l = this.getCoords_(b, a),
		e = this.getCoords_(c, d);
		Q(this, l, e, g)
	};
	function Q(b, a, c, d) {
		b.currentPath_.push({
			type: "bezierCurveTo",
			cp1x: a.x,
			cp1y: a.y,
			cp2x: c.x,
			cp2y: c.y,
			x: d.x,
			y: d.y
		});
		b.currentX_ = d.x;
		b.currentY_ = d.y
	};
	i.quadraticCurveTo = function(b, a, c, d) {
		var f = this.getCoords_(b, a),
		h = this.getCoords_(c, d),
		g = {
			x: this.currentX_ + 0.6666666666666666 * (f.x - this.currentX_),
			y: this.currentY_ + 0.6666666666666666 * (f.y - this.currentY_)
		};
		Q(this, g, {
			x: g.x + (h.x - this.currentX_) / 3,
			y: g.y + (h.y - this.currentY_) / 3
		},
		h)
	};
	i.arc = function(b, a, c, d, f, h) {
		c *= k;
		var g = h ? "at": "wa",
		l = b + G(d) * c - v,
		e = a + F(d) * c - v,
		m = b + G(f) * c - v,
		r = a + F(f) * c - v;
		if (l == m && !h) {
			l += 0.125
		}
		var n = this.getCoords_(b, a),
		o = this.getCoords_(l, e),
		q = this.getCoords_(m, r);
		this.currentPath_.push({
			type: g,
			x: n.x,
			y: n.y,
			radius: c,
			xStart: o.x,
			yStart: o.y,
			xEnd: q.x,
			yEnd: q.y
		})
	};
	i.rect = function(b, a, c, d) {
		this.moveTo(b, a);
		this.lineTo(b + c, a);
		this.lineTo(b + c, a + d);
		this.lineTo(b, a + d);
		this.closePath()
	};
	i.strokeRect = function(b, a, c, d) {
		var f = this.currentPath_;
		this.beginPath();
		this.moveTo(b, a);
		this.lineTo(b + c, a);
		this.lineTo(b + c, a + d);
		this.lineTo(b, a + d);
		this.closePath();
		this.stroke();
		this.currentPath_ = f
	};
	i.fillRect = function(b, a, c, d) {
		var f = this.currentPath_;
		this.beginPath();
		this.moveTo(b, a);
		this.lineTo(b + c, a);
		this.lineTo(b + c, a + d);
		this.lineTo(b, a + d);
		this.closePath();
		this.fill();
		this.currentPath_ = f
	};
	i.createLinearGradient = function(b, a, c, d) {
		var f = new D("gradient");
		f.x0_ = b;
		f.y0_ = a;
		f.x1_ = c;
		f.y1_ = d;
		return f
	};
	i.createRadialGradient = function(b, a, c, d, f, h) {
		var g = new D("gradientradial");
		g.x0_ = b;
		g.y0_ = a;
		g.r0_ = c;
		g.x1_ = d;
		g.y1_ = f;
		g.r1_ = h;
		return g
	};
	i.drawImage = function(b) {
		var a, c, d, f, h, g, l, e, m = b.runtimeStyle.width,
		r = b.runtimeStyle.height;
		b.runtimeStyle.width = "auto";
		b.runtimeStyle.height = "auto";
		var n = b.width,
		o = b.height;
		b.runtimeStyle.width = m;
		b.runtimeStyle.height = r;
		if (arguments.length == 3) {
			a = arguments[1];
			c = arguments[2];
			h = g = 0;
			l = d = n;
			e = f = o
		} else {
			if (arguments.length == 5) {
				a = arguments[1];
				c = arguments[2];
				d = arguments[3];
				f = arguments[4];
				h = g = 0;
				l = n;
				e = o
			} else {
				if (arguments.length == 9) {
					h = arguments[1];
					g = arguments[2];
					l = arguments[3];
					e = arguments[4];
					a = arguments[5];
					c = arguments[6];
					d = arguments[7];
					f = arguments[8]
				} else {
					throw Error("Invalid number of arguments")
				}
			}
		}
		var q = this.getCoords_(a, c),
		t = [];
		t.push(" <g_vml_:group", " coordsize=\"", k * 10, ",", k * 10, "\"", " coordorigin=\"0,0\"", " style=\"width:", 10, "px;height:", 10, "px;position:absolute;");
		if (this.m_[0][0] != 1 || this.m_[0][1]) {
			var E = [];
			E.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", j(q.x / k), ",", "Dy=", j(q.y / k), "");
			var p = q,
			z = this.getCoords_(a + d, c),
			w = this.getCoords_(a, c + f),
			x = this.getCoords_(a + d, c + f);
			p.x = s.max(p.x, z.x, w.x, x.x);
			p.y = s.max(p.y, z.y, w.y, x.y);
			t.push("padding:0 ", j(p.x / k), "px ", j(p.y / k), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", E.join(""), ", sizingmethod='clip');")
		} else {
			t.push("top:", j(q.y / k), "px;left:", j(q.x / k), "px;")
		}
		t.push(" \">", "<g_vml_:image src=\"", b.src, "\"", " style=\"width:", k * d, "px;", " height:", k * f, "px;\"", " cropleft=\"", h / n, "\"", " croptop=\"", g / o, "\"", " cropright=\"", (n - h - l) / n, "\"", " cropbottom=\"", (o - g - e) / o, "\"", " />", "</g_vml_:group>");
		this.element_.insertAdjacentHTML("BeforeEnd", t.join(""))
	};
	i.stroke = function(b) {
		var a = [],
		c = P(b ? this.fillStyle: this.strokeStyle),
		d = c.color,
		f = c.alpha * this.globalAlpha;
		a.push("<g_vml_:shape", " filled=\"", !!b, "\"", " style=\"position:absolute;width:", 10, "px;height:", 10, "px;\"", " coordorigin=\"0 0\" coordsize=\"", k * 10, " ", k * 10, "\"", " stroked=\"", !b, "\"", " path=\"");
		var h = {
			x: null,
			y: null
		},
		g = {
			x: null,
			y: null
		},
		l = 0;
		for (; l < this.currentPath_.length; l++) {
			var e = this.currentPath_[l];
			switch (e.type) {
			case "moveTo":
				a.push(" m ", j(e.x), ",", j(e.y));
				break;
			case "lineTo":
				a.push(" l ", j(e.x), ",", j(e.y));
				break;
			case "close":
				a.push(" x ");
				e = null;
				break;
			case "bezierCurveTo":
				a.push(" c ", j(e.cp1x), ",", j(e.cp1y), ",", j(e.cp2x), ",", j(e.cp2y), ",", j(e.x), ",", j(e.y));
				break;
			case "at":
			case "wa":
				a.push(" ", e.type, " ", j(e.x - this.arcScaleX_ * e.radius), ",", j(e.y - this.arcScaleY_ * e.radius), " ", j(e.x + this.arcScaleX_ * e.radius), ",", j(e.y + this.arcScaleY_ * e.radius), " ", j(e.xStart), ",", j(e.yStart), " ", j(e.xEnd), ",", j(e.yEnd));
				break
			}
			if (e) {
				if (h.x == null || e.x < h.x) {
					h.x = e.x
				}
				if (g.x == null || e.x > g.x) {
					g.x = e.x
				}
				if (h.y == null || e.y < h.y) {
					h.y = e.y
				}
				if (g.y == null || e.y > g.y) {
					g.y = e.y
				}
			}
		}
		a.push(" \">");
		if (b) {
			if (typeof this.fillStyle == "object") {
				var m = this.fillStyle,
				r = 0,
				n = {
					x: 0,
					y: 0
				},
				o = 0,
				q = 1;
				if (m.type_ == "gradient") {
					var t = m.x1_ / this.arcScaleX_,
					E = m.y1_ / this.arcScaleY_,
					p = this.getCoords_(m.x0_ / this.arcScaleX_, m.y0_ / this.arcScaleY_),
					z = this.getCoords_(t, E);
					r = Math.atan2(z.x - p.x, z.y - p.y) * 180 / Math.PI;
					if (r < 0) {
						r += 360
					}
					if (r < 0.000001) {
						r = 0
					}
				} else {
					var p = this.getCoords_(m.x0_, m.y0_),
					w = g.x - h.x,
					x = g.y - h.y;
					n = {
						x: (p.x - h.x) / w,
						y: (p.y - h.y) / x
					};
					w /= this.arcScaleX_ * k;
					x /= this.arcScaleY_ * k;
					var R = s.max(w, x);
					o = 2 * m.r0_ / R;
					q = 2 * m.r1_ / R - o
				}
				var u = m.colors_;
				u.sort(function(ba, ca) {
					return ba.offset - ca.offset
				});
				var J = u.length,
				da = u[0].color,
				ea = u[J - 1].color,
				fa = u[0].alpha * this.globalAlpha,
				ga = u[J - 1].alpha * this.globalAlpha,
				S = [],
				l = 0;
				for (; l < J; l++) {
					var T = u[l];
					S.push(T.offset * q + o + " " + T.color)
				}
				a.push("<g_vml_:fill type=\"", m.type_, "\"", " method=\"none\" focus=\"100%\"", " color=\"", da, "\"", " color2=\"", ea, "\"", " colors=\"", S.join(","), "\"", " opacity=\"", ga, "\"", " g_o_:opacity2=\"", fa, "\"", " angle=\"", r, "\"", " focusposition=\"", n.x, ",", n.y, "\" />")
			} else {
				a.push("<g_vml_:fill color=\"", d, "\" opacity=\"", f, "\" />")
			}
		} else {
			var K = this.lineScale_ * this.lineWidth;
			if (K < 1) {
				f *= K
			}
			a.push("<g_vml_:stroke", " opacity=\"", f, "\"", " joinstyle=\"", this.lineJoin, "\"", " miterlimit=\"", this.miterLimit, "\"", " endcap=\"", aa(this.lineCap), "\"", " weight=\"", K, "px\"", " color=\"", d, "\" />")
		}
		a.push("</g_vml_:shape>");
		this.element_.insertAdjacentHTML("beforeEnd", a.join(""))
	};
	i.fill = function() {
		this.stroke(true)
	};
	i.closePath = function() {
		this.currentPath_.push({
			type: "close"
		})
	};
	i.getCoords_ = function(b, a) {
		var c = this.m_;
		return {
			x: k * (b * c[0][0] + a * c[1][0] + c[2][0]) - v,
			y: k * (b * c[0][1] + a * c[1][1] + c[2][1]) - v
		}
	};
	i.save = function() {
		var b = {};
		O(this, b);
		this.aStack_.push(b);
		this.mStack_.push(this.m_);
		this.m_ = y(I(), this.m_)
	};
	i.restore = function() {
		O(this.aStack_.pop(), this);
		this.m_ = this.mStack_.pop()
	};
	function ha(b) {
		var a = 0;
		for (; a < 3; a++) {
			var c = 0;
			for (; c < 2; c++) {
				if (!isFinite(b[a][c]) || isNaN(b[a][c])) {
					return false
				}
			}
		}
		return true
	};
	function A(b, a, c) {
		if ( !! ha(a)) {
			b.m_ = a;
			if (c) {
				b.lineScale_ = W(V(a[0][0] * a[1][1] - a[0][1] * a[1][0]))
			}
		}
	};
	i.translate = function(b, a) {
		A(this, y([[1, 0, 0], [0, 1, 0], [b, a, 1]], this.m_), false)
	};
	i.rotate = function(b) {
		var a = G(b),
		c = F(b);
		A(this, y([[a, c, 0], [ - c, a, 0], [0, 0, 1]], this.m_), false)
	};
	i.scale = function(b, a) {
		this.arcScaleX_ *= b;
		this.arcScaleY_ *= a;
		A(this, y([[b, 0, 0], [0, a, 0], [0, 0, 1]], this.m_), true)
	};
	i.transform = function(b, a, c, d, f, h) {
		A(this, y([[b, a, 0], [c, d, 0], [f, h, 1]], this.m_), true)
	};
	i.setTransform = function(b, a, c, d, f, h) {
		A(this, [[b, a, 0], [c, d, 0], [f, h, 1]], true)
	};
	i.clip = function() {};
	i.arcTo = function() {};
	i.createPattern = function() {
		return new U
	};
	function D(b) {
		this.type_ = b;
		this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
		this.colors_ = []
	};
	D.prototype.addColorStop = function(b, a) {
		a = P(a);
		this.colors_.push({
			offset: b,
			color: a.color,
			alpha: a.alpha
		})
	};
	function U() {};
	G_vmlCanvasManager = M;
	CanvasRenderingContext2D = H;
	CanvasGradient = D;
	CanvasPattern = U
})();

/**
 * 兼容处理，不支持canvas时才会执行下面的部分。
 */
if (!document.createElement("canvas").getContext) { 
	(function() {
		var m = Math;
		var mr = m.round;
		var ms = m.sin;
		var mc = m.cos;
		var abs = m.abs;
		var _71 = m.sqrt;
		var Z = 10;
		var Z2 = Z / 2;
		function _72() {
			return this.context_ || (this.context_ = new _73(this))
		};
		var _74 = Array.prototype.slice;
		function _75(f, obj, _76) {
			var a = _74.call(arguments, 2);
			return function() {
				return f.apply(obj, a.concat(_74.call(arguments)))
			}
		};
		var _77 = {
			init: function(_78) {
				if (/MSIE/.test(navigator.userAgent) && !window.opera) {
					var doc = _78 || document;
					doc.createElement("canvas");
					doc.attachEvent("onreadystatechange", _75(this.init_, this, doc))
				}
			},
			init_: function(doc) {
				if (!doc.namespaces["g_vml_"]) {
					doc.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML")
				}
				if (!doc.namespaces["g_o_"]) {
					doc.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML")
				}
				if (!doc.styleSheets["ex_canvas_"]) {
					var ss = doc.createStyleSheet();
					ss.owningElement.id = "ex_canvas_";
					ss.cssText = "canvas{display:inline-block;overflow:hidden;" + "text-align:left;width:300px;height:150px}" + "g_vml_\\:*{behavior:url(#default#VML)}" + "g_o_\\:*{behavior:url(#default#VML)}"
				}
				var els = doc.getElementsByTagName("canvas");
				for (var i = 0; i < els.length; i++) {
					this.initElement(els[i])
				}
			},
			initElement: function(el) {
				if (!el.getContext) {
					el.getContext = _72;
					el.innerHTML = "";
					el.attachEvent("onpropertychange", _79);
					el.attachEvent("onresize", _7a);
					var _7b = el.attributes;
					if (_7b.width && _7b.width.specified) {
						el.style.width = _7b.width.nodeValue + "px"
					} else {
						el.width = el.clientWidth
					}
					if (_7b.height && _7b.height.specified) {
						el.style.height = _7b.height.nodeValue + "px"
					} else {
						el.height = el.clientHeight
					}
				}
				return el
			}
		};
		function _79(e) {
			var el = e.srcElement;
			switch (e.propertyName) {
			case "width":
				el.style.width = el.attributes.width.nodeValue + "px";
				el.getContext().clearRect();
				break;
			case "height":
				el.style.height = el.attributes.height.nodeValue + "px";
				el.getContext().clearRect();
				break
			}
		};
		function _7a(e) {
			var el = e.srcElement;
			if (el.firstChild) {
				el.firstChild.style.width = el.clientWidth + "px";
				el.firstChild.style.height = el.clientHeight + "px"
			}
		};
		_77.init();
		var _7c = [];
		for (var i = 0; i < 16; i++) {
			for (var j = 0; j < 16; j++) {
				_7c[i * 16 + j] = i.toString(16) + j.toString(16)
			}
		}
		function _7d() {
			return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
		};
		function _7e(m1, m2) {
			var _7f = _7d();
			for (var x = 0; x < 3; x++) {
				for (var y = 0; y < 3; y++) {
					var sum = 0;
					for (var z = 0; z < 3; z++) {
						sum += m1[x][z] * m2[z][y]
					}
					_7f[x][y] = sum
				}
			}
			return _7f
		};
		function _80(o1, o2) {
			o2.fillStyle = o1.fillStyle;
			o2.lineCap = o1.lineCap;
			o2.lineJoin = o1.lineJoin;
			o2.lineWidth = o1.lineWidth;
			o2.miterLimit = o1.miterLimit;
			o2.shadowBlur = o1.shadowBlur;
			o2.shadowColor = o1.shadowColor;
			o2.shadowOffsetX = o1.shadowOffsetX;
			o2.shadowOffsetY = o1.shadowOffsetY;
			o2.strokeStyle = o1.strokeStyle;
			o2.globalAlpha = o1.globalAlpha;
			o2.arcScaleX_ = o1.arcScaleX_;
			o2.arcScaleY_ = o1.arcScaleY_;
			o2.lineScale_ = o1.lineScale_
		};
		function _81(_82) {
			var str, _83 = 1;
			_82 = String(_82);
			if (_82.substring(0, 3) == "rgb") {
				var _84 = _82.indexOf("(", 3);
				var end = _82.indexOf(")", _84 + 1);
				var _85 = _82.substring(_84 + 1, end).split(",");
				str = "#";
				for (var i = 0; i < 3; i++) {
					str += _7c[Number(_85[i])]
				}
				if (_85.length == 4 && _82.substr(3, 1) == "a") {
					_83 = _85[3]
				}
			} else {
				str = _82
			}
			return {
				color: str,
				alpha: _83
			}
		};
		function _86(_87) {
			switch (_87) {
			case "butt":
				return "flat";
			case "round":
				return "round";
			case "square":
			default:
				return "square"
			}
		};
		function _73(_88) {
			this.m_ = _7d();
			this.mStack_ = [];
			this.aStack_ = [];
			this.currentPath_ = [];
			this.strokeStyle = "#000";
			this.fillStyle = "#000";
			this.lineWidth = 1;
			this.lineJoin = "miter";
			this.lineCap = "butt";
			this.miterLimit = Z * 1;
			this.globalAlpha = 1;
			this.canvas = _88;
			var el = _88.ownerDocument.createElement("div");
			el.style.width = _88.clientWidth + "px";
			el.style.height = _88.clientHeight + "px";
			el.style.position = "absolute";
			_88.appendChild(el);
			this.element_ = el;
			this.arcScaleX_ = 1;
			this.arcScaleY_ = 1;
			this.lineScale_ = 1
		};
		var _89 = _73.prototype;
		_89.clearRect = function() {
			this.element_.innerHTML = ""
		};
		_89.beginPath = function() {
			this.currentPath_ = []
		};
		_89.moveTo = function(aX, aY) {
			var p = this.getCoords_(aX, aY);
			this.currentPath_.push({
				type: "moveTo",
				x: p.x,
				y: p.y
			});
			this.currentX_ = p.x;
			this.currentY_ = p.y
		};
		_89.lineTo = function(aX, aY) {
			var p = this.getCoords_(aX, aY);
			this.currentPath_.push({
				type: "lineTo",
				x: p.x,
				y: p.y
			});
			this.currentX_ = p.x;
			this.currentY_ = p.y
		};
		_89.bezierCurveTo = function(_8a, _8b, _8c, _8d, aX, aY) {
			var p = this.getCoords_(aX, aY);
			var cp1 = this.getCoords_(_8a, _8b);
			var cp2 = this.getCoords_(_8c, _8d);
			_8e(this, cp1, cp2, p)
		};
		function _8e(_8f, cp1, cp2, p) {
			_8f.currentPath_.push({
				type: "bezierCurveTo",
				cp1x: cp1.x,
				cp1y: cp1.y,
				cp2x: cp2.x,
				cp2y: cp2.y,
				x: p.x,
				y: p.y
			});
			_8f.currentX_ = p.x;
			_8f.currentY_ = p.y
		};
		_89.quadraticCurveTo = function(_90, _91, aX, aY) {
			var cp = this.getCoords_(_90, _91);
			var p = this.getCoords_(aX, aY);
			var cp1 = {
				x: this.currentX_ + 2 / 3 * (cp.x - this.currentX_),
				y: this.currentY_ + 2 / 3 * (cp.y - this.currentY_)
			};
			var cp2 = {
				x: cp1.x + (p.x - this.currentX_) / 3,
				y: cp1.y + (p.y - this.currentY_) / 3
			};
			_8e(this, cp1, cp2, p)
		};
		_89.arc = function(aX, aY, _92, _93, _94, _95) {
			_92 *= Z;
			var _96 = _95 ? "at": "wa";
			var _97 = aX + mc(_93) * _92 - Z2;
			var _98 = aY + ms(_93) * _92 - Z2;
			var _99 = aX + mc(_94) * _92 - Z2;
			var _9a = aY + ms(_94) * _92 - Z2;
			if (_97 == _99 && !_95) {
				_97 += 0.125
			}
			var p = this.getCoords_(aX, aY);
			var _9b = this.getCoords_(_97, _98);
			var _9c = this.getCoords_(_99, _9a);
			this.currentPath_.push({
				type: _96,
				x: p.x,
				y: p.y,
				radius: _92,
				xStart: _9b.x,
				yStart: _9b.y,
				xEnd: _9c.x,
				yEnd: _9c.y
			})
		};
		_89.rect = function(aX, aY, _9d, _9e) {
			this.moveTo(aX, aY);
			this.lineTo(aX + _9d, aY);
			this.lineTo(aX + _9d, aY + _9e);
			this.lineTo(aX, aY + _9e);
			this.closePath()
		};
		_89.strokeRect = function(aX, aY, _9f, _a0) {
			var _a1 = this.currentPath_;
			this.beginPath();
			this.moveTo(aX, aY);
			this.lineTo(aX + _9f, aY);
			this.lineTo(aX + _9f, aY + _a0);
			this.lineTo(aX, aY + _a0);
			this.closePath();
			this.stroke();
			this.currentPath_ = _a1
		};
		_89.fillRect = function(aX, aY, _a2, _a3) {
			var _a4 = this.currentPath_;
			this.beginPath();
			this.moveTo(aX, aY);
			this.lineTo(aX + _a2, aY);
			this.lineTo(aX + _a2, aY + _a3);
			this.lineTo(aX, aY + _a3);
			this.closePath();
			this.fill();
			this.currentPath_ = _a4
		};
		_89.createLinearGradient = function(aX0, aY0, aX1, aY1) {
			var _a5 = new _a6("gradient");
			_a5.x0_ = aX0;
			_a5.y0_ = aY0;
			_a5.x1_ = aX1;
			_a5.y1_ = aY1;
			return _a5
		};
		_89.createRadialGradient = function(aX0, aY0, aR0, aX1, aY1, aR1) {
			var _a7 = new _a6("gradientradial");
			_a7.x0_ = aX0;
			_a7.y0_ = aY0;
			_a7.r0_ = aR0;
			_a7.x1_ = aX1;
			_a7.y1_ = aY1;
			_a7.r1_ = aR1;
			return _a7
		};
		_89.drawImage = function(_a8, _a9) {
			var dx, dy, dw, dh, sx, sy, sw, sh;
			var _aa = _a8.runtimeStyle.width;
			var _ab = _a8.runtimeStyle.height;
			_a8.runtimeStyle.width = "auto";
			_a8.runtimeStyle.height = "auto";
			var w = _a8.width;
			var h = _a8.height;
			_a8.runtimeStyle.width = _aa;
			_a8.runtimeStyle.height = _ab;
			if (arguments.length == 3) {
				dx = arguments[1];
				dy = arguments[2];
				sx = sy = 0;
				sw = dw = w;
				sh = dh = h
			} else {
				if (arguments.length == 5) {
					dx = arguments[1];
					dy = arguments[2];
					dw = arguments[3];
					dh = arguments[4];
					sx = sy = 0;
					sw = w;
					sh = h
				} else {
					if (arguments.length == 9) {
						sx = arguments[1];
						sy = arguments[2];
						sw = arguments[3];
						sh = arguments[4];
						dx = arguments[5];
						dy = arguments[6];
						dw = arguments[7];
						dh = arguments[8]
					} else {
						throw Error("Invalid number of arguments")
					}
				}
			}
			var d = this.getCoords_(dx, dy);
			var w2 = sw / 2;
			var h2 = sh / 2;
			var _ac = [];
			var W = 10;
			var H = 10;
			_ac.push(" <g_vml_:group", " coordsize=\"", Z * W, ",", Z * H, "\"", " coordorigin=\"0,0\"", " style=\"width:", W, "px;height:", H, "px;position:absolute;");
			if (this.m_[0][0] != 1 || this.m_[0][1]) {
				var _ad = [];
				_ad.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", mr(d.x / Z), ",", "Dy=", mr(d.y / Z), "");
				var max = d;
				var c2 = this.getCoords_(dx + dw, dy);
				var c3 = this.getCoords_(dx, dy + dh);
				var c4 = this.getCoords_(dx + dw, dy + dh);
				max.x = m.max(max.x, c2.x, c3.x, c4.x);
				max.y = m.max(max.y, c2.y, c3.y, c4.y);
				_ac.push("padding:0 ", mr(max.x / Z), "px ", mr(max.y / Z), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", _ad.join(""), ", sizingmethod='clip');")
			} else {
				_ac.push("top:", mr(d.y / Z), "px;left:", mr(d.x / Z), "px;")
			}
			_ac.push(" \">", "<g_vml_:image src=\"", _a8.src, "\"", " style=\"width:", Z * dw, "px;", " height:", Z * dh, "px;\"", " cropleft=\"", sx / w, "\"", " croptop=\"", sy / h, "\"", " cropright=\"", (w - sx - sw) / w, "\"", " cropbottom=\"", (h - sy - sh) / h, "\"", " />", "</g_vml_:group>");
			this.element_.insertAdjacentHTML("BeforeEnd", _ac.join(""))
		};
		_89.stroke = function(_ae) {
			var _af = [];
			var _b0 = false;
			var a = _81(_ae ? this.fillStyle: this.strokeStyle);
			var _b1 = a.color;
			var _b2 = a.alpha * this.globalAlpha;
			var W = 10;
			var H = 10;
			_af.push("<g_vml_:shape", " filled=\"", !!_ae, "\"", " style=\"position:absolute;width:", W, "px;height:", H, "px;\"", " coordorigin=\"0 0\" coordsize=\"", Z * W, " ", Z * H, "\"", " stroked=\"", !_ae, "\"", " path=\"");
			var _b3 = false;
			var min = {
				x: null,
				y: null
			};
			var max = {
				x: null,
				y: null
			};
			for (var i = 0; i < this.currentPath_.length; i++) {
				var p = this.currentPath_[i];
				var c;
				switch (p.type) {
				case "moveTo":
					c = p;
					_af.push(" m ", mr(p.x), ",", mr(p.y));
					break;
				case "lineTo":
					_af.push(" l ", mr(p.x), ",", mr(p.y));
					break;
				case "close":
					_af.push(" x ");
					p = null;
					break;
				case "bezierCurveTo":
					_af.push(" c ", mr(p.cp1x), ",", mr(p.cp1y), ",", mr(p.cp2x), ",", mr(p.cp2y), ",", mr(p.x), ",", mr(p.y));
					break;
				case "at":
				case "wa":
					_af.push(" ", p.type, " ", mr(p.x - this.arcScaleX_ * p.radius), ",", mr(p.y - this.arcScaleY_ * p.radius), " ", mr(p.x + this.arcScaleX_ * p.radius), ",", mr(p.y + this.arcScaleY_ * p.radius), " ", mr(p.xStart), ",", mr(p.yStart), " ", mr(p.xEnd), ",", mr(p.yEnd));
					break
				}
				if (p) {
					if (min.x == null || p.x < min.x) {
						min.x = p.x
					}
					if (max.x == null || p.x > max.x) {
						max.x = p.x
					}
					if (min.y == null || p.y < min.y) {
						min.y = p.y
					}
					if (max.y == null || p.y > max.y) {
						max.y = p.y
					}
				}
			}
			_af.push(" \">");
			if (!_ae) {
				var _b4 = this.lineScale_ * this.lineWidth;
				if (_b4 < 1) {
					_b2 *= _b4
				}
				_af.push("<g_vml_:stroke", " opacity=\"", _b2, "\"", " joinstyle=\"", this.lineJoin, "\"", " miterlimit=\"", this.miterLimit, "\"", " endcap=\"", _86(this.lineCap), "\"", " weight=\"", _b4, "px\"", " color=\"", _b1, "\" />")
			} else {
				if (typeof this.fillStyle == "object") {
					var _b5 = this.fillStyle;
					var _b6 = 0;
					var _b7 = {
						x: 0,
						y: 0
					};
					var _b8 = 0;
					var _b9 = 1;
					if (_b5.type_ == "gradient") {
						var x0 = _b5.x0_ / this.arcScaleX_;
						var y0 = _b5.y0_ / this.arcScaleY_;
						var x1 = _b5.x1_ / this.arcScaleX_;
						var y1 = _b5.y1_ / this.arcScaleY_;
						var p0 = this.getCoords_(x0, y0);
						var p1 = this.getCoords_(x1, y1);
						var dx = p1.x - p0.x;
						var dy = p1.y - p0.y;
						_b6 = Math.atan2(dx, dy) * 180 / Math.PI;
						if (_b6 < 0) {
							_b6 += 360
						}
						if (_b6 < 0.000001) {
							_b6 = 0
						}
					} else {
						var p0 = this.getCoords_(_b5.x0_, _b5.y0_);
						var _ba = max.x - min.x;
						var _bb = max.y - min.y;
						_b7 = {
							x: (p0.x - min.x) / _ba,
							y: (p0.y - min.y) / _bb
						};
						_ba /= this.arcScaleX_ * Z;
						_bb /= this.arcScaleY_ * Z;
						var _bc = m.max(_ba, _bb);
						_b8 = 2 * _b5.r0_ / _bc;
						_b9 = 2 * _b5.r1_ / _bc - _b8
					}
					var _bd = _b5.colors_;
					_bd.sort(function(cs1, cs2) {
						return cs1.offset - cs2.offset
					});
					var _be = _bd.length;
					var _bf = _bd[0].color;
					var _c0 = _bd[_be - 1].color;
					var _c1 = _bd[0].alpha * this.globalAlpha;
					var _c2 = _bd[_be - 1].alpha * this.globalAlpha;
					var _c3 = [];
					for (var i = 0; i < _be; i++) {
						var _c4 = _bd[i];
						_c3.push(_c4.offset * _b9 + _b8 + " " + _c4.color)
					}
					_af.push("<g_vml_:fill type=\"", _b5.type_, "\"", " method=\"none\" focus=\"100%\"", " color=\"", _bf, "\"", " color2=\"", _c0, "\"", " colors=\"", _c3.join(","), "\"", " opacity=\"", _c2, "\"", " g_o_:opacity2=\"", _c1, "\"", " angle=\"", _b6, "\"", " focusposition=\"", _b7.x, ",", _b7.y, "\" />")
				} else {
					_af.push("<g_vml_:fill color=\"", _b1, "\" opacity=\"", _b2, "\" />")
				}
			}
			_af.push("</g_vml_:shape>");
			this.element_.insertAdjacentHTML("beforeEnd", _af.join(""))
		};
		_89.fill = function() {
			this.stroke(true)
		};
		_89.closePath = function() {
			this.currentPath_.push({
				type: "close"
			})
		};
		_89.getCoords_ = function(aX, aY) {
			var m = this.m_;
			return {
				x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
				y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
			}
		};
		_89.save = function() {
			var o = {};
			_80(this, o);
			this.aStack_.push(o);
			this.mStack_.push(this.m_);
			this.m_ = _7e(_7d(), this.m_)
		};
		_89.restore = function() {
			_80(this.aStack_.pop(), this);
			this.m_ = this.mStack_.pop()
		};
		function _c5(m) {
			for (var j = 0; j < 3; j++) {
				for (var k = 0; k < 2; k++) {
					if (!isFinite(m[j][k]) || isNaN(m[j][k])) {
						return false
					}
				}
			}
			return true
		};
		function _c6(ctx, m, _c7) {
			if (!_c5(m)) {
				return
			}
			ctx.m_ = m;
			if (_c7) {
				var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
				ctx.lineScale_ = _71(abs(det))
			}
		};
		_89.translate = function(aX, aY) {
			var m1 = [[1, 0, 0], [0, 1, 0], [aX, aY, 1]];
			_c6(this, _7e(m1, this.m_), false)
		};
		_89.rotate = function(_c8) {
			var c = mc(_c8);
			var s = ms(_c8);
			var m1 = [[c, s, 0], [ - s, c, 0], [0, 0, 1]];
			_c6(this, _7e(m1, this.m_), false)
		};
		_89.scale = function(aX, aY) {
			this.arcScaleX_ *= aX;
			this.arcScaleY_ *= aY;
			var m1 = [[aX, 0, 0], [0, aY, 0], [0, 0, 1]];
			_c6(this, _7e(m1, this.m_), true)
		};
		_89.transform = function(m11, m12, m21, m22, dx, dy) {
			var m1 = [[m11, m12, 0], [m21, m22, 0], [dx, dy, 1]];
			_c6(this, _7e(m1, this.m_), true)
		};
		_89.setTransform = function(m11, m12, m21, m22, dx, dy) {
			var m = [[m11, m12, 0], [m21, m22, 0], [dx, dy, 1]];
			_c6(this, m, true)
		};
		_89.clip = function() {};
		_89.arcTo = function() {};
		_89.createPattern = function() {
			return new _c9
		};
		function _a6(_ca) {
			this.type_ = _ca;
			this.x0_ = 0;
			this.y0_ = 0;
			this.r0_ = 0;
			this.x1_ = 0;
			this.y1_ = 0;
			this.r1_ = 0;
			this.colors_ = []
		};
		_a6.prototype.addColorStop = function(_cb, _cc) {
			_cc = _81(_cc);
			this.colors_.push({
				offset: _cb,
				color: _cc.color,
				alpha: _cc.alpha
			})
		};
		function _c9() {};
		G_vmlCanvasManager = _77;
		CanvasRenderingContext2D = _73;
		CanvasGradient = _a6;
		CanvasPattern = _c9
	})()
}


var hexcase = 0;
var b64pad = "";

/**
 * MD5相关的函数
 */
function hex_md5(s) {
	return rstr2hex(rstr_md5(str2rstr_utf8(s)))
};
function b64_md5(s) {
	return rstr2b64(rstr_md5(str2rstr_utf8(s)))
};
function any_md5(s, e) {
	return rstr2any(rstr_md5(str2rstr_utf8(s)), e)
};
function hex_hmac_md5(k, d) {
	return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)))
};
function b64_hmac_md5(k, d) {
	return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)))
};
function any_hmac_md5(k, d, e) {
	return rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e)
};
function md5_vm_test() {
	return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72"
};
function rstr_md5(s) {
	return binl2rstr(binl_md5(rstr2binl(s), s.length * 8))
};
function rstr_hmac_md5(key, _cd) {
	var _ce = rstr2binl(key);
	if (_ce.length > 16) {
		_ce = binl_md5(_ce, key.length * 8)
	}
	var _cf = Array(16),
	_d0 = Array(16);
	for (var i = 0; i < 16; i++) {
		_cf[i] = _ce[i] ^ 909522486;
		_d0[i] = _ce[i] ^ 1549556828
	}
	var _d1 = binl_md5(_cf.concat(rstr2binl(_cd)), 512 + _cd.length * 8);
	return binl2rstr(binl_md5(_d0.concat(_d1), 512 + 128))
};
function rstr2hex(_d2) {
	try {
		hexcase
	} catch(e) {
		hexcase = 0
	}
	var _d3 = hexcase ? "0123456789ABCDEF": "0123456789abcdef";
	var _d4 = "";
	var x;
	for (var i = 0; i < _d2.length; i++) {
		x = _d2.charCodeAt(i);
		_d4 += _d3.charAt((x >>> 4) & 15) + _d3.charAt(x & 15)
	}
	return _d4
};
function rstr2b64(_d5) {
	try {
		b64pad
	} catch(e) {
		b64pad = ""
	}
	var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var _d6 = "";
	var len = _d5.length;
	for (var i = 0; i < len; i += 3) {
		var _d7 = (_d5.charCodeAt(i) << 16) | (i + 1 < len ? _d5.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? _d5.charCodeAt(i + 2) : 0);
		for (var j = 0; j < 4; j++) {
			if (i * 8 + j * 6 > _d5.length * 8) {
				_d6 += b64pad
			} else {
				_d6 += tab.charAt((_d7 >>> 6 * (3 - j)) & 63)
			}
		}
	}
	return _d6
};
function rstr2any(_d8, _d9) {
	var _da = _d9.length;
	var i, j, q, x, _db;
	var _dc = Array(Math.ceil(_d8.length / 2));
	for (i = 0; i < _dc.length; i++) {
		_dc[i] = (_d8.charCodeAt(i * 2) << 8) | _d8.charCodeAt(i * 2 + 1)
	}
	var _dd = Math.ceil(_d8.length * 8 / (Math.log(_d9.length) / Math.log(2)));
	var _de = Array(_dd);
	for (j = 0; j < _dd; j++) {
		_db = Array();
		x = 0;
		for (i = 0; i < _dc.length; i++) {
			x = (x << 16) + _dc[i];
			q = Math.floor(x / _da);
			x -= q * _da;
			if (_db.length > 0 || q > 0) {
				_db[_db.length] = q
			}
		}
		_de[j] = x;
		_dc = _db
	}
	var _df = "";
	for (i = _de.length - 1; i >= 0; i--) {
		_df += _d9.charAt(_de[i])
	}
	return _df
};
function str2rstr_utf8(_e0) {
	var _e1 = "";
	var i = -1;
	var x, y;
	while (++i < _e0.length) {
		x = _e0.charCodeAt(i);
		y = i + 1 < _e0.length ? _e0.charCodeAt(i + 1) : 0;
		if (55296 <= x && x <= 56319 && 56320 <= y && y <= 57343) {
			x = 65536 + ((x & 1023) << 10) + (y & 1023);
			i++
		}
		if (x <= 127) {
			_e1 += String.fromCharCode(x)
		} else {
			if (x <= 2047) {
				_e1 += String.fromCharCode(192 | ((x >>> 6) & 31), 128 | (x & 63))
			} else {
				if (x <= 65535) {
					_e1 += String.fromCharCode(224 | ((x >>> 12) & 15), 128 | ((x >>> 6) & 63), 128 | (x & 63))
				} else {
					if (x <= 2097151) {
						_e1 += String.fromCharCode(240 | ((x >>> 18) & 7), 128 | ((x >>> 12) & 63), 128 | ((x >>> 6) & 63), 128 | (x & 63))
					}
				}
			}
		}
	}
	return _e1
};
function str2rstr_utf16le(_e2) {
	var _e3 = "";
	for (var i = 0; i < _e2.length; i++) {
		_e3 += String.fromCharCode(_e2.charCodeAt(i) & 255, (_e2.charCodeAt(i) >>> 8) & 255)
	}
	return _e3
};
function str2rstr_utf16be(_e4) {
	var _e5 = "";
	for (var i = 0; i < _e4.length; i++) {
		_e5 += String.fromCharCode((_e4.charCodeAt(i) >>> 8) & 255, _e4.charCodeAt(i) & 255)
	}
	return _e5
};
function rstr2binl(_e6) {
	var _e7 = Array(_e6.length >> 2);
	for (var i = 0; i < _e7.length; i++) {
		_e7[i] = 0
	}
	for (var i = 0; i < _e6.length * 8; i += 8) {
		_e7[i >> 5] |= (_e6.charCodeAt(i / 8) & 255) << (i % 32)
	}
	return _e7
};
function binl2rstr(_e8) {
	var _e9 = "";
	for (var i = 0; i < _e8.length * 32; i += 8) {
		_e9 += String.fromCharCode((_e8[i >> 5] >>> (i % 32)) & 255)
	}
	return _e9
};

/**
 * MD5相关的函数
 */
function binl_md5(x, len) {
	x[len >> 5] |= 128 << ((len) % 32);
	x[(((len + 64) >>> 9) << 4) + 14] = len;
	var a = 1732584193;
	var b = -271733879;
	var c = -1732584194;
	var d = 271733878;
	for (var i = 0; i < x.length; i += 16) {
		var _ea = a;
		var _eb = b;
		var _ec = c;
		var _ed = d;
		a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
		d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
		c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
		b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
		a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
		d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
		c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
		b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
		a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
		d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
		c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
		b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
		a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
		d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
		c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
		b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
		a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
		d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
		c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
		b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
		a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
		d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
		c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
		b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
		a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
		d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
		c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
		b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
		a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
		d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
		c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
		b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
		a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
		d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
		c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
		b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
		a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
		d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
		c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
		b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
		a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
		d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
		c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
		b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
		a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
		d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
		c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
		b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
		a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
		d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
		c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
		b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
		a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
		d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
		c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
		b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
		a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
		d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
		c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
		b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
		a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
		d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
		c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
		b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
		a = safe_add(a, _ea);
		b = safe_add(b, _eb);
		c = safe_add(c, _ec);
		d = safe_add(d, _ed)
	}
	return Array(a, b, c, d)
};

function md5_cmn(q, a, b, x, s, t) {
	return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
};
function md5_ff(a, b, c, d, x, s, t) {
	return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t)
};
function md5_gg(a, b, c, d, x, s, t) {
	return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t)
};
function md5_hh(a, b, c, d, x, s, t) {
	return md5_cmn(b ^ c ^ d, a, b, x, s, t)
};
function md5_ii(a, b, c, d, x, s, t) {
	return md5_cmn(c ^ (b | (~d)), a, b, x, s, t)
};
function safe_add(x, y) {
	var lsw = (x & 65535) + (y & 65535);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return (msw << 16) | (lsw & 65535)
};
function bit_rol(num, cnt) {
	return (num << cnt) | (num >>> (32 - cnt))
};
function supports_local_storage() {
	try {
		return "localStorage" in window && window["localStorage"] !== null
	} catch(e) {
		return false
	}
};
function supports_canvas() {
	return !! document.createElement("canvas").getContext
};
function supports_audio() {
	return !! document.createElement("audio").canPlayType
};
function support_notifications() {
	return window.webkitNotifications
};
$(function() {
	var ua = navigator.userAgent.toString().toLowerCase();
	if (supports_local_storage() && supports_canvas() && !($.browser.opera && parseInt($.browser.version) < 10) && !((ua.indexOf("safari") != -1) && !(ua.indexOf("chrome") != -1))) {
		$("#browser-detect").parent().hide()
	} else {
		return
	}
});
function __18(key) {};

/**
 * 游戏配置对象
 */
var config = {
	title: "Web Snooker",
	masterserver: "server.php",
	debug: false,
	skin_path: "media/skins/",
	skin: "default",
	sound: "on",
	shadows: "on",
	cue: "on",
	hints: "on",
	player: "Guest",
	scoreboard_pos: "bottom",
	background: "default",
	backgrounds: {
		"default": {
			"default": {
				"color": "#855926",
				"image": "media/images/floor/light-yellow.jpg"
			},
			"blue": {
				"color": "#072c80",
				"image": "media/images/floor/blue.jpg"
			},
			"red": {
				"color": "#480000",
				"image": "media/images/floor/red.jpg"
			},
			"darkred": {
				"color": "#090100",
				"image": "media/images/floor/dark-red.jpg"
			},
			"darkred2": {
				"color": "#480000",
				"image": "media/images/floor/dark-red-2.jpg"
			},
			"black": {
				"color": "#050607",
				"image": "media/images/floor/black.jpg"
			},
			"lightyellow": {
				"color": "#855926",
				"image": "media/images/floor/light-yellow.jpg"
			}
		},
		"satan": {
			"default": {
				"color": "#480000",
				"image": "media/images/floor/dark-red-2.jpg"
			},
			"blue": {
				"color": "#072c80",
				"image": "media/images/floor/blue.jpg"
			},
			"red": {
				"color": "#480000",
				"image": "media/images/floor/red.jpg"
			},
			"darkred": {
				"color": "#090100",
				"image": "media/images/floor/dark-red.jpg"
			},
			"darkred2": {
				"color": "#480000",
				"image": "media/images/floor/dark-red-2.jpg"
			},
			"black": {
				"color": "#050607",
				"image": "media/images/floor/black.jpg"
			},
			"lightyellow": {
				"color": "#855926",
				"image": "media/images/floor/light-yellow.jpg"
			}
		}
	},
	scoreboard_style: ($(window).height() <= 666 ? "compact": "extended"),
	server_name: "Snooker room",
	gamemodes: {
		"snooker": "Full Snooker",
		"short-snooker": "Short Snooker",
		"mini-snooker": "Mini Snooker"
	},
	shottime: {
		"0": "Unlimited",
		"300": "5min",
		"180": "3min",
		"60": "1min",
		"45": "45s",
		"30": "30s",
		"15": "15s"
	}
};


function __18(key) {
	if (supports_local_storage()) {
		value = localStorage.getItem("snooker_" + key);
		if (typeof value != "undefined" && value != null) {
			return value
		}
	}
	return config[key]
};
function __20(key, _ee) {
	if (supports_local_storage()) {
		localStorage.setItem("snooker_" + key, _ee)
	}
	config[key] = _ee
};

/**
 * 本地缓存
 */
if (supports_local_storage()) {
	config.skin = __18("skin");
	config.player = __18("player");
	config.screoboard_pos = __18("scoreboard_pos");
	config.screoboard_style = __18("scoreboard_style");
	config.shadows = __18("shadows");
	config.background = __18("background");
	config.hints = __18("hints");
	config.cue = __18("cue")
}

/**
 * 网络相关类
 */
var network = new function() {
	this.max_turn_break = 0;
	this.commands = [],
	this.vars = [],
	this.frame_timer_handle = null,
	this.frame_timer = 0,
	this.shot_timer = 0,
	this.received_packets = 0,
	this.sent_packets = 0,
	this.last_ack = 0,
	this.interval = null,
	this.turn = false,
	this.pool = null,
	this.shoot_stack = [],
	this.pause = false,
	this.rules = {
		first_ball: null,
		required_ball: "red",
		last_pot: null,
		potted_balls: [],
		ball_positions: {
			"white": {
				x: 200,
				y: 317
			},
			"yellow": {
				x: 242,
				y: 357
			},
			"brown": {
				x: 242,
				y: 281
			},
			"green": {
				x: 242,
				y: 203
			},
			"blue": {
				x: 519,
				y: 281
			},
			"pink": {
				x: 694,
				y: 281
			},
			"black": {
				x: 870,
				y: 281
			}
		},
		ball_points: {
			"red": 1,
			"yellow": 2,
			"green": 3,
			"brown": 4,
			"blue": 5,
			"pink": 6,
			"black": 7,
			"white": 4
		}
	},
	this.can_shoot_timeout = true,
	this.break_points = 0,
	this.last_required = null,
	this.last_state = [],
	this.base_state = [],
	this.shottime = 60,
	this.frames = 1,
	this.rematch = false,
	this.client_rematch = false,
	this.can_chat = true,
	this.id = null,
	this.client_id = null,
	this.host_id = null,
	this.last_break_id = null,
	this.sound = new Sound();
	this.sound.loadSound("chat", "media/sounds/chat");
	this.set_title = function() {
		var _ef = this;
		if (typeof _ef.vars.practice != "undefined") {
			document.title = config.title + " - Practice"
		} else {
			document.title = config.title + " - " + (_ef.id == _ef.turn ? "[": "") + _ef.get_name(0) + (_ef.id == _ef.turn ? "]": "") + " vs " + (_ef.id != _ef.turn ? "[": "") + _ef.get_name(1) + (_ef.id != _ef.turn ? "]": "")
		}
	},
	this.is_paused = function() {
		var _f0 = this;
		return _f0.pause
	};
	this.get_time = function() {
		var _f1 = new Date();
		var h = _f1.getHours();
		h = (h < 10 ? "0" + h: h);
		var m = _f1.getMinutes();
		m = (m < 10 ? "0" + m: m);
		var s = _f1.getSeconds();
		s = (s < 10 ? "0" + s: s);
		return "[" + h + ":" + m + ":" + s + "]"
	},
	this.dump = function(arr, _f2) {
		var _f3 = "";
		if (!_f2) {
			_f2 = 0
		}
		var _f4 = "";
		if (typeof(arr) == "object") {
			for (var _f5 in arr) {
				var _f6 = arr[_f5];
				if (typeof(_f6) == "object") {
					_f3 += _f4 + "'" + _f5 + "' ...\n";
					_f3 += dump(_f6, _f2 + 1)
				} else {
					_f3 += _f4 + "'" + _f5 + "' => \"" + _f6 + "\",\n"
				}
			}
		} else {
			_f3 = "===>" + arr + "<===(" + typeof(arr) + ")"
		}
		return _f3
	};
	this.log = function(_f7, _f8) {
		var _f9 = this;
		if (typeof _f8 == "undefined") {
			_f8 = "info"
		}
		$log = $("#console ul.messages");
		$log.children("li").last().removeClass("last");
		$message = $("<li />").text(_f9.get_time() + " " + _f7);
		if (_f8 != "") {
			$message.addClass(_f8)
		}
		$message.addClass("last");
		$log.append($message);
		$("#console ul.messages").scrollTop($("#console ul.messages").attr("scrollHeight"))
	},
	this.popup = function(_fa, _fb, _fc) {
		if (typeof _fc == "undefined") {
			_fc = "game-info"
		}
		if (_fc == "game-info") {
			$("div.game-info").fadeOut(500)
		}
		$popup = $("<div />");
		$popup.addClass(_fc);
		if (_fc == "summary") {
			$popup.addClass("black-box")
		}
		$popup.html(_fa);
		$popup.hide().fadeIn(1000);
		if (typeof _fb != "undefined" && _fb != null) {
			$popup.animate({
				"opacity": 1
			},
			_fb,
			function() {
				$(this).fadeOut(500,
				function() {
					$(this).remove()
				})
			})
		}
		if ($popup.find("button").length == 0) {
			$popup.click(function() {
				$(this).fadeOut(500,
				function() {
					$(this).remove()
				})
			})
		}
		$("#dashboard").parents(".wrapper").after($popup)
	},
	this.init = function() {
		var _fd = this;
		if (typeof _fd.vars.id != "undefined") {
			_fd.id = _fd.vars.id.split("-")[2]
		}
		if (typeof _fd.vars.host == "undefined" && typeof _fd.vars.practice == "undefined") {
			_fd.pause = true;
			_fd.pool.listenEvents(false)
		}
		$.ajaxSetup({
			error: function(x, e) {
				if (x.status == 0) {
					network.log("Network connection is off.", "error")
				} else {
					if (x.status == 404) {
						network.log("URL not found.", "error")
					} else {
						if (x.status == 500) {
							network.log("Server failed to response.", "error")
						} else {
							if (e == "parsererror") {
								network.log("Parsing JSON failed.", "error")
							} else {
								if (e == "timeout") {
									network.log("Request timed out.", "error")
								} else {
									network.log(x.responseText, "error")
								}
							}
						}
					}
				}
			}
		});
		_fd.reset_score();
		_fd.set_name(0, __18("player"), LANG.code);
		if (typeof _fd.vars.practice != "undefined" || _fd.client_id == null) {
			if (typeof _fd.vars.practice != "undefined") {
				_fd.id = true
			}
			_fd.turn = _fd.id;
			_fd.setup_gamemode("snooker");
			_fd.start_timer();
			_fd.shottime = 0;
			_fd.set_active_player(false, true)
		}
		if (typeof _fd.vars.practice == "undefined") {
			_fd.interval = setInterval(function() {
				_fd.receive()
			},
			3500);
			_fd.log("Waiting for opponent...")
		}
		if (config.debug) {
			_fd.setup_gamemode("snooker");
			_fd.start_timer()
		}
	},
	this.check_error = function(_fe) {
		var _ff = this;
		if (typeof _fe != "undefined" && typeof _fe.error != "undefined") {
			var _100 = "Error";
			if (_fe.message == "4") {
				_ff.rehost(true)
			}
			if (_fe.message == "1") {
				_100 = "Server timed out.";
				$.ajax({
					url: "dashboard.php",
					cache: false,
					data: {
						"playing": 0
					},
				})
			} else {
				if (_fe.message == "2") {
					_100 = "Server is full."
				} else {
					if (_fe.message == "3") {
						_100 = "Wrong password."
					} else {
						if (_fe.message == "4") {
							if (_ff.client_id != null) {
								var _101 = _ff.get_name(1);
								if (_101 == "") {
									_101 = "Client"
								}
								_100 = _101 + " timed out.";
								$.ajax({
									url: "dashboard.php",
									cache: false,
									data: {
										"playing": 0
									},
								})
							}
						} else {
							if (_fe.message == "5") {
								_100 = "Invalid game key."
							} else {
								_100 = _fe.message
							}
						}
					}
				}
			}
			if (_fe.message != "4") {
				_ff.popup(_100, null, "server-info");
				_ff.log("Error: " + _100, "error")
			}
			return true
		}
		return false
	},
	this.disconnect = function(_102) {
		var self = this;
		if (typeof self.vars.id != "undefined") {
			if (typeof _102 == "undefined") {
				_102 = true
			}
			clearInterval(self.interval);
			if (_102) {
				self.send({
					"event": "disconnect"
				})
			}
		}
	},
	this.ajax = function(_103, _104, _105) {
		var self = this;
		if (typeof self.vars.practice == "undefined" || _103 == "host" || _103 == "join") {
			$.ajax({
				url: config.masterserver,
				cache: false,
				data: $.extend({
					"query": _103
				},
				_104),
				success: function(data) {
					if (typeof data == "undefined") {
						network.log("No server response.", "error")
					}
					if (!network.check_error(data)) {
						if (typeof _105 != "undefined") {
							_105(data)
						}
					}
				},
				error: function(x, e) {
					if (x.status == 0) {
						network.log("Network connection is off.", "error")
					} else {
						if (x.status == 404) {
							network.log("URL not found.", "error")
						} else {
							if (x.status == 500) {
								network.log("Server failed to response.", "error")
							} else {
								if (e == "parsererror") {
									network.log("Parsing JSON failed.", "error")
								} else {
									if (e == "timeout") {
										network.log("Request timed out.", "error")
									} else {
										network.log(x.responseText, "error")
									}
								}
							}
						}
					}
				},
				async: true
			})
		}
	},
	this.get = function(_106, _107, _108) {
		var self = this;
		$.get(config.masterserver, $.extend({
			"query": _106
		},
		_107),
		function(data) {
			if (!self.check_error(data)) {
				if (typeof _108 != "undefined") {
					_108(data)
				}
			}
		})
	},
	this.send = function(_109, _10a) {
		var self = this;
		self.ajax("send", $.extend({
			"id": self.vars.id
		},
		_109), _10a)
	},
	this.receive = function() {
		var self = this;
		if (typeof self.vars.practice == "undefined") {
			if (self.pool.isFrozen() && self.shoot_stack.length > 0) {
				self.state_save();
				var _10b = self.shoot_stack.pop();
				if (_10b.hash != self.gen_hash()) {
					self.log(self.get_name(1) + " has been desynced! (hash)", "error")
				}
				self.pool.listenEvents(false);
				self.pool.shoot({
					x: _10b.x,
					y: _10b.y
				});
				self.pool.listenEvents(true)
			}
			self.ajax("receive", {
				"id": self.vars.id,
				"last_ack": self.last_ack
			},
			function(data) {
				var data = {
					'status': 1,
					'received': 1,
					'packets': [
						{
							'data': {
								'host_id': 1,
								'shottime': 0,
								'frames': 1,
								'gamemode': 'snooker',
								'client': 0,
								'client_lang': 0,
								'client_id': 1
							},
							'time': 0
						}
					]
				}

				if (typeof data.status == "undefined" || data.status != 1) {
					alert(data.status);
					self.log("Network status update failed.", "error")
				}
				if (typeof data.received != "undefined" && data.received == 1) {
					self.received_packets++;
					var _10c = 0;
					for (var i = 0; i < data.packets.length; i++) {
						var _10d = data.packets[i].data;
						if (parseInt(data.packets[i].time) > self.last_ack) {
							if (_10d.event == "init") {
								self.pause = true;
								$(".server-info, .game-info, .summary").fadeOut(500);
								self.host_id = _10d.host_id;
								self.last_break_id = self.host_id;
								self.shottime = parseInt(_10d.shottime);
								self.frames = parseInt(_10d.frames);
								self.shot_timer = self.shottime;
								self.setup_gamemode(_10d.gamemode);
								self.set_name(1, _10d.client, _10d.client_lang);
								self.client_id = _10d.client_id;
								self.popup(_10d.client + " joined the game.", 1000, "server-info");
								notify(_10d.client + " joined the game.");
								self.log(_10d.client + " joined the game.");
								self.start_timer();
								self.set_frames(self.frames);
								self.calculate_remaining_points();
								self.reset_game(true);
								self.pause = false
							} else {
								if (_10d.event == "shoot") {
									if (!self.own_turn()) {
										if (typeof _10d.x == "string") {
											_10d.x = parseFloat(_10d.x);
											_10d.y = parseFloat(_10d.y)
										}
										if (self.pool.isFrozen() && self.shoot_stack.length == 0) {
											self.state_save();
											if (_10d.hash != self.gen_hash()) {
												self.log(self.get_name(1) + " has been desynced! (hash)", "error")
											}
											self.pool.listenEvents(false);
											self.pool.shoot({
												x: _10d.x,
												y: _10d.y
											});
											self.pool.listenEvents(true);
											_10c++
										} else {
											self.shoot_stack.push({
												x: _10d.x,
												y: _10d.y,
												hash: _10d.hash
											})
										}
									}
								} else {
									if (_10d.event == "replay") {
										if (!self.own_turn()) {
											self.popup(self.get_name(1) + " decided that you repeat your shot.", 3000);
											self.log(self.get_name(1) + " decided that you repeat your shot.");
											notify(self.get_name(1) + " decided that you repeat your shot.");
											self.state_load()
										}
									} else {
										if (_10d.event == "start") {
											self.popup(self.get_name(1) + " decided to start his turn.", 3000);
											self.log(self.get_name(1) + " decided to start his turn.");
											notify(self.get_name(1) + " decided to start his turn.")
										} else {
											if (_10d.event == "rematch") {
												if (self.rematch) {
													self.reset_game()
												} else {
													self.client_rematch = true
												}
											} else {
												if (_10d.event == "timeover") {} else {
													if (_10d.event == "chat") {
														self.sound.play("chat");
														network.log("[" + network.get_name(1) + "]: " + _10d.message, "chat")
													} else {
														if (_10d.event == "disconnect") {
															var _10e = self.get_name(1) + " left the game.";
															self.popup(_10e, null, "server-info");
															self.log(_10e, "error");
															self.client_id = null;
															self.disconnect(false);
															self.rehost()
														} else {
															if (_10d.event == "surrender") {
																self.end_frame(true, 1)
															} else {
																if (_10d.event == "cuepos") {
																	if (typeof _10d.x == "string") {
																		_10d.x = parseFloat(_10d.x);
																		_10d.y = parseFloat(_10d.y)
																	}
																	self.pool.listenEvents(false);
																	self.pool.setCuePos({
																		x: _10d.x,
																		y: _10d.y
																	});
																	network.fix();
																	self.pool.listenEvents(true)
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
							if (typeof _10d.turn != "undefined" && _10d.turn != null) {
								self.turn = _10d.turn;
								self.set_active_player((_10d.event == "init"), (_10d.event == "replay"))
							}
						}
					}
					if (_10c > 1) {
						self.log(self.get_name(1) + " has been desynced! (shoot > 1)", "error")
					}
					if (data.packets.length > 0) {
						self.last_ack = parseInt(data.packets[data.packets.length - 1].time)
					}
				}
			})
		}
	},
	this.reset_score = function() {
		var self = this;
		$("#players .p1 .score").text("0");
		$("#players .p2 .score").text("0");
		self.reset_break()
	},
	this.set_active_player = function(_10f, _110) {
		var self = this;
		if (typeof _110 == "undefined") {
			_110 = false
		}
		var _111 = 0;
		if (self.turn == self.id) {
			_111 = 0
		} else {
			_111 = 1
		}
		if (typeof _10f == "undefined") {
			_10f = false
		}
		self.shot_timer = self.shottime + (self.turn != self.id ? 2 : 0);
		$("#players > div").removeClass("current");
		$("#players > div").eq(_111).addClass("current");
		var _112 = self.get_name(_111) + (_10f ? " to break.": " 's turn.");
		self.set_title();
		if (!_110) {
			self.popup(_112, 1000);
			notify(_112);
			self.log(_112)
		}
	},
	this.start_timer = function() {
		var self = this;
		if (self.frame_timer_handle != null) {
			clearInterval(self.frame_timer_handle)
		}
		self.frame_timer_handle = setInterval(function() {
			network.frame_timer += 1;
			var m = parseInt(network.frame_timer / 60);
			var s = network.frame_timer - (m * 60);
			if (m < 10) {
				m = "0" + m
			}
			if (s < 10) {
				s = "0" + s
			}
			$("#frame-time").text("frame time: " + m + ":" + s);
			if (self.pool.isFrozen() && self.shottime > 0 && $("div.frame-summary").length == 0) {
				if (self.shot_timer > 0) {
					self.shot_timer -= 1;
					if (self.shot_timer == 0) {
						self.time_over()
					}
					var time = (network.shot_timer - (self.turn != self.id ? 2 : 0));
					if (time < 0 && self.turn != self.id) {
						time = 0
					}
					m = parseInt(time / 60);
					s = time - (m * 60);
					if (m < 10) {
						m = "0" + m
					}
					if (s < 10) {
						s = "0" + s
					}
					$("#players > div.current div.time-left").text(m + ":" + s)
				}
			}
		},
		1000)
	},
	this.stop_timer = function() {
		var self = this;
		clearInterval(self.frame_timer_handle)
	},
	this.reset_timer = function() {
		var self = this;
		self.stop_timer();
		self.frame_timer = 0;
		$("#frame-time").text("frame time: 00:00")
	},
	this.set_name = function(_113, name, flag) {
		if (typeof flag == "undefined") {
			var flag = "none"
		}
		$("#players .p" + (_113 + 1) + " .name").text(name);
		$("#players .p" + (_113 + 1) + " > img").remove();
		$("#players .p" + (_113 + 1)).prepend($("<img />").attr("src", "media/images/flags/" + flag + ".gif").addClass("lang"))
	},
	this.get_name = function(_114) {
		return $("#players .p" + (_114 + 1) + " .name").text()
	},
	this.get_break = function() {
		return parseInt($("#current-break").text().split(": ")[1])
	},
	this.reset_break = function() {
		var self = this;
		self.max_turn_break = Math.max(self.max_turn_break, self.get_break());
		$("#current-break").text("break: 0");
		$("#players div.time-left").text("00:00")
	},
	this.add_break = function(_115) {
		var self = this;
		var _116 = self.get_break();
		$("#current-break").text("break: " + (_116 + _115))
	},
	this.set_frames = function(_117) {
		$("#frame-count strong").text(_117)
	},
	this.reset_frames = function() {
		var self = this;
		$("#frame-count").html("0(<strong>" + self.get_frames() + "</strong>)0")
	},
	this.get_frames = function(_118) {
		var self = this;
		if (typeof _118 == "undefined") {
			return self.frames
		} else {
			if (_118 == 0) {
				return parseInt($("#frame-count").text().split("(")[0])
			} else {
				if (_118 == 1) {
					return parseInt($("#frame-count").text().split(")")[1])
				}
			}
		}
	},
	this.add_frame = function(_119) {
		var self = this;
		if (_119 == 0) {
			$("#frame-count").html((self.get_frames(0) + 1) + "(<strong>" + self.get_frames() + "</strong>)" + self.get_frames(1))
		} else {
			if (_119 == 1) {
				$("#frame-count").html(self.get_frames(0) + "(<strong>" + self.get_frames() + "</strong>)" + (self.get_frames(1) + 1))
			}
		}
	},
	this.add_score = function(_11a, _11b, faul) {
		var self = this;
		if (self.turn != self.id) {
			if (_11a == 0) {
				_11a = 1
			} else {
				_11a = 0
			}
		}
		if (typeof self.vars.practice != "undefined" || self.client_id == null) {
			if (_11a == 1) {
				self.reset_break();
				return
			} else {
				if (_11b == 0) {
					self.reset_break()
				}
			}
		}
		if (_11b > 0) {
			if (!faul) {
				self.add_break(_11b)
			}
			if (_11a == 0) {} else {}
			current_score = self.get_score(_11a);
			$("#players .p" + (_11a + 1) + " .score").text(current_score + _11b)
		}
	},
	this.get_score = function(_11c) {
		return parseInt($("#players .p" + (_11c + 1) + " .score").text())
	},
	this.own_turn = function() {
		var self = this;
		if (config.debug) {
			return true
		}
		if (self.pause) {
			return false
		}
		if ((self.turn == self.id || typeof self.vars.practice != "undefined" || self.client_id == null) && self.can_shoot_timeout && $("div.game-info").length == 0 && $("div.frame-summary").length == 0) {
			return true
		}
		return false
	},
	this.end_turn = function() {
		var self = this;
		self.shot_timer = self.shottime + (self.turn != self.id ? 2 : 0)
	},
	this.end_frame = function(_11d, _11e) {
		var self = this;
		if (typeof _11d == "undefined") {
			_11d = false
		}
		var _11f = "";
		var _120 = false;
		var _121 = network.get_score(0);
		var _122 = network.get_score(1);
		if (_121 < _122 || (_11d && _11e == 0)) {
			_11f = "<strong>" + network.get_name(1) + " </strong>wins.";
			network.add_frame(1);
			if (network.get_frames() == 1 || network.get_frames(1) >= parseInt(self.get_frames() / 2) + 1) {
				_120 = true
			}
		} else {
			if (_121 > _122 || (_11d && _11e == 1)) {
				_11f = "<strong>You </strong>win.";
				network.add_frame(0);
				if (network.get_frames() == 1 || network.get_frames(0) >= parseInt(self.get_frames() / 2) + 1) {
					_120 = true
				}
			} else {
				_11f = "It's a <strong>tie</strong>"
			}
		}
		$summary = $("<div class=\"result\">" + (_11d ? (_11e == 0 ? "<strong>You</strong>": "<strong>" + network.get_name(1) + "</strong>") + " surrendered the frame.<br>": "") + (_120 ? "Match": "Frame") + " ended.<br> " + _11f + "</div>" + "<p class=\"what-next\">What would you like to do next?</p>" + "<div class=\"actions\">" + "<ul>" + "<li><button name=\"disconnect\">Disconnect?</button></li>" + "<li><button name=\"rematch\"><strong>" + (_120 ? "Rematch": "Next frame") + "?</strong></button></li>" + "</ul>" + "</div>");
		self.pool.listenEvents(false);
		$summary.find("button[name=disconnect]").click(function() {
			window.location.href = "index.php";
			return false
		});
		$summary.find("button[name=rematch]").click(function() {
			var _123 = network.get_score(0);
			var _124 = network.get_score(1);
			if (typeof network.vars.practice != "undefined" || network.client_id == null) {
				network.reset_game()
			} else {
				network.call_rematch();
				if (!network.client_rematch) {
					network.popup("Waiting for opponent response...");
					self.log("Waiting for opponent response...")
				} else {
					network.reset_game()
				}
			}
			$(this).parents("div.summary").fadeOut(500,
			function() {
				$(this).remove()
			});
			return false
		});
		self.popup($summary, null, "summary");
		network.rules.required_ball = "red"
	},
	this.rehost = function(_125) {
		var self = this;
		if (typeof _125 == "undefined") {
			var _125 = false
		}
		if ($(".summary").length == 0) {
			$summary = $("<div class=\"result\"><strong>" + network.get_name(1) + "</strong> " + (_125 ? " timed out": " disconnected") + ".<br>Match ended.</div>" + "<p class=\"what-next\">What would you like to do next?</p>" + "<div class=\"actions\">" + "<ul>" + "<li><button name=\"disconnect\">Disconnect?</button></li>" + "<li><button name=\"join\"><strong>Join game</strong></button></li>" + "<li><button name=\"host\"><strong>Host game</strong></button></li>" + "</ul>" + "</div>");
			$summary.find("button[name=disconnect]").click(function() {
				window.location.href = "index.php";
				return false
			});
			$summary.find("button[name=join]").click(function() {
				$("#dashboard").parents(".wrapper").removeClass("closed");
				$(this).parents("div.summary").fadeOut(500,
				function() {
					$(this).remove()
				});
				return false
			});
			$summary.find("button[name=host]").click(function() {
				$("#dashboard").parents(".wrapper").removeClass("closed");
				$("#host-server").parent(".wrapper").removeClass("closed");
				$(this).parents("div.summary").fadeOut(500,
				function() {
					$(this).remove()
				});
				return false
			});
			self.popup($summary, null, "summary")
		}
	},
	this.switch_turn = function(faul, miss) {
		var self = this;
		if (config.debug || typeof self.vars.practice != "undefined" || self.client_id == null) {
			return true
		}
		if (self.turn == self.id) {
			self.turn = self.client_id
		} else {
			self.turn = self.id
		}
		self.set_active_player(false, (faul || miss));
		if (self.turn == self.id) {
			if (!faul && !miss) {} else {
				self.pool.listenEvents(false);
				$choose_turn = $("<div>" + self.get_name(1) + " fouls. You can choose to start your turn or order him to try again." + "<div class=\"actions\">" + "<ul>" + "<li><button name=\"my_turn\">Start your turn?</button></li>" + "<li><button name=\"opponent_replay\">Order to replay?</button></li>" + "</ul>" + "</div></div>");
				notify(self.get_name(1) + " fouls. You can choose to start your turn or order him to try again.");
				$choose_turn.find("button[name=my_turn]").click(function() {
					network.start();
					network.pool.listenEvents(true);
					$(this).parents("div.game-info").fadeOut(500,
					function() {
						$(this).remove()
					});
					return false
				});
				$choose_turn.find("button[name=opponent_replay]").click(function() {
					if (!$(this).parents("div.game-info").is(":animated")) {
						network.replay();
						network.state_load();
						network.pool.listenEvents(true);
						$(this).parents("div.game-info").fadeOut(500,
						function() {
							$(this).remove()
						})
					}
					return false
				});
				self.popup($choose_turn)
			}
		} else {
			if (!faul && !miss) {} else {
				self.popup("You foul. Now it's for your opponent do decide if it's his turn or you repeat the same shot.", 3000)
			}
		}
		self.shot_timer = self.shottime + (self.turn != self.id ? 2 : 0);
		self.reset_break()
	},
	this.replay = function() {
		var self = this;
		self.send({
			"event": "replay",
			"turn": self.client_id
		});
		self.switch_turn(false, false)
	},
	this.start = function() {
		var self = this;
		self.send({
			"event": "start"
		})
	},
	this.time_over = function() {
		var self = this;
		if (self.id == self.turn) {
			$(".game-info").fadeOut(500);
			self.add_score(1, 4, true)
		} else {
			self.add_score(0, 4, true)
		}
		self.state_save();
		self.switch_turn(true, false)
	},
	this.call_rematch = function(_126) {
		var self = this;
		self.rematch = true;
		if (self.client_id != null) {
			self.send({
				"event": "rematch"
			})
		}
	},
	this.calculate_remaining_points = function() {
		var self = this;
		var _127 = 0;
		for (var i = 0; i < self.pool.getBallCount(); i++) {
			var ball = self.pool.getBall(i);
			if (ball.type == "white") {
				continue
			}
			if (ball.alive) {
				if (ball.type == "red") {
					_127 += 8
				} else {
					_127 += self.rules.ball_points[ball.type]
				}
			}
		}
		$("dt.points-remaining + dd > span").text(_127)
	},
	this.reset_game = function(init) {
		if (typeof init == "undefined") {
			init = false
		}
		$(".game-info, .frame-summary").remove();
		var self = this;
		var _128 = self.get_score(0);
		var _129 = self.get_score(1);
		var _12a = false;
		if (_128 < _129) {
			if (network.get_frames() == 1 || network.get_frames(1) >= parseInt(self.get_frames() / 2) + 1) {
				_12a = true
			}
		} else {
			if (_128 > _129) {
				if (network.get_frames() == 1 || network.get_frames(0) >= parseInt(self.get_frames() / 2) + 1) {
					_12a = true
				}
			}
		}
		self.pool.listenEvents(false);
		self.rules.first_ball = null;
		self.rules.required_ball = "red";
		self.rules.last_pot = null;
		self.rules.potted_balls = [];
		self.max_turn_break = 0;
		if (!init) {
			if (self.last_break_id == self.id) {
				self.turn = self.client_id
			} else {
				self.turn = self.id
			}
			self.last_break_id = self.turn
		}
		self.reset_score();
		self.base_state_load();
		self.calculate_remaining_points();
		if (!init) {
			self.set_active_player(true)
		}
		self.rematch = false;
		self.client_rematch = false;
		self.reset_timer();
		self.start_timer();
		if (_12a) {
			self.reset_frames()
		}
		self.pool.listenEvents(true)
	},
	this.shoot = function(x, y) {
		var self = this;
		if (self.own_turn()) {
			if (self.client_id != null) {
				self.send({
					"event": "shoot",
					"x": x,
					"y": y,
					"player": self.id,
					"hash": self.gen_hash()
				});
				self.can_shoot_timeout = false;
				setTimeout(function() {
					network.can_shoot_timeout = true
				},
				2100)
			}
		}
	},
	this.fix = function() {
		var self = this;
		for (var i = 0; i < self.pool.getBallCount(); i++) {
			var pos = self.pool.getBall(i).pos;
			self.pool.setBall(i, {
				x: parseInt(pos.x),
				y: parseInt(pos.y)
			})
		}
	},
	this.gen_hash = function() {
		var self = this;
		var hash = "";
		for (var i = 0; i < self.pool.getBallCount(); i++) {
			pos = self.pool.getBall(i).pos;
			hash += hex_md5(hash + pos.x);
			hash += hex_md5(hash + pos.y)
		}
		hash = hex_md5(hash);
		return hash
	},
	this.state_save = function() {
		var self = this;
		self.last_state = [];
		self.pool.listenEvents(false);
		for (var i = 0; i < self.pool.getBallCount(); i++) {
			ball = self.pool.getBall(i);
			self.last_state.push({
				x: ball.pos.x,
				y: ball.pos.y,
				alive: ball.alive
			})
		}
		self.last_required = self.rules.required_ball;
		self.pool.listenEvents(true)
	},
	this.state_load = function() {
		var self = this;
		self.shot_timer = self.shottime + (self.turn != self.id ? 2 : 0);
		self.pool.listenEvents(false);
		for (var i = 0; i < self.pool.getBallCount(); i++) {
			var pos = {
				x: self.last_state[i].x,
				y: self.last_state[i].y
			};
			self.pool.setBall(i, pos);
			self.pool.setAlive(i, self.last_state[i].alive)
		}
		self.rules.required_ball = self.last_required;
		self.pool.isCueSetting = false;
		self.pool.listenEvents(true);
		self.calculate_remaining_points()
	},
	this.base_state_save = function() {
		var self = this;
		self.base_state = [];
		self.pool.listenEvents(false);
		for (var i = 0; i < self.pool.getBallCount(); i++) {
			ball = self.pool.getBall(i);
			self.base_state.push({
				x: ball.pos.x,
				y: ball.pos.y,
				alive: ball.alive
			})
		}
		self.pool.listenEvents(true)
	},
	this.base_state_load = function() {
		var self = this;
		self.pool.listenEvents(false);
		for (var i = 0; i < self.pool.getBallCount(); i++) {
			var pos = {
				x: self.base_state[i].x,
				y: self.base_state[i].y
			};
			self.pool.setBall(i, pos);
			self.pool.setAlive(i, self.base_state[i].alive)
		}
		self.pool.listenEvents(true);
		self.pool.setAlive(0, false);
		self.pool.isCueSetting = true
	},
	this.setup_gamemode = function(mode) {
		var self = this;
		if (typeof mode == "undefined" || mode == "") {
			mode = "snooker"
		}
		self.pool.listenEvents(false);
		self.pool.clearBalls();
		var _12b = 19;
		var _12c = self.pool.getR();
		self.pool.addBall(self.rules.ball_positions["white"], "white");
		self.pool.addBall(self.rules.ball_positions["yellow"], "yellow");
		self.pool.addBall(self.rules.ball_positions["brown"], "brown");
		self.pool.addBall(self.rules.ball_positions["green"], "green");
		self.pool.addBall(self.rules.ball_positions["blue"], "blue");
		self.pool.addBall(self.rules.ball_positions["pink"], "pink");
		self.pool.addBall(self.rules.ball_positions["black"], "black");
		self.pool.addBall({
			x: 716,
			y: 281
		},
		"red");
		self.pool.addBall({
			x: 716 + _12b * 1,
			y: 281 - _12c
		},
		"red");
		self.pool.addBall({
			x: 716 + _12b * 1,
			y: 281 + _12c
		},
		"red");
		if (mode == "snooker" || mode == "short-snooker") {
			self.pool.addBall({
				x: 716 + _12b * 2,
				y: 281 - _12c * 2
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 2,
				y: 281
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 2,
				y: 281 + _12c * 2
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 3,
				y: 281 - _12c * 1
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 3,
				y: 281 - _12c * 3
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 3,
				y: 281 + _12c * 1
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 3,
				y: 281 + _12c * 3
			},
			"red")
		}
		if (mode == "snooker") {
			self.pool.addBall({
				x: 716 + _12b * 4,
				y: 281 - _12c * 4
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 4,
				y: 281 - _12c * 2
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 4,
				y: 281
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 4,
				y: 281 + _12c * 2
			},
			"red");
			self.pool.addBall({
				x: 716 + _12b * 4,
				y: 281 + _12c * 4
			},
			"red")
		}
		self.pool.setAlive(0, false);
		self.pool.isCueSetting = true;
		self.base_state_save();
		self.pool.listenEvents(true)
	},
	this.register_command = function(_12d) {
		var self = this;
		self.commands.push(_12d)
	},
	this.console = function(_12e) {
		var self = this;
		if (_12e.substring(0, 1) == "/") {
			self.log(_12e);
			for (var i = 0; i < self.commands.length; i++) {
				var args = _12e.split(" ");
				_12e = args.shift().substring(1);
				if (self.commands[i] == _12e) {
					if (args.length == 0) {
						eval(_12e + "();")
					} else {
						if (args.length == 1) {
							args = args[0]
						}
						eval(_12e + "(args);")
					}
					return true
				}
			}
			self.log("Unknown command: " + _12e.substring(1), "error")
		} else {
			return self.say(_12e)
		}
	},
	this.say = function(_12f) {
		var self = this;
		if (self.can_chat && _12f != "" && typeof self.vars.id != "undefined") {
			self.log("[" + self.get_name(0) + "]: " + _12f, "chat");
			if (self.client_id != null) {
				network.send({
					"event": "chat",
					"message": _12f
				})
			}
			self.can_chat = false;
			setTimeout(function() {
				network.can_chat = true
			},
			500);
			return true
		}
		return false
	},
	this.surrender = function() {
		var self = this;
		if (typeof self.vars.id != "undefined") {
			if (self.turn == self.id) {
				if (self.client_id != null) {
					network.send({
						"event": "surrender"
					})
				}
				self.end_frame(true, 0)
			}
		}
	},
	this.prepare = function() {
		var self = this;
		this.vars = [];
		if (window.location.href.indexOf("?") != -1) {
			var _130 = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
			for (var i = 0; i < _130.length; i++) {
				hash = _130[i].split("=");
				this.vars.push(hash[0]);
				this.vars[hash[0]] = hash[1]
			}
		}
		self.log("Loading websnooker...")
	}
};


$(window).bind("unload",
function(e) {
	$.ajax({
		url: config.masterserver + "?query=send&id=" + network.vars.id + "&event=disconnect",
		success: function(data) {},
		async: false
	})
});
function sleep(_131) {
	var _132 = new Date().getTime();
	for (var i = 0; i < 10000000; i++) {
		if ((new Date().getTime() - _132) > _131) {
			break
		}
	}
};
window_active = true;
$(window).focus(function() {
	window_active = true
});
$(window).blur(function() {
	window_active = false
});
function notify_permission() {
	if (support_notifications() && window.webkitNotifications.checkPermission() != 0) {
		window.webkitNotifications.requestPermission()
	}
};
function notify(_133) {
	if (support_notifications()) {
		if (window.webkitNotifications.checkPermission() == 0) {
			if (!window_active) {}
		}
	}
};
var auto_refresh_timeout = null;


/**
 * 注册事件吧
 */
$(function() {
	$("body").css("overflow", "hidden");
	if ($(window).height() <= 666) {
		$("body").css("overflow-y", "scroll")
	}
	$(window).resize(function() {
		if ($(window).height() <= 666) {
			$("body").css("overflow-y", "scroll")
		} else {
			$("body").css("overflow-y", "hidden")
		}
	});
	network.prepare();
	if (__18("player") == "Guest") {
		$("#enter-name").parent(".wrapper").removeClass("closed")
	}
	$(window).keyup(function(e) {
		if ($("#enter-name").is(":visible")) {
			if ($("#enter-name input[name=player]").val() != "") {
				$("#enter-name button[name=save]").removeAttr("disabled")
			} else {
				$("#enter-name button[name=save]").attr("disabled", "disabled")
			}
		}
	});
	$("#enter-name input[name=player]").change(function() {
		if ($(this).val() != "") {
			$(this).parents("#enter-name").find("button[name=save]").removeAttr("disabled")
		} else {
			$(this).parents("#enter-name").find("button[name=save]").attr("disabled", "disabled")
		}
	});
	$("#enter-name button[name=save]").click(function() {
		var _134 = $("#enter-name input[name=player]").val();
		if (_134 != "") {
			__20("player", _134);
			__20("enter-name", "off");
			$.ajax({
				url: "dashboard.php",
				cache: false,
				data: {
					"nick": _134
				}
			});
			$("#enter-name").parent().addClass("closed")
		}
		return false
	});
	$("#community-menu ul.categories li a[href=#news]").click(function() {
		$("#news").parent().removeClass("closed");
		return false
	});
	$("#community-menu ul.categories li a[href=#welcome-screen]").click(function() {
		$("#welcome-screen").parent().show();
		return false
	});
	$("#community-menu ul.categories li a[href=#webchat], #irc-webchat .top-panel").click(function() {
		$("#irc-webchat").toggleClass("closed");
		return false
	});
	$("#community-menu ul.categories li a[href=#credits]").click(function() {
		$("#credits").parent(".wrapper").toggleClass("closed");
		return false
	});
	$("a.irc").live("click",
	function() {
		$("#irc-webchat").removeClass("closed");
		return false
	});
	$("#news .top-panel").click(function() {
		$(this).parents(".wrapper").toggleClass("closed");
		__20("news-" + hex_md5($("#news ul li:first time").text()), "off");
		return false
	});
	$("#news button[name=okay]").click(function() {
		$(this).parents(".wrapper").addClass("closed");
		__20("news-" + hex_md5($("#news ul li:first time").text()), "off");
		return false
	});
	$("#credits button[name=okay]").click(function() {
		$(this).parents(".wrapper").addClass("closed");
		return false
	});
	$("div.social iframe").load(function() {
		$(this).parent(".social").width($(this).width() - 5)
	});
	$("button[name=welcome]").click(function() {
		notify_permission();
		$(this).parents(".wrapper").hide();
		_135();
		$("#settings").parents(".wrapper").removeClass("closed");
		return false
	});
	function _135() {
		$("#settings input[name=player]").val(__18("player"));
		$("#settings select[name=skin]").val(__18("skin"));
		$("#settings select[name=scoreboard-style]").val(__18("scoreboard_style"));
		$("#settings radio").removeAttr("checked");
		$("#settings input:radio[value=" + __18("scoreboard_pos") + "]").attr("checked", "checked");
		$("#settings input[name=sound]").attr("checked", __18("sound") == "on");
		$("#settings input[name=shadows]").attr("checked", __18("shadows") == "on");
		$("#settings input[name=hints]").attr("checked", __18("hints") == "on");
		$("#settings input[name=cue]").attr("checked", __18("cue") == "on");
		$("#settings select[name=background]").val(__18("background"))
	};
	function _136(init) {
		if (typeof init == "undefined") {
			init = false
		}
		__20("player", $("#settings input[name=player]").val());
		__20("skin", $("#settings select[name=skin]").val());
		__20("scoreboard_pos", $("#settings input:radio[name=scoreboard-position]:checked").val());
		__20("scoreboard_style", $("#settings select[name=scoreboard-style]").val());
		__20("sound", ($("#settings input[name=sound]").attr("checked") ? "on": "off"));
		__20("shadows", ($("#settings input[name=shadows]").attr("checked") ? "on": "off"));
		__20("hints", ($("#settings input[name=hints]").attr("checked") ? "on": "off"));
		__20("background", $("#settings select[name=background]").val());
		__20("cue", ($("#settings input[name=cue]").attr("checked") ? "on": "off"));
		if (!init) {
			$.ajax({
				url: "dashboard.php",
				cache: false,
				data: {
					"nick": __18("player")
				}
			})
		}
		if (typeof globalGame != "undefined") {
			globalGame.shadowsEnable(__18("shadows") == "on");
			globalGame.hintsEnable(__18("hints") == "on")
		}
		$("link.skin").remove();
		$skin = $("<link />").addClass("skin").attr("rel", "stylesheet").attr("type", "text/css").attr("href", config.skin_path + (config.skin != null ? config.skin: "default") + "/stylesheets/" + (config.skin != null ? config.skin: "default") + ".css");
		$("head").append($skin);
		scoreboard_pos = __18("scoreboard_pos");
		$scoreboard = $("#scoreboard").clone();
		$("#scoreboard").remove();
		if (scoreboard_pos == "top") {
			$("#pool").before($scoreboard)
		} else {
			$("#pool").after($scoreboard)
		}
		scoreboard_style = __18("scoreboard_style");
		$("#scoreboard").removeClass("extended").removeClass("compact").removeClass("classic");
		$("#scoreboard").addClass(scoreboard_style);
		$("style.background").remove();
		$("body").css({
			"background-color": config.backgrounds[__18("skin")][__18("background")].color,
			"background-image": "url(" + config.backgrounds[__18("skin")][__18("background")].image + ")"
		})
	};
	_135();
	_136(true);
	$(window).bind("unload",
	function() {
		$.ajax({
			url: "dashboard.php",
			cache: false,
			data: {
				"unregister": true
			}
		})
	});
	$(window).bind("beforeunload",
	function(e) {
		if (typeof network.vars.id != "undefined") {
			return "Do you really want to leave the game?"
		}
	});
	$("#console .top-panel").click(function() {
		$(this).parent().toggleClass("closed");
		if (!$(this).parent().hasClass("closed")) {
			$("#console ul.messages").scrollTop($("#console ul.messages").attr("scrollHeight"));
			$("input[name=chat]").focus()
		} else {
			$(window).click()
		}
		return false
	});
	$("#dashboard .top-panel").click(function() {
		if (typeof network.vars.practice != "undefined" || typeof network.vars.id != "undefined") {
			$("#dashboard").parents(".wrapper").toggleClass("closed");
			if (!$("#dashboard").parents(".wrapper").hasClass("closed")) {
				_137()
			}
		}
		return false
	});
	$("#rules .top-panel").click(function() {
		$(this).parents(".wrapper").toggleClass("closed");
		return false
	});
	$("#help .top-panel").click(function() {
		$(this).parent("#help").toggleClass("closed")
	});
	$("#settings button[name=cancel]").click(function() {
		$("#settings").parents(".wrapper").addClass("closed");
		return false
	});
	$("#settings button[name=save]").click(function() {
		$("#settings").parents(".wrapper").addClass("closed");
		_136();
		return false
	});
	$("#settings .top-panel").click(function() {
		_135();
		$(this).parents(".wrapper").toggleClass("closed")
	});
	$("#frame-stats .top-panel").click(function() {
		$("#frame-stats").toggleClass("closed");
		return false
	});
	$("#match-options .top-panel").click(function() {
		$(this).parents(".wrapper").toggleClass("closed")
	});
	$("button[name=surrender]").click(function() {
		$(this).parents(".wrapper").addClass("closed");
		network.surrender();
		return false
	});
	$("#power-meter").height("50%");
	$("#power-bar").click(function(e) {
		$("#power-meter").height($(this).height() - (e.pageY - $(this).offset().top))
	});
	$(window).keyup(function(e) {
		if ($(e.target).is(":not(input, textarea, select, radio)") || $("input[name=chat]")[0] == document.activeElement) {
			if ($("input[name=chat]")[0] != document.activeElement || $("#console").hasClass("closed")) {
				if (e.keyCode == 73) {
					$("#irc-webchat").toggleClass("closed")
				}
				if (e.keyCode == 79) {
					$("#match-options").parents(".wrapper").toggleClass("closed")
				}
				if (e.keyCode == 48) {
					$("#power-meter").height("100%")
				}
				if (e.keyCode == 49) {
					$("#power-meter").height("10%")
				}
				if (e.keyCode == 50) {
					$("#power-meter").height("20%")
				}
				if (e.keyCode == 51) {
					$("#power-meter").height("30%")
				}
				if (e.keyCode == 52) {
					$("#power-meter").height("40%")
				}
				if (e.keyCode == 53) {
					$("#power-meter").height("50%")
				}
				if (e.keyCode == 54) {
					$("#power-meter").height("60%")
				}
				if (e.keyCode == 55) {
					$("#power-meter").height("70%")
				}
				if (e.keyCode == 56) {
					$("#power-meter").height("80%")
				}
				if (e.keyCode == 57) {
					$("#power-meter").height("90%")
				}
				if (e.keyCode == 83) {
					_135();
					$("#settings").parents(".wrapper").toggleClass("closed")
				}
				if (e.keyCode == 68 || e.keyCode == 27) {
					if (typeof network.vars.practice != "undefined" || typeof network.vars.id != "undefined") {
						$("#dashboard").parents(".wrapper").toggleClass("closed");
						if (!$("#dashboard").parents(".wrapper").hasClass("closed")) {
							_137()
						}
					}
				}
				if (e.keyCode == 70) {
					$("#frame-stats").toggleClass("closed")
				}
				if (e.keyCode == 72) {
					$("#help").toggleClass("closed")
				}
				if (e.keyCode == 82) {
					$("#rules").parents(".wrapper").toggleClass("closed")
				}
			}
			if (e.keyCode == 192) {
				$("#console").toggleClass("closed");
				$("#console ul.messages").scrollTop($("#console ul.messages").attr("scrollHeight"));
				$("input[name=chat]").val("");
				if (!$("#console").hasClass("closed")) {
					$("input[name=chat]").focus()
				}
			}
		}
	});
	$(window).keypress(function(e) {
		if ($(e.target).is(":not(input, textarea, select, radio)") || $("input[name=chat]")[0] == document.activeElement) {
			if ($("input[name=chat]")[0] != document.activeElement || $("#console").hasClass("closed")) {
				if (e.keyCode == 45) {
					$("#power-meter").height($("#power-meter").height() - 5)
				}
				if (e.keyCode == 61) {
					$("#power-meter").height($("#power-meter").height() + 5)
				}
				if ($("#power-meter").height() > $("#power-bar").height()) {
					$("#power-meter").height($("#power-bar").height())
				}
			}
		}
	});
	$(window).mousewheel(function(e, _138) {
		if (_138 > 0) {
			$("#power-meter").height($("#power-meter").height() + 5)
		} else {
			if (_138 < 0) {
				$("#power-meter").height($("#power-meter").height() - 5)
			}
		}
		if ($("#power-meter").height() > $("#power-bar").height()) {
			$("#power-meter").height($("#power-bar").height())
		}
		if ($(e.target).parent().attr("id") != "console") {
			return false
		}
	});
	$("#servers table tr").live("click",
	function() {
		$("#servers table tr").removeClass("selected");
		$(this).addClass("selected");
		$("#servers").data("selected", $(this).attr("id"));
		$("button[name=join]").removeAttr("disabled");
		return false
	});
	function _139(_13a) {
		filter = $("input[name=filter]").val();
		$("#servers table tr").removeClass("selected");
		$("button[name=join]").attr("disabled", "disabled");
		if (filter != "") {
			$("#servers table").find("tr").not(":first").filter(":not(:contains(" + filter + "))").hide();
			$("#servers table").find("tr").not(":first").filter(":contains(" + filter + ")").show()
		} else {
			$("#servers table tr").show()
		}
	};
	$("input[name=chat]").keydown(function(e) {
		if (e.keyCode == 13) {
			if (network.console($(this).val())) {
				$(this).val("")
			}
			return false
		}
		if (e.keyCode == 192) {
			return false
		}
		if ($(this).val().length >= 150) {
			return false
		}
	});
	$("input[name=filter]").keyup(function() {
		_139()
	}).change(function() {
		_139()
	});
	$("input[name=filter]").addClass("tip").data("tip", "Filter servers").val("Filter servers");
	$("input[name=filter]").focus(function() {
		if ($(this).val() == $(this).data("tip")) {
			$(this).val("").removeClass("tip")
		}
	});
	$("input[name=filter]").blur(function() {
		if ($(this).val() == "") {
			$(this).val($(this).data("tip")).addClass("tip")
		}
	});
	setInterval(_137, 5000);
	function _137() {
		if (!$("#dashboard").parents(".wrapper").hasClass("closed") || typeof network.vars.practice != "undefined") {
			$.ajax({
				url: "dashboard.php",
				cache: false,
				data: {
					"info": true
				},
				success: function(data) {
					if (data["invited"] != false) {
						data.invited = $.parseJSON(data.invited);
						$invitation_info = $("div.common-popup.invitation div.container p");
						$invitation_info.children("span").eq(0).text(data.invited.nick);
						$invitation_info.children("span").eq(1).text("Game mode: " + config.gamemodes[data.invited.data.gamemode] + ", Frames: " + data.invited.data.frames + ", Shot time: " + config.shottime[data.invited.data.shottime] + ", Password: " + (data.invited.data.password == 1 ? "Yes": "No"));
						$("#servers").data("selected", data.invited.data.server);
						$("#servers").data("password", data.invited.data.password);
						$("div.common-popup.invitation").parent(".wrapper").removeClass("closed")
					}
					$("div.lounge").data("selected", $("div.lounge ul.players li.selected").attr("id"));
					$("div.lounge ul.players li").remove();
					if (typeof data.nicks != "undefined") {
						$.each(data["nicks"],
						function(key, _13b) {
							if (!_13b.playing) {
								$("div.lounge ul.players").append($("<li />").attr("id", key.replace(".", "-")).append($("<a />").text(_13b["nick"])))
							}
						});
						$.each(data["nicks"],
						function(key, _13c) {
							if (_13c.playing) {
								$("div.lounge ul.players").append($("<li />").addClass("inactive").attr("id", key.replace(".", "-")).append($("<a />").text(_13c["nick"])))
							}
						});
						$("div.lounge ul.players li#" + $("div.lounge").data("selected")).addClass("selected")
					}
					var _13d = $("div.lounge ul.players li").length;
					$("div.lounge div.hint span").text((_13d > 0 ? _13d: "no") + " players in it")
				}
			})
		}
		if (!$("#dashboard").parents(".wrapper").hasClass("closed")) {
			$("#dashboard button[name=join]").attr("disabled", "disabled");
			if ($("#servers tr.selected").length > 0) {
				$("#dashboard button[name=join]").removeAttr("disabled");
				$("#servers").data("selected", $("#servers tr.selected").attr("id"))
			}
			network.get("servers", {},
			function(data) {
				$("#servers p.status").hide();
				$("#servers table tr").not(":first").remove();
				if (typeof data != "undefined" && data["servers"].length > 0) {
					$.each(data["servers"],
					function(i, _13e) {
						var _13f = "-";
						if (typeof _13e.client_player != "undefined" && _13e.client_player != null && _13e.client_player != "") {
							_13f = "<img src=\"media/images/flags/" + _13e.client_lang + ".gif\" class=\"lang\" />" + _13e["client_player"]
						}
						$server = $("<tr />");
						$server.attr("id", _13e["server_id"]);
						if (_13e["password"] == 1) {
							$server.addClass("password")
						}
						$server.append($("<th />").text(_13e["server_name"]));
						$server.append($("<th />").text(_13e["password"] == 1 ? "Yes": "No"));
						$server.append($("<th />").text(_13e["frames"]));
						$server.append($("<th />").text(config.shottime[_13e["shottime"]]));
						$server.append($("<th />").text(config.gamemodes[_13e["gamemode"]]));
						$server.append($("<th />").html("<img src=\"media/images/flags/" + _13e["host_lang"] + ".gif\" class=\"lang\" />" + _13e["host_player"]));
						$server.append($("<th />").html(_13f));
						$("#servers table").append($server)
					});
					if (data["servers"].length == 0) {
						$("#servers p.status").show()
					}
					if ($("#servers tr#" + $("#servers").data("selected")).length > 0) {
						$("#servers tr#" + $("#servers").data("selected")).addClass("selected")
					}
				} else {
					$("#servers p.status").show()
				}
				$("#player-count").text(data["count"]["players"] + " players in " + data["count"]["servers"] + " servers")
			})
		}
	};
	$("button[name=refresh]").click(function() {
		_137();
		return false
	});
	$("button[name=host], a.host").click(function() {
		notify_permission();
		$("input[name=server_name]").val(__18("server_name"));
		$("#host-server").parents(".wrapper").removeClass("closed");
		return false
	});
	$("button[name=practice]").click(function() {
		notify_permission();
		window.location.href = "index.php?practice=single";
		return false
	});
	$("#host-server button[name=cancel]").click(function() {
		$(this).parents("#host-server").parent(".wrapper").addClass("closed");
		return false
	});
	$("#host-server button[name=start]").click(function() {
		__20("server_name", $("input[name=server_name]").val());
		network.ajax("host", {
			"server_name": $("input[name=server_name]").val(),
			"name": __18("player"),
			"gamemode": $("select[name=gamemode] option:selected").val(),
			"shottime": $("select[name=shottime] option:selected").val(),
			"password": $("input[name=server_password]").val(),
			"lang": LANG.code,
			"frames": $("select[name=frames] option:selected").val()
		},
		function(data) {
			var _140 = $("div.lounge ul.players li.selected").attr("id");
			if (_140 != null) {
				_140 = _140.replace("-", ".");
				var _141 = data["server"]["id"];
				$.ajax({
					url: "dashboard.php",
					cache: false,
					data: {
						"invite": _140,
						"server": data["server"]["id"].split("-")[0],
						"gamemode": $("select[name=gamemode] option:selected").val(),
						"shottime": $("select[name=shottime] option:selected").val(),
						"frames": $("select[name=frames] option:selected").val(),
						"password": ($("input[name=server_password]").val() != "" ? 1 : 0)
					},
					success: function(data) {
						window.location.href = "index.php?id=" + _141 + "&host=1"
					}
				})
			} else {
				window.location.href = "index.php?id=" + data["server"]["id"] + "&host=1"
			}
		});
		return false
	});
	$("#enter-password button[name=cancel]").click(function() {
		$(this).parents("#enter-password").parent(".wrapper").addClass("closed");
		return false
	});
	$("#enter-password button[name=join]").click(function() {
		notify_permission();
		$server = $("#servers table tr.selected");
		if ($server.length > 0) {
			if (typeof network.vars.joingame != "undefined") {
				network.ajax("join", {
					"id": network.vars.joingame,
					"name": __18("player"),
					"password": $("input[name=client_password]").val(),
					"lang": LANG.code
				},
				function(data) {
					window.location.href = "index.php?id=" + data["server"]["id"]
				})
			} else {
				if (typeof network.vars.id == "undefined" || $("#servers").data("selected") != network.vars.id.split("-")[0]) {
					network.ajax("join", {
						"id": $("#servers").data("selected"),
						"name": __18("player"),
						"password": $("input[name=client_password]").val(),
						"lang": LANG.code
					},
					function(data) {
						window.location.href = "index.php?id=" + data["server"]["id"]
					})
				}
			}
		}
		$(this).parents(".wrapper").addClass("closed")
	});
	$("#options button[name=join]").click(function() {
		$server = $("#servers table tr.selected");
		if ($server.length > 0) {
			if ($server.hasClass("password")) {
				$("#enter-password").parents(".wrapper").removeClass("closed")
			} else {
				if (typeof network.vars.id == "undefined" || $("#servers").data("selected") != network.vars.id.split("-")[0]) {
					network.ajax("join", {
						"id": $("#servers").data("selected"),
						"name": __18("player"),
						"lang": LANG.code
					},
					function(data) {
						window.location.href = "index.php?id=" + data["server"]["id"]
					})
				}
			}
		}
		return false
	});
	if (typeof network.vars.joingame != "undefined") {
		if (typeof network.vars.password != "undefined" && network.vars.password == 1) {
			$("#enter-password").parents(".wrapper").removeClass("closed")
		} else {
			network.ajax("join", {
				"id": network.vars.joingame,
				"name": __18("player"),
				"lang": LANG.code
			},
			function(data) {
				window.location.href = "index.php?id=" + data["server"]["id"]
			})
		}
	}
	if (typeof network.vars.practice == "undefined" && typeof network.vars.id == "undefined") {
		var _142 = false;
		$("#loading-screen div.progress-bar").animate({
			"width": "100%"
		},
		1000,
		function() {
			_142 = true;
			$("#loading-screen").fadeOut(500)
		});
		$(window).ready(function() {
			if (_142) {
				$("#loading-screen").fadeOut(500)
			}
		})
	} else {
		$(window).ready(function() {
			$("#loading-screen div.progress-bar").animate({
				"width": "100%"
			},
			1000,
			function() {
				$(this).parents("#loading-screen").fadeOut(500)
			})
		})
	}
	$("div.lounge ul.players li").live("click",
	function() {
		if (!$(this).hasClass("inactive")) {
			$(this).parent("ul.players").children("li").removeClass("selected");
			$(this).addClass("selected")
		}
		return false
	});
	$("div.lounge").click(function(e) {
		if (!$(e.target).is("a")) {
			$(this).find("li").removeClass("selected")
		}
	});
	if (typeof network.vars.id != "undefined" && typeof network.vars.host != "undefined") {
		$("div.common-popup.practice").parent(".wrapper").removeClass("closed");
		$("div.common-popup.practice button[name=ok]").click(function() {
			$(this).parents("div.common-popup.practice").parent(".wrapper").addClass("closed");
			return false
		})
	}
	$("div.common-popup.invitation button[name=decline]").click(function() {
		$(this).parents("div.common-popup.invitation").parent(".wrapper").addClass("closed");
		return false
	});
	$("div.common-popup.invitation button[name=accept]").click(function() {
		$(this).parents("div.common-popup.invitation").parent(".wrapper").addClass("closed");
		if ($("#servers").data("password") == 1) {
			$("#enter-password").parents(".wrapper").removeClass("closed")
		} else {
			network.ajax("join", {
				"id": $("#servers").data("selected"),
				"name": __18("player"),
				"lang": LANG.code
			},
			function(data) {
				window.location.href = "index.php?id=" + data["server"]["id"]
			})
		}
		return false
	});
	$.ajax({
		url: "dashboard.php",
		cache: false,
		data: {
			"nick": __18("player")
		},
		complete: function() {
			$.ajax({
				url: "dashboard.php",
				cache: false,
				data: {
					"playing": (typeof network.vars.id == "undefined" ? 0 : 1)
				},
				complete: function() {
					_137()
				}
			})
		}
	});
	$log = $("#console ul.messages");
	$log.children("li").last().removeClass("last");
	$message = $("<li />").html("ijibu ceshi");
	//$message = $("<li />").html("<a href=\"http://webchat.quakenet.org/?channels=websnooker&uio=d4\" class=\"irc\">Come visit WebSnooker IRC Channel: #websnooker @ QuakeNet</a>");
	$message.addClass("last");
	$log.append($message);
	$("#console ul.messages").scrollTop($("#console ul.messages").attr("scrollHeight"))
});

/**
 * 台球规则类
 */
function Rules(pool, _143) {
	_143.loadSound("turn", "media/sounds/turn");
	_143.loadSound("applause", "media/sounds/applause");
	var _144 = 20;
	this.eventStart = function() {
		network.pool = pool;
		network.init()
	};
	this.eventShoot = function(_145) {
		network.state_save();
		network.shoot(_145.x, _145.y)
	};
	this.eventHole = function(_146) {
		if (!network.is_paused()) {
			network.rules.potted_balls.push(_146)
		}
	};
	this.eventStopped = function(_147) {};
	this.spawnBall = function(_148) {
		var pos = network.rules.ball_positions[pool.getBall(_148).type];
		if (pool.isPositionOccupied(pos)) {
			types = ["black", "pink", "blue", "brown", "green", "yellow"];
			pos = null;
			for (var i = 0; i < types.length; i++) {
				var _149 = network.rules.ball_positions[types[i]];
				if (!pool.isPositionOccupied(_149)) {
					pos = _149;
					break
				}
			}
		}
		if (pos == null) {
			pos = pool.getFreeCushionPos(network.rules.ball_positions[pool.getBall(_148).type], _148)
		}
		if (pos != null) {
			pool.setBall(_148, pos);
			pool.setAlive(_148, true)
		}
	};
	this.eventAllStopped = function() {
		if (!network.is_paused()) {
			network.fix();
			var _14a = 0;
			var faul = false;
			var _14b = false;
			var _14c = 0;
			var _14d = null;
			var _14e = false;
			var miss = false;
			for (var i = 0; i < pool.getBallCount(); i++) {
				var ball = pool.getBall(i);
				if (ball.alive) {
					network.rules.alive_balls++
				}
			}
			for (var i = 0; i < pool.getBallCount(); i++) {
				var ball = pool.getBall(i);
				if (ball.type == "red" && ball.alive) {
					_14c++
				}
			}
			for (var i = 0; i < network.rules.potted_balls.length; i++) {
				var ball = pool.getBall(network.rules.potted_balls[i]);
				if (network.rules.required_ball == "red") {
					if (ball.type == "red" && !faul) {
						_14a++
					} else {
						faul = true;
						_14b = true
					}
				} else {
					if (network.rules.potted_balls.length == 1) {
						if (network.rules.required_ball == ball.type) {
							_14a = network.rules.ball_points[ball.type]
						} else {
							faul = true;
							_14b = true
						}
					} else {
						if (network.rules.potted_balls.length > 1) {
							faul = true;
							_14b = true
						}
					}
				}
				if (ball.type != "red") {
					if (ball.type == "white") {
						pool.isCueSetting = true
					} else {
						if (_14c > 0) {
							this.spawnBall(network.rules.potted_balls[i])
						} else {
							if (faul || _14b) {
								this.spawnBall(network.rules.potted_balls[i])
							}
							if (network.rules.potted_balls.length == 1 && _14c == 0 && network.rules.last_pot != null && network.rules.last_pot == "red") {
								this.spawnBall(network.rules.potted_balls[i])
							}
						}
					}
				}
			}
			if (!faul) {
				network.add_score(0, _14a, (faul || _14b || miss))
			}
			if (network.rules.potted_balls.length > 0) {
				network.rules.last_pot = pool.getBall(network.rules.potted_balls[0]).type
			} else {
				network.rules.last_pot = null
			}
			for (var i = 0; i < pool.getBallCount(); i++) {
				var ball = pool.getBall(i);
				if (ball.type != "white" && ball.alive) {
					if (_14d == null || network.rules.ball_points[ball.type] < network.rules.ball_points[_14d]) {
						_14d = ball.type
					}
				}
			}
			if (faul || network.rules.frist_ball == null || pool.getBall(network.rules.first_ball).type != network.rules.required_ball) {
				var _14a = 0;
				if (_14b) {
					if (network.rules.potted_balls.length > 0) {
						for (var i = 0; i < network.rules.potted_balls.length; i++) {
							var ball = pool.getBall(network.rules.potted_balls[i]);
							if (ball.alive && network.rules.required_ball != ball.type && network.rules.ball_points[ball.type] > _14a) {
								_14a = network.rules.ball_points[ball.type]
							}
						}
						if (network.rules.ball_points[network.rules.required_ball] > _14a) {
							_14a = network.rules.ball_points[network.rules.required_ball]
						}
						if (_14a < network.rules.ball_points["white"]) {
							_14a = network.rules.ball_points["white"]
						}
						network.add_score(1, _14a, (faul || _14b || miss));
						_14e = true;
						faul = true
					}
				} else {
					if (network.rules.first_ball == null) {
						miss = true;
						network.add_score(1, network.rules.ball_points["white"], (faul || _14b || miss));
						_14e = true;
						faul = true
					} else {
						if (pool.getBall(network.rules.first_ball).type != network.rules.required_ball) {
							miss = true;
							var ball = pool.getBall(network.rules.first_ball);
							if (network.rules.ball_points[ball.type] < network.rules.ball_points["white"]) {
								_14a = network.rules.ball_points["white"]
							} else {
								_14a = network.rules.ball_points[ball.type]
							}
							network.add_score(1, _14a, (faul || _14b || miss));
							faul = true
						}
						if (network.rules.potted_balls.length == 0 && !_14e) {
							_14e = true
						}
					}
				}
			}
			if (network.rules.required_ball == "red") {
				network.rules.required_ball = "color";
				if ((faul || _14e || network.rules.potted_balls.length == 0) && _14c > 0) {
					network.rules.required_ball = "red"
				}
			} else {
				if (_14c > 0 && (faul || network.rules.potted_balls.length == 0)) {
					network.rules.required_ball = "red"
				} else {
					network.rules.required_ball = _14d
				}
			}
			if (!faul && !_14b && network.rules.alive_balls == 1) {
				_143.play("applause");
				network.end_frame()
			} else {
				if (_14e) {
					network.switch_turn(faul || _14b, miss);
					var _14f = network.max_turn_break > _144 && !faul && !_14b;
					if (_14f) {
						_143.play("applause")
					}
					if (network.turn == network.id) {
						if (!_14f) {
							_143.play("turn")
						}
					}
				} else {
					network.end_turn()
				}
			}
			network.max_turn_break = 0;
			network.calculate_remaining_points();
			if (network.rules.required_ball != null) {}
			network.rules.first_ball = null;
			network.rules.faul = false;
			network.rules.pot_faul = false;
			network.rules.potted_balls = [];
			network.rules.alive_balls = 0;
			pool.listenEvents(false);
			pool.process();
			pool.listenEvents(true)
		}
	};
	this.isBallLegal = function(b) {
		var type = network.rules.required_ball;
		if (typeof b != "undefined" && type == "color" && b.type != "red" || b.type == type) {
			return true
		} else {
			return false
		}
	};
	this.eventCollide = function(_150, _151) {
		if (!network.is_paused()) {
			var a = pool.getBall(_150);
			var b = pool.getBall(_151);
			if (typeof a != "undefined" && typeof b != "undefined") {
				if (network.rules.first_ball == null) {
					if (a.type == "white" || b.type == "white") {
						if (a.type == "white") {
							network.rules.first_ball = _151;
							if (network.rules.required_ball == "color" && b.type != "red") {
								network.rules.required_ball = b.type
							}
						} else {
							network.rules.first_ball = _150;
							if (network.rules.required_ball == "color" && a.type != "red") {
								network.rules.required_ball = a.type
							}
						}
					}
				}
			}
		}
	};
	this.eventBand = function(_152) {};
	this.turn = function() {
		return network.own_turn()
	};
	this.eventSetCuePos = function(pos) {
		network.state_save();
		network.send({
			"event": "cuepos",
			"x": pos.x,
			"y": pos.y
		});
		network.fix()
	}
};

/**
 * 球类
 */
function Ball(_153, pos, vel, type) {
	var _154 = 1.2,
	_155 = 0.99985;
	var _156 = -0.0005;
	var _157 = 1;
	var _158 = 0.0003;
	var _159 = {
		x: 0,
		y: 0
	};
	this.oldPos = __3(pos);
	this.pos = pos;
	this.vel = vel;
	this.alive = true;
	this.type = type;
	var _15a = {
		x: 0,
		y: 0
	};
	var _15b = 0;
	var _15c = 60;
	this.diameter = 0;
	this.r = 0;
	this.setR = function(newR) {
		diameter = newR * 2;
		r = newR
	};
	this.shoot = function(_15d) {
		this.vel = __3(_15d);
		if (__10(this.vel) > _154) {
			this.vel = __8(__5(this.vel), _154)
		}
	};
	this.stopped = function() {
		return __10(this.vel) == 0 || !this.alive
	};
	this.process = function() {
		if (!this.alive) {
			return
		}
		if (_15b > 0) {
			var len = __10(this.vel);
			if (len < 0.1) {
				this.vel = {
					x: 0.1,
					y: 0
				};
				len = 0.1
			}
			var slow = Math.min(1, Math.max(0, ((2 * _15b - _15c) / _15c) / Math.sqrt(len / 0.1)));
			this.pos = __6(__8(this.pos, 0.9 + 0.0999 * slow), __8(_15a, 0.1 - 0.0999 * slow));
			_15b -= 0.6 - 0.5 * slow;
			if (_15b <= 0) {
				this.alive = false
			}
		} else {
			this.pos = __6(this.pos, this.vel);
			if (__10(this.vel) < 0.01) {
				this.vel.x = this.vel.y = 0
			} else {
				var vLen = __10(this.vel);
				var _15e = Math.pow(vLen / _154, _158);
				this.vel = __8(this.vel, _155 * _15e)
			}
		}
	};
	this.renderShadow = function(_15f) {
		if (!this.alive) {
			return
		}
		var shR = r + 2;
		var _160 = shR * 2;
		_159 = __4(this.pos, _15f);
		var len = __10(_159);
		var _161 = __8(_159, 0.02);
		var _162 = 1 - len / 500;
		if (_162 < 0) {
			return
		}
		_153.pushMatrix();
		_153.translate(__7(this.pos, _161));
		_153.setAlpha(_162);
		_153.sprite({
			x: -shR,
			y: -shR
		},
		{
			x: _160,
			y: _160
		},
		{
			x: 0,
			y: 0
		},
		"shadow");
		_153.popMatrix()
	};
	this.render = function() {
		if (!this.alive) {
			return
		}
		_153.pushMatrix();
		_153.translate(this.pos);
		if (_15b > 0) {
			var _163 = _15b / _15c;
			_153.setAlpha(_163);
			_163 = Math.sqrt(_163);
			_153.scale({
				x: 0.2 * _163 + 0.8,
				y: 0.2 * _163 + 0.8
			})
		}
		_153.rotate(__2(_159) + Math.PI / 4);
		_153.sprite({
			x: -r,
			y: -r
		},
		{
			x: diameter,
			y: diameter
		},
		{
			x: 0,
			y: 0
		},
		type);
		_153.popMatrix()
	};
	this.bandCollide = function(band) {
		if (!this.alive) {
			return false
		}
		if (this.pos.x < band.min.x - r || this.pos.x > band.max.x + r || this.pos.y < band.min.y - r || this.pos.y > band.max.y + r) {
			return false
		}
		var hit = __12(band, this.pos);
		if (hit.dist < r) {
			var side = __14(this.vel, hit.normal);
			var _164 = __8(hit.normal, side > 0 ? side: -side);
			this.pos = __7(this.pos, _164);
			this.vel = __7(this.vel, __8(_164, 2));
			this.vel.x *= 0.9;
			this.vel.y *= 0.9;
			return true
		}
		return false
	};
	this.holeCollide = function(_165, _166, _167) {
		if (!this.alive || _15b != 0) {
			return false
		}
		if (Math.abs(this.pos.x - _165.x) >= _167 || Math.abs(this.pos.y - _165.y) >= _167) {
			return false
		}
		var _168 = __4(_165, this.pos);
		var dist = __10(_168);
		if (dist < _167) {
			var _169 = __5(_168);
			this.vel = __6(this.vel, __8(_169, _156))
		}
		if (dist < _166) {
			_15a = __3(_165);
			_15b = _15c;
			return true
		}
		return false
	};
	this.canCollide = function(pos) {
		if (Math.abs(this.pos.x - pos.x) >= diameter || Math.abs(this.pos.y - pos.y) >= diameter || _15b != 0) {
			return false
		}
		var bVec = __4(this.pos, pos);
		var _16a = __10(bVec);
		if (_16a >= diameter) {
			return false
		}
		return true
	};
	this.collide = function(_16b) {
		if (Math.abs(this.pos.x - _16b.pos.x) >= diameter || Math.abs(this.pos.y - _16b.pos.y) >= diameter || _15b != 0) {
			return 0
		}
		var bVec = __4(this.pos, _16b.pos);
		var _16c = __10(bVec);
		if (_16c >= diameter) {
			return 0
		} else {
			if (_16c == 0) {
				bVec = {
					x: 0,
					y: 1
				};
				_16c = 1
			}
		}
		var dir = __5(bVec);
		var vel1 = __5(this.vel);
		var vel2 = __5(_16b.vel);
		var rVel = __8(dir, __14(dir, vel1) * __10(this.vel) - __14(dir, vel2) * __10(_16b.vel));
		var diff = r - _16c / 2;
		if (diff > 0 && __14(dir, rVel) >= 0) {
			this.vel = __7(this.vel, rVel);
			_16b.vel = __6(_16b.vel, rVel);
			this.pos = __7(this.pos, __8(dir, diff));
			_16b.pos = __6(_16b.pos, __8(dir, diff))
		} else {
			return 0
		}
		return diff
	};
	this.set = function(pos, _16d) {
		this.pos = __3(pos);
		_15b = 0;
		this.vel = {
			x: 0,
			y: 0
		}
	}
};

function Pool(_16e, _16f, _170, _171) {
	this.sound = _16f;
	var _172 = new Rules(this, _16f);
	var _173 = true;
	var _174 = false;
	var _175 = true;
	var _176 = true;
	var _177 = [];
	var _178 = 10;
	var _179 = 10;
	var _17a = 0;
	var self = this;
	var _17b = false;
	_16f.loadSound("chat", "media/sounds/chat");
	var _17c = [{
		a: {
			x: 48,
			y: 77
		},
		b: {
			x: 48,
			y: 483
		}
	},
	{
		a: {
			x: 991,
			y: 77
		},
		b: {
			x: 991,
			y: 483
		}
	},
	{
		a: {
			x: 549,
			y: 515
		},
		b: {
			x: 960,
			y: 515
		}
	},
	{
		a: {
			x: 549,
			y: 45
		},
		b: {
			x: 960,
			y: 45
		}
	},
	{
		a: {
			x: 78,
			y: 515
		},
		b: {
			x: 489,
			y: 515
		}
	},
	{
		a: {
			x: 78,
			y: 45
		},
		b: {
			x: 489,
			y: 45
		}
	},
	{
		a: {
			x: 78,
			y: 45
		},
		b: {
			x: 52,
			y: 28
		}
	},
	{
		a: {
			x: 48,
			y: 77
		},
		b: {
			x: 32,
			y: 52
		}
	},
	{
		a: {
			x: 49,
			y: 534
		},
		b: {
			x: 78,
			y: 515
		}
	},
	{
		a: {
			x: 48,
			y: 483
		},
		b: {
			x: 29,
			y: 512
		}
	},
	{
		a: {
			x: 960,
			y: 45
		},
		b: {
			x: 984,
			y: 29
		}
	},
	{
		a: {
			x: 991,
			y: 77
		},
		b: {
			x: 1007,
			y: 52
		}
	},
	{
		a: {
			x: 991,
			y: 483
		},
		b: {
			x: 1007,
			y: 510
		}
	},
	{
		a: {
			x: 960,
			y: 515
		},
		b: {
			x: 984,
			y: 530
		}
	},
	{
		a: {
			x: 489,
			y: 45
		},
		b: {
			x: 505,
			y: 28
		}
	},
	{
		a: {
			x: 549,
			y: 45
		},
		b: {
			x: 533,
			y: 28
		}
	},
	{
		a: {
			x: 489,
			y: 515
		},
		b: {
			x: 505,
			y: 536
		}
	},
	{
		a: {
			x: 549,
			y: 515
		},
		b: {
			x: 533,
			y: 536
		}
	}];
	var _17d = 46,
	_17e = 990;
	var _17f = 16,
	_180 = 17;
	var _181 = {
		a: {
			x: 59,
			y: 58
		},
		b: {
			x: 978,
			y: 503
		}
	};
	var _182 = [{
		x: 43,
		y: 41
	},
	{
		x: 519,
		y: 31
	},
	{
		x: 996,
		y: 41
	},
	{
		x: 43,
		y: 519
	},
	{
		x: 519,
		y: 529
	},
	{
		x: 996,
		y: 519
	}];
	var _183 = {
		x: 162,
		y: 198
	};
	var _184 = _17c.length,
	_185 = _182.length;
	var _186 = 0;
	var _187 = {
		x: 519,
		y: 281
	};
	$.each(_17c,
	function(i, band) {
		band = __13(band)
	});
	_16e.loadTexture("white", config.skin_path + config.skin + "/images/pool-assets/balls/white.png");
	_16e.loadTexture("red", config.skin_path + config.skin + "/images/pool-assets/balls/red.png");
	_16e.loadTexture("pink", config.skin_path + config.skin + "/images/pool-assets/balls/pink.png");
	_16e.loadTexture("yellow", config.skin_path + config.skin + "/images/pool-assets/balls/yellow.png");
	_16e.loadTexture("blue", config.skin_path + config.skin + "/images/pool-assets/balls/blue.png");
	_16e.loadTexture("green", config.skin_path + config.skin + "/images/pool-assets/balls/green.png");
	_16e.loadTexture("brown", config.skin_path + config.skin + "/images/pool-assets/balls/brown.png");
	_16e.loadTexture("black", config.skin_path + config.skin + "/images/pool-assets/balls/black.png");
	_16e.loadTexture("shadow", config.skin_path + config.skin + "/images/ball-shadow.png");
	_16e.loadTexture("legal", config.skin_path + config.skin + "/images/legal.png");
	_16e.loadTexture("dzone", config.skin_path + config.skin + "/images/dzone.png");
	this.getR = function() {
		return _178
	};
	this.canPlaceCue = function(pos) {
		if (__11(pos, {
			x: 241,
			y: 281
		}) > 82 || pos.x > 241) {
			return false
		}
		for (var i = 1; i < _186; i++) {
			if (_177[i].canCollide(pos)) {
				return false
			}
		}
		return true
	};
	this.hintsEnable = function(h) {
		_17b = h
	};
	this.setCuePos = function(pos) {
		if (!this.canPlaceCue(pos) && this.isCueSetting) {
			return
		}
		this.isCueSetting = false;
		_177[0].pos = __3(pos);
		_177[0].alive = true;
		if (_173) {
			_172.eventSetCuePos(pos)
		}
	};
	this.addBall = function(pos, type) {
		var ball = new Ball(_16e, pos, {
			x: 0,
			y: 0
		},
		type);
		ball.setR(_178);
		_177.push(ball);
		_186++
	};
	this.clearBalls = function() {
		_177 = [];
		_186 = 0;
		_175 = true;
		_174 = true
	};
	this.getBallCount = function() {
		return _186
	};
	this.getBall = function(_188) {
		return _177[_188]
	};
	this.isBallLegal = function(_189) {
		return _172.isBallLegal(this.getBall(_189))
	};
	this.turn = function() {
		return _172.turn()
	};
	this.listenEvents = function(_18a) {
		_173 = _18a
	};
	this.shoot = function(_18b) {
		if (_186 == 0) {
			return
		}
		_177[0].shoot(_18b);
		_175 = false;
		if (_173) {
			_172.eventShoot(_18b)
		}
	};
	this.isFrozen = function() {
		return _175
	};
	this.getCuePos = function() {
		if (_177.length == 0) {
			return {
				x: 0,
				y: 0
			}
		}
		return __3(_177[0].pos)
	};
	this.setBall = function(_18c, pos) {
		_177[_18c].set(pos)
	};
	this.setAlive = function(_18d, _18e) {
		_177[_18d].alive = _18e
	};
	this.isPositionOccupied = function(pos) {
		for (var i = _186; i--;) {
			if (_177[i].alive && __10(__4(pos, _177[i].pos)) < 2 * _178) {
				return true
			}
		}
		return false
	};
	var _18f = function(_190, dir) {
		var col = null;
		var _191 = -1;
		for (var i = _186; i--;) {
			if (!_177[i].alive) {
				continue
			}
			var _192 = null;
			if ((_192 = __16(_177[i].pos, _178 + 1, {
				a: {
					x: _190.x + 10000 * dir,
					y: _190.y
				},
				b: {
					x: _190.x,
					y: _190.y
				}
			})) != null) {
				var _193 = __11(_190, _192.pos);
				if (_193 < _191 || _191 < 0) {
					if (dir > 0) {
						if (_192.pos.x > _17e - _178) {
							continue
						}
					} else {
						if (_192.pos.x < _17d + _178) {
							continue
						}
					}
					if (self.isPositionOccupied(_192.pos)) {
						cols.push({
							c: _192,
							d: _193,
							dupa: true
						});
						continue
					}
					col = _192;
					_191 = _193
				}
			}
		}
		return col
	};
	this.getFreeCushionPos = function(_194) {
		var cos = null;
		if ((cos = _18f(_194, 1)) != null) {
			return cos.pos
		}
		if ((cos = _18f(_194, -1)) != null) {
			return cos.pos
		}
		return null
	};
	this.process = function() {
		if ((!_17b || !_175) && _17a > 0) {
			_17a--
		}
		if (_17b && _175 && _17a < _179) {
			_17a++
		}
		if (_175) {
			return
		}
		for (var pp = _170; pp--;) {
			for (var i = _186; i--;) {
				if (!_177[i].alive) {
					continue
				}
				if (_177[i].pos.x < _181.a.x || _177[i].pos.y < _181.a.y || _177[i].pos.x > _181.b.x || _177[i].pos.y > _181.b.y) {
					for (var j = _185; j--;) {
						if (_177[i].holeCollide(_182[j], _17f, _180)) {
							if (_173) {
								_172.eventHole(i)
							}
						}
					}
					for (var j = _184; j--;) {
						if (_177[i].bandCollide(_17c[j])) {
							if (_173) {
								_172.eventBand(i)
							}
							break
						}
					}
				}
				for (var j = i; j--;) {
					if (!_177[j].alive) {
						continue
					}
					var f = 0;
					if ((f = _177[i].collide(_177[j])) > 0) {
						if (_173) {
							_172.eventCollide(i, j)
						}
					}
				}
			}
			var _195 = 0;
			for (var j = _186; j--;) {
				if (!_177[j].alive) {
					continue
				}
				var _196 = _177[j].stopped();
				_177[j].process();
				if (!_177[j].stopped()) {
					_195++
				}
				if (!_196 && _177[j].stopped() && _173) {
					_172.eventStopped(j)
				}
			}
			if (_195 == 0) {
				if (!_175 && _173) {
					_172.eventAllStopped()
				}
				_175 = true
			}
		}
	};
	this.render = function(_197) {
		if (_197) {
			for (var i = _186; i--;) {
				_177[i].renderShadow(_187)
			}
		}
		for (var i = _186; i--;) {
			_177[i].render()
		}
		if (_17a) {
			_16e.pushMatrix();
			_16e.setAlpha(0.3 * _17a / _179);
			if (!this.isCueSetting) {
				for (var i = _186; i--;) {
					if (!_177[i].alive) {
						continue
					}
					if (_177[i].type != "white" && _172.isBallLegal(_177[i])) {
						_16e.sprite({
							x: _177[i].pos.x - 12,
							y: _177[i].pos.y - 12
						},
						{
							x: 24,
							y: 24
						},
						{
							x: 0,
							y: 0
						},
						"legal")
					}
				}
			} else {
				_16e.sprite(_183, {
					x: 82,
					y: 164
				},
				{
					x: 0,
					y: 0
				},
				"dzone")
			}
			_16e.popMatrix()
		}
	};
	_172.eventStart()
};

/**
 * 游戏类
 */
function Game(_198, _199, _19a, _19b) {
	var _19c = true;
	var _19d = {
		x: 0,
		y: 0
	};
	var _19e = {
		x: 0,
		y: 0
	};
	var _19f = 15;
	var pool = new Pool(_199, _19a, _19f, _198);
	var _1a0 = false;
	var _1a1 = null;
	var _1a2 = null;
	var _1a3 = 0;
	var _1a4 = null;
	var _1a5 = false;
	var _1a6 = {
		x: 0,
		y: 0
	};
	var _1a7 = 0;
	var _1a8 = {
		x: 0,
		y: 0
	};
	var _1a9 = false;
	var _1aa = 0;
	var _1ab = {
		x: 0,
		y: 0
	};
	var _1ac = __18("shadows") == "on";
	pool.hintsEnable(__18("hints") == "on");
	this.initialize = function() {
		_199.loadTexture("crosshair", config.skin_path + config.skin + "/images/crosshair.png");
		_199.loadTexture("cursor", config.skin_path + config.skin + "/images/cursor.png");
		_199.loadTexture("cursor-blocked", config.skin_path + config.skin + "/images/cursor-blocked.png");
		_199.loadTexture("illegal", config.skin_path + config.skin + "/images/illegal.png");
		_199.loadFont("normal", "sans", 12, "normal", "normal");
		_199.loadFont("fucking huge", "sans", 72, "normal", "bold");
		$cue = $("<img />").attr("id", "cue").attr("src", "media/images/cue/default-1.png");
		$cue.css({
			"position": "absolute",
			"z-index": 150
		});
		$cue.hide();
		$("#pool").after($cue)
	};
	var _1ad = function(pos, _1ae) {
		_199.pushMatrix();
		_199.translate(pos);
		_199.sprite({
			x: -10,
			y: -10
		},
		{
			x: 20,
			y: 20
		},
		{
			x: 0,
			y: 0
		},
		"cursor" + (!_1ae ? "": "-blocked"));
		_199.popMatrix()
	};
	this.renderEnable = function(r) {
		_19c = r
	};
	this.shadowsEnable = function(s) {
		_1ac = s
	};
	this.areShadowsEnabled = function() {
		return shadow
	};
	this.hintsEnable = function(h) {
		pool.hintsEnable(h)
	};
	this.process = function() {
		if (__18("cue") == "on") {
			var $cue = $("#cue");
			var _1af = $("canvas");
			if (pool.isFrozen()) {
				if (!pool.isCueSetting && !_1a5 && pool.turn()) {
					$cue.show();
					_1a5 = true
				} else {
					if (_1a5 && (!pool.turn() || pool.isCueSetting)) {
						$cue.hide();
						_1a5 = false
					}
				}
				if (!_1a9) {
					_1aa = $("#power-meter").height() / $("#power-bar").height() * 60;
					_1a6 = _19b.mousePos();
					_1a7 = _1aa + 11
				}
				_1a8 = pool.getCuePos()
			}
			var _1b0 = $cue.width();
			var _1b1 = $cue.height();
			var _1b2 = {
				x: _1af.position().left,
				y: _1af.position().top
			};
			var _1b3 = -Math.atan2(_1a6.x - _1a8.x + _1b2.x, _1a6.y - _1a8.y + _1b2.y) - (Math.PI / 2);
			var _1b4 = _1b3 / Math.PI * 180;
			var len = __10({
				x: _1b0 / 2,
				y: _1b1 / 2
			}) + _1a7;
			var left = _1a8.x + Math.cos(_1b3) * len;
			var top = _1a8.y + Math.sin(_1b3) * len;
			$cue.css({
				"left": _1b2.x - _1b0 / 2 + left,
				"top": _1b2.y - _1b1 / 2 + top
			});
			if ($cue.data("angle") != _1b4) {
				$cue.css("transform", "rotate(" + _1b4 + "deg)");
				$cue.css("-moz-transform", "rotate(" + _1b4 + "deg)");
				$cue.css("-webkit-transform", "rotate(" + _1b4 + "deg)");
				$cue.css("-o-transform", "rotate(" + _1b4 + "deg)");
				$cue.data("angle", _1b4)
			}
			if (_1a9) {
				_1a7 -= _1aa / (100 - (90 * $("#power-meter").height() / $("#power-bar").height())) * 17
			}
		}
		if (!_199.ready()) {
			return
		}
		_19b.update();
		pool.process();
		if (pool.turn()) {
			if (pool.isCueSetting) {
				if (_19b.isMouseUp(0) && pool.canPlaceCue(_19b.mousePos())) {
					pool.setCuePos(_19b.mousePos())
				}
			} else {
				if (pool.isFrozen() && !_1a9) {
					_19d = pool.getCuePos();
					_19e = _19b.mousePos();
					var _1b5 = $("#power-meter").height() / $("#power-bar").height();
					var _1b6 = 1;
					power_speed = 1;
					if (_1b5 > 0.5) {
						_1b6 = _1b5 + 0.3;
						power_speed = _1b5 * 0.35 + 1
					}
					var _1b7 = 0.002 * _1b6 * Math.sin(_198.ticks / 10 * power_speed);
					_1ab = __5(__4(_19d, _19e));
					_1ab = __17(_1ab, _1b7);
					if (_19b.isMouseUp(0)) {
						var dir = __8(_1ab, _1b5 * 1.2);
						_1a9 = true;
						setTimeout(function() {
							_1a9 = false;
							pool.shoot(dir);
							_1a7 -= _1aa / (100 - (90 * $("#power-meter").height() / $("#power-bar").height())) * 17
						},
						(__18("cue") == "on" ? 100 - (90 * _1b5) : 5));
						_1a0 = false
					}
					_1a1 = null;
					var _1b8 = 0;
					var line = __6(_19d, __8(_1ab, 1000));
					for (var i = 0; i < pool.getBallCount(); i++) {
						var ball = pool.getBall(i);
						if (!ball.alive || ball.type == "white") {
							continue
						}
						var _1b9 = {
							a: _19d,
							b: __6(_19d, __8(_1ab, 1000))
						};
						var _1ba = __16(ball.pos, pool.getR(), _1b9);
						var _1bb = _1ba == null ? 0 : __11(_1ba.pos, _19d);
						var _1bc = (_1bb == 0) ? true: __14(__4(_19d, ball.pos), _1ab) < 0;
						if (_1ba != null && (_1bb < _1b8 || _1b8 == 0) && !_1bc) {
							_1b8 = _1bb;
							_1a1 = _1ba.normal;
							_1a4 = _1ba.pos;
							_1a2 = ball.pos;
							_1a3 = i
						}
					}
					if (_19b.isMousePressed(0)) {
						_1a0 = true
					}
				}
			}
		}
	};
	this.render = function() {
		var _1bd = {
			a: {
				x: 0,
				y: 0
			},
			b: _199.getSize()
		};
		if (!_19c) {
			return
		}
		_199.clip(_1bd.a, _1bd.b);
		if (!_199.ready()) {
			return
		} else {
			_199.clear()
		}
		pool.render(_1ac);
		if (pool.turn()) {
			if (pool.isCueSetting) {
				var pos = _19b.mousePos();
				if (pos.x < _1bd.a.x + pool.getR()) {
					pos.x = _1bd.a.x + pool.getR()
				}
				if (pos.x > _1bd.b.x - pool.getR()) {
					pos.x = _1bd.b.x - pool.getR()
				}
				if (pos.y < _1bd.a.y + pool.getR()) {
					pos.y = _1bd.a.y + pool.getR()
				}
				if (pos.y > _1bd.b.y - pool.getR()) {
					pos.y = _1bd.b.y - pool.getR()
				}
				_1ad(pos, !pool.canPlaceCue(_19b.mousePos()));
				_1ad(pos, !pool.canPlaceCue(_19b.mousePos()))
			} else {
				if (pool.isFrozen()) {
					_199.pushMatrix();
					_199.translate(_19d);
					_199.sprite({
						x: -13,
						y: -13
					},
					{
						x: 26,
						y: 26
					},
					{
						x: 0,
						y: 0
					},
					"crosshair");
					_199.popMatrix();
					if (_1a1 != null) {
						_1ad(_1a4);
						var d = __11(_19d, _1a2);
						var len = 150 / (d / 150);
						var _1be = 1;
						if (len > 150) {
							len = 150
						}
						var vel = __8(_1a1, len * _1be);
						var _1bf = __15(__5(_1ab), __5(vel));
						_1bf = Math.sqrt(Math.abs(_1bf)) * (_1bf > 0 ? 1 : (_1bf == 0 ? 0 : -1));
						_199.line(_1a4, __6(_1a4, {
							x: vel.y * _1bf,
							y: -vel.x * _1bf
						}), "rgba(255, 255, 0, 0.2)");
						_199.line(_1a4, _1a2, "rgba(255, 255, 0, 0.8)");
						if (!pool.isBallLegal(_1a3)) {
							_199.pushMatrix();
							_199.setAlpha(0.7);
							_199.translate(_1a2);
							_199.sprite({
								x: -10,
								y: -10
							},
							{
								x: 20,
								y: 20
							},
							{
								x: 0,
								y: 0
							},
							"illegal");
							_199.popMatrix()
						}
						if (d < 110) {
							_199.line(_19d, _1a4, "rgba(255, 255, 255, 0.2)")
						} else {
							_199.line(_19d, __6(_19d, __8(_1ab, 110)), "rgba(255, 255, 255, 0.2)")
						}
					} else {
						_199.line(_19d, __6(_19d, __8(_1ab, 110)), "rgba(255, 255, 255, 0.2)")
					}
				}
			}
		}
	}
};
function Obj(b) {
	var a = b;
	this.alert = function() {
		alert(a)
	}
};
$(function() {
	var _1c0 = new Timer(40);
	var _1c1 = new Renderer();
	var _1c2 = new Sound();
	var _1c3 = new Input();
	$("#stop").click(function() {
		_1c0.stop();
		return false
	});
	$("#resume").click(function() {
		_1c0.resume();
		return false
	});
	$("#wire").click(function() {
		_1c1.mode = _1c1.WIREFRAME;
		return false
	});
	$("#texture").click(function() {
		_1c1.mode = _1c1.TEXTURED;
		return false
	});
	var game = new Game(_1c0, _1c1, _1c2, _1c3);
	globalGame = game;
	game.initialize();
	new Progress(50,
	function() {
		return _1c1.getImageLoadProgress()
	});
	$(window).ready(function() {
		_1c0.start(function() {
			game.process()
		},
		function() {
			game.render()
		})
	})
});
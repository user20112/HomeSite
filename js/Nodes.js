var DriftingWeb = function (e, t) {
	var i = document.querySelector("#" + e + " > .nodes-js-canvas-el");
	this.DriftingWeb = {
		canvas: {
			el: i,
			w: i.offsetWidth,
			h: i.offsetHeight
		},
		nodes: {
			number: {
				value: 400,
				density: {
					enable: !0,
					value_area: 800
				}
			},
			color: {
				value: "#fff"
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#ff0000"
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: "",
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 1,
				random: !1,
				anim: {
					enable: !1,
					speed: 2,
					opacity_min: 0,
					sync: !1
				}
			},
			size: {
				value: 20,
				random: !1,
				anim: {
					enable: !1,
					speed: 20,
					size_min: 0,
					sync: !1
				}
			},
			line_linked: {
				enable: !0,
				distance: 100,
				color: "#fff",
				opacity: 1,
				width: 1
			},
			move: {
				enable: !0,
				speed: 2,
				direction: "none",
				random: !1,
				straight: !1,
				out_mode: "out",
				bounce: !1,
				attract: {
					enable: !1,
					rotateX: 3e3,
					rotateY: 3e3
				}
			},
			array: []
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: !0,
					mode: "grab"
				},
				onclick: {
					enable: !0,
					mode: "push"
				},
				resize: !0
			},
			modes: {
				grab: {
					distance: 100,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 200,
					size: 80,
					duration: .4
				},
				repulse: {
					distance: 200,
					duration: .4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			},
			mouse: {}
		},
		fn: {
			interact: {},
			modes: {},
			vendors: {}
		},
		tmp: {}
	};
	var a = this.DriftingWeb;
	t && Object.deepExtend(a, t), a.fn.canvasInit = function () {
		a.canvas.ctx = a.canvas.el.getContext("2d")
	}, a.tmp.obj = {
		size_value: a.nodes.size.value,
		size_anim_speed: a.nodes.size.anim.speed,
		move_speed: a.nodes.move.speed,
		line_linked_distance: a.nodes.line_linked.distance,
		line_linked_width: a.nodes.line_linked.width,
		mode_grab_distance: a.interactivity.modes.grab.distance,
		mode_bubble_distance: a.interactivity.modes.bubble.distance,
		mode_bubble_size: a.interactivity.modes.bubble.size,
		mode_repulse_distance: a.interactivity.modes.repulse.distance
	}, a.fn.canvasSize = function () {
		a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a && a.interactivity.events.resize && window.addEventListener("resize", function () {
			a.canvas.w = a.canvas.el.offsetWidth, a.canvas.h = a.canvas.el.offsetHeight, a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a.nodes.move.enable || (a.fn.particlesEmpty(), a.fn.particlesCreate(), a.fn.particlesDraw(), a.fn.vendors.densityAutoParticles()), a.fn.vendors.densityAutoParticles()
		})
	}, a.fn.canvasPaint = function () {
		a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h)
	}, a.fn.canvasClear = function () {
		a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h)
	}, a.fn.Node = function (e, t, i) {
		this.radius = (a.nodes.size.random ? Math.random() : 1) * a.nodes.size.value, a.nodes.size.anim.enable &&
		(this.size_status = !1, this.vs = a.nodes.size.anim.speed / 100, a.nodes.size.anim.sync ||
		(this.vs = this.vs * Math.random())),
		this.x = i ? i.x : Math.random() * a.canvas.w, this.y = i ? i.y : Math.random() * a.canvas.h, this.x > a.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius &&
		(this.x = this.x + this.radius), this.y > a.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), a.nodes.move.bounce &&
		a.fn.vendors.checkOverlap(this, i), this.color = {}, this.color = e, this.color.rgb = hexToRgb(this.color.value), this.opacity = (a.nodes.opacity.random ? Math.random() : 1) * a.nodes.opacity.value, a.nodes.opacity.anim.enable && (this.opacity_status = !1, this.vo = a.nodes.opacity.anim.speed / 100, a.nodes.opacity.anim.sync || (this.vo = this.vo * Math.random()));
		var n = {};
		switch (a.nodes.move.direction) {
			case "top":
				n = {x: 0,y: -1};
				break;
			case "top-right":
				n = {x: .5,y: -.5};
				break;
			case "right":
				n = {x: 1,y: -0};
				break;
			case "bottom-right":
				n = {x: .5,y: .5};
				break;
			case "bottom":
				n = {x: 0,y: 1};
				break;
			case "bottom-left":
				n = {x: -.5,y: 1};
				break;
			case "left":
				n = {x: -1,y: 0};
				break;
			case "top-left":
				n = {x: -.5,y: -.5};
				break;
			default: n = {x: 0,y: 0}}
		a.nodes.move.straight ? (this.vx = n.x, this.vy = n.y, a.nodes.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
		var s = a.nodes.shape.type;
		if ("object" == typeof s) {
			if (s instanceof Array) {
				var o = s[Math.floor(Math.random() * s.length)];
				this.shape = o
			}
		} else this.shape = s;
		if ("image" == this.shape) {
			var r = a.nodes.shape;
			this.img = {
				src: r.image.src,
				ratio: r.image.width / r.image.height
			}, this.img.ratio || (this.img.ratio = 1), "svg" == a.tmp.img_type && null != a.tmp.source_svg && (a.fn.vendors.createSvgImg(this), a.tmp.pushing && (this.img.loaded = !1))
		}
	}, a.fn.Node.prototype.draw = function () {
		var e = this;
		if (null != e.radius_bubble) var t = e.radius_bubble;
		else t = e.radius;
		if (null != e.opacity_bubble) var i = e.opacity_bubble;
		else i = e.opacity;
		if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";
		else n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
		switch (a.canvas.ctx.fillStyle = n, a.canvas.ctx.beginPath(), e.shape) {
			case "circle":
				a.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
				break;
			case "edge":
				a.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
				break;
			case "triangle":
				a.fn.vendors.drawShape(a.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
				break;
			case "polygon":
				a.fn.vendors.drawShape(a.canvas.ctx, e.x - t / (a.nodes.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (a.nodes.shape.polygon.nb_sides / 3), a.nodes.shape.polygon.nb_sides, 1);
				break;
			case "star":
				a.fn.vendors.drawShape(a.canvas.ctx, e.x - 2 * t / (a.nodes.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (a.nodes.shape.polygon.nb_sides / 3), a.nodes.shape.polygon.nb_sides, 2);
				break;
			case "image":
				;
				if ("svg" == a.tmp.img_type) var s = e.img.obj;
				else s = a.tmp.img_obj;
				s && a.canvas.ctx.drawImage(s, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
		}
		a.canvas.ctx.closePath(), a.nodes.shape.stroke.width > 0 && (a.canvas.ctx.strokeStyle = a.nodes.shape.stroke.color, a.canvas.ctx.lineWidth = a.nodes.shape.stroke.width, a.canvas.ctx.stroke()), a.canvas.ctx.fill()
	}, a.fn.particlesCreate = function () {
		for (var e = 0; e < a.nodes.number.value; e++) a.nodes.array.push(new a.fn.Node(a.nodes.color, a.nodes.opacity.value))
	}, a.fn.particlesUpdate = function () {
		for (var e = 0; e < a.nodes.array.length; e++) {
			var t = a.nodes.array[e];
			if (a.nodes.move.enable) {
				var i = a.nodes.move.speed / 2;
				t.x += t.vx * i, t.y += t.vy * i
			}
			if (a.nodes.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= a.nodes.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= a.nodes.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), a.nodes.size.anim.enable && (1 == t.size_status ? (t.radius >= a.nodes.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= a.nodes.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == a.nodes.move.out_mode) var n = {
				x_left: t.radius,
				x_right: a.canvas.w,
				y_top: t.radius,
				y_bottom: a.canvas.h
			};
			else n = {
				x_left: -t.radius,
				x_right: a.canvas.w + t.radius,
				y_top: -t.radius,
				y_bottom: a.canvas.h + t.radius
			};
			switch (t.x - t.radius > a.canvas.w ? (t.x = n.x_left, t.y = Math.random() * a.canvas.h) : t.x + t.radius < 0 && (t.x = n.x_right, t.y = Math.random() * a.canvas.h), t.y - t.radius > a.canvas.h ? (t.y = n.y_top, t.x = Math.random() * a.canvas.w) : t.y + t.radius < 0 && (t.y = n.y_bottom, t.x = Math.random() * a.canvas.w), a.nodes.move.out_mode) {
				case "bounce":
					t.x + t.radius > a.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > a.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
			}
			if (isInArray("grab", a.interactivity.events.onhover.mode) && a.fn.modes.grabParticle(t), (isInArray("bubble", a.interactivity.events.onhover.mode) || isInArray("bubble", a.interactivity.events.onclick.mode)) && a.fn.modes.bubbleParticle(t), (isInArray("repulse", a.interactivity.events.onhover.mode) || isInArray("repulse", a.interactivity.events.onclick.mode)) && a.fn.modes.repulseParticle(t), a.nodes.line_linked.enable || a.nodes.move.attract.enable)
				for (var s = e + 1; s < a.nodes.array.length; s++) {
					var o = a.nodes.array[s];
					a.nodes.line_linked.enable && a.fn.interact.linkParticles(t, o), a.nodes.move.attract.enable && a.fn.interact.attractParticles(t, o), a.nodes.move.bounce && a.fn.interact.bounceParticles(t, o)
				}
		}
	}, a.fn.particlesDraw = function () {
		a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h), a.fn.particlesUpdate();
		for (var e = 0; e < a.nodes.array.length; e++) {
			a.nodes.array[e].draw()
		}
	}, a.fn.particlesEmpty = function () {
		a.nodes.array = []
	}, a.fn.particlesRefresh = function () {
		cancelRequestAnimFrame(a.fn.checkAnimFrame), cancelRequestAnimFrame(a.fn.drawAnimFrame), a.tmp.source_svg = void 0, a.tmp.img_obj = void 0, a.tmp.count_svg = 0, a.fn.particlesEmpty(), a.fn.canvasClear(), a.fn.vendors.start()
	}, a.fn.interact.linkParticles = function (e, t) {
		var i = e.x - t.x,
			n = e.y - t.y,
			s = Math.sqrt(i * i + n * n);
		if (s <= a.nodes.line_linked.distance) {
			var o = a.nodes.line_linked.opacity - s / (1 / a.nodes.line_linked.opacity) / a.nodes.line_linked.distance;
			if (o > 0) {
				var r = a.nodes.line_linked.color_rgb_line;
				a.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + o + ")", a.canvas.ctx.lineWidth = a.nodes.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(t.x, t.y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()
			}
		}
	}, a.fn.interact.attractParticles = function (e, t) {
		var i = e.x - t.x,
			n = e.y - t.y;
		if (Math.sqrt(i * i + n * n) <= a.nodes.line_linked.distance) {
			var s = i / (1e3 * a.nodes.move.attract.rotateX),
				o = n / (1e3 * a.nodes.move.attract.rotateY);
			e.vx -= s, e.vy -= o, t.vx += s, t.vy += o
		}
	}, a.fn.interact.bounceParticles = function (e, t) {
		var i = e.x - t.x,
			a = e.y - t.y;
		Math.sqrt(i * i + a * a) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
	}, a.fn.modes.pushParticles = function (e, t) {
		a.tmp.pushing = !0;
		for (var i = 0; i < e; i++) a.nodes.array.push(new a.fn.Node(a.nodes.color, a.nodes.opacity.value, {
			x: t ? t.pos_x : Math.random() * a.canvas.w,
			y: t ? t.pos_y : Math.random() * a.canvas.h
		})), i == e - 1 && (a.nodes.move.enable || a.fn.particlesDraw(), a.tmp.pushing = !1)
	}, a.fn.modes.removeParticles = function (e) {
		a.nodes.array.splice(0, e), a.nodes.move.enable || a.fn.particlesDraw()
	}, a.fn.modes.bubbleParticle = function (e) {
		if (a.interactivity.events.onhover.enable && isInArray("bubble", a.interactivity.events.onhover.mode)) {
			var t = e.x - a.interactivity.mouse.pos_x,
				i = e.y - a.interactivity.mouse.pos_y,
				n = 1 - (d = Math.sqrt(t * t + i * i)) / a.interactivity.modes.bubble.distance;

			function s() {
				e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
			}
			if (d <= a.interactivity.modes.bubble.distance) {
				if (n >= 0 && "mousemove" == a.interactivity.status) {
					if (a.interactivity.modes.bubble.size != a.nodes.size.value)
						if (a.interactivity.modes.bubble.size > a.nodes.size.value) {
							(r = e.radius + a.interactivity.modes.bubble.size * n) >= 0 && (e.radius_bubble = r)
						} else {
							var o = e.radius - a.interactivity.modes.bubble.size,
								r = e.radius - o * n;
							e.radius_bubble = r > 0 ? r : 0
						}
					var c;
					if (a.interactivity.modes.bubble.opacity != a.nodes.opacity.value)
						if (a.interactivity.modes.bubble.opacity > a.nodes.opacity.value)(c = a.interactivity.modes.bubble.opacity * n) > e.opacity && c <= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = c);
						else(c = e.opacity - (a.nodes.opacity.value - a.interactivity.modes.bubble.opacity) * n) < e.opacity && c >= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = c)
				}
			} else s();
			"mouseleave" == a.interactivity.status && s()
		} else if (a.interactivity.events.onclick.enable && isInArray("bubble", a.interactivity.events.onclick.mode)) {
			if (a.tmp.bubble_clicking) {
				t = e.x - a.interactivity.mouse.click_pos_x, i = e.y - a.interactivity.mouse.click_pos_y;
				var d = Math.sqrt(t * t + i * i),
					v = ((new Date).getTime() - a.interactivity.mouse.click_time) / 1e3;
				v > a.interactivity.modes.bubble.duration && (a.tmp.bubble_duration_end = !0), v > 2 * a.interactivity.modes.bubble.duration && (a.tmp.bubble_clicking = !1, a.tmp.bubble_duration_end = !1)
			}

			function l(t, i, n, s, o) {
				if (t != i)
					if (a.tmp.bubble_duration_end) null != n && (c = t + (t - (s - v * (s - t) / a.interactivity.modes.bubble.duration)), "size" == o && (e.radius_bubble = c), "opacity" == o && (e.opacity_bubble = c));
					else if (d <= a.interactivity.modes.bubble.distance) {
					if (null != n) var r = n;
					else r = s;
					if (r != t) {
						var c = s - v * (s - t) / a.interactivity.modes.bubble.duration;
						"size" == o && (e.radius_bubble = c), "opacity" == o && (e.opacity_bubble = c)
					}
				} else "size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0)
			}
			a.tmp.bubble_clicking && (l(a.interactivity.modes.bubble.size, a.nodes.size.value, e.radius_bubble, e.radius, "size"), l(a.interactivity.modes.bubble.opacity, a.nodes.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
		}
	}, a.fn.modes.repulseParticle = function (e) {
		if (a.interactivity.events.onhover.enable && isInArray("repulse", a.interactivity.events.onhover.mode) && "mousemove" == a.interactivity.status) {
			var t = e.x - a.interactivity.mouse.pos_x,
				i = e.y - a.interactivity.mouse.pos_y,
				n = Math.sqrt(t * t + i * i),
				s = {
					x: t / n,
					y: i / n
				},
				o = a.interactivity.modes.repulse.distance,
				r = clamp(1 / o * (-1 * Math.pow(n / o, 2) + 1) * o * 100, 0, 50),
				c = {
					x: e.x + s.x * r,
					y: e.y + s.y * r
				};
			"bounce" == a.nodes.move.out_mode ? (c.x - e.radius > 0 && c.x + e.radius < a.canvas.w && (e.x = c.x), c.y - e.radius > 0 && c.y + e.radius < a.canvas.h && (e.y = c.y)) : (e.x = c.x, e.y = c.y)
		} else if (a.interactivity.events.onclick.enable && isInArray("repulse", a.interactivity.events.onclick.mode))
			if (a.tmp.repulse_finish || (a.tmp.repulse_count++, a.tmp.repulse_count == a.nodes.array.length && (a.tmp.repulse_finish = !0)), a.tmp.repulse_clicking) {
				o = Math.pow(a.interactivity.modes.repulse.distance / 6, 3);
				var d = a.interactivity.mouse.click_pos_x - e.x,
					v = a.interactivity.mouse.click_pos_y - e.y,
					l = d * d + v * v,
					m = -o / l * 1;
				l <= o && function () {
					var t = Math.atan2(v, d);
					if (e.vx = m * Math.cos(t), e.vy = m * Math.sin(t), "bounce" == a.nodes.move.out_mode) {
						var i = {
							x: e.x + e.vx,
							y: e.y + e.vy
						};
						i.x + e.radius > a.canvas.w ? e.vx = -e.vx : i.x - e.radius < 0 && (e.vx = -e.vx), i.y + e.radius > a.canvas.h ? e.vy = -e.vy : i.y - e.radius < 0 && (e.vy = -e.vy)
					}
				}()
			} else 0 == a.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
	}, a.fn.modes.grabParticle = function (e) {
		if (a.interactivity.events.onhover.enable && "mousemove" == a.interactivity.status) {
			var t = e.x - a.interactivity.mouse.pos_x,
				i = e.y - a.interactivity.mouse.pos_y,
				n = Math.sqrt(t * t + i * i);
			if (n <= a.interactivity.modes.grab.distance) {
				var s = a.interactivity.modes.grab.line_linked.opacity - n / (1 / a.interactivity.modes.grab.line_linked.opacity) / a.interactivity.modes.grab.distance;
				if (s > 0) {
					var o = a.nodes.line_linked.color_rgb_line;
					a.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + s + ")", a.canvas.ctx.lineWidth = a.nodes.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x, a.interactivity.mouse.pos_y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()
				}
			}
		}
	}, a.fn.vendors.eventsListeners = function () {
		"window" == a.interactivity.detect_on ? a.interactivity.el = window : a.interactivity.el = a.canvas.el, (a.interactivity.events.onhover.enable || a.interactivity.events.onclick.enable) && (a.interactivity.el.addEventListener("mousemove", function (e) {
			if (a.interactivity.el == window) var t = e.clientX,
				i = e.clientY;
			else t = e.offsetX || e.clientX, i = e.offsetY || e.clientY;
			a.interactivity.mouse.pos_x = t, a.interactivity.mouse.pos_y = i, a.interactivity.status = "mousemove"
		}), a.interactivity.el.addEventListener("mouseleave", function (e) {
			a.interactivity.mouse.pos_x = null, a.interactivity.mouse.pos_y = null, a.interactivity.status = "mouseleave"
		})), a.interactivity.events.onclick.enable && a.interactivity.el.addEventListener("click", function () {
			if (a.interactivity.mouse.click_pos_x = a.interactivity.mouse.pos_x, a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y, a.interactivity.mouse.click_time = (new Date).getTime(), a.interactivity.events.onclick.enable) switch (a.interactivity.events.onclick.mode) {
				case "push":
					a.nodes.move.enable ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : 1 == a.interactivity.modes.push.particles_nb ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : a.interactivity.modes.push.particles_nb > 1 && a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);
					break;
				case "remove":
					a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);
					break;
				case "bubble":
					a.tmp.bubble_clicking = !0;
					break;
				case "repulse":
					a.tmp.repulse_clicking = !0, a.tmp.repulse_count = 0, a.tmp.repulse_finish = !1, setTimeout(function () {
						a.tmp.repulse_clicking = !1
					}, 1e3 * a.interactivity.modes.repulse.duration)
			}
		})
	}, a.fn.vendors.densityAutoParticles = function () {
		if (a.nodes.number.density.enable) {
			var e = a.canvas.el.width * a.canvas.el.height / 1e3 * a.nodes.number.value / a.nodes.number.density.value_area,
				t = a.nodes.array.length - e;
			t < 0 ? a.fn.modes.pushParticles(Math.abs(t)) : a.fn.modes.removeParticles(t)
		}
	}, a.fn.vendors.checkOverlap = function (e, t) {
		for (var i = 0; i < a.nodes.array.length; i++) {
			var n = a.nodes.array[i],
				s = e.x - n.x,
				o = e.y - n.y;
			Math.sqrt(s * s + o * o) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * a.canvas.w, e.y = t ? t.y : Math.random() * a.canvas.h, a.fn.vendors.checkOverlap(e))
		}
	}, a.fn.vendors.createSvgImg = function (e) {
		var t = a.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (t, i, a, n) {
				if (e.color.rgb) var s = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
				else s = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
				return s
			}),
			i = new Blob([t], {
				type: "image/svg+xml;charset=utf-8"
			}),
			n = window.URL || window.webkitURL || window,
			s = n.createObjectURL(i),
			o = new Image;
		o.addEventListener("load", function () {
			e.img.obj = o, e.img.loaded = !0, n.revokeObjectURL(s), a.tmp.count_svg++
		}), o.src = s
	}, a.fn.vendors.destroyDriftingWeb = function () {
		cancelAnimationFrame(a.fn.drawAnimFrame), i.remove(), DriftingWebDom = null
	}, a.fn.vendors.drawShape = function (e, t, i, a, n, s) {
		var o = n * s,
			r = n / s,
			c = 180 * (r - 2) / r,
			d = Math.PI - Math.PI * c / 180;
		e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
		for (var v = 0; v < o; v++) e.lineTo(a, 0), e.translate(a, 0), e.rotate(d);
		e.fill(), e.restore()
	}, a.fn.vendors.exportImg = function () {
		window.open(a.canvas.el.toDataURL("image/png"), "_blank")
	}, a.fn.vendors.loadImg = function (e) {
		if (a.tmp.img_error = void 0, "" != a.nodes.shape.image.src)
			if ("svg" == e) {
				var t = new XMLHttpRequest;
				t.open("GET", a.nodes.shape.image.src), t.onreadystatechange = function (e) {
					4 == t.readyState && (200 == t.status ? (a.tmp.source_svg = e.currentTarget.response, a.fn.vendors.checkBeforeDraw()) : (console.log("Error DriftingWeb - Image not found"), a.tmp.img_error = !0))
				}, t.send()
			} else {
				var i = new Image;
				i.addEventListener("load", function () {
					a.tmp.img_obj = i, a.fn.vendors.checkBeforeDraw()
				}), i.src = a.nodes.shape.image.src
			}
		else console.log("Error DriftingWeb - No image.src"), a.tmp.img_error = !0
	}, a.fn.vendors.draw = function () {
		"image" == a.nodes.shape.type ? "svg" == a.tmp.img_type ? a.tmp.count_svg >= a.nodes.number.value ? (a.fn.particlesDraw(), a.nodes.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : null != a.tmp.img_obj ? (a.fn.particlesDraw(), a.nodes.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : (a.fn.particlesDraw(), a.nodes.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame))
	}, a.fn.vendors.checkBeforeDraw = function () {
		"image" == a.nodes.shape.type ? "svg" == a.tmp.img_type && null == a.tmp.source_svg ? a.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(a.tmp.checkAnimFrame), a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw())) : (a.fn.vendors.init(), a.fn.vendors.draw())
	}, a.fn.vendors.init = function () {
		a.fn.canvasInit(), a.fn.canvasSize(), a.fn.canvasPaint(), a.fn.particlesCreate(), a.fn.vendors.densityAutoParticles(), a.nodes.line_linked.color_rgb_line = hexToRgb(a.nodes.line_linked.color)
	}, a.fn.vendors.start = function () {
		isInArray("image", a.nodes.shape.type) ? (a.tmp.img_type = a.nodes.shape.image.src.substr(a.nodes.shape.image.src.length - 3), a.fn.vendors.loadImg(a.tmp.img_type)) : a.fn.vendors.checkBeforeDraw()
	}, a.fn.vendors.eventsListeners(), a.fn.vendors.start()
};

function hexToRgb(e) {
	e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, a) {
		return t + t + i + i + a + a
	});
	var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
	return t ? {
		r: parseInt(t[1], 16),
		g: parseInt(t[2], 16),
		b: parseInt(t[3], 16)
	} : null
}

function isInArray(e, t) {
	return t.indexOf(e) > -1
}
Object.deepExtend = function (e, t) {
	for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (e[i] = e[i] || {}, arguments.callee(e[i], t[i])) : e[i] = t[i];
	return e
}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
	window.setTimeout(e, 1e3 / 60)
}, window.DriftingWebDom = [], window.driftingweb = function (e, t) {
	document.getElementById(e);
	var i = document.createElement("canvas");
	i.className = "nodes-js-canvas-el", i.style.width = "100%", i.style.height = "100%", null != document.getElementById(e).appendChild(i) && DriftingWebDom.push(new DriftingWeb(e, t))
};
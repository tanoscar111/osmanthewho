//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
	let holder = document.querySelector('#holder')

	function onMouseMove(e) {
		let difX = holder.offsetWidth - window.innerWidth
		let difY = holder.offsetHeight - window.innerHeight
		let tX = gsap.utils.mapRange(0, window.innerWidth, 0, -difX)
		let tY = gsap.utils.mapRange(0, window.innerHeight, 0, -difY)
		gsap.to(holder, 5, {
			x: tX(e.clientX),
			y: tY(e.clientY)
		})
	}

	// bypass auto scrolling.
	if ('scrollRestoration' in history) {
		history.scrollRestoration = 'manual';
	}

	window.onbeforeunload = function() {
		window.scrollTo(0,0)
	}

	window.addEventListener("resize", onMouseMove)
	document.addEventListener("pointermove", onMouseMove)


////////////// HTML //////////////

	<div id="wrapper">
		<div id="holder">
		</div>
	</div>

////////////// CSS //////////////

	#wrapper {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		position: relative;
	}

	#holder {
		height: 400vh;
		width: 200vw;
		will-change: transform;
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
	let holder = document.querySelector('#holder'),
			overflowX, mapPositionX,
			overflowY, mapPositionY

	function onResize(e) {
		overflowX = holder.offsetWidth - window.innerWidth
		mapPositionX = gsap.utils.mapRange(0, window.innerWidth, overflowX / 2, overflowX / -2)
		overflowY = holder.offsetHeight - window.innerHeight
		mapPositionY = gsap.utils.mapRange(0, window.innerHeight, overflowY / 2, overflowY / -2)
	}

	function onMouseMove(e) {
		if (overflowX > 0 || overflowY > 0) {
			let x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
			let y = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0
			gsap.to(holder, {duration: 7, overwrite: true, ease: "power3", x: mapPositionX(x), y: mapPositionY(y) })
		}
	}

	window.addEventListener("resize", onResize)
	document.addEventListener("mousemove", onMouseMove)
	document.addEventListener("touchmove", onMouseMove)
	document.addEventListener("pointermove", onMouseMove)
	onResize()

////////////// HTML //////////////

	<div id="wrapper">
		<div id="container">
			<div id="holder">
			</div>
		</div>
	</div>

////////////// CSS //////////////

	#wrapper {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		position: relative;
	}

	#container {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}

	#holder {
		height: 400vh;
		width: 200vw;
		will-change: transform;
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
	let info = document.querySelector(".info");

	let speed = 500;
	let acceleration = 0.05;

	let clampMag = gsap.utils.clamp(0, 1);
	let mapMag = gsap.utils.mapRange(0.5, 1, 0, 1);

	let viewport = {};

	let pointer = {
		x: window.innerWidth / 2,
		y: window.innerHeight / 2
	};

	let world = {
		element: document.querySelector("#holder"),
		x: 0,
		y: 0,
		maxX: 0,
		maxY: 0
	};

	let setX = gsap.quickSetter(world.element, "x", "px");
	let setY = gsap.quickSetter(world.element, "y", "px");

	let clampX, clampY;

	window.addEventListener("pointermove", onMove);
	window.addEventListener("resize", onResize);
	window.addEventListener("load", () => {
		onResize();
		gsap.ticker.add(update);
	});

	function onMove(e) {
		pointer.x = e.clientX;
		pointer.y = e.clientY;
	}

	function update() {

		let { x, y } = pointer;

		let outerX = x - viewport.cx;
		let outerY = y - viewport.cy;
		let dx = outerX / viewport.width * 2;
		let dy = outerY / viewport.height * 2;
		let angle = Math.atan2(dy, dx);
		let magnitude = Math.sqrt(dx * dx + dy * dy);
		magnitude = clampMag(mapMag(magnitude));

		let vx = Math.cos(angle - Math.PI) * magnitude * speed;
		let vy = Math.sin(angle - Math.PI) * magnitude * speed;

		const dt = 1.0 - Math.pow(1.0 - acceleration, gsap.ticker.deltaRatio());

		world.x = clampX(world.x + vx * dt);
		world.y = clampY(world.y + vy * dt);

		setX(world.x);
		setY(world.y);

		// debug
		info.innerHTML = `
			<div>Pointer X: ${x}</div>
			<div>Pointer Y: ${y}</div>
			<div>Coord X: ${outerX}</div>
			<div>Coord Y: ${outerY}</div>
			<div>Angle: ${Math.round(angle * 180 / Math.PI)}</div>
			<div>Magnitude: ${magnitude.toFixed(4)}</div>
		`;
	}

	function onResize() {

		let vw = window.innerWidth;
		let vh = window.innerHeight;

		viewport.width = vw;
		viewport.height = vh;
		viewport.cx = vw / 2;
		viewport.cy = vh / 2;
		viewport.x = 0;
		viewport.y = 0;

		let bounds = world.element.getBoundingClientRect();

		world.maxX = vw - bounds.width;
		world.maxY = vh - bounds.height;

		clampX = gsap.utils.clamp(world.maxX, 0);
		clampY = gsap.utils.clamp(world.maxY, 0);
	}

////////////// HTML //////////////

	<div class="holder">
	</div>

	<div class="movezone"></div>
	<div class="deadzone"></div>

	<div class="info">Loading...</div>

////////////// CSS //////////////

	* {
		position: relative;
		box-sizing: border-box;
	}

	body {
		overflow: hidden;
		touch-action: none;
	}

	.holder {
		width: 170vw;
		height: 400vh;
		will-change: transform;
	}

	.movezone {
		position: fixed;
		background: rgba(76, 175, 80, 0.5);
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		z-index: 1;
	}

	.deadzone {
		position: fixed;
		background: rgba(244, 67, 54, 0.5);
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		z-index: 2;
	}

	.info {
		position: fixed;
		top: 4px;
		left: 4px;
		background: #ddd;
		z-index: 5;
		font-family: monospace;
		padding: 8px;
		min-width: 200px;
	}
*/

window.eval(`

window.addEventListener('visibilitychange', event => {
	event.stopImmediatePropagation();
});

window.addEventListener('blur', event => {
	event.stopImmediatePropagation();
});

Object.defineProperty(document, 'visibilityState', {
	get() {
		return 'visible';
	},
});

Object.defineProperty(document, 'hidden', {
	get() {
		return false;
	},
});

`);

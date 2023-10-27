new Glide(".glide", {
	type: "carousel",
	startAt: 0,
	perView: 3,
	gap: 60,
	breakpoints: {
		// Tablets
		991: {
			perView: 2
		},
		// Celulares
		768: {
			perView: 1
		}
	}
}).mount();

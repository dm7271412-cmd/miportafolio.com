const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length) {
	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		});
	}, { threshold: 0.12 });

	revealElements.forEach((element) => revealObserver.observe(element));
} else {
	revealElements.forEach((element) => element.classList.add('is-visible'));
}

const projectForm = document.querySelector('#project-form');

if (projectForm) {
	projectForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const formData = new FormData(projectForm);
		const message = [
			'Hola, quiero solicitar información sobre un proyecto web.',
			'',
			`Nombre: ${formData.get('nombre')}`,
			`Correo: ${formData.get('correo')}`,
			`Necesidad: ${formData.get('necesidad')}`,
			`Mensaje: ${formData.get('mensaje') || 'No especificado'}`
		].join('\n');

		window.open(`https://wa.me/50663879662?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
	});
}

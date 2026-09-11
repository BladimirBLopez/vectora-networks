// Vectora Networks - interacciones
document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 700, once: true, offset: 80 });
    }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        fetch('https://formsubmit.co/ajax/vectora.ingenieria@gmail.com', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        })
        .then(response => response.json())
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Solicitud enviada!',
                text: 'Nos pondremos en contacto contigo a la brevedad.',
                confirmButtonColor: '#145DA0'
            });
            contactForm.reset();
        })
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                text: 'Intenta de nuevo o escríbenos directo por WhatsApp.',
                confirmButtonColor: '#145DA0'
            });
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    });
}
function toggleMenu() {
    document.getElementById('menu-mobile').classList.toggle('hidden');
    document.getElementById('menu-mobile').classList.toggle('flex');
    const backdrop = document.getElementById('menu-backdrop');
    if (backdrop) backdrop.classList.toggle('hidden');
    const hamburger = document.getElementById('icon-hamburger');
    const close = document.getElementById('icon-close');
    if (hamburger && close) {
        hamburger.classList.toggle('hidden');
        close.classList.toggle('hidden');
    }
}

function showTab(tab) {
    document.getElementById('content-porque').classList.add('hidden');
    document.getElementById('content-beneficio').classList.add('hidden');
    document.getElementById('content-' + tab).classList.remove('hidden');

    document.getElementById('tab-porque').className = 'tab-btn pb-4 font-medium border-b-2 border-transparent text-vx-muted';
    document.getElementById('tab-beneficio').className = 'tab-btn pb-4 font-medium border-b-2 border-transparent text-vx-muted';
    document.getElementById('tab-' + tab).className = 'tab-btn pb-4 font-medium border-b-2 border-vx-primary text-vx-text';
}

function toggleAccordion(id) {
    const content = document.getElementById('content-' + id);
    const chevron = document.getElementById('chevron-' + id);
    content.classList.toggle('hidden');
    if (chevron) chevron.classList.toggle('rotate-180');
}

function toggleServicioDropdown() {
    document.getElementById('servicioDropdown').classList.toggle('hidden');
    document.getElementById('servicioChevron').classList.toggle('rotate-180');
}

function selectServicio(value) {
    document.getElementById('servicioLabel').textContent = value;
    document.getElementById('servicioLabel').classList.remove('text-vx-muted');
    document.getElementById('servicioLabel').classList.add('text-vx-text');
    document.getElementById('servicioInput').value = value;
    document.getElementById('servicioDropdown').classList.add('hidden');
    document.getElementById('servicioChevron').classList.remove('rotate-180');
}

document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('servicioDropdown');
    const btn = document.getElementById('servicioBtn');
    if (dropdown && !dropdown.classList.contains('hidden') && !dropdown.contains(e.target) && e.target !== btn) {
        dropdown.classList.add('hidden');
        document.getElementById('servicioChevron').classList.remove('rotate-180');
    }
});

// Smooth scroll con Lenis
if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

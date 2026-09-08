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
}

function showTab(tab) {
    document.getElementById('content-porque').classList.add('hidden');
    document.getElementById('content-beneficio').classList.add('hidden');
    document.getElementById('content-' + tab).classList.remove('hidden');

    document.getElementById('tab-porque').className = 'tab-btn pb-4 font-medium border-b-2 border-transparent text-vx-muted';
    document.getElementById('tab-beneficio').className = 'tab-btn pb-4 font-medium border-b-2 border-transparent text-vx-muted';
    document.getElementById('tab-' + tab).className = 'tab-btn pb-4 font-medium border-b-2 border-vx-primary text-vx-text';
}

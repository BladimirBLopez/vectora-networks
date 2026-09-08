// Vectora Networks - interacciones
document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 700, once: true, offset: 80 });
    }
});
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

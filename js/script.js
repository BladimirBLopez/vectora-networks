// Vectora Networks - interacciones
function toggleMenu() {
    document.getElementById('menu-mobile').classList.toggle('hidden');
    document.getElementById('menu-mobile').classList.toggle('flex');
}

function showTab(tab) {
    document.getElementById('content-porque').classList.add('hidden');
    document.getElementById('content-beneficio').classList.add('hidden');
    document.getElementById('content-' + tab).classList.remove('hidden');

    document.getElementById('tab-porque').className = 'tab-btn px-6 py-2 rounded-full font-semibold bg-vx-panel text-vx-muted';
    document.getElementById('tab-beneficio').className = 'tab-btn px-6 py-2 rounded-full font-semibold bg-vx-panel text-vx-muted';
    document.getElementById('tab-' + tab).className = 'tab-btn px-6 py-2 rounded-full font-semibold bg-vx-cyan text-vx-bg';
}

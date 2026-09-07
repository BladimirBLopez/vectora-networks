// Vectora Networks - interacciones
function showTab(tab) {
    document.getElementById('content-porque').classList.add('hidden');
    document.getElementById('content-beneficio').classList.add('hidden');
    document.getElementById('content-' + tab).classList.remove('hidden');

    document.getElementById('tab-porque').className = 'tab-btn px-6 py-2 rounded-full font-semibold bg-gray-200 text-gray-700';
    document.getElementById('tab-beneficio').className = 'tab-btn px-6 py-2 rounded-full font-semibold bg-gray-200 text-gray-700';
    document.getElementById('tab-' + tab).className = 'tab-btn px-6 py-2 rounded-full font-semibold bg-blue-600 text-white';
}

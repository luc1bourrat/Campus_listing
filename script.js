// Fonction pour activer/désactiver la sélection des capsules et sauvegarder l'état
function toggleCampus(element) {
    element.classList.toggle('selected');
    saveCampusState();
}

// Fonction pour sauvegarder l'état des campus dans le localStorage
function saveCampusState() {
    const campusStates = {};
    document.querySelectorAll('.campus').forEach((campus, index) => {
        campusStates[index] = campus.classList.contains('selected');
    });
    localStorage.setItem('campusStates', JSON.stringify(campusStates));
}

// Fonction pour charger l'état des campus depuis le localStorage
function loadCampusState() {
    const campusStates = JSON.parse(localStorage.getItem('campusStates'));
    if (campusStates) {
        document.querySelectorAll('.campus').forEach((campus, index) => {
            if (campusStates[index]) {
                campus.classList.add('selected');
            }
        });
    }
}

// Fonction pour réinitialiser toutes les capsules et supprimer l'état sauvegardé
function resetChecks() {
    document.querySelectorAll('.campus').forEach(campus => {
        campus.classList.remove('selected');
    });
    localStorage.removeItem('campusStates');
}

// Charger l'état des campus au démarrage de la page
document.addEventListener('DOMContentLoaded', loadCampusState);

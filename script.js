// Fonction pour activer/désactiver la sélection des capsules
function toggleCampus(element) {
    element.classList.toggle('selected');
}

// Fonction pour réinitialiser toutes les capsules
function resetChecks() {
    document.querySelectorAll('.campus').forEach(campus => {
        campus.classList.remove('selected');
    });
}

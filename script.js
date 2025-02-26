// Tableau d'emails statique fourni
const emailsStatic = [
    "florian.dania@epitech.digital",
    "valerian1.vermeulen@epitech.eu",
    "alexandre1.caussade@epitech.eu",
    "enzo1.scaduto@epitech.eu",
    "guillaume1.cristiani@epitech.eu",
    "amine.bachri@epitech.eu",
    "lucas1.brignon@epitech.eu",
    "pierrick.guyard@epitech.eu",
    "francois1.gherabi@epitech.eu",
    "lucile.casenove@epitech.eu",
    "romain.terrier@epitech.eu",
    "baptiste1.heraud@epitech.eu",
    "daniel.braun@epitech.eu"
];

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

// Fonction pour copier la liste des emails statiques dans le presse-papier
function copyEmails() {
    // Concatène les emails avec des points-virgules
    const emailList = emailsStatic.join("; ");
    
    // Copie le résultat dans le presse-papier
    navigator.clipboard.writeText(emailList)
        .then(() => {
            alert("Liste d'emails copiée dans le presse-papier :\n" + emailList);
        })
        .catch(err => {
            console.error("Erreur lors de la copie : ", err);
        });
}

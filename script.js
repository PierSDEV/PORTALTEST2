// Podpora pro více jazyků
const translations = {
    en: {
        home: 'Home',
        portfolio: 'Portfolio',
        jobs: 'Jobs',
        projects: 'Projects',
        adminPanel: 'Admin Panel',
        settings: 'Settings',
        feedback: 'Feedback',
        financialOverview: 'Financial Overview',
        projectManagement: 'Project Management',
        dashboard: 'User Dashboard'
    },
    cs: {
        home: 'Domů',
        portfolio: 'Portfolio',
        jobs: 'Inzeráty',
        projects: 'Projekty',
        adminPanel: 'Administrační Panel',
        settings: 'Nastavení',
        feedback: 'Zpětná Vazba',
        financialOverview: 'Finanční Přehled',
        projectManagement: 'Řízení Projektů',
        dashboard: 'Uživatelský Panel'
    }
};

// Nastavení aktuálního jazyka
let currentLanguage = 'cs';

function setLanguage(language) {
    currentLanguage = language;
    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLanguage][key] || key;
    });
}

// Inicializace při načtení stránky
window.onload = function() {
    applyTranslations();
    loadUserDashboard();
    displayProjectProgress();
};
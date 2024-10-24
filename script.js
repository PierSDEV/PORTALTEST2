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

// Simulace uživatelských dat a projektů
let usersWithRoles = [
    { name: 'Petr Novák', email: 'example@example.com', role: 'admin', password: 'admin123' },
    { name: 'Jana Svobodová', email: 'jana@example.com', role: 'manager', password: 'manager123' },
    { name: 'Tomáš Marek', email: 'tomas@example.com', role: 'user', password: 'user123' }
];

let advancedProjects = [
    { name: 'Projekt A', progress: 80, deadline: '2024-12-31' },
    { name: 'Projekt B', progress: 45, deadline: '2025-06-15' }
];

let financialTransactions = [];
let fileList = [];
let feedbackList = [];

// Funkce pro přihlášení s 2FA
function loginWith2FA(email, password) {
    const user = usersWithRoles.find(u => u.email === email && u.password === password);
    if (user) {
        const verificationCode = send2FACode(email);
        const inputCode = prompt('Zadejte ověřovací kód, který vám byl odeslán na email:');
        if (verify2FACode(inputCode, verificationCode)) {
            localStorage.setItem('userEmail', email);
        }
    } else {
        alert('Nesprávné přihlašovací údaje.');
    }
}

// Funkce pro ověření 2FA kódu
function send2FACode(email) {
    const verificationCode = Math.floor(100000 + Math.random() * 900000); // Vygeneruje šestimístný kód
    alert(Vaše ověřovací kód je: ${verificationCode}. Kód byl také odeslán na email: ${email});
    return verificationCode;
}

function verify2FACode(inputCode, actualCode) {
    if (inputCode === actualCode) {
        alert('Ověření úspěšné. Vítejte zpět!');
        return true;
    } else {
        alert('Nesprávný ověřovací kód. Zkuste to prosím znovu.');
        return false;
    }
}

// Funkce pro zobrazení dashboardu
function loadUserDashboard() {
    const currentUserEmail = localStorage.getItem('userEmail');
    const currentUser = usersWithRoles.find(user => user.email === currentUserEmail);

    if (currentUser) {
        alert(Vítejte zpět, ${currentUser.name}!);
    }
}

// Funkce pro zobrazení projektů
function displayProjectProgress() {
    const progressBars = document.getElementById('progress-bars');
    if (progressBars) {
        progressBars.innerHTML = '';
        advancedProjects.forEach(project => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');
            progressBar.innerHTML = `<h4>${project.name}</h4>
                                     <div class="progress-container">
                                         <div class="progress-fill" style="width: ${project.progress}%;"></div>
                                     </div>
                                     <p>Pokrok: ${project.progress}%</p>`;
            progressBars.appendChild(progressBar);
        });
    }
}

// Inicializace při načtení stránky
window.onload = function() {
    applyTranslations();
    loadUserDashboard();
    displayProjectProgress();
};
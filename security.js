// Implementace dvoufaktorové autentizace (2FA)
function send2FACode(email) {
    const verificationCode = Math.floor(100000 + Math.random() * 900000); // Vygeneruje šestimístný kód
    alert(Vaše ověřovací kód je: ${verificationCode}. Kód byl také odeslán na email: ${email});
    return verificationCode;
}

// Funkce pro ověření 2FA kódu
function verify2FACode(inputCode, actualCode) {
    if (inputCode === actualCode) {
        alert('Ověření úspěšné. Vítejte zpět!');
        return true;
    } else {
        alert('Nesprávný ověřovací kód. Zkuste to prosím znovu.');
        return false;
    }
}

// Funkce pro přihlášení s 2FA
function loginWith2FA(email, password) {
    const user = usersWithRoles.find(u => u.email === email && u.password === password);
    if (user) {
        const verificationCode = send2FACode(email);
        const inputCode = prompt('Zadejte ověřovací kód, který vám byl odeslán na email:');
        if (verify2FACode(inputCode, verificationCode)) {
            localStorage.setItem('userEmail', email); // Uloží uživatele do local storage
        }
    } else {
        alert('Nesprávné přihlašovací údaje.');
    }
}
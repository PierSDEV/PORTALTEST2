// Uchovávání souborů (v reálné aplikaci by byly uloženy na serveru)
let fileList = [];

// Funkce pro nahrávání souborů
function uploadFile() {
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileList.push({ name: file.name, size: file.size, date: new Date().toLocaleDateString() });
        alert('Soubor byl úspěšně nahrán.');
        displayFiles();
    } else {
        alert('Vyberte prosím soubor k nahrání.');
    }
}

// Funkce pro zobrazení seznamu souborů
function displayFiles() {
    const fileListContainer = document.getElementById('file-list');
    fileListContainer.innerHTML = ''; // Vymaže předchozí zobrazení

    fileList.forEach(file => {
        const fileItem = document.createElement('li');
        fileItem.innerHTML = <p>${file.name} - Velikost: ${file.size}B - Datum: ${file.date}</p>;
        fileListContainer.appendChild(fileItem);
    });
}

// Načtení souborů při otevření stránky
window.onload = function() {
    displayFiles();
};
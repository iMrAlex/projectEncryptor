document.getElementById('encrypt-btn').addEventListener('click', function() {
    // Obtener el texto del textarea
    const inputText = document.getElementById('input-text').value;

    // Encriptar el texto (esto es solo un ejemplo, puedes usar cualquier lógica de encriptación)
    const encryptedText = inputText.split('').reverse().join('');

    // Crear el textarea y el botón de copiar
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = `
        <textarea id="encrypted-text">${encryptedText}</textarea>
        <button id="copy-btn">Copiar</button>
    `;

    // Añadir funcionalidad al botón de copiar
    document.getElementById('copy-btn').addEventListener('click', function() {
        const encryptedTextElement = document.getElementById('encrypted-text');
        encryptedTextElement.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    // Obtener el texto del textarea
    const inputText = document.getElementById('input-text').value;

    // Desencriptar el texto (esto es solo un ejemplo, puedes usar cualquier lógica de desencriptación)
    const decryptedText = inputText.split('').reverse().join('');

    // Crear el textarea con el texto desencriptado y el botón de copiar
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = `
        <textarea id="decrypted-text">${decryptedText}</textarea>
        <button id="copy-decrypted-btn">Copiar</button>
    `;

    // Añadir funcionalidad al botón de copiar
    document.getElementById('copy-decrypted-btn').addEventListener('click', function() {
        const decryptedTextElement = document.getElementById('decrypted-text');
        decryptedTextElement.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});

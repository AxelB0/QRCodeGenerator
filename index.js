console.log('Happy developing ✨')

document.getElementById('generateBtn').addEventListener('click', () => {
    const container = document.getElementById('qrcode');
    const text = document.getElementById('text').value.trim();

    container.innerHTML = ''; // Clear previous QR code

    if (text === '') return;

    new QRCode(container, {
        text: text,
        width: 200,
        height: 200
    });
});


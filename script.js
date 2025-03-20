document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('musicFile');
    const file = fileInput.files[0];
    
    if (file) {
        // Aqui você pode adicionar a lógica para enviar o arquivo para o servidor
        // Por exemplo, usando fetch ou XMLHttpRequest

        // Exemplo de mensagem de sucesso
        document.getElementById('message').innerText = 'Música enviada com sucesso!';
    } else {
        document.getElementById('message').innerText = 'Por favor, selecione um arquivo.';
    }
});
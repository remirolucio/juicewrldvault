document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('musicFile');
    const file = fileInput.files[0];
    
    if (file) {
        // Verifica se o arquivo é maior que 50MB
        if (file.size > 50 * 1024 * 1024) {
            document.getElementById('message').innerText = 'O arquivo deve ter no máximo 50MB.';
            return;
        }

        // Aqui você pode adicionar a lógica para enviar o arquivo para o servidor
        // Como o GitHub não permite uploads diretos, você pode apenas listar os arquivos
        // Para fins de demonstração, vamos apenas adicionar o nome do arquivo à lista

        const musicList = document.getElementById('musicList');
        const listItem = document.createElement('li');
        listItem.innerText = file.name;
        musicList.appendChild(listItem);

        document.getElementById('message').innerText = 'Música adicionada à lista!';
        fileInput.value = ''; // Limpa o input
    } else {
        document.getElementById('message').innerText = 'Por favor, selecione um arquivo.';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const basePath = 'images/'; // Base do caminho para as imagens

    const animes = [
        { id: 'anime', imageUrl: `${basePath}`jtsk.jpg },
        { id: 'anime2', imageUrl: `${basePath}imagem2.jpg` },
        { id: 'anime3', imageUrl: `${basePath}imagem3.jpg` },
        { id: 'anime4', imageUrl: `${basePath}imagem4.jpg` },
        { id: 'anime5', imageUrl: `${basePath}imagem5.jpg` }, // Certifique-se de adicionar imagem aqui
        { id: 'anime6', imageUrl: `${basePath}imagem6.jpg` },
        { id: 'anime7', imageUrl: `${basePath}imagem7.jpg` },
        { id: 'anime8', imageUrl: `${basePath}imagem8.jpg` },
        { id: 'anime9', imageUrl: `${basePath}imagem9.jpg` },
        { id: 'anime10', imageUrl: `${basePath}imagem10.jpg` }
    ];

    animes.forEach(anime => {
        const imgElement = document.querySelector(`#${anime.id} .anime-image`);
        if (imgElement) {
            imgElement.src = anime.imageUrl;
        } else {
            console.warn(`Elemento não encontrado para o anime com ID: ${anime.id}`);
        }
    });
});

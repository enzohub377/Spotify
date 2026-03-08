document.addEventListener("DOMContentLoaded", () => {
  const artistsData = [
    { name: "Henrique & Juliano", image: "./Img/artista-henrique-juliano.jpg" },
    { name: "Jorge & Mateus", image: "./Img/artista-jorge-mateus.jpg" },
    { name: "Zé Neto & Cristiano", image: "./Img/artista-ze-neto.jpg" },
    { name: "Gusttavo Lima", image: "./Img/artista-gustavo-limma.jpg" },
    { name: "Luan Santana", image: "./Img/artista-luan-santana.jpg" },
    { name: "Matheus & Kauan", image: "./Img/artista-mateus-kauan.jpg" },
  ];

  const albumsData = [
    {
      name: "White Noise (Sleep & Relaxation Sounds)",
      artist: "Sleepy John",
      image: "./Img/album-white-noise.jpg",
    },
    {
      name: "O Céu Explica Tudo (Ao Vivo)",
      artist: "Henrique & Juliano",
      image: "./Img/album-ceu-explica.jpg",
    },
    {
      name: "Nada como um dia após o outro",
      artist: "Racionais",
      image: "./Img/album-vida-loka.jpg",
    },
    {
      name: "HIT ME HARD AND SOFT",
      artist: "Billie Eilish",
      image: "./Img/album-hit-me.jpg",
    },
    { name: "CAJU", artist: "Liniker", image: "./Img/album-caju.jpg" },
    {
      name: "Escândalo Íntimo",
      artist: "Luísa Sonza",
      image: "./Img/album-escandalo.jpg",
    },
  ];

  const artistsGrid = document.querySelector(".Artistas-Grid");
  const albumsGrid = document.querySelector(".Albuns-Grid");

  artistsGrid.innerHTML = "";
  albumsGrid.innerHTML = "";

  artistsData.forEach((Artists) => {
    const artistsCard = document.createElement("div");
    artistsCard.classList.add("Artista-Card");

    artistsCard.innerHTML = `
    <img src="${Artists.image}" alt="Imagem do ${Artists.name}">
    <div>
      <h3>${Artists.name}</h3>
      <p>Artista</p>
    </div>
    `;

    artistsGrid.appendChild(artistsCard);
  });

  albumsData.forEach((Albuns) => {
    const albumsCard = document.createElement("div");
    albumsCard.classList.add("Albuns-Card");

    albumsCard.innerHTML = `
    <img src="${Albuns.image}" alt="Imagem do album ${Albuns.name}">
    <div>
      <h3>${Albuns.name}</h3>
      <p>${Albuns.artist}</p>
    </div>
    `;

    albumsGrid.appendChild(albumsCard);
  });
});

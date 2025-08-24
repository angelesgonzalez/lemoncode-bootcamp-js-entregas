import "./style.css";

interface Artist {
	name: string;
	year: number;
	genre: string;
	active: boolean;
}

const genres = {
	popRock: "🎵 Pop Rock",
	rock: "🎸 Rock",
	hardRock: "🤘 Hard Rock",
	clasica: "🎼 Clásica",
};

const beatles: Artist = {
	name: "The Beatles",
	year: 1960,
	genre: genres.popRock,
	active: false,
};

const queen: Artist = {
	name: "Queen",
	year: 1970,
	genre: genres.rock,
	active: false,
};

const acdc: Artist = {
	name: "AC DC",
	year: 1973,
	genre: genres.hardRock,
	active: true,
};

const rollingnStones: Artist = {
	name: "The Rolling Stones",
	year: 1962,
	genre: genres.rock,
	active: true,
};

const artists = [beatles, queen, acdc, rollingnStones];

const solutionDiv: HTMLElement | null = document.getElementById("solution");

artists.forEach((artist) => {
	const artistDiv = document.createElement("div");

	artistDiv.classList.add("artist");

	artistDiv.innerHTML = `
        <h2 class="artist-name">${artist.name}</h2>
        <p>Year formed: ${artist.year}</p>
        <p>Genre: ${artist.genre}</p>
        <p>Active: ${artist.active ? "Yes" : "No"}</p>
      `;
    
	if (solutionDiv) {
		solutionDiv.appendChild(artistDiv);
	}
});

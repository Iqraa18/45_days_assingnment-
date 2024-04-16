interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

console.log(album("Artist One", "The First Album"));
console.log(album("Artist Two", "The Second Album"));
console.log(album("Artist Three", "The Third Album", 12));

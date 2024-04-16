"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(album("Artist One", "The First Album"));
console.log(album("Artist Two", "The Second Album"));
console.log(album("Artist Three", "The Third Album", 12));

function make_album(artist, title, tracks) {
    if (tracks != undefined) {
        var album = {
            artist_name: artist,
            album_title: title,
            album_tracks: tracks,
        };
        return album;
    }
    else {
        var album = {
            artist_name: artist,
            album_title: title,
        };
        return album;
    }
}
var album1 = make_album("Atif Aslam", "Aadat");
var album2 = make_album('Ali Azmat', 'Junoon');
var album3 = make_album('Ali', 'Pak', 9);
console.log(album1);
console.log(album2);
console.log(album3);

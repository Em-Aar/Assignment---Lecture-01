////Question - 40, Album
function make_album (artist: string, title: string, tracks?: number) {
    
    if (tracks!= undefined) {
        let album = {
            artist_name: artist,
            album_title: title,
            album_tracks: tracks,
        }
        return album;
    }
    else {
        let album = {
            artist_name: artist,
            album_title: title,
        }
        return album;
    }

}

let album1 = make_album("Atif Aslam","Aadat");
let album2 = make_album ('Ali Azmat','Junoon');
let album3 = make_album ('Ali','Pak',9);

console.log(album1);
console.log(album2);
console.log(album3);

/*Question - 40, Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album. */
//This function is simple, without tracks. Just to understand how to define object in fucntion.
function make_album(artist, title) {
    var album = {
        artist_name: artist,
        album_title: title,
    };
    return album;
}
var first_album = make_album('Taylor Swift', 'Midnights');
var second_album = make_album('Justin Bieber', 'Justice');
console.log('First Album: ', first_album);
console.log('Second Album: ', second_album);
//This code will do the both part of the question in one go. Making function with any track and previous parameters.
function make_album_with_track(artist, title, tracks) {
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
var album1 = make_album_with_track("Atif Aslam", "Aadat");
var album2 = make_album_with_track('Ali Azmat', 'Junoon');
var album3 = make_album_with_track('Ali', 'Pak', 9);
console.log(album1);
console.log(album2);
console.log(album3);

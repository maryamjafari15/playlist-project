function renderSongs(songTitle) {
let songList = document.querySelector(".songs-list");
let songContainer = document.createElement("div");
songContainer.classList.add("song");
let titleElement= document.createElement("div");
titleElement.textContent =songTitle;
titleElement.classList.add("title");
let actionsElement = document.createElement("div");
actionsElement.classList.add("actions");

let playButton = document.createElement("button");
let likeButton = document.createElement("button");
let addButton = document.createElement("button");

 let imgplayButton= document.createElement("img");
 let imglikeButton= document.createElement("img");
 let imgaddButton= document.createElement("img");
 imgaddButton.classList.add("addtoplaylist");

 imgplayButton.src = './assets/play.svg';
 imgplayButton.alt = 'play music';
 imgplayButton.title = 'play music';

imglikeButton.src = "./assets/like-svgrepo-com.svg";
imglikeButton.alt = "like";
imglikeButton.title= "like";

imgaddButton.src ="./assets/plus-square-svgrepo-com (1).svg";
imgaddButton.alt="add";
imgaddButton.title= "add to playlist";

songList.appendChild(songContainer);

songContainer.appendChild(titleElement);
songContainer.appendChild(actionsElement);

actionsElement.appendChild(playButton);
actionsElement.appendChild(likeButton);
actionsElement.appendChild(addButton);

playButton.appendChild(imgplayButton);
likeButton.appendChild(imglikeButton);
addButton.appendChild(imgaddButton);

addButton.addEventListener("click", function() {
  addMusictoPlaylist(songTitle);
});
}

let songslist =[
"Shape of You",
"Dance Monkey" ,
"Blinding Lights",
"Driver's License" ,
"Uptown Funk",
"Love in the Dark",
"Skyfall",
"Dele Divooneh(Hayedeh) ",
] ;

for(let i=0 ; i < songslist.length; i++ ){
    const songTitle = songslist[i];
    renderSongs(songTitle);
}

function addMusictoPlaylist(songTitle){
  let songsplaylist= document.querySelector(".songs-list2");
  let songContainer = document.createElement("div");
  songContainer.classList.add("song");
  let titleElement= document.createElement("div");
  titleElement.textContent =songTitle;
  titleElement.classList.add("title");
  let actionsElement = document.createElement("div");
  actionsElement.classList.add("actions")
  let playButton = document.createElement("button");
  let imgplayButton= document.createElement("img");
  let removeButton= document.createElement("button");
  let imgremoveButton= document.createElement("img");
  imgremoveButton.classList.add("removefromplaylist");

  imgplayButton.src = './assets/play.svg';
  imgplayButton.alt = 'play music';
  imgplayButton.title = 'play music';

  imgremoveButton.src = './assets/minus.svg';
  imgremoveButton.alt = 'remove from playlist';
  imgremoveButton.title = 'remove from playlist';

songsplaylist.appendChild(songContainer);
songContainer.appendChild(titleElement);
songContainer.appendChild(actionsElement);
actionsElement.appendChild(playButton);
actionsElement.appendChild(removeButton);
playButton.appendChild(imgplayButton);
removeButton.appendChild(imgremoveButton);

removeButton.addEventListener("click", function() {
  songsplaylist.removeChild(songContainer);
});
}









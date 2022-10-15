let meme = document.querySelector("#meme");
let title = document.querySelector("#title");
let getMemeBtn = document.querySelector("#get-meme-btn");

// API Url
let url = " https://meme-api.herokuapp.com/gimme/";

let subreddit =["catmemes", "wholesomemes", "dogmemes", "me_irl" ];

// Function To Get Random Meme
function getMeme(){
  let randomSubreddit = subreddit[Math.floor(Math.random()*subreddit.length)];
  
  //Fetch Data from the api
   fetch(url+randomSubreddit).then(resp => resp.json()).then(data =>{
      let memeImg = new Image();
      // Display meme image and title only after the image loads
      memeImg.onload = () =>{
        meme.src = data.url;
        title.innerHTML = data.title;
      }
      memeImg.src = data.url;
   })
}

// Call the getMeme() on button click and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
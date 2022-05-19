const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.querySelector(".next");

const quotes =  [ 

  ["You only live once, but if you do it right, once is enough.", "Mae West"],
  ["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
  ["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", "J.K. Rowling, Harry Potter and the Goblet of Fire"],
  ["If you tell the truth, you don't have to remember anything.", "Mark Twain"],
  ["A friend is someone who knows all about you and still loves you.", "To live is the rarest thing in the world. Most people exist, that is all."],
  ["Always forgive your enemies; nothing annoys them so much", "Oscar Wilde"],
  ["It is better to be hated for what you are than to be loved for what you are not.", "Andre Gide, Autumn Leaves"],
  ["Life is what happens to us while we are making other plans.", "Allen Saunders"],
  ["Life isn't about finding yourself. Life is about creating yourself.", "George Bernard Shaw"],
  ["I'm not afraid of death; I just don't want to be there when it happens.", "Woody Allen"]




];


let y = 10;

button.addEventListener("click",()=>{
  let x = Math.floor((Math.random() * 9));
  
  while(x == y){
    x = Math.floor((Math.random() * 9));
    console.log(x);
    console.log("**************************************")
  }
  console.log(x)
  quote.innerText=quotes[x][0];
  author.innerText=quotes[x][1];
  y=x;

});




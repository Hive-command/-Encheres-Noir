
window.onload = choosePic;

var myPix = new Array(
    "Images/tarot/0.png",
    "Images/tarot/1.png", 
    "Images/tarot/2.png", 
    "Images/tarot/3.png", 
    "Images/tarot/4.png", 
    "Images/tarot/5.png", 
    "Images/tarot/6.png", 
    "Images/tarot/7.png", 
    "Images/tarot/8.png", 
    "Images/tarot/9.png", 
    "Images/tarot/10.png", 
    "Images/tarot/11.png", 
    "Images/tarot/12.png", 
    "Images/tarot/13.png", 
    "Images/tarot/14.png", 
    "Images/tarot/15.png", 
    "Images/tarot/16.png", 
    "Images/tarot/17.png", 
    "Images/tarot/18.png", 
    "Images/tarot/19.png", 
    "Images/tarot/20.png", 
    "Images/tarot/21.png"
    );



function choosePic() 
{
    let tarrotCards = [];
    for (let counter = 0; counter < 3; counter++) 
    {
        let index = Math.floor(Math.random() * 22);
        while (tarrotCards.lastIndexOf(index) !== -1) 
        {
            index = Math.floor(Math.random() * 22);
        }
        tarrotCards.push(index);
    }
    var tarotPast = document.getElementById("tarotPast");
    var tarotPresent = document.getElementById("tarotPresent");
    var tarotFuture = document.getElementById("tarotFuture");

    tarotPast.src = myPix[tarrotCards[0]];
    tarotPresent.src = myPix[tarrotCards[1]];
    tarotFuture.src = myPix[tarrotCards[2]];

    randomFlip(tarotPast);
    randomFlip(tarotPresent);
    randomFlip(tarotFuture);
}

function randomFlip(element){
    if (0.75 < Math.random()){
        if (!element.classList.contains("rotated"))
        {
            element.classList.add("rotated")
        }
        
    }
    else{
        if (element.classList.contains("rotated"))
        {
            element.classList.remove("rotated")
        }  
    }
}

  
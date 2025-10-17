const btn= document.querySelector(".btn");
const messagebox=document.querySelector(".text");


btn.onclick=()=>{
    
    const message=[
        "You are beautiful in every way!",
        "Nothing will ever compare to you my love",
        "Those brown eyes of yours take my breath away",
        "You make me feel like the luckiest man in all the world!",
        "Life would be nothing without you baby",
        "You bring color into my life",
        "Your lips beautiful and lovely",
        "You are gorgeous head to toe, inside and out!",
        "Life can only be life, when it's with you",
        "Love can only exist by your side baby",
        "I don't know where I'd be without you my gwapa prinsesa",
        "Your voice makes my heart melt inside of me, I feel warm every time I hear your voice baby!",
        "I love you I love you I love you I love you I LOVE YOU SO MUCH MY LOVELY WIFEY!",
        "What is the meaning of life? Being by your side every day and loving the Lord together",
        "You make me feel all warm and fuzzy inside",
        "I never knew strength or love until I met you",
        "You are irresistible in every way my lovely Jo",
        "Baby you're the strongest person I've ever known",
        "Fields of sunflowers could never compare to your smile po",
        "Bushes of roses never had your beauty or your strength",
        "The tulips in the morning dew never looked so lovely as your eyes in the morning",
        "I think about you every day, every night, every moment in between",
        "I want to hold you in my arms, protect you from all life's worries",
        "You are the kindest and most compassionate person that the Lord ever made",
        "There is beauty in every one of your steps my pretty pretty baby",
        "You are my Sunshine, My only Sunshine",
        "Even on my hardest days, you make me smile baby",
        "There is beauty in those eyes of yours, you are lovely head to toe",
        "You are mine, and I am yours, We belong together my beautiful sunshine!",
        "I've never known love before I met you, true love forgiving and everlasting",
        "I belong to you in every way, every part of me is yours and I love being yours baby, knowing that I belong my love",
        "I think about all the things we'll do together one day, and smile with every memory and moment we share together baby",
        "One day we will catch dragonflies together, you'll have to show me how it's done chuuu",
        "One day my sunshine we will walk thru fields of sunflowers baby"

    ];
    const index=Math.floor(Math.random()*message.length);
    messagebox.textContent=message[index];
    messagebox.classList.add=("show");
};



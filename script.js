const correctPassword = "youandmebaby"; // CHANGE this to your password

    function checkPassword() {
      const input = document.getElementById("password").value;
      const error = document.getElementById("error");
      const content = document.getElementById("content");
      const gate = document.getElementById("password-gate");

      if (input === correctPassword) {
        error.textContent = "";
        gate.style.display = "none";
        content.style.display = "block";
      } else {
        error.textContent = "Incorrect password. Try again.";
      }
    }




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
        "One day my sunshine we will walk thru fields of sunflowers baby",
        "My Gwapa Prinsesa",
        "My pretty pretty baby",
        "My love of my Life",
        "My lovely Jo",
        "My beautiful Wifey",
        "My lovely Mahalko",
        "My reason for living",
        "My gorgeous Gar",
        "My beautiful sunshine",
        "My lovely Ilongga Tulip",
        "My sultry desert rose",
        "My beautiful shining sunflower!",
        "My brave Tiger",
        "My JenJen",
        "My Jenelyn",
        "My light of my life",
        "You're the reason I smile",
        "You're the reason for my happiness",
        "My Chu!",
        "My Joyous Jowa",
        "My World and My Universe",
        "My Gorgeous Uyab",
        "My breathtaking Senorita",
        "My Soulmate and my better half",
        "My One and my Only",
        "My brave beautiful Tiger",
        "My beautiful, my beloved my lovely Binibini!",
        "Show me those beautiful eyes of yours, let me look into your heart",
        "If I can see your smile every day, my life is complete",
        "I want to kiss every inch of you, you are beautful in every way",
        "I adore you baby, I miss you every moment of every day, you make me happy to be alive",
        "I love every moment that we have together baby",
        "I want to hold you in these strong arms, I want to feel your warmth my love",
        "You're safe with me po chu, I'll always be here for you",
        "Sometimes I wish you could see yourself like I do, you are beautiful inside and out baby",
        "You're stronger than you know, you have alot of strength inside of you baby",
        "Life is beautiful, life is lovely all because of you",
        "I'll fill your life with lots of snacks and foods chuuu",
        "I want to walk thru fields of sunflowers, tulips, and roses with you",
        "The moment when I first look into your eyes, I dream of that moment baby",
        "On that mountain, on Fortune's Cove, I fell in love with you",
        "You are more than what you believe yourself to be baby, there is a universe inside of you",
        "You are strong and capable of amazing things",
        "There is something about you, that words could never truly describe, you are amazing baby",
        "Your voice is the most beautiful sound that God ever made",
        "Every moment of every day, is perfect with you my love",
        "God gave me you, and he gives me to you my love",
        "I never felt safe, never felt loved until I met you",
        "I never knew what love was like, or how to love until I met you",
        "You are the light that keeps me going in a world of darkness",
        "Your lovely brown eyes sparkle, playful and daring, beautiful and lovely",
        "Every inch of you is perfect from head to toe, you are irresistible",
        "My eyes adore you, my heart cherishes you, my soul desires you",
        "You're always on my mind, every moment of my life, you're here with me baby",
        "There's nothing beautiful in life without you, you make life what it is to me",
        "You make the distance feel small, even when life is hard I can feel you baby",
        "When I look into your heart, I see a universe inside of you, baby you're my everything",
        "You'll always have a home in me",
        "It's safe here for you baby, you're safe with me and I love you for you",
        "I live for your smile, I beg to hold you when you're crying, I am yours and you are mine",
        "I love you for you baby, you can feel safe with me my gwapa prinsesa",
        "No matter what happens baby, you'll always have me by your side",
        "We can do this my love, we have each other and we can do anything together",
        "You can always be yourself with me, I'll always love you no matter what",
        "I love you today, I loved you since forever, I will always love you",
        "You make me feel like the luckiest most blessed man God ever made, and it's all because of you"

    ];
    const index=Math.floor(Math.random()*message.length);
    messagebox.textContent=message[index];
    messagebox.classList.add("show");
  };





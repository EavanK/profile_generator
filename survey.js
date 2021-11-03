const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)  `, (name) => {

  rl.question(`What's an activity you like doing  `, (activity) => {
    
    rl.question(`What do you listen to while doing that?  `, (music) => {
  
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc)  `, (favouriteMeal) => {
    
        rl.question(`What's your favourite thing to eat for that meal?  `, (favouriteFood) => {
  
          rl.question(`Which sport is your absolute favourite?  `, (favouriteSport) => {
    
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!   `, (superpower) => {
  
              console.log(`\nThank you for your valuable answers!`);
              
              console.log(`\nYour profile is:\n\nname: ${name}\nactivity: ${activity}\nmusic: ${music}\nfavourite meal: ${favouriteMeal}\nfavourite food: ${favouriteFood}\nfavourite sport: ${favouriteSport}\nsuper power: ${superpower}\n`);
            
              rl.close();
            
            });
          });
        });
      });
    });
  });
});
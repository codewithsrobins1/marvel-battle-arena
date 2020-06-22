let GameManager = {
    //When game Starts -- Run ResetPlayer and SetPrefight Methods
    setGameStart: function(heroType){
        this.resetPlayer(heroType);
        this.setPreFight();
    },
    //Create a Hero Based on User Clicked
    resetPlayer: function(heroType){
        //Use switch case to determine which info to pull in from user's click
        switch(heroType){
            case "Ironman":
                hero = new Hero(heroType, 200, 150, 150, 125, 150)
            break;

            case "Spiderman":
                hero = new Hero(heroType, 175, 100, 100, 75, 250)
            break;

            case "Storm":
                hero = new Hero(heroType, 150, 250, 250, 50, 100)
            break;

            case "Thor":
                hero = new Hero(heroType, 250, 150, 200, 200, 100)
            break; 
            
            case "Hulk":
                hero = new Hero(heroType, 250, 200, 200, 200, 100)
            break; 

            case "Cyclops":
                hero = new Hero(heroType, 150, 250, 175, 150, 75)
            break; 

            case "Phoenix":
                hero = new Hero(heroType, 250, 250, 250, 250, 250)
            break; 

            case "Wolverine":
                hero = new Hero(heroType, 200, 150, 200, 150, 100)
            break; 
        }

        //After user clicks on hero -- change interface to show stats
        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = `
            <img src="imgs/hero-avatars/${heroType}.gif" alt="hero" class="img-avatar">
            <div>
                <h3>${heroType}</h3>
                <p class="health-hero">Health: ${hero.health}</p>
                <p>Energy: ${hero.energy}</p>
                <p>Attack: ${hero.attack}</p>
                <p>Defense: ${hero.defense}</p>
                <p>Speed: ${hero.speed}</p>
            </div>
        `
    },
    //Prefight Method
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getStadium = document.querySelector(".stadium");

        //Set the Header Information
        getHeader.innerHTML = `
            <p>Mission: Defeat the Villain!</p>
        `

        //Set the Action Button
        getActions.innerHTML = `
            <a href="#" class="btn-prefight" onclick="GameManager.setFight()">Locate Villain</a>
        `

        //Set the Stadium to Visible
        getStadium.style.visibility = "visible"
    },
    //Fight with Villain Method -- Setting up Villain
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".villain");

        //Create Enemies
        let enemy0 = new Villain("DrDoom", 200, 150, 150, 100, 50) 
        let enemy1 = new Villain("Venom", 175, 100, 175, 100, 175) 
        let enemy2 = new Villain("Thanos", 200, 200, 200, 200, 100)
        let enemy3 = new Villain("Juggernaut", 250, 250, 200, 200, 50)
        let enemy4 = new Villain("Magneto", 150, 200, 200, 100, 100)
        let enemy5 = new Villain("Sabretooth", 200, 100, 150, 100, 200)  

        //Choose a random villain
       let chooseRandomEnemy = Math.floor(Math.random() * 5) + 1;

       //Generate Enemy Based on the Random Number 
       switch(chooseRandomEnemy){
            case 0:
               villain = enemy0
               break;

            case 1:
               villain = enemy1
               break;

            case 2:
               villain = enemy2
               break;

            case 3:
                villain = enemy3
            break;

            case 4:
                villain = enemy4
            break;

            case 5:
                villain = enemy5
            break;
       }
 
       //Set the Header Information
       getHeader.innerHTML = `
            <p>Task: Defeat the Villain</p>
        `

        //Set the Actions for the Hero
        getActions.innerHTML = `
            <a href="#" class="btn-prefight" onclick="HeroMoves.calcAttack()">Attack!</a>
        `

        //Set the Information for the Enemy
        getEnemy.innerHTML = `
            <img src="imgs/villain-avatars/${villain.villainType}.gif" alt="villain" class="img-avatar">
            <div>
                <h3>${villain.villainType}</h3>
                <p class="health-villain">Health: ${villain.health}</p>
                <p>Energy: ${villain.energy}</p>
                <p>Attack: ${villain.attack}</p>
                <p>Defense: ${villain.defense}</p>
                <p>Speed: ${villain.speed}</p>
            </div>
        `
    }
}
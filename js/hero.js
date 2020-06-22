//Declare hero in the global scope
let hero;

//Create Hero Object
function Hero(heroType, health, energy, attack, defense, speed) {
    this.heroType = heroType;
    this.health = health;
    this.energy = energy;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
}

//Hero Actions
let HeroMoves = {
    calcAttack: function(){
        //Determine who attacks first
        let getHeroSpeed = hero.speed;
        let getVillainSpeed = villain.speed;

        // Hero Attacks
        let heroAttack = function(){
            let calcBaseDamage;

            //Determine BASE Damage based on attack and energy stats
            if (hero.attack > 0) {
                calcBaseDamage = hero.attack * hero.energy / 1000;
            }

            //Create Damage that varies from the base
            let offsetDamage = Math.floor(Math.random() * 10) + 1;

            //Calculate Base damage and Offset Damage
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            //Calculate the Number of Attacks Based on Speed
            let numberOfAttacks = Math.floor(Math.random() * Math.floor(hero.speed / 10) / 2) + 1;

            //Set the Attack Values
            let attackValues = [calcOutputDamage, numberOfAttacks];
            return attackValues;
        }

        // Villain Attacks
        let villainAttack = function(){
            let calcBaseDamage;
            //Determine BASE Damage based on attack and energy stats
            if (villain.attack > 0) {
                calcBaseDamage = villain.attack * villain.energy / 1000;
            }
            //Create Damage that varies from the base
            let offsetDamage = Math.floor(Math.random() * 10) + 1;

            //Calculate Base damage and Offset Damage
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            //Calculate the Number of Attacks Based on Speed
            let numberOfAttacks = Math.floor(Math.random() * Math.floor(villain.speed / 10) / 2) + 1;

            //Set the Attack Values - Damage and Number of Hits
            let attackValues = [calcOutputDamage, numberOfAttacks];
            return attackValues;
        }

        //Set the Health Values for Hero and Villain
        let getHeroHealth = document.querySelector('.health-hero')
        let getVillainHealth = document.querySelector('.health-villain')


        ///If Hero is faster than Villain -- Initiate Attack
        if(getHeroSpeed >= getVillainSpeed) {
            let heroAttackValues = heroAttack();
            let totalDamage = heroAttackValues[0] * heroAttackValues[1];    //Ex: 20 * 3

            //Set the villain health -- health minus damage that was done
            villain.health = villain.health - totalDamage;

            //Send Alert About Battle Damage
            alert(`You did ${heroAttackValues[0]} damage ${heroAttackValues[1]} time(s)`);

            //When enemy health hits 0 -- stop the game
            if(villain.health <= 0) {
                let getActions = document.querySelector(".actions");
                alert(`You have saved the city! Refresh browser to play again.`)
                getHeroHealth.innerHTML = `Health: ${hero.health}`
                getVillainHealth.innerHTML = `Health: 0`
                getActions.innerHTML = `
                        <a href="#" class="btn-prefight" onclick="GameManager.setFight()">Refresh Page</a>
                    `
            }
            else{
                getVillainHealth.innerHTML = `Health: ${villain.health}`    //show the remaining health for the villain

                //Villain Attacks
                let villainAttackValues = villainAttack();
                let totalDamage = villainAttackValues[0] * villainAttackValues[1];    //Ex: 20 * 3

                //Set the hero health -- health minus damage that was done
                hero.health = hero.health - totalDamage;

                //Send Alert About Battle Damage
                alert(`enemy hit ${villainAttackValues[0]} damage ${villainAttackValues[1]} times`);

                //When Hero health hits 0 -- stop the game
                if(hero.health <= 0) {
                    let getActions = document.querySelector(".actions");
                    alert(`You Lose! Refresh browser to play again.`)
                    getHeroHealth.innerHTML = `Health: 0`
                    getVillainHealth.innerHTML = `Health: ${villain.health}`
                    getActions.innerHTML = `
                        <a href="#" class="btn-prefight" onclick="GameManager.setFight()">Refresh Page</a>
                    `
                }
                else{
                    getHeroHealth.innerHTML = `Health: ${hero.health}`  //show the remaining health for the hero
                }
            }
        }
        //If Villain is faster than Hero -- Initiate Attack
        else if(getVillainSpeed >= getHeroSpeed) {
            let villainAttackValues = villainAttack();
            let totalDamage = villainAttackValues[0] * villainAttackValues[1];    //Ex: 20 * 3


            //Set the hero health -- health minus damage that was done
            hero.health = hero.health - totalDamage;

            //Send Alert About Battle Damage
            alert(`Enemy did ${villainAttackValues[0]} damage ${villainAttackValues[1]} time(s)`);

            //When hero health hits 0 -- stop the game
            if(hero.health <= 0) {
                let getActions = document.querySelector(".actions");
                alert(`You lose! Refresh browser to play again.`)
                getVillainHealth.innerHTML = `Health: ${villain.health}`
                getHeroHealth.innerHTML = `Health: 0`
                getActions.innerHTML = `
                        <a href="#" class="btn-prefight" onclick="GameManager.setFight()">Refresh Page</a>
                    `
            }
            else{
                getHeroHealth.innerHTML = `Health: ${hero.health}`    //show the remaining health for the hero

                //Hero Attacks
                let heroAttackValues = heroAttack();
                let totalDamage = heroAttackValues[0] * heroAttackValues[1];    //Ex: 20 * 3

                //Set the villain health -- health minus damage that was done
                villain.health = villain.health - totalDamage;

                //Send Alert About Battle Damage
                alert(`You hit ${heroAttackValues[0]} damage ${heroAttackValues[1]} times`);

                //When villain health hits 0 -- stop the game
                if(villain.health <= 0) {
                    let getActions = document.querySelector(".actions");
                    alert(`You saved the city! Refresh browser to play again.`)
                    getVillainHealth.innerHTML = `Health: 0`
                    getHeroHealth.innerHTML = `Health: ${hero.health}`
                    getActions.innerHTML = `
                        <a href="#" class="btn-prefight" onclick="GameManager.setFight()">Refresh Page</a>
                    `
                }
                else{
                    getVillainHealth.innerHTML = `Health: ${villain.health}`  //show the remaining health for the villain
                }
            }
        }
    }
}
    































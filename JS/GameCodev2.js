/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true */
(function () {
    "use strict";

    $("document").ready(function () {
        
        /*---INITIALISEREN---*/
        
        //Frames per seconde
        fps = 63;
        //Namen, beginkost en beginSchade van alle helden
        heroName = ["Een eerste held", "Tweede held", "derde held", "vierde held", "vijfde held", "zesde held", "zevende held", "achtste held", "negende held", "tiende held", "elfde held"];
        heroCost = [50, 250, 1000, 4000, 20000, 100000, 400000, 2500000, 15000000, 100000000, 800000000];
        heroDamage = [5, 22, 74, 245, 976, 3725, 10859, 47143, 186000, 782000, 3721000];
        
        /*---PROTOTYPE HELD---*/
        function Hero(BaseDamage, BaseCost, Name) {

            //variabelen declareren
            var baseDamage, baseCost, name, heroLevel, previousDamage, currentDamage;

            //Waarde toekennen aan de variabelen
            this.baseDamage = BaseDamage;
            this.baseCost = BaseCost;
            this.name = Name;
            this.heroLevel = 0;
            this.heroCost = BaseCost;
            this.previousDamage = 0;
            this.currentDamage = 0;

            //Wanneer een held wordt upgegraded
            this.upgraden = function () {

                //Geld nodig voor up te graden 
                gold = gold - this.heroCost;

                //De held gaat één level omhoog
                this.heroLevel = this.heroLevel + 1;

                //De kost om de held een level omhoog te doen vermeerderd
                this.heroCost = Math.floor(this.baseCost * (Math.pow(1.07, this.heroLevel)), 0);

                this.previousDamage = this.currentDamage;
                
                if(this.heroLevel > 299)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 26;
                }
                else if(this.heroLevel > 274)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 22;
                }
                else if( this.heroLevel > 249)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 18;
                }
                else if (this.heroLevel > 224)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 14;
                }
                else if (this.heroLevel > 199)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 10;
                }
                else if(this.heroLevel > 174)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 9;
                }
                else if(this.heroLevel > 149)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 8;
                }
                else if( this.heroLevel > 124)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 7;
                }
                else if (this.heroLevel > 99)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 6;
                }
                else if (this.heroLevel > 74)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 5;
                }
                else if (this.heroLevel > 49)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 4;
                }
                else if(this.heroLevel > 24)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 3;
                }
                else if(this.heroLevel > 9)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 2;
                }
                else
                {
                    this.currentDamage = this.baseDamage * this.heroLevel;
                }
                //DPS wordt bijgewerkt, de oude schade wordt er af getrokken en de nieuwe schade wordt erbij geteld
                schadePerSeconde = schadePerSeconde + this.currentDamage - this.previousDamage;
            };
            
            this.beginwaarden = function (getal) {
                
                if(this.heroLevel == 0)
                {
                    this.heroCost = heroCost[getal];
                }
                else
                {
                    this.heroCost = Math.floor(this.baseCost * (Math.pow(1.07, this.heroLevel)), 0);
                }
                
                this.previousDamage = this.currentDamage;
                
                
                if(this.heroLevel > 149)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 8;
                }
                else if( this.heroLevel > 124)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 7;
                }
                else if (this.heroLevel > 99)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 6;
                }
                else if (this.heroLevel > 74)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 5;
                }
                else if (this.heroLevel > 49)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 4;
                }
                else if(this.heroLevel > 24)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 3;
                }
                else if(this.heroLevel > 9)
                {
                    this.currentDamage = this.baseDamage * this.heroLevel * 2;
                }
                else
                {
                    this.currentDamage = this.baseDamage * this.heroLevel;
                }
                //DPS wordt bijgewerkt, de oude schade wordt er af getrokken en de nieuwe schade wordt erbij geteld
                schadePerSeconde = schadePerSeconde + this.currentDamage - this.previousDamage;
                
            }
            
            this.updateValues = function() {
                for (i = 0; i < heroDamage.length; i++) {
                    $("#hero" + i + "Damage").html("DPS: " + eval("hero" + i).currentDamage);
                    $("#hero" + i + "Level").text("LVL: " + eval("hero" + i).heroLevel);
                    $("#hero" + i + "LevelCost").text("LVLCost: " + eval("hero" + i).heroCost);
                    $("#hero" + i + "Name").text(eval("hero" + i).name);
                }
            }
        }
        
        /*---FUNCTIE OM ALLE ALGEMENE WAARDEN AAN TE PASSEN---*/
        function changeValues() {
            $(".gold").text(gold);
            $(".herosouls").text(heroSouls);
            $(".diamonds").text(diamonds);
            if(clickSwordGebruik == true)
            {
                $("#click").text(klikSchade + (Math.round(klikSchade / 2)) + (Math.round(klikSchade * ancient1Value /100)));
            }else
            {
                $("#click").text(klikSchade + (Math.round(klikSchade * ancient1Value /100)));   
            }
            if(damageSwordGebruik == true){
                $("#dps").text(schadePerSeconde + Math.round(schadePerSeconde / 2) + (Math.round(schadePerSeconde * ancient2Value / 100 )));
            }else{
                $("#dps").text(schadePerSeconde  + (Math.round(schadePerSeconde * ancient2Value / 100 )));   
            }
            $("#stage").text(stage);
            $("#leven").text(currentMonsterLife);
            
            $("#verhoogklikschade").text("Verhoog de klikschade. Cost: " + Math.floor(10 * (Math.pow(1.07,klikLevel))));
            
            //INVENTORY tab
            $("#goldpotion").text("Goldpotion: increase gold drop with 25% for 10 minutes. (got " + goldPotion + ")");
            $("#diamondpotion").text("Diamondpotion: all diamonds found are double for 5 minutes. (got " + diamondPotion +")");
            $("#damagesword").text("Damagesword: damage per seconde increase with 50% for 7,5 minutes. (got " + damageSword +")");
            $("#clicksword").text("Clicksword: increase click damage with 50% for 7,5 minutes. (got " + clickSword +")");
            
            //ANCIENTS tab
            $("#krijgherosouls").text("You can ascend after level 40. When you ascend now you will recieve " + ascendHerosouls + " herosouls.")
            $("#ancient1").text("Increase the click damage with 15%. Don't lose when ascending. (LVL: " + ancient1LVL + " Cost for upgrading: "+ Math.pow(2,ancient1LVL)+ ")");
            $("#ancient2").text("Increase the damage per seconde with 15%. Don't lose when ascending. (LVL: " + ancient2LVL + " Cost for upgrading: "+ Math.pow(2,ancient2LVL)+ ")");
            
            ancient1Value = ancient1LVL * 15;
            ancient2Value = ancient2LVL * 15;
            
            //STATS tab
            $("#statstotalclicks").text("Total clicks: " + statsTotalClicks);
            $("#statsmonsterkills").text("Total monsters killed: " +statsMonstersKills);
            $("#statsbosskills").text("Total bosses killed: " + statsBossKills);
            $("#statsacensions").text("Total times ascended: " +statsAscensions);
            $("#statshighestzone").text("Highest zone reached: " + statsHighestLVL);
        }
        
        function verhoogMonsterTeller() {
            if (issBoss === false) {
                if (monsterTeller < 10) {
                    monsterTeller++;
                    $("#monsterTeller").text(monsterTeller + "/10");
                }
            } else {
                if (bossTeller < 1) {
                    bossTeller++;
                    $("#monsterTeller").text(bossTeller + "/1");
                }
            }
        }
        
        /*---WANNEER ER EEN BAAS---*/
        function Bosslevel() {
            timer--;
            $("#timer").text(timer);
            if (timer === 0) {
                clearInterval(baas);
                timer = 30;
                bossLife = Math.round((baseMonsterLife * (Math.pow(1.6, stage - 1)) + (stage - 1) * 10) * 10);
                currentMonsterLife = bossLife;
                baas = setInterval(Bosslevel, 1000);
            }
        }
        
        function addGold() {
            if( goldPotionGebruik == true) {
                gold = gold + goldDrop + Math.round((goldDrop / 4));
            }else {
                gold = gold + goldDrop;
            }
        }
        
        function findSomething() {
            randomNumber = Math.round(Math.random() * 100);
            
            switch (randomNumber) {
            case 1:
                    if(diamondPotionGebruik == true) {
                        diamonds += 2;
                    }else{
                        diamonds++;
                    }
                break;
            case 2:
                goldPotion++;
                break;
            case 3:
                diamondPotion++;
                break;
            case 4:
                damageSword++;
                break;
            case 5:
                clickSword++;
                break;
            }
        }
        
        function newMonster() {
            currentMonsterLife = monsterLife;
        }
        
        function newBoss() {
            clearInterval(baas);
            timer = 30;
            bossLife = Math.round((baseMonsterLife * (Math.pow(1.6, stage - 1)) + (stage - 1) * 10) * 10);
            currentMonsterLife = bossLife;
            baas = setInterval(Bosslevel, 1000);
        }
        
        function monstersKilled()
        {
            statsMonstersKills++;
        }
        
        function bossKilled() {
            statsBossKills++;
        }
        
        function getHeroSouls() {
            if(stage > 39 && behaaldLevel == stage) {
                ascendHerosouls += Math.floor(stage/10);
                behaaldLevel++;
            }
        }
        
        function checkStatsLevel()
        {
            if(behaaldLevel > statsHighestLVL)
            {
                statsHighestLVL = behaaldLevel;
            }
        }

        /*--AANMAKEN HELDEN--*/
        hero0 = new Hero(heroDamage[0], heroCost[0], heroName[0]);
        hero1 = new Hero(heroDamage[1], heroCost[1], heroName[1]);
        hero2 = new Hero(heroDamage[2], heroCost[2], heroName[2]);
        hero3 = new Hero(heroDamage[3], heroCost[3], heroName[3]);
        hero4 = new Hero(heroDamage[4], heroCost[4], heroName[4]);
        hero5 = new Hero(heroDamage[5], heroCost[5], heroName[5]);
        hero6 = new Hero(heroDamage[6], heroCost[6], heroName[6]);
        hero7 = new Hero(heroDamage[7], heroCost[7], heroName[7]);
        hero8 = new Hero(heroDamage[8], heroCost[8], heroName[8]);
        hero9 = new Hero(heroDamage[9], heroCost[9], heroName[9]);
        hero10 = new Hero(heroDamage[10], heroCost[10], heroName[10]);

        for (i = 0; i < heroDamage.length; i++) {
            $("#heldenContainer").append("<div class='HeroContainer'><div class='HeroHeader'><p id='hero" + i + "Name'></p></div><div class='HeroBody'><p id='hero" + i + "Level'></p><p id='hero" + i + "Damage'></p><p id='hero" + i + "LevelCost'></p><input type='button' id='hero" + i + "' value='UPGRADEN'></div></div>");

        }

        for (i = 0; i < heroDamage.length; i++) {
            $("#hero" + i + "Damage").html("DPS: " + eval("hero" + i).currentDamage);
            $("#hero" + i + "Level").text("LVL: " + eval("hero" + i).heroLevel);
            $("#hero" + i + "LevelCost").text("LVLCost: " + eval("hero" + i).heroCost);
            $("#hero" + i + "Name").text(eval("hero" + i).name);
        }

        $(".HeroBody input").on("click", function () {
            var id = $(this).attr('id');
            if (gold >= eval(id).heroCost) {
                eval(id).upgraden();
                $("#" + id + "Damage").text("DPS: " + eval(id).currentDamage);
                $("#" + id + "Level").text("LVL: " + eval(id).heroLevel);
                $("#" + id + "LevelCost").text("LVLCost: " + eval(id).heroCost);
                changeValues();
            }
        });

        /*---ALLES IN HTML DE JUISTE WAARDE GEVEN---*/
        changeValues();

        /*---SCHADE TOEBRENGEN DOOR TE KLIKKEN---*/
        $("#monster").click(function () {
            if(clickSwordGebruik == true)
            {
                currentMonsterLife = currentMonsterLife - klikSchade -( Math.round(klikSchade / 2)) - (Math.round(klikSchade * ancient1Value /100));
            } else
            {
                currentMonsterLife = currentMonsterLife - klikSchade - (Math.round(klikSchade * ancient1Value /100));
            }
            if (issBoss === false) {
                levensBalk = (currentMonsterLife / monsterLife) * 100;
            } else {
                levensBalk = (currentMonsterLife / bossLife) * 100;
            }
            $("#huidigLeven").width(levensBalk + '%');
            if (currentMonsterLife <= 0) {
                if (issBoss === false) {
                    newMonster();
                    verhoogMonsterTeller();
                    findSomething();
                    monstersKilled();
                } else {
                    verhoogMonsterTeller();
                    findSomething();
                    newBoss();
                    bossKilled();
                    getHeroSouls();
                }
                addGold();
            }
            changeValues();
            statsTotalClicks++;
        });

        /*---DEZE FUNCTIE WORDT DAN UITGEVOERD---*/
        function autoDps() {
            if(damageSwordGebruik == true)
            {
                currentMonsterLife = currentMonsterLife - (schadePerSeconde / fps) - (Math.round((schadePerSeconde/fps)/2))  - (Math.round(schadePerSeconde * ancient2Value / 100 ));
            } else{
                currentMonsterLife = currentMonsterLife - (schadePerSeconde / fps)   - (Math.round(schadePerSeconde * ancient2Value / 100 ))
            }
            if (issBoss === false) {
                levensBalk = (currentMonsterLife / monsterLife) * 100;
            } else {
                levensBalk = (currentMonsterLife / bossLife) * 100;
            }
            $("#huidigLeven").width(levensBalk + '%');
            if (currentMonsterLife <= 0) {
                if (issBoss === false) {
                    newMonster();
                    verhoogMonsterTeller();
                    findSomething();
                    monstersKilled();
                } else {
                    verhoogMonsterTeller();
                    findSomething();
                    newBoss();
                    bossKilled();
                    getHeroSouls();
                }
                addGold();
            }
            changeValues();
        }

        /*---OM DE ZOVEEL MILISECONDEN UITVOEREN---*/
        setInterval(function () {autoDps();}, 1000 / fps);
        
        function veranderLevelv(levelWaarde)
        {
            if (levelWaarde > 0) // level verhogen
            {
                if (behaaldLevel > stage)
                {
                    stage++;
                    
                    $("#monsterTeller").text(monsterTeller + "/10");
                    monsterLife = Math.round((baseMonsterLife * Math.pow(1.6, stage - 1)));
                    goldDrop = Math.round(monsterLife / 15);
                    currentMonsterLife = monsterLife;
                    issBoss = false;
                    monsterTeller = 0;
                    clearInterval(baas);
                    $("#timer").text("");
                    if (stage % 5 === 0) {
                        issBoss = true;
                        bossTeller = 0;
                        $("#monsterTeller").text(bossTeller + "/1");
                        bossLife = Math.round((baseMonsterLife * (Math.pow(1.6, stage - 1)) + (stage - 1) * 10) * 10);
                        goldDrop = Math.round(bossLife / 15);
                        currentMonsterLife = bossLife;
                        timer = 30;
                        baas = setInterval(Bosslevel, 1000);
                    }
                    
                    if (behaaldLevel == stage && stage % 5 == 0) //Als na het verhogen van het level, het behaald level dezelfde is als het level
                    {
                        bossTeller = 0;
                        $("#monsterTeller").text(bossTeller + "/1");
                    }
                    
                    if (behaaldLevel == stage && stage % 5 != 0) //Als na het verhogen van het level, het behaald level dezelfde is als het level
                    {
                        monsterTeller = 0;
                        $("#monsterTeller").text(monsterTeller + "/10");
                    }
                    
                }else if (monsterTeller === 10 || bossTeller === 1) {
                    stage++;
                    monsterTeller = 0;
                    bossTeller = 0;
                    $("#monsterTeller").text(monsterTeller + "/10");
                    monsterLife = Math.round((baseMonsterLife * Math.pow(1.6, stage - 1)));
                    goldDrop = Math.round(monsterLife / 15);
                    newMonster();
                    issBoss = false;
                    $("#timer").text("");
                    clearInterval(baas);
                    if (stage % 5 === 0) {
                        issBoss = true;
                        bossTeller = 0;
                        monsterTeller = 0;
                        $("#monsterTeller").text(bossTeller + "/1");
                        bossLife = Math.round((baseMonsterLife * (Math.pow(1.6, stage - 1)) + (stage - 1) * 10) * 10);
                        goldDrop = Math.round(bossLife / 15);
                        currentMonsterLife = bossLife;
                        timer = 30;
                        baas = setInterval(Bosslevel, 1000);
                    }
                    if (behaaldLevel < stage) {
                        behaaldLevel++;
                        $("#test").text(behaaldLevel);
                        checkStatsLevel();
                    }
                }
            }
            
            if (levelWaarde < 0) // level verlagen
            {
                if (stage > 1) {
                    stage--;
                    monsterTeller = 10;
                    $("#monsterTeller").text(monsterTeller + "/10");
                    monsterLife = Math.round((baseMonsterLife * Math.pow(1.6, stage - 1)));
                    goldDrop = Math.round(monsterLife / 15);
                    currentMonsterLife = monsterLife;
                    issBoss = false;
                    $("#timer").text("");
                    clearInterval(baas);
                    if (stage % 5 === 0) {
                        issBoss = true;
                        bossTeller = 1;
                        $("#monsterTeller").text(bossTeller + "/1");
                        bossLife = Math.round((baseMonsterLife * (Math.pow(1.6, stage - 1)) + (stage - 1) * 10) * 10);
                        goldDrop = Math.round(bossLife / 15);
                        currentMonsterLife = bossLife;
                        timer = 30;
                        baas = setInterval(Bosslevel, 1000);
                    }
                }
            }
        }
        
        function veranderLevel(levelWaarde) {
            //stijgen in level of dalen in level
            if (levelWaarde > 0) {
                // als je het level al gehaald hebt
                if (behaaldLevel > stage) {
                    stage++;
                    if (stage === behaaldLevel) {
                        monsterTeller = 0;
                        bossTeller = 0;
                    }
                    $("#monsterTeller").text(monsterTeller + "/10");
                    monsterLife = Math.round((baseMonsterLife * Math.pow(1.6, stage - 1)));
                    goldDrop = Math.round(monsterLife / 15);
                    currentMonsterLife = monsterLife;
                    issBoss = false;
                    clearInterval(baas);
                    $("#timer").text("");
                    if (stage % 5 === 0) {
                        issBoss = true;
                        bossTeller = 1;
                        $("#monsterTeller").text(bossTeller + "/1");
                        bossLife = Math.round((baseMonsterLife * (Math.pow(1.6, stage - 1)) + (stage - 1) * 10) * 10);
                        goldDrop = Math.round(bossLife / 15);
                        currentMonsterLife = bossLife;
                        timer = 30;
                        baas = setInterval(Bosslevel, 1000);
                    }
                } else {
                    if (monsterTeller === 10 || bossTeller === 1) {
                        stage++;
                        monsterTeller = 0;
                        bossTeller = 0;
                        $("#monsterTeller").text(monsterTeller + "/10");
                        monsterLife = Math.round((baseMonsterLife * Math.pow(1.6, stage - 1)));
                        goldDrop = Math.round(monsterLife / 15);
                        newMonster();
                        issBoss = false;
                        $("#timer").text("");
                        clearInterval(baas);
                        if (stage % 5 === 0) {
                            issBoss = true;
                            bossTeller = 0;
                            monsterTeller = 0;
                            $("#monsterTeller").text(bossTeller + "/1");
                            bossLife = Math.round((baseMonsterLife * (Math.pow(1.6, stage - 1)) + (stage - 1) * 10) * 10);
                            goldDrop = Math.round(bossLife / 15);
                            currentMonsterLife = bossLife;
                            timer = 30;
                            baas = setInterval(Bosslevel, 1000);
                        }
                        if (behaaldLevel < stage) {
                            behaaldLevel++;
                            $("#test").text(behaaldLevel);
                            checkStatsLevel();
                        }
                        
                    }
                }
            } else {
                if (stage > 1) {
                    stage--;
                    monsterTeller = 10;
                    $("#monsterTeller").text(monsterTeller + "/10");
                    monsterLife = Math.round((baseMonsterLife * Math.pow(1.6, stage - 1)));
                    goldDrop = Math.round(monsterLife / 15);
                    currentMonsterLife = monsterLife;
                    issBoss = false;
                    $("#timer").text("");
                    clearInterval(baas);
                    if (stage % 5 === 0) {
                        issBoss = true;
                        bossTeller = 1;
                        $("#monsterTeller").text(bossTeller + "/1");
                        bossLife = Math.round((baseMonsterLife * (Math.pow(1.6, stage - 1)) + (stage - 1) * 10) * 10);
                        goldDrop = Math.round(bossLife / 15);
                        currentMonsterLife = bossLife;
                        timer = 30;
                        baas = setInterval(Bosslevel, 1000);
                    }
                }
            }
        }


        $("#prev").click(function () {
            veranderLevelv(-1);
        });

        $("#next").click(function () {
            veranderLevelv(1);
        });
        
        $("#upgradeklikschade").click(function(){
            if(gold >= Math.floor(10 * (Math.pow(1.07,klikLevel)))) {
                gold = gold - Math.floor(10 * (Math.pow(1.07,klikLevel)));
                
                klikLevel++;
                
                if(klikLevel > 299)
                {
                    klikSchade = klikLevel * 26;
                }
                else if(klikLevel > 274)
                {
                    klikSchade = 1 * klikLevel * 22;
                }
                else if(klikLevel > 249)
                {
                    klikSchade = klikLevel * 18;
                }
                else if (klikLevel > 224)
                {
                    klikSchade = klikLevel * 14;
                }
                else if (klikLevel > 199)
                {
                    klikSchade = klikLevel * 10;
                }
                else if(klikLevel > 174)
                {
                    klikSchade = klikLevel * 9;
                }
                else if(klikLevel > 149)
                {
                    klikSchade = klikLevel * 8;
                }
                else if(klikLevel > 124)
                {
                    klikSchade = klikLevel * 7;
                }
                else if (klikLevel > 99)
                {
                    klikSchade = klikLevel * 6;
                }
                else if (klikLevel > 74)
                {
                    klikSchade = klikLevel * 5;
                }
                else if (klikLevel > 49)
                {
                    klikSchade = klikLevel * 4;
                }
                else if(klikLevel > 24)
                {
                    klikSchade = klikLevel * 3;
                }
                else if(klikLevel > 9)
                {
                    klikSchade = klikLevel * 2;
                }
                else
                {
                    klikSchade = klikLevel;
                }
                
                $("#verhoogklikschade").text("Verhoog de klikschade. Cost: " + Math.floor(20 * (Math.pow(1.07,klikLevel))));
            }
        });
        
        //INVENTORY tab
        function goldPotionTimer()
        {
            goldTimer--;
            $("#goldtimer").text("TIME: " + goldTimer + " seconden");
            if(goldTimer == 0)
            {
                goldPotionGebruik = false;
                clearInterval(goldTimerFunctie);
            }
        }
        
        function diamondPotionTimer()
        {
            diamondTimer--;
            $("#diamondtimer").text("TIME: " + diamondTimer + " seconden");
            if(diamondTimer == 0)
            {
                diamondPotionGebruik = false;
                clearInterval(diamondTimerFunctie);
            }
        }
        
        function damageSwordTimer()
        {
            damageTimer--;
            $("#damagetimer").text("TIME: " + damageTimer + " seconden");
            if(damageTimer == 0)
            {
                damageSwordGebruik = false;
                clearInterval(damageTimerFunctie);
            }
        }
        
        function clickSwordTimer()
        {
            clickTimer--;
            $("#clicktimer").text("TIME: " + clickTimer + " seconden");
            if(clickTimer == 0)
            {
                clickSwordGebruik = false;
                clearInterval(clickTimerFunctie);
            }
        }
        
        $("#gebruikGoldPotion").click(function () {
            if(goldPotion > 0 && goldPotionGebruik == false){
                goldPotion--;
                goldTimer = 600;
                goldPotionGebruik = true;
                goldTimerFunctie = setInterval(goldPotionTimer, 1000);
            }
        });
        
        $("#gebruikDiamondPotion").click(function () {
            if(diamondPotion > 0 && diamondPotionGebruik == false){
                diamondPotion--;
                diamondTimer = 300;
                diamondPotionGebruik = true;
                diamondTimerFunctie = setInterval(diamondPotionTimer, 1000);
            }
        });
        
        $("#gebruikDamageSword").click(function () {
            if(damageSword > 0 && damageSwordGebruik == false){
                damageSword--;
                damageTimer = 450;
                damageSwordGebruik = true;
                damageTimerFunctie = setInterval(damageSwordTimer, 1000);
            }
        });
        
        $("#gebruikClickSword").click(function () {
            if(clickSword > 0 && clickSwordGebruik == false){
                clickSword--;
                clickTimer = 450;
                clickSwordGebruik = true;
                clickTimerFunctie = setInterval(clickSwordTimer, 1000);
            }
        });
        
        
        //DIAMONDS tab
        $("#goldWithDiamonds").click(function(){
            if(diamonds >= 25)
            {
                diamonds = diamonds - 25;
                if((schadePerSeconde)/25 < 1000)
                {
                    gold = gold +1000;
                }else
                {
                    gold = gold + Math.round((schadePerSeconde / 25));
                }
            }
        });
        
        $("#heroSoulsWithDiamonds").click(function(){
            if(diamonds >= 50)
            {
                diamonds = diamonds - 50;
                if((heroSouls)/25 < 10)
                {
                    heroSouls = heroSouls + 25;
                }else
                {
                    heroSouls = heroSouls + Math.round((heroSouls / 25));
                }
            }
        });
        
        $("#inventoryWithDiamonds").click(function(){
            if(diamonds >= 10)
            {
                diamonds -= 10;
                
                diamondGold = 0;
                diamondDiamond = 0;
                diamondDamage = 0;
                diamondClick = 0;
                
                for(i = 0 ; i < 4; i++)
                {
                    randomNumber = Math.round(Math.random() * 3);
                    
                    switch (i)
                    {
                        case 0:
                            goldPotion += randomNumber;
                            diamondGold = diamondGold + randomNumber;
                            break;
                        case 1:
                            diamondPotion += randomNumber;
                            diamondDiamond = diamondDiamond + randomNumber;
                            break;
                        case 2:
                            damageSword += randomNumber;
                            diamondDamage = diamondDamage + randomNumber;
                            break;
                        case 3:
                            clickSword += randomNumber;
                            diamondClick = diamondClick + randomNumber;
                            break;
                    }
                }
                
                $("#gekregen").text("You've won " + diamondGold + " goldpotions, " + diamondDiamond + " diamondpotions, " + diamondDamage + " damageswords and " + diamondClick + " clickswords");
            }
        });
        
        //HEROSOULS tab
        
        $("#ascensionbutton").click(function () {
            if(stage > 40)
            {
                heroSouls = heroSouls + ascendHerosouls;
                ascendHerosouls = 0;
                gold = 0;
                klikSchade = 1;
                stage = 1;
                klikLevel = 1;
                behaaldLevel = 1;
                monsterLife = 0;
                bossLife = 0;
                currentMonsterLife = 0;
                goldDrop = 0;
                schadePerSeconde = 0;
                monsterTeller =0;
                goldPotionGebruik = false;
                diamondPotionGebruik = false;
                damageSwordGebruik = false;
                clickSwordGebruik = false;
                bossTeller = 0;
                issBoss = false;
                timer = 30;
                hero0.heroLevel = 0;
                hero1.heroLevel = 0;
                hero2.heroLevel = 0;
                hero3.heroLevel = 0;
                hero4.heroLevel = 0;
                hero5.heroLevel = 0;
                hero6.heroLevel = 0;
                hero7.heroLevel = 0;
                hero8.heroLevel = 0;
                hero9.heroLevel = 0;
                hero10.heroLevel = 0;
                hero0.beginwaarden(0);
                hero1.beginwaarden(1);
                hero2.beginwaarden(2);
                hero3.beginwaarden(3);
                hero4.beginwaarden(4);
                hero5.beginwaarden(5);
                hero6.beginwaarden(6);
                hero7.beginwaarden(7);
                hero8.beginwaarden(8);
                hero9.beginwaarden(9);
                hero10.beginwaarden(10);
                hero1.updateValues();
                schadePerSeconde = 0;
                $("#monsterTeller").text(monsterTeller + "/10");
                monsterLife = Math.round((baseMonsterLife * Math.pow(1.6, stage - 1)));
                goldDrop = Math.round(monsterLife / 15);
                newMonster();
                issBoss = false;
                $("#timer").text("");
                clearInterval(baas);
                statsAscensions++;
            }
        });
        
        $("#clickWithHerosouls").click(function(){
            if(heroSouls >= Math.pow(2,ancient1LVL))
            {
                heroSouls -= Math.pow(2,ancient1LVL);
                ancient1LVL++;
                ancient1Value = ancient1LVL * 15;
            }
        });
        
        $("#damageWithHerosouls").click(function(){
            if(heroSouls >= Math.pow(2,ancient2LVL))
            {
                heroSouls -= Math.pow(2,ancient2LVL);
                ancient2LVL++;
                ancient2Value = ancient2LVL * 15;
            }
        });
        
    });
}());

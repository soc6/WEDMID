
<script>

export default {
    data(){
        return{
            askForRare : true,
            askFor1stAddon : false,
            askFor2ndAddon : false,
            showFinalItem : false,

            addon1Exist : true,
            addon2Exist : true,

            rarity : -1,
            addon1 : -1,
            addon2 : -1,

            charges : 0,
            healTimeALT : 0,
            healTimeSelf : 0,
            altsAmount : 0,
            selfsAmount : 0,

            greatSucces : 0,
            skillOdds : 0,
            progBonus : 0,


            confetti : false,
            serum : -1,
            styptic : -1,
            syringe : -1,

            itemImage : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg",
            addon1Image : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg",
            addon2Image : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg", 

        }
    },
    methods : {
        //stores rarity selected and switches to addon screen
        raritySelect(theRarity){
            this.rarity = theRarity;
            console.log("Selected Rarity = "+this.rarity);
            this.askForRare = false;
            this.askFor1stAddon = true;
        },

        //stores 2 addons, calls itemCalculate() and switches to final item screen
        AddonSelect(addon){
            if(this.askFor1stAddon == true){

                setTimeout( () => { 
                this.addon1 = addon;
                console.log("Selected 1st Addon = "+this.addon1)


                this.askFor1stAddon = false;
                this.askFor2ndAddon = true;

                }, 10);

                
            }
            if(this.askFor2ndAddon == true){

                if(addon == this.addon1 && addon != 0){
                    window.alert("ERROR : You can't select the same addon twice.");
                }
                else{
                    this.addon2 = addon;
                    console.log("Selected 2nd Addon = "+this.addon2);
                    
                    //run function to calculate what item can do   
                    this.itemCalculate();

                    this.askFor2ndAddon = false;
                    this.showFinalItem = true;

                    
                }
            }
        },

        
        //Calculates the stats of the item
        itemCalculate(){


            let healTime = 16;
            let altSpeed = 1;
            let selfSpeed = 1;

            switch(this.rarity){
                case 0 : //Camping Aid Kit (Brown)
                    this.charges = 24;
                    altSpeed += 0.35;
                    selfSpeed += -0.33;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/brownMedKit-264067e8.webp";
                    break;
                case 1 : //First Aid Kit (yellow)
                    this.charges = 24;
                    altSpeed += 0.4;
                    selfSpeed += -0.33;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/yellowMedKit-1117ffb2.webp";
                    break;
                case 2 : //Emergency Med-Kit (green)
                    this.charges = 24;
                    altSpeed += 0.45;
                    selfSpeed += -0.33;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/greenMedKit-c8dea6b4.webp";
                    
                    break;
                case 3 : //Ranger Med-Kit (purple)
                    this.charges = 24;
                    altSpeed += 0.5;
                    selfSpeed += -0.33;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/purpleMedKit-e25c42f3.webp";
            
                    break;
                case 5 : //All Hallows' Eve Lunchbox (event)
                    this.charges = 24;
                    altSpeed += 0.4;
                    selfSpeed += -0.33;
                    
                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/halloMedKit-05ab12d2.webp";
                    
                    break;
                case 6 : //Anniversary Med-kit (event)
                    this.charges = 24;
                    altSpeed += 0.4;
                    selfSpeed += -0.33;
                    this.confetti = true;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/anniMedKit-49282e02.webp";
                    break;
                case 7 : //Masquerade Med-Kit (event)
                    this.charges = 24;
                    altSpeed += 0.4;
                    selfSpeed += -0.33;
                    this.confetti = true;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/masMedKit-d3424216.webp";
                    break;
                default :
                    //Should only be the 2 previous options, send them back to home
                    this.$router.push('/');
                    break;
            }
            let curAddon = this.addon1;
            let curAddonImageID = "finalAddon1";

            
            
            for (let i = 0; i < 2;i++){ 

                switch(curAddon){
                    case 1 : //Rubber Gloves
                        this.greatSucces += 10;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_rubberGloves-ba58f04e.webp";
                        break;
                    case 2 : //Butterfly Tape
                        altSpeed += 0.05;
                        selfSpeed += 0.05;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_butterflyTape-ec78325f.webp";
                        break;
                    case 3 : //Bandages
                        this.charges += 8;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_bandages-38a960b8.webp";
                        break;
                    case 4 : //Sponge
                        this.greatSucces += 20;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_sponge-6266c186.webp";
                        break;
                    case 5 : //Self Adherent Wrap
                        altSpeed += 0.05;
                        selfSpeed += 0.05;
                        this.charges += 8;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_selfAdherentWrap-bfe6ff61.webp";
                        break;
                    case 6 : //Needle & Thread
                        this.skillOdds = 10;
                        this.progBonus = 5;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_needle26Thread-15f6af45.webp";
                        break;
                    case 7 : //Medical Scissors
                        altSpeed += 0.1;
                        selfSpeed += 0.1;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_medicalScissors-8f6a43f8.webp";
                        break;
                    case 8 : //Surgical Suture
                        this.skillOdds = 15;
                        this.progBonus = 10;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_surgicalSuture-1f7b9662.webp";
                        break;
                    case 9 : //Gauze Roll
                        this.charges += 10;

                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_gauzeRoll-fc3ee25b.webp";
                        break;
                    case 10 : //Styptic Agent
                        this.styptic = i;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_stypticAgent-88276a55.webp";
                        break;
                    case 11 : //Abdominal Dressing
                        altSpeed += 0.15;
                        selfSpeed += 0.15;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_abdominalDressing-65a38d3d.webp";
                        break;
                    case 12 : //Gel Dressings
                        this.charges += 16;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_gelDressings-1bb06c3b.webp";
                        break;
                    case 13 : //Anti-Haemorrhagic Syringe
                        this.syringe = i;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_anti-haemorrhagicSyringe-03e3eeab.webp";
                        break;
                    case 14 : //Refined Serum
                        this.serum = i;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_refinedSerum-9b88c674.webp";
                        break;
                    case 0 :
                        //no addon, no additional affects
                        if(i==0){
                            this.addon1Exist = false;
                        }
                        else if(i==1){
                            this.addon2Exist = false;
                        }
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_yellowWire-4925ac38.webp";
                        break;
                }

                curAddon = this.addon2;

                if(i == 0){
                    this.addon1Image = curAddonImageID;
                }
                else{
                    this.addon2Image = curAddonImageID;
                }
            }
            
            this.healTimeALT = healTime / altSpeed;
            this.healTimeSelf = healTime / selfSpeed;
            this.altsAmount = this.charges / 16;
            console.log(this.charges);
            this.selfsAmount = this.charges / 24;
            
            
        },

        //displays info for item
        renderItem(){


            let itemInfo = "• <b>"+ this.charges + "</b> charges <br>";
            itemInfo += "• Can heal yourself <b>"+this.selfsAmount.toFixed(2)+"</b> time(s) <br>";
            itemInfo += "• Can heal other survivors <b>"+this.altsAmount.toFixed(2)+"</b> time(s) <br>";
            itemInfo += "• Takes <b>"+this.healTimeALT.toFixed(2)+ "</b> seconds to heal another survivor <br>";
            itemInfo += "• Takes <b>"+this.healTimeSelf.toFixed(2)+ "</b> seconds to heal yourself <br>";

            if(this.greatSucces != 0){
                itemInfo += "• Great skill check zones are <b>"+this.greatSucces+"%</b> bigger <br>";
            }
            if(this.skillOdds != 0){
                itemInfo += "• Increases odds of triggering a skill check by <b>"+this.skillOdds+"%</b> <br>";
            }
            if(this.progBonus != 0){
                itemInfo += "• Progression bonus from great skill checks increased by <b>"+this.progBonus+"%</b> <br>";
            }

            if(this.confetti == true){
                itemInfo += "• Confetti will apear upon completion of a healing action <br>";
            }

            
            //they dont cancel out, fix this
            if(this.syringe > -1 || this.serum > -1 || this.styptic > -1){
                itemInfo += "• Can use secondary action button while healing<br>"; 
                if(this.serum > -1 ){
                    itemInfo += "to give <b>+5%</b> movement speed for next <b>16</b> seconds";
                    if(this.styptic > -1 || this.syringe > -1){
                        itemInfo += " and<br>"; 
                    }
                    else{
                        itemInfo += "<br>";
                    }
                }
            
                if(this.styptic > -1 ){
                    itemInfo += "to give <b>5</b> seconds of endurance";
                    if(this.syringe > -1){
                        itemInfo += " and<br>"; 
                    }
                    else{
                        itemInfo += "<br>";
                    }
                }

                if(this.syringe > -1 ){
                    itemInfo += "to automatically heal a survivor over the next<br><b>"+this.healTimeSelf.toFixed(2)+" (Self)</b> or <b>"+this.healTimeALT.toFixed(2)+" (Altruistic)</b> seconds <br>";
                    //not over next 16 seconds, equivilant to how long it takes to heal a survivor, different for alt and solo
                }
                itemInfo += "<b>(Consumes Med-kit on use)</b> <br>"
            }
            
            
            

            document.getElementById("info").innerHTML = itemInfo;
        },

        
    }
}



</script>

<template>
    <div class="container">

        <router-link to="/">
            <button class="btn btn-warning btn-lg fixed-top" style="color: black;" @click="AddonSelect(0)"><h4>New Item</h4></button>
        </router-link>
        
        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-5 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askForRare">

            <div class="col img-col">
                <h1>💎Select your rarity💎</h1>
                
                <img src="../assets/brownMedKit.webp" alt="Common Med-kit" class="img-fluid" width="100" @click="raritySelect(0)">
                <img src="../assets/yellowMedKit.webp" alt="Uncommon Med-kit" class="img-fluid" width="100" @click="raritySelect(1)">
                <img src="../assets/greenMedKit.webp" alt="Rare Med-kit" class="img-fluid" width="100" @click="raritySelect(2)">
                <img src="../assets/purpleMedKit.webp" alt="Very Rare Med-kit" class="img-fluid" width="100" @click="raritySelect(3)">
                <br>
                <img src="../assets/halloMedKit.webp" alt="Halloween Med-kit" class="img-fluid" width="100" @click="raritySelect(5)">
                <img src="../assets/anniMedKit.webp" alt="anniversary Med-kit" class="img-fluid" width="100" @click="raritySelect(6)">
                <img src="../assets/masMedKit.webp" alt="Masquerade Med-kit" class="img-fluid" width="100" @click="raritySelect(7)">

            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-5 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askFor1stAddon || askFor2ndAddon">

            <div class="col img-col">
                <h2 v-if="askFor1stAddon">🔨Select your 1st addon🔨</h2>
                <h2 v-if="askFor2ndAddon">🔨Select your 2nd addon🔨</h2>

                <img src="..//assets/medkitAddons/FulliconAddon_rubberGloves.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(1)">
                <img src="..//assets/medkitAddons/FulliconAddon_butterflyTape.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(2)">
                <img src="..//assets/medkitAddons/FulliconAddon_bandages.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(3)">
                <img src="..//assets/medkitAddons/FulliconAddon_sponge.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(4)">
                <img src="..//assets/medkitAddons/FulliconAddon_selfAdherentWrap.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(5)">
                <br>
                <img src="..//assets/medkitAddons/FulliconAddon_needle26Thread.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(6)">
                <img src="..//assets/medkitAddons/FulliconAddon_medicalScissors.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(7)">
                <img src="..//assets/medkitAddons/FulliconAddon_surgicalSuture.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(8)">
                <img src="..//assets/medkitAddons/FulliconAddon_gauzeRoll.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(9)">
                <img src="..//assets/medkitAddons/FulliconAddon_stypticAgent.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(10)">
                <br>
                <img src="..//assets/medkitAddons/FulliconAddon_abdominalDressing.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(11)">
                <img src="..//assets/medkitAddons/FulliconAddon_gelDressings.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(12)">
                <img src="..//assets/medkitAddons/FulliconAddon_anti-haemorrhagicSyringe.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(13)">
                <img src="..//assets/medkitAddons/FulliconAddon_refinedSerum.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(14)">
                <br>
                <button class="btn btn-danger" style="color: black;" @click="AddonSelect(0)">No Addon</button>
                
            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-4 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="showFinalItem">

            <div class="col img-col">
                <h1>❤️Your Item❤️</h1>

                <img v-bind:src="itemImage" alt="Chosen Item" class="img-fluid" width="100" id = "finalMap" @load="renderItem">
                <img v-bind:src="addon1Image" alt="1st Chosen addon" class="img-fluid" width="80" id = "finalAddon1" v-if="this.addon1Exist">
                <img v-bind:src="addon2Image" alt="2nd Chose addon" class="img-fluid" width="80" id = "finalAddon2" v-if="this.addon2Exist">
                <br>
                <h3>Your med-kit has</h3>
                <b id="info"></b>
                <br>
                <b id="kb"></b>

            </div>

        </div>
    </div>
</template>

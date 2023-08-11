
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
            repairSpeed : 1,
            genTimeSaved : 0,
            boxDuration : 0,

            saboSpeed : 1,
            timeToSabo : 0,
            amountSabos : 0,

            greatSuccess : 0,

            instructions : false,
            springClamp : false,
            protectiveGloves : false,
            gripWrench : false,
            brandNewPart : false,

            fireworks : false,
            firecrackers : false,

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


            switch(this.rarity){
                case 1 : //worn-out tools (brown)
                    this.charges = 16;
                    this.repairSpeed += 0.5;
                    this.greatSuccess += -10;
                    

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/brownToolBox-4829aed0.webp"
                    break;
                case 2 : //toolbox (yellow)
                    this.charges = 20;
                    this.repairSpeed += 0.5;
                    this.saboSpeed += 0.1;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/yellowToolBox-c7cd0763.webp";
                    
                    break;
                case 3 : //mechanic's Toolbox (green)
                    this.charges = 16;
                    this.repairSpeed += 0.75;
                    this.saboSpeed += -0.1;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/mechanicToolBox-62423788.webp";
                    break;
                case 4 : //Commodious Toolbox (green)
                    this.charges = 32;
                    this.repairSpeed += 0.5;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/commoToolBox-1ff6b23b.webp";
                    break;
                case 5 : //Engineer's Toolbox (purple)
                    this.charges = 16;
                    this.repairSpeed += 1;
                    this.saboSpeed += -0.25;
                    
                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/engiToolBox-d8e8c645.webp";
                    
                    break;
                case 6 : //Alex's Toolbox (purple)
                    this.charges = 24;
                    this.repairSpeed += 0.1;
                    this.saboSpeed += 0.5;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/alexToolBox-d2b0e89c.webp";
                    break;
                case 7 : //Festive Toolbox (event)
                    this.charges = 32;
                    this.repairSpeed += 0.5;
                    this.firecrackers = true;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/lunarToolBox-e42b4acc.webp";
                    break;
                case 8 : //Anniversary Toolbox (event)
                    this.charges = 32;
                    this.repairSpeed += 0.5;
                    this.fireworks = true;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/anniToolBox-7a92cbd2.webp";
                    break;
                case 9 : //Masquerade Toolbox (event)
                    this.charges = 32;
                    this.repairSpeed += 0.5;
                    this.fireworks = true;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/masToolBox-519ed337.webp";
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
                    case 1 : //Scraps
                        this.charges += 8;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_scraps-22e10ff9.webp";
                        break;
                    case 2 : //Instructions
                        this.instructions = true;

                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_instructions-907137b7.webp";
                        break;
                    case 3 : //Clean Rag
                        this.repairSpeed += 0.2;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_cleanRag-6bb5742f.webp";
                        break;
                    case 4 : //Wire Spool
                        this.charges += 12;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_wireSpool-da65e487.webp";
                        break;
                    case 5 : //Spring Clamp
                        this.springClamp = true;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_springClamp-c2a36988.webp";
                        break;
                    case 6 : //Socket Swivels
                        this.repairSpeed += 0.3;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_socketSwivels-9e689df9.webp";
                        break;
                    case 7 : //Protective Gloves
                        this.protectiveGloves = true;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_protectiveGloves-aa140436.webp";
                        break;
                    case 8 : //Cutting Wire
                        this.saboSpeed += 0.15;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_cuttingWire-0e7f1b2a.webp";
                        break;
                    case 9 : //Hacksaw
                        this.saboSpeed += 0.2;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_hacksaw-bcca747a.webp";
                        break;
                    case 10 : //Grip Wrench
                        this.gripWrench = true;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_gripWrench-a776b2a0.webp";
                        break;
                    case 11 : //Brand New Part
                        this.brandNewPart = true;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_brandNewPart-8c887980.webp";
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
            
            //
            this.timeToSabo = 3 / this.saboSpeed;
            this.amountSabos = this.charges / 6;
            this.boxDuration = this.charges / this.repairSpeed;
            this.genTimeSaved = this.charges - this.boxDuration;
            
            if(this.brandNewPart == true){
                this.genTimeSaved += 10;
            }

            
        },

        //displays info for item
        renderItem(){

            

            let itemInfo = "• <b>"+ this.charges + "</b> charges <br>";
            itemInfo += "• Can sabo a total of <b>"+this.amountSabos.toFixed(2)+"</b> hook(s) <br>";
            itemInfo += "• takes <b>"+this.timeToSabo.toFixed(2)+"</b> seconds to sabotage a hook <br>";
            
            itemInfo += "• Takes <b>"+this.boxDuration.toFixed(2)+"</b> seconds to fully deplete the toolbox on a gen <br>";
            itemInfo += "• Repairs gens <b>"+((this.repairSpeed-1)*100).toFixed(0)+"%</b> faster and saves <b>"+this.genTimeSaved.toFixed(2)+"</b> seconds overall ";
            if(this.brandNewPart == true){
                itemInfo += "(BNP included)<br>";
            }
            else{
                itemInfo += "<br>"
            }

            if(this.greatSuccess != 0){
                itemInfo += "• Good skill check zones are <b>10%</b> smaller <br>";
            }
            if(this.firecrackers == true){
                itemInfo += "• Detonates firecrackers SFX on succeeding a Great Skill Check<br>";
                itemInfo += "• Detonates fireworks SFX on failing a Skill Check<br>";
            }
            if(this.fireworks == true){
                itemInfo += "• Detonates fireworks SFX once depleted<br>";
            }
            
            if(this.instructions == true){
                itemInfo += "• No normal skillchecks will be triggered while repairing <br>";
            }
            if(this.springClamp == true) {
                itemInfo += "• Reduces the range that your gen repair noises can be heard by <b>8</b> metres<br>";
            }
            if(this.protectiveGloves == true) {
                itemInfo += "• Killer isn't notified when you sabo a hook <br>";
            }
            if(this.gripWrench == true) {
                itemInfo += "• Increases time for a hook to auto-repair by <b>15</b> seconds (now <b>45</b> seconds)<br>";
            }
            if(this.brandNewPart == true) {
                itemInfo += "• Instead of repairing you can install a Brand New Part,<br>Installing requires hitting a difficult skillcheck, Succeeding<br>the skill check permanetly reduces the gen by 10 charges<br>";
                itemInfo += "<b>(Consumes Brand New Part on use)</b><br>"
            }
            itemInfo += "<b>NOTE : Gen time saved assumes 1 person on a gen and no skill checks<b/><br>"

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

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-4 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askForRare">

            <div class="col img-col">
                <h1 style="font-size:3vw;">💎Select your rarity💎</h1>

                <img src="../assets/brownToolBox.webp" alt="Common Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(1)">
                <img src="../assets/yellowToolBox.webp" alt="Uncommon Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(2)">
                <img src="../assets/mechanicToolBox.webp" alt="mechanics Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(3)">
                <img src="../assets/commoToolBox.webp" alt="como Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(4)">
                <img src="../assets/engiToolBox.webp" alt="Rare mechanics Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(5)">
                <img src="../assets/alexToolBox.webp" alt="Alex Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(6)">
                <br>
                <img src="../assets/lunarToolBox.webp" alt="Lunar Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(7)">
                <img src="../assets/anniToolBox.webp" alt="Anniversary Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(8)">
                <img src="../assets/masToolBox.webp" alt="Masquerade Toolbox" class="img-fluid" style="width: 16%;" @click="raritySelect(9)">

            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-4 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askFor1stAddon || askFor2ndAddon">

            <div class="col img-col">
                <h2 v-if="askFor1stAddon" style="font-size:2vw;">🔨Select your 1st addon🔨</h2>
                <h2 v-if="askFor2ndAddon" style="font-size:2vw;">🔨Select your 2nd addon🔨</h2>

                <img src="..//assets/toolboxAddons/FulliconAddon_scraps.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(1)">
                <img src="..//assets/toolboxAddons/FulliconAddon_instructions.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(2)">
                <img src="..//assets/toolboxAddons/FulliconAddon_cleanRag.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(3)">
                <img src="..//assets/toolboxAddons/FulliconAddon_wireSpool.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(4)">
                <br>
                <img src="..//assets/toolboxAddons/FulliconAddon_springClamp.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(5)">
                <img src="..//assets/toolboxAddons/FulliconAddon_socketSwivels.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(6)">
                <img src="..//assets/toolboxAddons/FulliconAddon_protectiveGloves.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(7)">
                <img src="..//assets/toolboxAddons/FulliconAddon_cuttingWire.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(8)">
                <br>
                <img src="..//assets/toolboxAddons/FulliconAddon_hacksaw.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(9)">
                <img src="..//assets/toolboxAddons/FulliconAddon_gripWrench.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(10)">
                <img src="..//assets/toolboxAddons/FulliconAddon_brandNewPart.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(11)">
                <br>
                <button class="btn btn-danger" style="color: black; font-size:1.5vw;" @click="AddonSelect(0)">No Addon</button>
                
            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="showFinalItem">

            <div class="col img-col">
                <h1 style="font-size:3vw;">🧰Your Item🧰</h1>

                <img v-bind:src="itemImage" alt="Chosen Item" class="img-fluid" style="width: 20%;" id = "finalMap" @load="renderItem">
                <img v-bind:src="addon1Image" alt="1st Chosen addon" class="img-fluid" style="width: 13%;" id = "finalAddon1" v-if="this.addon1Exist">
                <img v-bind:src="addon2Image" alt="2nd Chose addon" class="img-fluid" style="width: 13%;" id = "finalAddon2" v-if="this.addon2Exist">
                <br>
                <h3 style="font-size:2vh;">Your toolbox has</h3>
                <b id="info" style="font-size:1.2vh;"></b>

            </div>

        </div>
    </div>
</template>

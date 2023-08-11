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

            extraRange : 0,
            keyDuration : -1,
            canOpenHatch : false,

            itemImage : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg",
            addon1Image : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg",
            addon2Image : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg", 

            erodedToken : false,
            goldToken : false,

            weavedRing : false,
            milkyGlass : false,
            bloodAmber : false,
            weddingRing : false,
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
                case 2 : // Broken Key (green)
                    this.keyDuration = 10;
                    this.canOpenHatch = false;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/greenKey-bfd55ddf.webp";
                    
                    break;
                case 3 : // Dull Key (purple)
                    this.keyDuration = 5;
                    this.canOpenHatch = true;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/PurpleKey-914e5aea.webp";
            
                    break;
                case 4 : // Skeleton Key (pink)
                    this.keyDuration = 30;
                    this.canOpenHatch = true;
                    
                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/pinkKey-08274788.webp";
                    
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
                    case 1 : //Prayer Rope
                        this.keyDuration = this.keyDuration + 10;
                        console.log("Key Duration : "+this.keyDuration);
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_prayerRope-ae656edc.webp";
                        break;
                    case 2 : //Scratched Pearl
                        this.extraRange = this.extraRange + 12;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_scratchedPearl-f7f819bd.webp";
                        break;
                    case 3 : //Prayer Beads
                        this.keyDuration = this.keyDuration + 15;
                        console.log("Key Duration : "+this.keyDuration);
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_prayerBeads-87b7e914.webp";
                        break;
                    case 4 : //Eroded Token
                        this.erodedToken = true;
                        console.log("Eroded Token is true");
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_erodedToken-2337862a.webp";
                        break;
                    case 5 : //Gold Token
                        this.goldToken = true;
                        console.log("Gold Token");
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_goldToken-26df4b34.webp";
                        break;
                    case 6 : //Weaved Ring
                        this.weavedRing = true;
                        console.log("Glassbead : "+this.weavedRing);
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_weavedRing-fa90d688.webp";
                        break;
                    case 7 : //Milk Glass
                        this.milkyGlass = true;
                        console.log("Map Range : "+this.milkyGlass);
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_milkyGlass-2bac049b.webp";
                        break;
                    case 8 : //Blood Amber
                        this.bloodAmber = true;
                        console.log("Tracks : "+this.bloodAmber);
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_bloodAmber-77b24651.webp";
                        break;
                    case 9 : //Unique Wedding Ring
                        this.weddingRing = true;
                        console.log("Crystalbead : "+this.weddingRing);
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_uniqueWeddingRing-21fe3826.webp";
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

            
        },

        //displays info for item
        renderItem(){

            if(this.bloodAmber){
                this.keyDuration = this.keyDuration * 0.5;
            }

            let itemInfo = "• <b>"+ this.keyDuration + "</b> seconds of use <br>";
            
            
            if(this.canOpenHatch){
                itemInfo += "• If it has charges, can be consumed to open the Hatch <br>";
            }
            else {
                itemInfo += "• Can't be consumed to open the Hatch <br>";
            }
            

            let survAura = 0;
            if(this.goldToken){
                itemInfo += "• Can reveal survivors' Auras within ";
                survAura = 48 + this.extraRange;
                itemInfo += "<b>"+survAura + "</b> metres <br>";
                

            }
            else if(this.erodedToken){
                itemInfo += "• Can reveal survivors' Auras within ";
                survAura = 24 + this.extraRange;
                itemInfo += "<b>"+survAura + "</b> metres <br>";
            }

            let killerAura = 0;
            if(this.bloodAmber){
                itemInfo += "• Can reveal the killer's Aura within ";
                killerAura = 32 + this.extraRange;
                itemInfo += "<b>"+killerAura + "</b> metres <br>";
            }

            if(this.weavedRing){
                itemInfo += "• Weaved Ring addon will be lost on death, not the key <br>";
            }

            if(this.weddingRing){
                itemInfo += "• Obessions aura is always revealed to you <br>";
            }

            if(this.milkyGlass){
                itemInfo += "• Milky Glass addon will be lost when opening hatch, not the key <br>";
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
    
        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-4 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askForRare">

            <div class="col img-col">
                <h1 style="font-size:3vw;">💎Select your rarity💎</h1>

                <img src="../assets/greenKey.webp" alt="Rare Key" class="img-fluid" style="width: 25%;" @click="raritySelect(2)">
                <img src="../assets/purpleKey.webp" alt="Very Rare Key" class="img-fluid" style="width: 25%;" @click="raritySelect(3)">
                <img src="../assets/pinkKey.webp" alt="Ultra Rare Key" class="img-fluid" style="width: 25%;" @click="raritySelect(4)">
            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-4 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askFor1stAddon || askFor2ndAddon">

            <div class="col img-col">
                <h2 v-if="askFor1stAddon" style="font-size:2vw;">🔨Select your 1st addon🔨</h2>
                <h2 v-if="askFor2ndAddon" style="font-size:2vw;">🔨Select your 2nd addon🔨</h2>

                <img src="..//assets/keyAddons/FulliconAddon_prayerRope.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(1)">
                <img src="..//assets/keyAddons/FulliconAddon_scratchedPearl.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(2)">
                <img src="..//assets/keyAddons/FulliconAddon_prayerBeads.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(3)">
                <br>
                <img src="..//assets/keyAddons/FulliconAddon_erodedToken.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(4)">
                <img src="..//assets/keyAddons/FulliconAddon_goldToken.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(5)">
                <img src="..//assets/keyAddons/FulliconAddon_weavedRing.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(6)">
                <br>
                <img src="..//assets/keyAddons/FulliconAddon_milkyGlass.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(7)">
                <img src="..//assets/keyAddons/FulliconAddon_bloodAmber.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(8)">
                <img src="..//assets/keyAddons/FulliconAddon_uniqueWeddingRing.webp" alt="Rare Map" class="img-fluid" style="width: 15%;" @click="AddonSelect(9)">
                <br>
                <button class="btn btn-danger" style="color: black; font-size:1.5vw;" @click="AddonSelect(0)">No Addon</button>
                
            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-4 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="showFinalItem">

            <div class="col img-col">
                <h1 style="font-size:3vw;">🗝️Your Item🗝️</h1>

                <img v-bind:src="itemImage" alt="Chosen Item" class="img-fluid" style="width: 20%;" id = "finalMap" @load="renderItem">
                <img v-bind:src="addon1Image" alt="1st Chosen addon" class="img-fluid" style="width: 13%;" id = "finalAddon1" v-if="addon1Exist">
                <img v-bind:src="addon2Image" alt="2nd Chose addon" class="img-fluid" style="width: 13%;" id = "finalAddon2" v-if="addon2Exist">
                <br>
                <h3 style="font-size:2vh;">Your key has</h3>
                <b id="info" style="font-size:1.5vh;"></b>

            </div>

        </div>
    </div>
</template>
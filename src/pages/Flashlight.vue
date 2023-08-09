
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

            lightDuration : -1,
            lightRange : 10,
            blindsFor : 2,

            beamBrightness : 0,
            aimAccuracy : 0,
            beamAngle : 20,

            confetti : false,
            spooky : false,
            flicker : false,


            itemImage : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg",
            addon1Image : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg",
            addon2Image : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg", 

        }
    },
    methods : {
        raritySelect(theRarity){
            this.rarity = theRarity;
            console.log("Selected Rarity = "+this.rarity);
            this.askForRare = false;
            this.askFor1stAddon = true;
        },

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

        
        //calcualtes info for item
        itemCalculate(){

            let depletionRate = 1;
            let blindDuratiodMult = 1;
            let beamReachMutl = 1;
            let beamWidthMult = 1;
            let beamBrightMult = 1;
            let beamAccMult = 0;

            switch(this.rarity){
                case 1 :
                    this.lightDuration = 8;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/yellowFlashLight-d31a4264.webp"
                    break;
                case 2 :
                    this.lightDuration = 8;
                    depletionRate = depletionRate - 0.11;
                    console.log("DepletionRate = "+depletionRate);

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/greenFlashLight-a31e094b.webp";
                    
                    break;
                case 3 :
                    this.lightDuration = 12;
                    beamBrightMult += 0.3;
                    blindDuratiodMult += 0.15;
                    beamAccMult += -0.2;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/purpleFlashLight-a80bf6c4.webp";
            
                    break;
                case 5 :
                    this.lightDuration = 8;
                    this.spooky = true;
                    
                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/willFlashLight-ab23c91e.webp";
                    
                    break;
                case 6 :
                    this.lightDuration = 8;
                    this.confetti = true;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/anniFlashLight-b86d7a09.webp"
                    break;
                case 7 :
                    this.lightDuration = 8;
                    this.confetti = true;

                    this.itemImage = "https://whatexactlydoesmyitemdo.web.app/assets/masFlashLight-880a3fcb.webp"
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
                    case 1 :
                        beamWidthMult += 0.25;
                        beamReachMutl += -0.25;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_wideLens-c6079cc4.webp";
                        break;
                    case 2 :
                        beamBrightMult += 0.2;
                        blindDuratiodMult += 0.1;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_powerBulb-4ab0a8e0.webp";
                        break;
                    case 3 :
                        beamAccMult += 0.2;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_leatherGrip-fdab5d86.webp";
                        break;
                    case 4 : 
                        this.lightDuration += 2;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_battery-2d31cf30.webp";
                        break;
                    case 5 :
                        beamBrightMult += 0.3;
                        blindDuratiodMult += 0.15;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_tirOptic-7659b954.webp";
                        break;
                    case 6 :
                        beamAccMult += 0.4;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_rubberGrip-0e2998f6.webp";
                        break;
                    case 7 : 
                        depletionRate += -0.2;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_lowAmpFilament-12d8bbd9.webp";
                        break;
                    case 8 :
                        this.lightDuration += 4;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_heavyDutyBattery-a55dbf24.webp";
                        break;
                    case 9 :
                        beamReachMutl += 0.25;
                        beamBrightMult += 0.2;
                        blindDuratiodMult += 0.1;
                        beamWidthMult += -0.15;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_focusLens-843ed02e.webp";
                        break;
                    case 10 :
                        this.lightDuration += 6;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_longLifeBattery-02186eb9.webp";
                        break;
                    case 11 :
                        beamBrightMult += 0.4;
                        blindDuratiodMult += 0.2;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_intenseHalogen-ab50d617.webp";
                        break;
                    case 12 :
                        beamReachMutl += 0.25;
                        beamBrightMult += 0.3;
                        blindDuratiodMult += 0.15;
                        beamWidthMult += -0.25;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_high-EndSapphireLens-edb0593a.webp";
                        break;
                    case 13 :
                        beamBrightMult += 0.5;
                        blindDuratiodMult += 0.25;
                        depletionRate += 0.14;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_oddBulb-5c09898b.webp";
                        break;
                    case 14 :
                        beamBrightMult += 0.15;
                        blindDuratiodMult += 0.30;
                        this.flicker = true;
                        
                        curAddonImageID = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_brokenBulb-e1ab5974.webp";
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
            
            console.log("DepletionRate = "+depletionRate);
            console.log("Charges = "+this.lightDuration);
            this.lightDuration = this.lightDuration / depletionRate;
            this.lightRange = this.lightRange * beamReachMutl;
            this.blindsFor = this.blindsFor * blindDuratiodMult;

            this.beamAngle = this.beamAngle * beamWidthMult;
            this.beamBrightness = (beamBrightMult-1) * 100;
            console.log(this.aimAccuracy);
            this.aimAccuracy = beamAccMult * 100;
            
        },

        //displays info for item
        renderItem(){


            let itemInfo = "• "+ this.lightDuration.toFixed(2) + " seconds of use <br>";
            itemInfo += "• " + this.lightRange.toFixed(2) + " metres of range <br>";
            itemInfo += "• Takes 1 second to blind<br>";
            itemInfo += "• Blinds for " + this.blindsFor.toFixed(2) +" seconds <br>";
            itemInfo += "• Has a beam width of "+this.beamAngle+" degress<br>";
            
            if(this.beamBrightness != 0){
                itemInfo += "• "+this.beamBrightness.toFixed(0)+"% brighter beams<br>";
            }
            
            
            if(this.aimAccuracy != 0){
                if(this.aimAccuracy > 0){
                    itemInfo += "• "+this.aimAccuracy+"% better accuracy (reduced sway)<br>";
                }
                if(this.aimAccuracy < 0){
                    this.aimAccuracy = this.aimAccuracy *-1;
                    itemInfo += "• "+this.aimAccuracy+"% worse accuracy (increased sway)<br>";
                }
            }

            if(this.flicker == true){
                itemInfo += "• The flashlight's beam will flicker <br>";
            }
            if(this.confetti == true){
                itemInfo += "• Confetti will apear upon a successful blind <br>";
            }
            if(this.spooky == true){
                itemInfo += "• Orange-tinted beam that shines a ghost <br>";
            }
            

            document.getElementById("info").innerHTML = itemInfo;
        },

        
    }
}



</script>

<template>
    <div class="container">
        
        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-5 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askForRare">

            <div class="col img-col">
                <h1>💎Select your rarity💎</h1>

                <img src="../assets/yellowFlashLight.webp" alt="Uncommon Flashlight" class="img-fluid" width="100" @click="raritySelect(1)">
                <img src="../assets/greenFlashLight.webp" alt="Uncommon Flashlight" class="img-fluid" width="100" @click="raritySelect(2)">
                <img src="../assets/purpleFlashLight.webp" alt="Uncommon Flashlight" class="img-fluid" width="100" @click="raritySelect(3)">
                <br>
                <img src="../assets/willFlashLight.webp" alt="Halloween Flashlight" class="img-fluid" width="100" @click="raritySelect(5)">
                <img src="../assets/anniFlashLight.webp" alt="AnniversaryFlashlight" class="img-fluid" width="100" @click="raritySelect(6)">
                <img src="../assets/masFlashLight.webp" alt="Masquerade Flashlight" class="img-fluid" width="100" @click="raritySelect(7)">
            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-5 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askFor1stAddon || askFor2ndAddon">

            <div class="col img-col">
                <h2 v-if="askFor1stAddon">🔨Select your 1st addon🔨</h2>
                <h2 v-if="askFor2ndAddon">🔨Select your 2nd addon🔨</h2>

                <img src="..//assets/flashlightAddons/FulliconAddon_wideLens.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(1)">
                <img src="..//assets/flashlightAddons/FulliconAddon_powerBulb.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(2)">
                <img src="..//assets/flashlightAddons/FulliconAddon_leatherGrip.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(3)">
                <img src="..//assets/flashlightAddons/FulliconAddon_battery.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(4)">
                <img src="..//assets/flashlightAddons/FulliconAddon_tirOptic.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(5)">
                <br>
                <img src="..//assets/flashlightAddons/FulliconAddon_rubberGrip.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(6)">
                <img src="..//assets/flashlightAddons/FulliconAddon_lowAmpFilament.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(7)">
                <img src="..//assets/flashlightAddons/FulliconAddon_heavyDutyBattery.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(8)">
                <img src="..//assets/flashlightAddons/FulliconAddon_focusLens.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(9)">
                <img src="..//assets/flashlightAddons/FulliconAddon_longLifeBattery.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(10)">
                <br>
                <img src="..//assets/flashlightAddons/FulliconAddon_intenseHalogen.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(11)">
                <img src="..//assets/flashlightAddons/FulliconAddon_high-EndSapphireLens.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(12)">
                <img src="..//assets/flashlightAddons/FulliconAddon_oddBulb.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(13)">
                <img src="..//assets/flashlightAddons/FulliconAddon_brokenBulb.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(14)">
                <br>
                <button class="btn btn-danger" style="color: black;" @click="AddonSelect(0)">No Addon</button>
                
            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-5 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="showFinalItem">

            <div class="col img-col">
                <h1>🔦Your Item🔦</h1>

                <img v-bind:src="itemImage" alt="Chosen Item" class="img-fluid" width="100" id = "finalMap" @load="renderItem">
                <img v-bind:src="addon1Image" alt="1st Chosen addon" class="img-fluid" width="80" id = "finalAddon1" v-if="this.addon1Exist">
                <img v-bind:src="addon2Image" alt="2nd Chose addon" class="img-fluid" width="80" id = "finalAddon2" v-if="this.addon2Exist">
                <br>
                <h3>Your flashlight has</h3>
                <b id="info"></b>
                <br>
                <b id="kb"></b>

            </div>

        </div>
    </div>
</template>

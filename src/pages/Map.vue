<script>

import pinkMap from "../assets/pinkMap.webp";

export default {
    data(){
        return{
            askForRare : true,
            askFor1stAddon : false,
            askFor2ndAddon : false,
            showFinalItem : false,

            rarity : -1,
            addon1 : -1,
            addon2 : -1,

            mapRange : -1,
            mapDuration : -1,
            mapTracks : [],

            mapImage : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg",
            addon1Image : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg",
            addon2Image : "https://fidoseofreality.com/wp-content/uploads/2022/11/ROAN-FEATURE.jpg", 

            glassBead : false,
            crystalBead : false,
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
                    console.log("Selected 2nd Addon = "+this.addon2)
                    
                    //run function to calculate what item can do   
                    this.itemCalculate();

                    this.askFor2ndAddon = false;
                    this.showFinalItem = true;

                    
                }
            }
        },

        

        itemCalculate(){

            let glassBead = false;
            let crystalBead = false;

            switch(this.rarity){
                case 2 :
                    this.mapRange = 8;
                    this.mapDuration = 20;
                    this.mapTracks[0] = "Generators";

                    this.mapImage = "https://whatexactlydoesmyitemdo.web.app/assets/greenMap-2d832317.webp";
                    
                    
                    break;
                case 4 :
                    this.mapRange = 8;
                    this.mapDuration = 20;
                    this.mapTracks[0] = "Generators";
                    this.mapTracks[1] = "Exit Gates";
                    this.mapTracks[2] = "the Hatch";
                    this.mapTracks[3] = "Killer Belongings"
                    //Trackable Killer Belongings include Traps, Dream pallets / snares, Hooks, Jigsaw Boxes, activated portals, totems

                    
                    this.mapImage = "https://whatexactlydoesmyitemdo.web.app/assets/pinkMap-aa7e9d6f.webp";
                    console.log(this.mapImage);
                    
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
                        this.mapDuration = this.mapDuration + 5;
                        console.log("Map Duration : "+this.mapDuration);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_mapAddendum-dc3395b8.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_mapAddendum-dc3395b8.webp";
                        }
                        break;
                    case 2 :
                        this.mapTracks[1] = "Exit Gates";
                        console.log("Tracks : "+this.mapTracks[1]);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_yellowWire-4925ac38.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_yellowWire-4925ac38.webp";
                        }
                        break;
                    case 3 :
                        this.mapRange = this.mapRange + 8;
                        console.log("Map Range : "+this.mapRange);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_unusualStamp-7d91204e.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_unusualStamp-7d91204e.webp";
                        }
                        break;
                    case 4 : 
                        this.mapDuration = this.mapDuration + ((this.mapDuration / 0.8) - this.mapDuration);
                        console.log("Map Duration : "+this.mapDuration);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_retardantJelly-7d701b8e.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_retardantJelly-7d701b8e.webp";
                        }
                        break;
                    case 5 :
                        this.mapTracks[3] = "Killer Belongings";
                        console.log("Tracks : "+this.mapTracks[3]);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_redTwine-669413ba.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_redTwine-669413ba.webp";
                        }
                        break;
                    case 6 :
                        this.glassBead = true;
                        console.log("Glassbead : "+glassBead);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_glassBead-1a81b28d.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_glassBead-1a81b28d.webp";
                        }
                        break;
                    case 7 : 
                        this.mapRange = this.mapRange + 12;
                        console.log("Map Range : "+this.mapRange);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_oddStamp-93a621b7.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_oddStamp-93a621b7.webp";
                        }
                        break;
                    case 8 :
                        this.mapTracks[2] = "the Hatch";
                        console.log("Tracks : "+this.mapTracks[2]);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_blackSilkCord-ce9222c8.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_blackSilkCord-ce9222c8.webp";
                        }
                        break;
                    case 9 :
                        this.crystalBead = true;
                        console.log("Crystalbead : "+crystalBead);
                        
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_crystalBead-1328f942.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_crystalBead-1328f942.webp";
                        }
                        break;
                    case 0 :
                        //no addon, no additional affects
                        if(i == 0){
                            this.addon1Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_unusualStamp-7d91204e.webp";
                        }
                        else{
                            this.addon2Image = "https://whatexactlydoesmyitemdo.web.app/assets/FulliconAddon_unusualStamp-7d91204e.webp";
                        }
                        break;
                }

                curAddon = this.addon2;
                curAddonImageID = "finalAddon2";

            }

            
        },

        renderItem(){

            let itemInfo = "• "+ this.mapRange + " meters of range <br>";
            itemInfo += "• "+ this.mapDuration + " seconds of use <br>";
            

            

            if(this.glassBead){
                itemInfo += "• Can place a pillar of light <br>"
            }
            if(this.crystalBead){
                itemInfo += "• Reveals auras to all survivors <br>"
            }

            itemInfo += "• Can Track ";
            for(let i = 0; i < this.mapTracks.length; i++){
                if(this.mapTracks[i] != null){
                    itemInfo += this.mapTracks[i];

                    if(i != this.mapTracks.length -1){
                    itemInfo += ", ";
                }
                }
                
            }
            itemInfo += "<br>";

            if(this.mapTracks[3] != null){
                document.getElementById("kb").innerHTML = "(Note : Trackable Killer Belongings include Traps, Dream pallets,<br> Dream snares, Hooks, Jigsaw Boxes, activated portals, totems)"
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

                <img src="../assets/greenMap.webp" alt="Rare Map" class="img-fluid" width="100" @click="raritySelect(2)">
                <img src="../assets/pinkMap.webp" alt="Ultra Rare Map" class="img-fluid" width="100"  @click="raritySelect(4)">
            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-5 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="askFor1stAddon || askFor2ndAddon">

            <div class="col img-col">
                <h1 v-if="askFor1stAddon">🔨Select your 1st addon🔨</h1>
                <h1 v-if="askFor2ndAddon">🔨Select your 2nd addon🔨</h1>

                <img src="../assets/mapAddons/FulliconAddon_mapAddendum.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(1)">
                <img src="../assets/mapAddons/FulliconAddon_yellowWire.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(2)">
                <img src="../assets/mapAddons/FulliconAddon_unusualStamp.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(3)">
                <br>
                <img src="../assets/mapAddons/FulliconAddon_retardantJelly.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(4)">
                <img src="../assets/mapAddons/FulliconAddon_redTwine.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(5)">
                <img src="../assets/mapAddons/FulliconAddon_glassBead.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(6)">
                <br>
                <img src="../assets/mapAddons/FulliconAddon_oddStamp.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(7)">
                <img src="../assets/mapAddons/FulliconAddon_blackSilkCord.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(8)">
                <img src="../assets/mapAddons/FulliconAddon_crystalBead.webp" alt="Rare Map" class="img-fluid" width="80" @click="AddonSelect(9)">
                <br>
                <button class="btn btn-danger" style="color: black;" @click="AddonSelect(0)">No Addon</button>
                
            </div>

        </div>

        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-5 mb-5 bg-body-tertiary rounded" style="text-align: center;" v-if="showFinalItem">

            <div class="col img-col">
                <h1>🗺️Your Item🗺️</h1>

                <img v-bind:src="mapImage" alt="Chosen Item" class="img-fluid" width="100" id = "finalMap">
                <img v-bind:src="addon1Image" alt="1st Chosen addon" class="img-fluid" width="80" id = "finalAddon1" @load="renderItem">
                <img v-bind:src="addon2Image" alt="2nd Chose addon" class="img-fluid" width="80" id = "finalAddon2">
                <br>
                <h3>Your map has</h3>
                <b id="info"></b>
                <br>
                <b id="kb"></b>

            </div>

        </div>

    </div>
</template>
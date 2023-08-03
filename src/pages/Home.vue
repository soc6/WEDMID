<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div class="container">
    
        <div class=" border position-fixed top-50 start-50 translate-middle shadow p-5 mb-5 bg-body-tertiary rounded" style="text-align: center;" >
            <div class="col img-col">
                <h1>🎁Select an item🎁</h1>
                <router-link to="/toolbox">
                    <img src="../assets/brownToolBox.webp" alt="Toolbox" class="img-fluid" width="100">
                </router-link>

                <router-link to="/medkit">
                    <img src="../assets/yellowMedKit.webp" alt="Toolbox" class="img-fluid" width="100">
                </router-link>

                <router-link to="/map">
                    <img src="../assets/greenMap.webp" alt="Toolbox" class="img-fluid" width="100">
                </router-link>

                <router-link to="/flashlight">
                    <img src="../assets/purpleFlashLight.webp" alt="Toolbox" class="img-fluid" width="100">
                </router-link>

                <router-link to="/key">
                    <img src="../assets/pinkKey.webp" alt="Toolbox" class="img-fluid" width="100">
                </router-link>
            </div>

        </div>
    </div>
</template>

<style scoped>

    
</style>

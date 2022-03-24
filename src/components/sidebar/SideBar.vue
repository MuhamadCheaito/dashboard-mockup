<template>
   <q-drawer show-if-above side="left" 
    class="resize" elevated>
    <img
      src="../../assets/images/logo.svg"
      class="sidebar-logo"
    />
    <menu-list></menu-list>
    <covid-box></covid-box>
    <menu-footer></menu-footer>
    </q-drawer>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import MenuList from "./MenuList.vue";
import CovidBox from './CovidBox.vue';
import MenuFooter from "./MenuFooter.vue";

export default defineComponent({
    name:"SideBar",
    components:{
    MenuList,
    CovidBox,
    MenuFooter
}
})
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent; 
}
 
::-webkit-scrollbar-thumb {
  background: rgba(232, 237, 243, 0.733); 
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(204, 200, 200); 
}
</style>
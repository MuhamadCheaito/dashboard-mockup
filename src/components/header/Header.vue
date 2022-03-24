<template>
  <q-header reveal class="bg-white text-black move-left">
      <q-toolbar>
        <SearchBox class="gt-sm" style="min-width: 500px"/>
        <Profile class="gt-sm"/>
        <SearchBox class="lt-sm full-width"/>
      </q-toolbar>
    </q-header>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import SearchBox from './SearchBox.vue';
import Profile from "./Profile.vue";

export default defineComponent({
    name:"Header",
    components:{
      SearchBox,
      Profile,
    },
})
</script>

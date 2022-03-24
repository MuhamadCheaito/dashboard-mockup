<template>
    <q-list class="menu-list">
        <menu-item></menu-item>
    </q-list>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
    name:'MenuList',
    components:{
        MenuItem
    }
}
</script>
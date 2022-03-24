<template>
        <span class="menu-title" dense>MANAGEMENT</span>
        <q-item class="menu-item manage-items" v-for="management in managements" :key="management">
          <q-icon :name="management.icon"/>
          {{management.label}}
        </q-item>
        <span class="menu-title">SUPPORT</span>
         <q-item class="menu-item" v-for="support in supports" :key="support">
          <q-icon :name="support.icon"/>
          {{support.label}}
        </q-item>
</template>

<script>
export default {
    name:"MenuItem",
    data(){
        return{
            managements:[
                {
                    icon:"grid_view",
                    label:"Overview"
                },
                {
                    icon:"leaderboard",
                    label:"Statistics"
                },
                {
                    icon:"thermostat",
                    label:"Patients"
                },
                {
                    icon:"content_paste",
                    label:"Polyclinic"
                },
                {
                    icon:"people_outline",
                    label:"Doctors"
                },
                {
                    icon:"inventory_2",
                    label:"Medicines"
                },
            ],
            supports:[
                {
                    icon:"mail_outline",
                    label:"Messages"
                },
                {
                    icon:"settings",
                    label:"Settings"
                },
            ]
        }
    }
}
</script>
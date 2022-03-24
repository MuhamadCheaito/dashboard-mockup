<template>
    <q-card style="padding:15px;" flat rounded>
        <span class="text-bold text-body1" dense>Polyclinic Division</span>
        <DivisionItem :divisionList="divisionList"/>
        <q-btn style="background-color:#ebf4ff;border-radius:10px;
                    text-transform:capitalize;width:100%;" 
        text-color="primary" class="q-pa-md text-bold" flat>See More Polyclinic</q-btn>
    </q-card>
</template>

<script>
import { data } from './data';
import DivisionItem from '../divison/DivisionItem.vue';
export default {
    name:"DivisionList",
    components:{
        DivisionItem
    },
    data(){
        return {
            divisionList: data
        }
    }
}
</script>
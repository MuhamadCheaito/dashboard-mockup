<template>
  <q-card style="padding: 25px;width:100%" rounded flat>
    <p class="text-bold text-body1">Appointment List</p>
    <AppointmentCard :appointment="appointmentList[0]"
    :avatarList="appointmentList[0].avatarList" class="q-my-md"/>
    <AppointmentCard :appointment="appointmentList[1]" 
    :avatarList="appointmentList[1].avatarList" class="q-my-md"/>
  </q-card>
</template>

<script>
import AppointmentCard from "../appointment/AppointmentCard.vue";
import { ref } from 'vue';
import { data } from './data';

export default {
  name: "AppointmentList",
  components: {
    AppointmentCard
  },
  setup () {
    return {
      model: ref(null),
    }
  },
  data() {
    return {
      appointmentList: data,
    };
  },
};
</script>
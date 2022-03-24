<template>
  <div class="row justify-between items-center q-pa-md first-row">
      <Heading />
  </div>
  <div class="row q-col-gutter-md">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12 second-row">
          <div class="row q-gutter-x-xl q-gutter-y-md">
              <ResultCard :counters="this.counters" />
          </div>
          <div class="row q-my-md">
              <PatientsChart/>
          </div>
          <div class="row q-gutter-y-xl q-gutter-x-lg">
              <GenderChart/>
              <GroupChart/>
          </div>
      </div>
      <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
            <div class="q-gutter-y-lg">
                <AppointmentList class="full-width"/>
                <DivisionList class="full-width"/>
            </div>
      </div>
  </div>
</template>

<script>
import DataService from "../../services/dataservice";
import Heading from "../home/Heading.vue";
import ResultCard from "../home/ResultCard.vue";
import PatientsChart from "../home/charts/PatientsChart.vue";
import GroupChart from "../home/charts/GroupChart.vue";
import GenderChart from "../home/charts/GenderChart.vue";
import AppointmentList from "../home/appointment/AppointmentList.vue";
import DivisionList from "../home/divison/DivisionList.vue";

export default {
  name: "HomeLayout",
  components: {
    Heading,
    ResultCard,
    PatientsChart,
    GroupChart,
    GenderChart,
    AppointmentList,
    DivisionList
},
  async mounted() {
    this.counters = await DataService.getCounters();
  },
  data() {
    return {
      counters: {},
    };
  },
};
</script>
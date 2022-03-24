<template>
<div class="col-lg-4 col-md-4 col-xs-12 col-sm-12 chart-container">
  <apexchart
    width="100%"
    type="donut"
    height="320px"
    :options="options"
    :series="series"
  ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import DataService from "../../../services/dataservice";
import { legendStyles } from './chartStyles/groupchart';
import { donutStyles, titleStyles } from './chartStyles/shared';

const { title, types, values } = await DataService.getReportsByGroup();

export default {
  name: "GroupChart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      options: {
        labels: types,
        colors: ["#e2eefe","#016eff",'#5fe1e0'],
        dataLabels: {
        enabled: false,
        },
        title:{
          text:title,
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: titleStyles,
        },
        legend:legendStyles,
        chart: donutStyles
      },
      series: values,
    };
  },
};
</script>
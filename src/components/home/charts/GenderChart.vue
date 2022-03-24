<template>
<div class="col-lg-4 col-md-4 col-xs-12 col-sm-12 chart-container">
  <apexchart
    width="100%"
    type="donut"
    height="320px"
    :options="options"
    :series="series"
    style="border-radius:28px;"
  ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import DataService from "../../../services/dataservice";
import { donutStyles, titleStyles } from './chartStyles/shared';
import { legendStyles } from './chartStyles/genderchart';

const { title, types, values } = await DataService.getReportsByGender();

export default {
  name: "GroupChart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      options: {
        labels: types,
        colors: ['#016eff',"#e2eefe"],
        dataLabels: {
        enabled: false,
        },
        title:{
          text:title,
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: titleStyles
        },
        legend: legendStyles,
        chart: donutStyles
      },
      series: values,
    };
  },
};
</script>
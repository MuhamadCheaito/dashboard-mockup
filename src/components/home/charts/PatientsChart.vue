<template>
  <div class="col-lg-11 col-md-11 col-xs-12 col-sm-12 chart-container">
    <apexcharts
      width="100%"
      height="400px"
      type="area"
      class="area-chart"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import DataService from "../../../services/dataservice";
import {chartStyles,gridStyles,
        legendStyles,markerStyles} from './chartStyles/patientchart';

import { titleStyles } from './chartStyles/shared';

const { categories, values, types, title } =
  await DataService.getCovidReports();

export default {
  name: "PatientChart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: chartStyles,
        xaxis: {
          categories: categories,
          axisBorder: {
            show: false,
          },
          labels: {
            show: true,
            style: {
              colors: "#aaa",
            },
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          labels: {
            show: true,
            style: {
              colors: "#aaa",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: title,
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: titleStyles
        },
        legend: legendStyles,
        grid: gridStyles,
        markers: markerStyles,
      },
      series: [
        {
          name: types[0],
          data: values[0],
          color: "#3b6cdc",
        },
        {
          name: types[1],
          data: values[1],
          color: "#5fe1e0",
        },
      ],
    };
  },
};
</script>
<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数（居住地別）')"
      :title-id="'number-of-confirmed-cases-by-residence'"
      :chart-id="'time-bar-chart-patients-by-residence'"
      :chart-data="patientsGraph"
      :date="Data.date"
      :unit="$t('人')"
      :show-button="false"
    >
    </time-bar-chart>
  </v-col>
</template>

<script>
// import Data from '@/data/data.json'
import Data from '@/data/170003_ishikawa_covid19_city_town_patients.json'
import formatGraph from '@/utils/formatResidenceGraph'
import TimeBarChart from '@/components/TimeBarResidenceChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 居住地別陽性患者数グラフ
    const patientsGraph = formatGraph(Data.data[0].data)

    const data = {
      Data,
      patientsGraph
    }
    return data
  }
}
</script>

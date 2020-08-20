<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査陽性者数（公表日別）')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="Data.date"
      :unit="$t('人')"
      :url="'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_patients.csv'"
      :source="$t('データベースはこちら')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/patients_summary.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.data)

    const data = {
      Data,
      patientsGraph
    }
    return data
  }
}
</script>

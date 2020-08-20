<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査陽性者数（居住地別）')"
      :title-id="'number-of-confirmed-cases-by-residence'"
      :chart-id="'time-bar-chart-patients-by-residence'"
      :chart-data="patientsGraph1"
      :date="Data.date"
      :unit="$t('人')"
      :url="'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_city_town_patients.csv'"
      :source="$t('データベースはこちら')"
      :show-button="false"
    />
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
    // 検査陽性者数（居住地別）
    const patientsGraph1 = formatGraph(Data.data[0].data)

    const data = {
      Data,
      patientsGraph1
    }
    return data
  }
}
</script>

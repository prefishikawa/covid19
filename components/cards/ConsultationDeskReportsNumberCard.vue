<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新型コロナウイルス感染症に関する一般相談件数')"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-id="'time-bar-chart-querents'"
      :chart-data="querentsGraph"
      :date="Data.date"
      :unit="$t('件.reports')"
      :url="'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_counter.csv'"
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import Data from '@/data/general_consultation.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 帰国者・接触者 相談センター 相談件数
    const querentsGraph = formatGraph(Data.data)

    const data = {
      Data,
      querentsGraph
    }
    return data
  }
}
</script>

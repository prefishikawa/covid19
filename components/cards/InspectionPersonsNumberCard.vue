<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-inspection-persons'"
      :chart-id="'number-of-inspection-persons'"
      :chart-data="inspectionPersonsGraph"
      :date="inspectionPersonsDate"
      :unit="$t('件.reports')"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
// import Data from '@/data/data.json'
import InspectionPersons from '@/data/170003_ishikawa_covid19_test_count.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 検査実施件数グラフ
    const inspectionPersonsGraph = formatGraph(InspectionPersons.data)
    const inspectionPersonsDate = InspectionPersons.date
    const data = {
      inspectionPersonsDate,
      inspectionPersonsGraph
    }
    return data
  }
}
</script>

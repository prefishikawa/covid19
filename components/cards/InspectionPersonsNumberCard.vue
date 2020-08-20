<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-inspection-persons'"
      :chart-id="'number-of-inspection-persons'"
      :chart-data="inspectionPersonsGraph"
      :date="inspectionPersonsDate"
      :unit="$t('件.reports')"
      :url="'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_test_count.csv'"
      :source="$t('データベースはこちら')"
    >
      <template v-slot:additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <div>
            <p><i/>：行政検査　<i/>：保険適用検査 </p>
          </div>
          <ul>
            <li>令和2年7月27日以降は保険適用の件数を含む</li>
            <li>令和2年7月26日までの保険適用の件数は同27日に一括して計上</li>
            <li>速報値として公開するものであり、後日確定データとして修正される場合がある</li>
          </ul>
        </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
// import Data from '@/data/data.json'
import InspectionPersons from '@/data/170003_ishikawa_covid19_test_count.json'
import formatGraph from '@/utils/formatNumberOfInspectionsGraph'
import TimeBarChart from '@/components/TimeBarChartInspectionPersons.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 検査実施件数グラフ
    const inspectionPersonsDate = InspectionPersons.date
    const inspectionPersonsGraph = formatGraph(InspectionPersons.data)
    // const adminInspection = InspectionPersons.data.map((d) => d.admin_inspection)
    // const insuranceCoverage = InspectionPersons.data.map((d) => d.insurance_coverage)

    const data = {
      inspectionPersonsDate,
      inspectionPersonsGraph,
      // adminInspection,
      // insuranceCoverage
    }
    return data
  }
}
</script>

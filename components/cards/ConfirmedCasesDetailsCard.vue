<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="InspectionsSummary.date"
    >
      <confirmed-cases-details-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
      <template v-slot:footer>
        <open-data-link :url="'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_city_town_patients.csv'" />
      </template>
    </data-view>
  </v-col>
</template>

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script>
// import Data from '@/data/data.json'
import InspectionsSummary from '@/data/170003_ishikawa_covid19_city_town_patients.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable,
    OpenDataLink
  },
  data() {
    // 検査陽性者の状況
    // const confirmedCases = formatConfirmedCases(Data.main_summary)
    const confirmedCases = formatConfirmedCases(InspectionsSummary,)

    const data = {
      InspectionsSummary,
      confirmedCases
    }
    return data
  }
}
</script>

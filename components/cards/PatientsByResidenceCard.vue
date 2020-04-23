<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数(居住地別)')"
      :title-id="'number-of-confirmed-cases-by-residence'"
      :chart-id="'time-bar-chart-patients-by-residence'"
      :chart-data="patientsGraph"
      :date="Data.date"
      :unit="$t('人')"
      :show-button="false"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）A：金沢市，B：七尾市，C：小松市，D：輪島市，E：珠洲市，F：加賀市，G：羽咋市，H：かほく市，I：白山市，J：能美市，K：野々市市，L：川北町，M：津幡町，N：志賀町，O：内灘町，P：宝達志水町, Q：中能登町, R：穴水町, S：能登町, T：県外 を示している'
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

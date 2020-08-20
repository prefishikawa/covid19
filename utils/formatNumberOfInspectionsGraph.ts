type DataType = {
  日付: Date
  小計: number
  行政検査: number
  保険適用検査: number
}

export type GraphDataType = {
  label: string // 日付
  transition: number // 小計
  cumulative: number // 累計感染者数
  adminInspection: number // 行政検査数
  cumulativeAdminInspection: number // 累計行政検査数
  insuranceCoverage: number // 保険適用検査数
  cumulativeInsuranceCoverage: number // 累計保険適用検査数
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  let admSum = 0
  let insSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const date = new Date(d['日付'])
      const subTotal = d['小計']
      const adminInspection = d['行政検査']
      const insuranceCoverage = d['保険適用検査']

      if (!isNaN(subTotal)) {
        patSum += subTotal
        admSum += adminInspection
        insSum += insuranceCoverage
        graphData.push({
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          transition: subTotal,
          cumulative: patSum,
          adminInspection: adminInspection,
          cumulativeAdminInspection: admSum,
          insuranceCoverage: insuranceCoverage,
          cumulativeInsuranceCoverage: insSum
        })
      }
    })
  return graphData
}

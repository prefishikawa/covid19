type DataType = {
  地区ID: string
  居住地: string
  感染者: number
}

export type GraphDataType = {
  label: string
  transition: number
  cumulative: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const graphData: GraphDataType[] = []
  let patSum = 0
  data.forEach(d => {
    const residence = d['地区ID']
    const subTotal = Number(d['感染者'])
    if (!isNaN(subTotal)) {
      patSum += subTotal
      graphData.push({
        label: residence,
        transition: subTotal,
        cumulative: patSum
      })
    }
  })
  return graphData
}

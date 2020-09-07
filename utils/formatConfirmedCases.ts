type DataType = {
  date: Date,
  data: [
    {
      'summary': [
        {
          attr: '感染者'
          value: number
        },
        {
          attr: '退院等'
          value: number
        },
        {
          attr: '治療中'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
      // attr: '検査陽性者数（公表日別）'
      // value: number
      // children: [
      //   {
      //     attr: '入院中'
      //     value: number
      //     children: [
      //       {
      //         attr: '軽症・中等症'
      //         value: number
      //       },
      //       {
      //         attr: '重症'
      //         value: number
      //       }
      //     ]
      //   },
      //   {
      //     attr: '退院'
      //     value: number
      //   },
      //   {
      //     attr: '死亡'
      //     value: number
      //   }
      // ]
    }
  ]
}

type ConfirmedCasesType = {
  感染者: number
  退院等: number
  治療中: number
  死亡: number
  // 入院中: number
  // 軽症中等症: number
  // 重症: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    感染者: data.data[0].summary[0].value,
    退院等: data.data[0].summary[1].value,
    治療中: data.data[0].summary[2].value,
    死亡: data.data[0].summary[3].value
    // 軽症中等症: data.children[0].children[0].children[0].value,
    // 重症: data.children[0].children[0].children[1].value,
    // 死亡: data.children[0].children[2].value,
    // 退院: data.children[0].children[1].value
    // 入院中: 0,
    // 軽症中等症: 0,
    // 重症: 0,
    // 死亡: 0
    // 退院: 0
  }
  return formattedData
}

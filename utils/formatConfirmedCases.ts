type DataType = {
  date: Date,
  data: [
    {
      'summarry': [
        {
          attr: '感染者'
          value: number
        },
        {
          attr: '退院'
          value: number
        },
        {
          attr: '死亡'
          value: number
        },
        {
          attr: '治療中'
          value: number
        }
      ]
      // attr: '陽性患者数'
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
  退院: number
  死亡: number
  治療中: number
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
    感染者: data.data[0].summarry[0].value,
    退院: data.data[0].summarry[1].value,
    死亡: data.data[0].summarry[2].value,
    治療中: data.data[0].summarry[3].value,
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

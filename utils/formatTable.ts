import dayjs from 'dayjs'

const headers = [
  { text: '公表日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' }
]

type DataType = {
  公表_年月日: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  [key: string]: any
}

type TableDataType = {
  公表日: string
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      公表日: dayjs(d['公表_年月日']).format('MM/DD') ?? '不明',
      居住地: d['患者_居住地'] ?? '調査中',
      年代: d['患者_年代'] ?? '不明',
      性別: d['患者_性別'] ?? '不明'
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) =>
    a.公表日 === b.公表日 ? 0 : a.公表日 < b.公表日 ? 1 : -1
  )
  return tableDate
}

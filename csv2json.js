/**
 * Thanks Fukui covid-19 open data getting script
 * include feature downloading news spreadsheet
 * Copyright © HyodaKazuaki
 */

const path = require('path')
const fs = require('fs')
const axios = require('axios')
const csv2json = require('csvtojson')
const Enumerable = require('linq')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')

/**
 * Shift-JISフラグ
 * falseの場合はUTF-8として処理
 */
const ISSHIFTJIS = true

/**
 * オープンデータ取得先
 */
const openDataSource = [
  {
    name: 'city_patients',
    url:
      'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_city_town_patients.csv'
  },
  {
    name: 'call_center',
    url:
      'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_call_center.csv'
  },
  {
    name: 'patients',
    url:
      'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_patients.csv'
  },
  {
    name: 'test_count',
    url:
      'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_test_count.csv'
  },
  {
    name: 'general_consultation',
    url:
      'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_counter.csv'
  },
  {
    name: 'total_deaths',
    url:
      'https://www.pref.ishikawa.lg.jp/kansen/documents/170003_ishikawa_covid19_total.csv'
  },
  {
    name: 'news',
    url:
      'https://www.pref.ishikawa.lg.jp/kenmin/covid19/documents/news.csv'
  }
]

/**
 * jsonファイルの階層
 */
const dir = './data/'

/**
 * jsonのファイル名
 */
const files = {
  cityPatients: '170003_ishikawa_covid19_city_town_patients.json', // 市区町村別患者数
  contacts: 'contacts.json', // コールセンター相談件数
  inspectionPersons: '170003_ishikawa_covid19_test_count.json', // 検査実施人数
  patientsSummary: 'patients_summary.json', // 陽性患者数
  patients: '170003_ishikawa_covid19_patients.json', // 陽性患者の属性
  generalConsultation: 'general_consultation.json', // 一般相談件数
  // totalDeaths: 'total_deaths.json',
  totalDeaths: '170003_ishikawa_covid19_city_town_patients.json',
  news: 'news.json' // 一般相談件数
}

const main = async () => {
  // オープンデータ取得
  for (const source of openDataSource) {
    const csv = await getCSV(source.url)
    const json = await csv2json().fromString(csv)
    source.json = json
  }

  // オープンデータ
  const today = new Date()
  today.setHours(today.getHours() + 9)

  const jsonObjectBase = {
    date: dateFormat.format(today, 'yyyy/MM/dd hh:mm')
  }

  // 各JSONを作成
  const cityPatientsJson = Object.assign({}, jsonObjectBase)
  const contactsJson = Object.assign({}, jsonObjectBase)
  const inspectionPersonsJson = Object.assign({}, jsonObjectBase)
  const patientsJson = Object.assign({}, jsonObjectBase)
  const patientsSummaryJson = Object.assign({}, jsonObjectBase)
  const generalConsultationJson = Object.assign({}, jsonObjectBase)
  const totalDeathsJson = Object.assign({}, jsonObjectBase)
  const newsJson = Object.assign({}, jsonObjectBase)
  // LINQの設定
  const linq = Enumerable.from(openDataSource)
  // 各JSONの処理
  cityPatients(
    linq.where(x => x.name === 'city_patients').first().json,
    linq.where(x => x.name === 'total_deaths').first().json,
    cityPatientsJson
  )
  contacts(linq.where(x => x.name === 'call_center').first().json, contactsJson)
  inspectionPersons(
    linq.where(x => x.name === 'test_count').first().json,
    inspectionPersonsJson
  )
  patients(linq.where(x => x.name === 'patients').first().json, patientsJson)
  patientsSummary(
    linq.where(x => x.name === 'patients').first().json,
    patientsSummaryJson
  )
  generalConsultation(
    linq.where(x => x.name === 'general_consultation').first().json,
    generalConsultationJson
  )
  // totalDeaths(
  //   linq.where(x => x.name === 'total_deaths').first().json,
  //   totalDeathsJson
  // )
  news(linq.where(x => x.name === 'news').first().json, newsJson)
  // 書き出し
  writeFile(cityPatientsJson, files.cityPatients)
  writeFile(contactsJson, files.contacts)
  writeFile(inspectionPersonsJson, files.inspectionPersons)
  writeFile(patientsJson, files.patients)
  writeFile(patientsSummaryJson, files.patientsSummary)
  writeFile(generalConsultationJson, files.generalConsultation)
  // writeFile(totalDeathsJson, files.totalDeaths)
  writeFile(newsJson, files.news)
}

/**
 * オープンデータのCSVを取得します
 * `ISSHIFTJIS`が`true`ならばShift-JISをUTF-8に変換します
 * @param {String} URL 取得先URL
 * @returns 取得したデータ
 */
async function getCSV(URL) {
  if (ISSHIFTJIS) {
    const data = (await axios.get(URL, { responseType: 'arraybuffer' })).data
    return iconv.decode(Buffer.from(data), 'windows-31j')
  }
  const data = (await axios.get(URL)).data
  return data
}

/**
 * JSONオブジェクトを書き出します
 * `dir`ディレクトリ以下に引数のファイル名で出力します
 * @param {Object} json 書き出すJSONオブジェクト
 * @param {String} fileName 書き出すファイル名
 */
function writeFile(json, fileName) {
  const filePath = path.join(dir, fileName)
  fs.readFile(filePath, 'UTF-8', (err, data) => {
    if (err) throw err
    const oldJSON = JSON.parse(data)
    if (isUpdateJSON(oldJSON, json)) {
      fs.writeFile(filePath, JSON.stringify(json, null, '    '), err => {
        if (err) throw err
      })
    }
  })
}

/**
 * 2つのJSONオブジェクトに差があるか調べます
 * `date`要素を除いた上で実行します
 * @param {Object} oldJSON 変更元のJSONオブジェクト
 * @param {Object} newJSON 変更先のJSONオブジェクト
 * @returns 差があるか
 */
function isUpdateJSON(oldJSON, newJSON) {
  // newJSONはシャローコピーなのでディープコピーを作成
  const newJSONClone = JSON.parse(JSON.stringify(newJSON))
  // 各jsonからdateを除去
  delete oldJSON.date
  delete newJSONClone.date
  const oldJSONStr = JSON.stringify(oldJSON)
  const newJSONCloneStr = JSON.stringify(newJSONClone)
  return oldJSONStr !== newJSONCloneStr
}

/**
 * コールセンターの相談件数をJSONにします
 * @param {Object} json 元の情報があるJSONオブジェクト
 * @param {Object} jsonObject 書き出すJSONオブジェクト
 */
function contacts(json, jsonObject) {
  jsonObject.data = Enumerable.from(json)
    .select(x => {
      const date = new Date(x.受付_年月日)
      const formatDate = dateFormat.format(date, 'yyyy-MM-dd')
      return {
        日付: `${formatDate}T00:00:00.000+09:00`,
        小計: parseInt(x.相談件数)
      }
    })
    .toArray()
}

/**
 * 日毎の検査実施件数をJSONにします
 * @param {Object} json 元の情報があるJSONオブジェクト
 * @param {Object} jsonObject 書き出すJSONオブジェクト
 */
function inspectionPersons(json, jsonObject) {
  jsonObject.data = []
  Enumerable.from(json).forEach(row => {
    const date = new Date(`${row['実施_年月日']}`)
    const formattedDate = dateFormat.format(date, 'yyyy-MM-dd')
    const testCount = parseInt(row['検査実施_件数'])
    const adminInspection = parseInt(row['行政検査_件数']) // 行政検査_件数
    const insuranceCoverage = parseInt(row['保険適用検査_件数']) // 保険適用検査_件数
    const dataItem = {
      日付: `${formattedDate}T00:00:00.000+09:00`,
      小計: testCount,
      行政検査: adminInspection,
      保険適用検査: insuranceCoverage

    }
    jsonObject.data.push(dataItem)
  })
}

/**
 * 陽性者の状態をJSONにします
 * @param {Object} json 元の情報があるJSONオブジェクト
 * @param {Object} jsonObject 書き出すJSONオブジェクト
 */
function patients(json, jsonObject) {
  jsonObject.data = []
  Enumerable.from(json).forEach(row => {
    // const publicationDay = new Date(row.公表_年月日)
    // const publicationDate = dateFormat.format(publicationDay, 'yyyy-MM-dd')
    // const publicationDateString = `${publicationDate}T00:00:00.000+09:00`

    const newObj = {
      No         : row['No'],
      全国地方公共団体コード : row['全国地方公共団体コード'],
      都道府県名  : row['都道府県名'],
      市区町村名  : row['市区町村名'],
      公表_年月日 : row['公表_年月日'],
      患者_居住地 : row['患者_居住地'],
      患者_年代   : row['患者_年代'],
      患者_性別   : row['患者_性別']

    }
    jsonObject.data.push(newObj)
  })
}

/**
 * 日毎の患者数をJSONにします
 * @param {Object} json 元の情報があるJSONオブジェクト
 * @param {Object} jsonObject 書き出すJSONオブジェクト
 */
function patientsSummary(json, jsonObject) {
  jsonObject.data = []
  // 最初の日
  const initDay = new Date('2020-02-16')
  const today = new Date()
  if(today.getHours() + 9 < 21) {
    today.setDate(today.getDate() - 1)
  }
  const diffDay = parseInt((today - initDay) / (1000 * 60 * 60 * 24)) // 日の差分
  for (let i = 0; i <= diffDay; i++) {
    const targetDay = new Date(initDay.toDateString())
    targetDay.setDate(targetDay.getDate() + i)
    const number = Enumerable.from(json)
      .where(x => new Date(x.公表_年月日).getTime() === targetDay.getTime())
      .count()
    const day = new Date(initDay)
    day.setDate(day.getDate() + i)
    day.setHours(day.getHours() + 9) // UTC to JST
    const formatDay = dateFormat.format(day, 'yyyy-MM-dd')
    const newObj = {
      日付: `${formatDay}T00:00:00.000+09:00`,
      小計: number
    }
    jsonObject.data.push(newObj)
  }
}

/**
 * 日毎の患者数をJSONにします
 * @param {Object} json 元の情報があるJSONオブジェクト
 * @param {Object} jsonObject 書き出すJSONオブジェクト
 */
function cityPatients(json, json2, jsonObject) {
  console.log()
  jsonObject.data = []
  detailObj = {}
  detailObj.data = []
  detailObj.summary = []
  let x1 = 0, x2 = 0 ,x3 = 0, x4 = 0;
  Enumerable.from(json).forEach(row => {
    const newObj = {
      地区ID  : row['地区ID'],
      居住地  : row['居住地'],
      感染者  : row['感染者'],
      退院等    : row['退院等'],
      // 死亡    : row['死亡'],
      治療中  :row['治療中']
    }
    x1 += parseInt(row['感染者'])
    x2 += parseInt(row['退院等'])
    // x3 += parseInt(row['死亡'])
    x3 += parseInt(row['治療中'])

    detailObj.data.push(newObj)
  })

  x4 = parseInt(json2[0].合計死亡者数)

  detailObj.summary.push(
    {attr  : "感染者", value : x1 },
    {attr  : "退院等", value : x2 - x4 },
    {attr  : "治療中", value : x3 },
    {attr  : "死亡", value : x4 }
  )
  jsonObject.data.push(detailObj)

}


/**
 * 合計死亡者数をJSONにします
 * @param {Object} json 元の情報があるJSONオブジェクト
 * @param {Object} jsonObject 書き出すJSONオブジェクト
 */
function totalDeaths(json, jsonObject) {
  jsonObject.data = []
  Enumerable.from(json).forEach(row => {
    const newObj = {
      total_deaths  : row['合計死亡者数']
    }
    jsonObject.data.push(newObj)
  })
}

/**
 * 一般相談件数をJSONにします
 * @param {Object} json 元の情報があるJSONオブジェクト
 * @param {Object} jsonObject 書き出すJSONオブジェクト
 */
function generalConsultation(json, jsonObject) {
  jsonObject.data = Enumerable.from(json)
    .select(x => {
      const date = new Date(x.受付_年月日)
      const formatDate = dateFormat.format(date, 'yyyy-MM-dd')
      return {
        日付: `${formatDate}T00:00:00.000+09:00`,
        小計: parseInt(x.相談件数)
      }
    })
    .toArray()
}

/**
 * お知らせをJSONにします
 * @param {Object} json 元の情報があるJSONオブジェクト
 * @param {Object} jsonObject 書き出すJSONオブジェクト
 */
function news(json, jsonObject) {
  jsonObject.newsItems = []
  Enumerable.from(json).forEach(row => {
    const newObj = {
      date  : row['掲載日'],
      url   : row['URL'],
      text  : row['タイトル']
    }
    jsonObject.newsItems.push(newObj)
  })
}


const dateFormat = {
  _fmt: {
    yyyy(date) {
      return date.getFullYear() + ''
    },
    MM(date) {
      return ('0' + (date.getMonth() + 1)).slice(-2)
    },
    dd(date) {
      return ('0' + date.getDate()).slice(-2)
    },
    hh(date) {
      return ('0' + date.getHours()).slice(-2)
    },
    mm(date) {
      return ('0' + date.getMinutes()).slice(-2)
    },
    ss(date) {
      return ('0' + date.getSeconds()).slice(-2)
    }
  },
  _priority: ['yyyy', 'MM', 'dd', 'hh', 'mm', 'ss'],
  format(date, format) {
    return this._priority.reduce(
      (res, fmt) => res.replace(fmt, this._fmt[fmt](date)),
      format
    )
  }
}

main()

const main2 = () => {
  const isCovidArticle = async article => {
    try {
      const res = await axios.get(article.link)
      const $ = cheerio.load(res.data)
      const context = $('div.article-body > p').text()
      return context.includes('コロナ') || context.includes('感染')
    } catch (e) {
      console.error(e)
    }
    return false
  }

  async function asyncFilter(array, asyncCallback) {
    const bits = await Promise.all(array.map(asyncCallback))
    return array.filter((_, i) => bits[i])
  }
}

main2()

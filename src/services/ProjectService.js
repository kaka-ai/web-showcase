import SheetService from './SheetService'
import axios from 'axios'
import DataUtil from '@/util/DataUtil'

export default {
  getAll (sheet = 'project', start = 'A1', end = 'L80') {
    let url = SheetService.getApiEndpoint(sheet, start, end)
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(function (response) {
          let arrayData = DataUtil.convertSheetToArray(response.data)
          resolve(arrayData)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}

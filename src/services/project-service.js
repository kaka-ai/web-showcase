import SheetService from './sheet-service'
import axios from 'axios'
import DataUtil from '@/util/data-util'

export default {
  getAll () {
    let url = SheetService.getApiEndpoint('project', 'A1', 'L80')
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

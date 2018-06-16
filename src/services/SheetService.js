import { apiEndpoint, sheetId, apiKey } from '@/config/SheetConfig'

export default {
  getApiEndpoint (sheetName, start, end) {
    return apiEndpoint + sheetId + '/values/' + sheetName + '!' + start + '%3A' + end + '?key=' + apiKey
  }
}

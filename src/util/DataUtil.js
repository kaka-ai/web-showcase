export default {
  convertSheetToArray (sheetData) {
    var array = []
    var attributes = sheetData.values[0]
    for (var i = 1; i < sheetData.values.length; i++) {
      var item = {}
      var values = sheetData.values[i]
      for (var j = 0; j < values.length; j++) {
        item[attributes[j]] = values[j]
      }
      array.push(item)
    }
    return array
  }
}

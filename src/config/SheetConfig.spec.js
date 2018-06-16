import {sheetId, apiKey, apiEndpoint} from './SheetConfig'

describe('SheetConfig Tests', () => {
  it('It should return sheetId, apiKey and apiEndpoint', () => {
    expect(sheetId).not.toBeNull()
    expect(apiKey).not.toBeNull()
    expect(apiEndpoint).not.toBeNull()
  })
})

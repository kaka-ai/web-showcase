import sheetService from './SheetService'

describe('SheetService Tests', () => {
  it('It should return api endpoint', () => {
    let actual = sheetService.getApiEndpoint()
    expect(actual).not.toBeNull()

    actual = sheetService.getApiEndpoint('AAAA', 'SSSS', 'EEEE')
    expect(actual).not.toBeNull()
  })
})

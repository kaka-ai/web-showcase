import DataUtil from './DataUtil'

describe('DataUtil Tests', () => {
  it('It should return api endpoint', () => {
    let actual = DataUtil.convertSheetToArray({
      range: 'project!A1:L80',
      majorDimension: 'ROWS',
      values: [
        ['title', 'content', 'link1', 'link1Title', 'link2', 'link2Title', 'customClass'],
        ['Gonitor', 'Fast Server Monitor in Go', 'https://github.com/gonitor/gonitor', 'GitHub', 'https://godoc.org/github.com/gonitor/gonitor', 'Doc']
      ]
    })
    expect(actual).not.toBeNull()
    expect(actual.length).toBeGreaterThan(0)
    expect(actual.length).toEqual(1)
  })
})

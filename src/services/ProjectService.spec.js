import projectService from './ProjectService'

describe('ProjectService Tests', () => {
  it('It should return all projects', (done) => {
    projectService.getAll().then(projects => {
      expect(projects).not.toBeNull()
      expect(projects.length).toBeGreaterThan(0)
      done()
    }).catch(err => {
      expect(err).toBeNull()
      done()
    })
  })

  it('It should not return all projects', (done) => {
    projectService.getAll('AAAA').then(projects => {
      expect(projects).toBeNull()
      done()
    }).catch(err => {
      expect(err).not.toBeNull()
      done()
    })
  })
})

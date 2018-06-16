import Vue from 'vue'
import BasicCard from './BasicCard'

describe('BasicCard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BasicCard)
    const vm = new Constructor().$mount()
    expect(vm).not.toBeNull()
  })
})

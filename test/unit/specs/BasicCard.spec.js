import Vue from 'vue'
import BasicCard from '@/components/BasicCard'

describe('BasicCard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BasicCard)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.card-content span').textContent)
      .toEqual('Title')
    expect(vm.$el.querySelector('.card-content p').textContent)
      .toEqual('Content')
    expect(vm.$el.querySelector('.card-action .m-link1').textContent)
      .toEqual('link1Title')
    expect(vm.$el.querySelector('.card-action .m-link2').textContent)
      .toEqual('link2Title')
  })
})

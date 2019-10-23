import Vuex from 'vuex'
import Vue from "vue"
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ArticleInfo from '@/components/ArticleInfo'


describe('ArticleInfo.vue', () => {
  it('renders props.msg when passed', () => {
    const data = {
      type: {
        type: String,
        required: false,
        default: "all"
      },
      author: {
        type: String,
        required: false
      },
      tag: {
        type: String,
        required: false
      },
      favorited: {
        type: String,
        required: false
      },
      itemsPerPage: {
        type: Number,
        required: false,
        default: 10
      }
    }

    const wrapper = shallowMount(ArticleInfo, {
      propsData: { data }
    })
    expect(wrapper.text()).toMatch(data)
  })
})

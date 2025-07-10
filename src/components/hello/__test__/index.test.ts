/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : he_jian
 * @Date         : 2025-07-09 16:28:25
 * @LastEditors  : he_jian
 * @LastEditTime : 2025-07-09 16:36:34
 * @FilePath     : \\vite-vue-test\\src\\components\\hello\\__test__\\index.test.ts
 * Copyright (c) 2025 by he_jian, All Rights Reserved. 
 */
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import Hello from '../index.vue'
describe('Hello', () => {
    it('挂载组件',async () => {
        expect(Hello).toBeTruthy()

        const wrapper = mount(Hello, {
            props: {
                count: 4
            }
        })

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('4 * 3 = 12')

        await wrapper.get('button').trigger('click')

        expect(wrapper.text()).toContain('4 * 4 = 16')
    })

    it('props', () => {
        const wrapper = mount(Hello, {
            props: {
                count: 6
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })
})
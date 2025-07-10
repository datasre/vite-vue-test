/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : he_jian
 * @Date         : 2025-07-09 15:38:09
 * @LastEditors  : he_jian
 * @LastEditTime : 2025-07-09 15:40:24
 * @FilePath     : \\vite-vue-test\\test\\basic.test.ts
 * Copyright (c) 2025 by he_jian, All Rights Reserved. 
 */
import {assert, describe, it, expect} from 'vitest'

describe('basic', () => {
    it('foo', () => {
        assert.equal(Math.sqrt(4), 2)
    })
    it('bar', () => {
        expect(1+1).eq(2)
    })
    it('baz', () => {
        expect({foo:'bar'}).toMatchSnapshot();
    })
})
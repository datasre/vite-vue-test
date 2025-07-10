<!--
 * @Description  :
 * @Version      : 1.0
 * @Author       : he_jian
 * @Date         : 2025-07-09 15:52:14
 * @LastEditors  : he_jian
 * @LastEditTime : 2025-07-09 16:25:05
 * @FilePath     : \\vite-vue-test\\src\\components\\hello\\index.vue
 * Copyright (c) 2025 by he_jian, All Rights Reserved. 
-->
<template>
    <div>
        <div>{{ count }} * {{ times }} = {{ result }}</div>
        <button @click="times++">Increment</button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
    count: {
        type: Number,
        default: 0
    }
})

const times = ref(2)
const result = computed(() => props.count * times.value);


</script>
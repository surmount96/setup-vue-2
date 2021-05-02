<template>
    <div>
        <div class="flex w-24 mb-3" v-if="l.rating == 1">
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
        </div>
        <div class="flex w-24 mb-3" v-else-if="l.rating == 2">
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
        </div>
        <div class="flex w-24 mb-3" v-else-if="l.rating == 3">
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
        </div>
        <div class="flex w-24 mb-3" v-else-if="l.rating == 4">
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
        </div>
        <div class="flex w-24 mb-3" v-else-if="l.rating == 5">
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
            <i class="ri-star-fill text-yellow ri-fw"></i>
        </div>
            <div class="flex w-24 mb-3" v-else>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
            <i class="ri-star-fill text-gray-200 ri-fw"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        l: Object
    }
}
</script>
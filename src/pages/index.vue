<script setup lang="ts">
import { fabric } from 'fabric'
import { v4 as uuidv4 } from 'uuid'
import shirt1 from '@/assets/shirt1.png'

const items = ref<
  Array<{
    id: string
    img: string
  }>
>([])

const canvas = ref()

const handleUpload = (event: any) => {
  if (!items.value || !Array.isArray(items.value)) items.value = []
  const files = event.currentTarget.files
  ;[...files].map((file) => {
    const reader = new FileReader()
    reader.onload = () => {
      items.value?.push({ id: uuidv4(), img: reader.result as string })
    }
    reader.readAsDataURL(file)
  })
}

onMounted(() => {
  canvas.value = new fabric.Canvas('canvas')
})

function reloadImageCanvas() {
  canvas.value = new fabric.Canvas('canvas')
  items.value.map((item) => {
    console.log(items.value)
    var imgElement = document.getElementById(`img-${item.id}`)
    console.log(imgElement)
    var imgInstance = new fabric.Image(imgElement as HTMLCanvasElement)
    imgInstance.scaleToWidth(300, false)
    console.log(imgInstance)

    canvas.value.add(imgInstance)
  })
}

watch(
  () => items.value.length,
  () => {
    reloadImageCanvas()
  }
)
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <img
        v-for="item in items"
        :id="`img-${item.id}`"
        class="w-[50px] h-[50px]"
        :src="item.img"
      />
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="user_avatar"
        >เพิ่มรูปภาพ</label
      >
      <input
        @change="handleUpload"
        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
      />
      <div
        class="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="user_avatar_help"
      >
        อัพโหลดเฉพาะไฟล์รูปภาพ
      </div>
    </div>
    <div class="w-[400px] h-[400px]">
      <img
        class="absolute w-[400px] h-[400px]"
        :src="shirt1"
      />
      <canvas
        id="canvas"
        width="400"
        height="400"
      />
    </div>
  </div>
</template>

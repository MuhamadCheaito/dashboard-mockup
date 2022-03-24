<template>
    <div v-for="division in divisionList" :key="division" class="flex items-center">
      <q-avatar
        class="avatar"
        rounded
        size="50px"
        font-size="0.6em"
        :text-color="division.textColor"
        :style="division.style"
        :icon="division.icon"
      ></q-avatar>
      <div
        class="
          column
          q-pa-md
          justify-center">
        <span class="text-bold text-body1">{{division.title}}</span>
        <span class="text-grey">Open: {{division.time}}</span>
      </div>
    </div>
</template>

<script>
export default {
    name:"DivisionItem",
    props:{divisionList:[]}
}
</script>
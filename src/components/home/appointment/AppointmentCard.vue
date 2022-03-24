<template>
  <div class="appointment-container relative-position" style="border-radius:15px;overflow: hidden;">
    <q-icon
      class="absolute-right"
      style="transform: translate(30%, -40%); opacity: 0.1"
      color="grey"
      :name="appointment.icon"
      size="200px"
    ></q-icon>
    <div class="q-pa-md flex items-center">
      <q-avatar
        class="avatar"
        rounded
        size="60px"
        font-size="0.6em"
        text-color="primary"
        style="background-color: #dcecff;border-radius:15px"
        :icon="appointment.icon"
      ></q-avatar>
      <div
        class="
          column
          q-pa-md
          justify-center">

        <span class="text-bold text-body1">{{appointment.title}}</span>
        <span class="text-grey">{{appointment.time}}</span>
        <span class="text-bold">{{appointment.count}} Participants</span>
      </div>
    </div>
    <div class="details flex justify-between">
      <q-list class="items-center q-px-md">
        <span v-for="avatar in avatarList" :key="avatar">
          <q-avatar
          font-size="16px"
          size="40px"
          text-color="white"
          style="margin: 0 -8px"
          :color="avatar.color">{{avatar.label}}</q-avatar>
          </span>
      </q-list>
      <q-btn
        color="primary"
        class="text-right"
        size="22px"
        style="border-radius: 15px 0 15px 0"
        dense
        icon="chevron_right"
      ></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentCard",
  props:{
    avatarList:[],
    appointment:[]
  }
};
</script>
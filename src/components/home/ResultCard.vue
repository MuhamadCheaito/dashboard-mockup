<template>
<div v-for="counter in counters" :key={counter} class="col-lg-3 col-md-3 col-xs-12 col-sm-12 result-card-container">
    <q-avatar class="avatar" rounded size="50px">
    </q-avatar>
    <q-list dense class="result-card-content">
        <q-item dense class="text-body2 text-grey">{{counter.title}}</q-item>
        <q-item dense class="text-h5 text-weight-bold">{{counter.value.toLocaleString('en-EG')}}</q-item>
    </q-list>
</div>
</template>

<script>

export default {
    name: "ResultCard",
    props:{
        counters: null
    }
}
</script>
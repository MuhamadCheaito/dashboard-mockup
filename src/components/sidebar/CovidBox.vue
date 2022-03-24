<template>
    <div class="covid-box">
        <span class="text-body1">Covid Informations</span>
        <div class="public">
            <q-icon name="public" class="text-body2"/> <span class="text-body2">World</span>
        </div>
        <q-list class="records" dense>
            <q-item class="text-body1">Infected - <span class="text-subtitle2">8.119.575</span></q-item>
            <q-item class="text-body1">Recovered - <span class="text-subtitle2">4.231.974</span></q-item>
            <q-item class="text-body1">Deaths - <span class="text-subtitle2">439.217</span></q-item>
        </q-list>
        <div class="check-button">
            <q-btn color="primary" class="check-btn" label="Check Covid"/>
        </div>
        <q-icon name="coronavirus" class="virus-icon"/>
    </div>
</template>

<script>
export default {
    name:"CovidBox",
}
</script>
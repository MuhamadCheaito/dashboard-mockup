<template>
  <div class="q-pa-md">
    <q-select
      rounded
      outlined
      class="search-box"
      v-model="inputText"
      dropdown-icon="expand_more"
      use-input
      input-debounce="0"
      label="Search..."
      :loading="isLoading"
      :options="options"
      @keyup="fetchData"
      @filter="filterFn"
    >
      <div class="filter-box">
        <p>Filter</p>
      </div>
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-select>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import store from "../../store";

export default defineComponent({
  name: "SearchBox",
  data() {
    return {
      isLoading: false,
    };
  },
  setup() {
    const options = ref(store.state.acData);
    return {
      options,
      inputText: ref(null),
      filterFn(val, update) {
        if (val === "") {
          update(() => {
            options.value = store.state.acData;
          });
          return;
        }
        update(() => {
          const needle = val.toLowerCase();
          options.value = store.state.acData.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
  methods: {
    async fetchData(e) {
      if (store.state.inputData.length < 2) {
        await store.dispatch("resetData");
      }
      this.isLoading = true;

      await store.dispatch("changeInput",e.target.value);
      console.log(store.state.inputData);
      await store.dispatch("searchData", store.state.inputData)
           .finally(() => this.isLoading = false);
    },
  },
});
</script>
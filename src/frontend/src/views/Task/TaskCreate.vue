<template>
  <Layout>
    <div>
      <!-- <Head title="Create Task" /> -->
      <h1 class="mb-8 text-3xl font-bold">
        <RouterLink class="text-orange-400 hover:text-orange-600" to="/tasks"
          >Tasks List</RouterLink
        >
        <span class="text-orange-400 font-normal">/</span> Create
      </h1>
      <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
        <form @submit.prevent="store">
          <div class="flex flex-wrap -mb-8 -mr-6 p-8">
            <text-input class="pb-8 pr-6 w-full" label="Name" />
            <textarea-input class="pb-8 pr-6 w-full" label="Description" />

            <!-- <text-input class="pb-8 pr-6 w-full" label="Due Date" /> -->
            <input type="date" class="" />

            <!-- <text-input class="pb-8 pr-6 w-full lg:w-1/2" label="City" /> -->

            <select-input class="pb-8 pr-6 w-full" label="Status">
              <option :value="null" />
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select-input>
          </div>
          <div
            class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100"
          >
            <loading-button
              class="px-6 py-3 rounded bg-orange-600 text-white text-sm leading-4 font-bold whitespace-nowrap hover:bg-orange-400 focus:bg-orange-400"
              type="submit"
              >Create Task</loading-button
            >
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import TextInput from "../Shared/TextInput.vue";
import TextareaInput from "../Shared/TextareaInput.vue";
import Layout from "../Shared/Layout.vue";
import SelectInput from "../Shared/SelectInput.vue";
import LoadingButton from "../Shared/LoadingButton.vue";
</script>

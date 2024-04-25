<template>
  <Layout>
    <div>
      <div class="flex items-center justify-end mb-6">
        <!-- <search-filter
        v-model="form.search"
        class="mr-4 w-full max-w-md"
        @reset="reset"
      >
        <label class="block text-gray-700">Trashed:</label>
        <select v-model="form.trashed" class="form-select mt-1 w-full">
          <option :value="null" />
          <option value="with">With Trashed</option>
          <option value="only">Only Trashed</option>
        </select>
      </search-filter> -->
        <RouterLink
          class="float-end px-6 py-3 rounded bg-orange-400 text-white text-sm leading-4 font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500"
          to="/task/create"
        >
          <span>Create a Task</span>
          <!-- <span class="hidden md:inline">&nbsp;Tasks</span> -->
        </RouterLink>
      </div>
      <div class="bg-white rounded-md shadow-md overflow-x-auto">
        <div v-if="loading" class="btn-spinner mr-2" />
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr class="text-left font-semibold text-slate-700">
              <th class="pb-4 pt-6 px-6">Name</th>
              <th class="pb-4 pt-6 px-6">Description</th>
              <th class="pb-4 pt-6 px-6">Status</th>
              <th class="pb-4 pt-6 px-6" colspan="2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="task in tasks.data"
              :key="task.id"
              class="hover:bg-gray-100 focus-within:bg-gray-100"
            >
              <td class="border-t">
                <RouterLink
                  class="flex items-center px-6 py-4 focus:text-orange-500"
                  to="`/tasks/${task.id}/edit`"
                >
                  {{ task.attributes.name }}
                  <!-- <icon
                  v-if="organization.deleted_at"
                  name="trash"
                  class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"
                /> -->
                </RouterLink>
              </td>
              <td class="border-t">
                <RouterLink
                  class="flex items-center px-6 py-4"
                  to="/"
                  tabindex="-1"
                >
                  {{ task.attributes.description }}
                </RouterLink>
              </td>
              <td class="border-t">
                <RouterLink
                  class="flex items-center px-6 py-4"
                  to="/"
                  tabindex="-1"
                >
                  {{ task.attributes.status }}
                </RouterLink>
              </td>
              <td class="border-t">
                <RouterLink
                  class="flex items-center px-6 py-4"
                  to="/"
                  tabindex="-1"
                >
                  {{ task.attributes.due_date }}
                </RouterLink>
              </td>
              <td class="w-px border-t">
                <RouterLink class="flex items-center px-4" to="/" tabindex="-1">
                  <icon
                    name="cheveron-right"
                    class="block w-6 h-6 fill-gray-400"
                  />
                </RouterLink>
              </td>
            </tr>
            <tr v-if="tasks.length === 0">
              <td class="px-6 py-4 border-t" colspan="4">No task found.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <Pagination :pagination="tasks" /> -->
      <TailwindPagination
        :data="tasks"
        @pagination-change-page="fetchTasks"
        class="mt-4"
      />
    </div>
  </Layout>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import Layout from "../Shared/Layout.vue";
import useTasks from "@/composables/useTasks";
import { TailwindPagination } from "laravel-vue-pagination";
import Pagination from "../Shared/Pagination.vue";

const { tasks, loading, error, fetchTasks } = useTasks();
const currentPage = ref(1);
onMounted(() => {
  fetchTasks(currentPage.value);
});
</script>

<style lang="scss" scoped></style>

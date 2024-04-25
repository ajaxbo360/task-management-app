<template>
  <Layout>
    <div>
      <!-- <Head title="Create Task" /> -->
      <h1 class="mb-8 text-3xl font-bold">
        <RouterLink class="text-orange-400 hover:text-orange-600" to="/tasks"
          >Tasks List</RouterLink
        >
        <span class="text-orange-400 font-normal">/</span> Edit
      </h1>
      <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
        <form @submit.prevent="store">
          <div class="flex flex-wrap -mb-8 -mr-6 p-8">
            <text-input
              class="pb-8 pr-6 w-full"
              label="Name"
              v-model="task.name"
            />
            <textarea-input
              class="pb-8 pr-6 w-full"
              label="Description"
              v-model="task.description"
            />

            <text-input
              class="pb-8 pr-6 w-full"
              label="Due Date"
              v-model="task.due_date"
            />

            <!-- <text-input class="pb-8 pr-6 w-full lg:w-1/2" label="City" /> -->

            <select-input
              class="pb-8 pr-6 w-full"
              label="Status"
              v-model="task.status"
            >
              <option v-for="statusOption in statusOptions" :key="task.status">
                {{ statusOption }}
              </option>
            </select-input>
          </div>
          <div
            class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100"
          >
            <loading-button
              class="px-6 py-3 rounded bg-orange-600 text-white text-sm leading-4 font-bold whitespace-nowrap hover:bg-orange-400 focus:bg-orange-400"
              type="submit"
              >Edit Task</loading-button
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
import { useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import http from "@/helpers/http";

// Initialize router
const router = useRouter();

// Define task data
const task = ref({
  name: null,
  description: null,
  due_date: null,
  status: null,
});
const statusOptions = ["In Progress", "Completed"];
// const taskEdited = reactive({
//   name: task.name,
//   description: task.description,
//   due_date: task.due_date,
//   status: task.status,
// });

// Function to fetch task data based on ID
const fetchTask = async () => {
  const taskId = router.currentRoute.value.params.id;
  console.log(taskId);
  try {
    const response = await http().get(`/api/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    task.value = response.data.data.attributes;
  } catch (error) {
    console.error("Error fetching task:", error);
  }
};

// Fetch task data on component mount
onMounted(fetchTask);
console.log(task);
</script>

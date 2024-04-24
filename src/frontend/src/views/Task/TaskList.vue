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
      <div class="bg-white rounded-md shadow overflow-x-auto">
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr class="text-left font-bold">
              <th class="pb-4 pt-6 px-6">Name</th>
              <th class="pb-4 pt-6 px-6">City</th>
              <th class="pb-4 pt-6 px-6" colspan="2">Phone</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr
            v-for="organization in organizations.data"
            :key="organization.id"
            class="hover:bg-gray-100 focus-within:bg-gray-100"
          >
            <td class="border-t">
              <RouterLink
                class="flex items-center px-6 py-4 focus:text-indigo-500"
                to="`/organizations/${organization.id}/edit`"
              >
                {{ organization.name }}
                <icon
                  v-if="organization.deleted_at"
                  name="trash"
                  class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"
                />
              </RouterLink>
            </td>
            <td class="border-t">
              <RouterLink
                class="flex items-center px-6 py-4"
                to="/"
                tabindex="-1"
              >
                {{ organization.city }}
              </RouterLink>
            </td>
            <td class="border-t">
              <RouterLink
                class="flex items-center px-6 py-4"
                to="/"
                tabindex="-1"
              >
                {{ organization.phone }}
              </RouterLink>
            </td>
            <td class="w-px border-t">
              <RouterLink
                class="flex items-center px-4"
                to="/"
                tabindex="-1"
              >
                <icon
                  name="cheveron-right"
                  class="block w-6 h-6 fill-gray-400"
                />
              </RouterLink>
            </td>
          </tr>
          <tr v-if="organizations.data.length === 0">
            <td class="px-6 py-4 border-t" colspan="4">
              No organizations found.
            </td>
          </tr> -->
          </tbody>
        </table>
      </div>
      <!-- <pagination class="mt-6" :RouterLinks="organizations.RouterLinks" /> -->
    </div>
  </Layout>
</template>

<script setup>
import Layout from "../Shared/Layout.vue";
</script>

<style lang="scss" scoped></style>

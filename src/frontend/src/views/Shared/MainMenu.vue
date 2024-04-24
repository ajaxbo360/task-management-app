<template>
  <div class="h-screen">
    <div class="mb-4">
      <RouterLink class="group flex items-center py-3" to="/">
        <icon name="dashboard" class="mr-2 w-4 h-4" />
        <div>Dashboard</div>
      </RouterLink>
    </div>
    <div class="mb-4">
      <RouterLink class="group flex items-center py-3" to="/">
        <icon name="office" class="mr-2 w-4 h-4" />
        <div>Organizations</div>
      </RouterLink>
    </div>
    <div class="mb-4">
      <RouterLink class="group flex items-center py-3" to="/">
        <icon name="users" class="mr-2 w-4 h-4" />
        <div>Contacts</div>
      </RouterLink>
    </div>
    <div class="mb-4">
      <RouterLink class="group flex items-center py-3" to="/">
        <icon name="printer" class="mr-2 w-4 h-4" />
        <div>Reports</div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Icon from "../Shared/Icon.vue";

export default {
  components: {
    Icon,
    RouterLink,
  },
};
</script>

import { ref } from "vue";
import http from "@/helpers/http";

export default function useTaskEdit() {
  const loading = ref(false);
  const error = ref(null);

  const store = async (taskId) => {
    loading.value = true;
    try {
      await http().post(`/api/tasks`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log(task);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    store,
  };
}

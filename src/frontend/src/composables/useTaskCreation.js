import { ref } from "vue";
import http from "@/helpers/http";
import { toast } from "vue3-toastify";

export default function useTaskCreation() {
  const loading = ref(false);
  const error = ref(false);
  const success = ref(false);
  const message = ref(null);

  const store = async (task) => {
    loading.value = true;
    try {
      const response = await http().post(`/api/tasks`, task, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      toast("Task created successfully", {
        theme: "auto",
        type: "success",
        autoClose: 5000,
      });
    } catch (err) {
      message.value = err.message;
      console.log(message.value);
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

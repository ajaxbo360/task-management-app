<template>
  <div class="flex items-center justify-center p-6 min-h-screen bg-orange-400">
    <div class="w-full max-w-md">
      <form
        class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"
        @submit.prevent="handleLogin"
      >
        <div class="px-10 py-12">
          <h1 class="text-center text-3xl font-bold">Welcome Back!</h1>
          <div class="mt-6 mx-auto w-24 border-b-2" />
          <label
            class="mb-2 block text-gray-600 select-none"
            for="email"
            name="email"
            >Email:</label
          >
          <input
            class="mb-4 p-2 leading-normal block w-full border text-gray-700 bg-white font-sans rounded text-left appearance-none relative focus:border-indigo-400 focus:ring;"
            id="email"
            label="Email"
            v-model="credentials.email"
            placeholder="Enter your email"
            type="email"
            autofocus
            autocapitalize="off"
          />
          <label
            class="mb-2 block text-gray-600 select-none;"
            for="password"
            name="passowrd"
            >Password:</label
          >
          <input
            class="p-2 leading-normal block w-full border text-gray-700 bg-white font-sans rounded text-left appearance-none relative focus:border-indigo-400 focus:ring;"
            id="password"
            v-model="credentials.password"
            label="Password"
            placeholder="Enter your password..."
            type="password"
          />
          <div class="mt-4">
            <RouterLink to="/register" class="text-sm text-indigo-950">
              <span class="text-sm underline-offset-4 hover:underline"
                >Don't have an account?</span
              ></RouterLink
            >
          </div>
        </div>
        <div class="flex px-10 py-4 bg-gray-100 border-t border-gray-100">
          <button
            class="px-6 py-3 rounded bg-black text-white text-sm leading-4 font-bold whitespace-nowrap hover:bg-slate-500 focus:bg-slate-500 ml-auto"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import http from "@/helpers/http";
import { useRouter } from "vue-router";

const router = useRouter();

const credentials = reactive({
  email: "",
  password: "",
});

// check if user is already logged in
onMounted(() => {
  if (localStorage.getItem("token")) {
    router.push({
      name: "dashboard",
    });
  }
});

// login function call
const handleLogin = () => {
  http()
    .post("/api/login", credentials)
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data.data.token));
      router.push({ name: "dashboard" });
    })
    .catch((error) => {
      console.error(error);
      alert(error.response.data.message);
    });
};
</script>

<style lang="scss" scoped></style>

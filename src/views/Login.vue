<template>
  <div class="home">
    <div class="">
      <div class="flex flex-wrap my-40" style="height:50vh;">
        <div class="lg:w-1/3 md:w-1/3 mx-auto w-full bg-white  border border-gray" >
          <div
                  class=" px-10 lg:pt-16 pb-16 text-medium"
          >
            <div class="mb-4">
              <img src="" alt="" class="w-48 mx-auto">
            </div>
            <h2 class="text-h4 font-semibold text-center">Welcome Back,</h2>
            <form action="">
              <div class="mt-4">
                <label for=""></label>
                <input
                        type="email"
                        v-model="form.email"
                        class="w-full focus:outline-none border px-5 py-3"
                        placeholder="janedoe@gmail.com"
                />
              </div>
              <div class="my-5">
                <label for=""></label>
                <input
                        type="password"
                        v-model="form.password"
                        class="w-full login-place focus:outline-none border border-green px-5 py-3"
                        placeholder="password"
                />
              </div>
              <div class="">
                <button
                        to="/wizard-guide"
                        tag="button"
                        class="bg-sky-blue w-full  px-10 py-3 rounded text-white"
                        @click.prevent="handleLogin"
                >
                  sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers('auth');

export default {
  name: 'Home',
  data(){
    return {
      form: {
        email: 'test@mail.com',
        password: 'password'
      }
    };
  },

  methods:{
    ...mapActions(["signIn"]),
    async handleLogin(){
      const res  = await this.signIn(this.form);

      if(res.user.role === 'staff'){
        window.location  = '/dashboard';
      }else{
        console.log('Not Found')
      }

    }
  }
}
</script>

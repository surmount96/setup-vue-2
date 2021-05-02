<template>
    <div class="">
        <div class="flex flex-wrap relative">
            <aside class="lg:w-2/12 md:w-2/12 lg:flex md:flex flex-col justify-between hidden shadow-lg fixed z-10 bg-white" style="height: 100vh">
                <div class="">
                    <div class="border-b border-gray">
                        <img src="../../../assets/logo.png" alt="logo" class="w-32 mx-auto h-20">
                    </div>
                    <div class=" mt-6 ml-10">
                        <a href="/dashboard" class="flex items-center text-body-2" :class="{'text-sky-blue': '/dashboard' == $route.path}">
                            <i class="ri-dashboard-fill mr-2 ri-fw"></i>
                            Dashboard
                        </a>
                    </div>
                    <div class=" mt-6 ml-10">
                        <a href="/upload-book" class="flex items-center text-body-2 " :class="{'text-sky-blue': '/upload-book' == $route.path}">
                            <i class="ri-wallet-line mr-2 ri-fw"></i>
                            Upload Book
                        </a>
                    </div>
                    <div class=" mt-6 ml-10">
                        <a href="/borrow-books" class="flex items-center text-body-2" :class="{'text-sky-blue': '/borrow-books' == $route.path}">
                            <i class="ri-chat-1-line mr-2 ri-fw"></i>
                            Borrow Books
                        </a>
                    </div>
                    <div class=" mt-6 ml-10">
                        <a href="/qrcode" class="flex items-center text-body-2 " :class="{'text-sky-blue': '/qrcode' == $route.path}">
                            <i class="ri-profile-line mr-2 ri-fw"></i>
                            Generate QR code
                        </a>
                    </div>

                </div>
                <div class=" mt-6 mb-3 mx-3">
                    <a href="#" @click.prevent="signOut" class="bg-sky-blue py-3 px-4 rounded-full text-white flex items-center justify-center text-body-2 ">
                        <i class="ri-logout-box-line mr-2 ri-fw"></i>
                        Logout
                    </a>
                </div>
            </aside>
          <div class="lg:hidden md:hidden block fixed z-50 w-full bottom-0 bg-white">
            <div data-v-step="2" class="flex items-center justify-between px-10">
              <a href="/dashboard"  class="flex flex-col items-center py-3 justify-center " :class="{'text-sky-blue': '/dashboard' == $route.path}">
                <i class="ri-dashboard-fill ri-fw"></i>
                <span>Dashboard</span>
              </a>
              <a href="/upload-book"  class="flex flex-col items-center py-3 justify-center " :class="{'text-sky-blue': '/upload-book' == $route.path}">
                <i class="ri-wallet-line mr-2 ri-fw"></i>
                <span>Upload Book</span>
              </a>
              <a href="/borrow-books"  class="flex flex-col items-center py-3 justify-center" :class="{'text-sky-blue': '/borrow-books' == $route.path}">
                <i class="ri-chat-1-line mr-2 ri-fw"></i>
                <span>Borrow Books</span>
              </a>
              <a href="/qrcode"  class="flex flex-col items-center py-3 justify-center" :class="{'text-sky-blue': '/qrcode' == $route.path}">
                <i class="ri-profile-line mr-2 ri-fw"></i>
                <span>Generate QR code</span>
              </a>
              <a href="/qrcode" @click.prevent="signOut" class="flex flex-col items-center py-3 justify-center" :class="{'text-sky-blue': '/qrcode' == $route.path}">
                <i class="ri-logout-box-line mr-2 ri-fw"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
            <main class="lg:w-10/12 md:w-9/12 w-full absolute lg:ml-52 p-4 md:ml-56" style=" background:#f9f9f9" >
                <nav class="bg-white py-3 border-b border-gray px-2 flex justify-between items-center">
                    <ul>
                        <li class="ml-4 relative ">
                            
                        </li>
                    </ul>
                    <ul class="flex items-center">
                        
                        <li class="mr-5 cursor-pointer  text-gray-darker flex items-center">
                            <i class="ri-user-line ri-fw"></i>
                            <span class="text-medium ml-4">{{ $store.state.auth.user.first_name }} {{ $store.state.auth.user.last_name }}</span>
                        </li>
                    </ul>
                </nav>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapActions } = createNamespacedHelpers('auth');

    export default {
        name: "Layout",
        methods: {
            ...mapActions(['logout']),
            async signOut() {
                const res = await this.logout();
                if(res === true){
                    this.$router.push({path: '/'})
                }
            }
        }
    }
</script>

<style scoped>

</style>
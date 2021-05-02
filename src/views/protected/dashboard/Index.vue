<template>
    <div>
        <div class="mt-10 ">
            <h3 class="font-semibold ml-10">
                Popular Now
<!--                {{ $store.state.auth.token }}-->
            </h3>

            <div class="flex flex-wrap mt-4 ml-10">
                <div class="lg:w-1/4 md:w-1/3 mb-4 w-full" v-for="l in popular" :key="l.id">
                    <div class="bg-white rounded-md translateup cursor-pointer" @click="hardCopy(l)" style="width:75%">
                        <div class="flex flex-col items-center">
                            <div class="p-5">
                                <img :src="l.book_image" alt="" class="object-cover h-48">
                            </div>
                            <p class="text-medium">
                                {{ l.title }}
                            </p>

                            <rating :l="l"/>
                        </div>
                    </div>
                </div>

            </div>

<!--            Latest-->
            <h3 class="font-semibold ml-10 mt-6 mb-3">Latest books</h3>
            <div class="flex flex-wrap mt-4 ml-10">
                <div class="lg:w-1/4 md:w-1/3 mb-4 w-full" v-for="l in latest" :key="l.id">
                    <div class="bg-white rounded-md translateup cursor-pointer" @click="hardCopy(l)" style="width:75%">
                        <div class="flex flex-col items-center">
                            <div class="p-5">
                                <img :src="l.book_image" alt="" class="object-cover h-48">
                            </div>
                            <p class="text-medium">
                                {{ l.title }}
                            </p>

                            <rating :l="l"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapGetters } = createNamespacedHelpers('auth');
    import { RepositoryFactory as Repo } from "./../../../repository/RepositoryFactory";
    const PR = Repo.get('request');
    import Rating from '@/components/ui/Rating'

    export default {
        components:{
            Rating
        },
        data(){
            return {
                popular:'',
                latest:''
            };
        },
        computed:{
            ...mapGetters(['getUser'])
        },
        async mounted(){
        //   console.log(this.$route);
            const res  = await PR.getBooksByRank();
            this.popular = res.books.popular;
            this.latest = res.books.latest;
            console.log(res)
        },
        methods:{
            hardCopy(){
                //
            }
        }
    }
</script>
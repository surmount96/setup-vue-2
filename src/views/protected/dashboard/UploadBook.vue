<template>
    <div class="">
        <div class="mb-4 pt-4">
            <button class="bg-white focus:outline-none shadow-sm py-2 px-5 text-medium rounded-sm mr-3" @click="openBookModal">Add books</button>
            <button class="bg-white focus:outline-none shadow-sm py-2 px-5 text-medium rounded-sm"  @click="category = true">Add Category</button>
        </div>

        <div class="bg-white mt-10 shadow-sm rounded-sm py-2">
            <table class="w-full ">
                <tr class="text-medium bg-gray-100 font-bold" >
                    <td class="py-3 px-5">Title</td>
                    <td class="py-3 px-3">Description</td>
                    <td class="py-3 px-3">Type</td>
                    <td class="py-3 px-3">Category</td>
                    <td class="py-3 px-5">Action</td>
                </tr>
                <tr class="text-medium" v-for="book in books" :key="book.id">
                    <td class="py-3 px-5">{{ book.title }}</td>
                    <td class="py-3 px-3">{{ book.description }}</td>
                    <td class="py-3 px-3">{{ book.book_type }}</td>
                    <td class="py-3 px-3">{{ book.category.name }}</td>
                    <td class="py-3 px-5">
                        <button @click="editBooks(book)" class="text-warning focus:outline-none border border-warning mr-2">
                            <i class="ri-pencil-line"></i>
                        </button>
                        <button @click="handleBooksDelete(book.id)" class="text-red focus:outline-none border border-warning">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                    </td>
                </tr>
            </table>
        </div>

    <!-- Category -->
        <el-dialog title="Add book category" :visible.sync="category">
            <form @submit.prevent="handleCategory">
                <label for="">Name <span class="text-red-300">*</span></label>
                <input type="text" v-model="list.name" placeholder="Name" class="py-3 px-4 text-medium focus:outline-none border-gray w-full">
                <div class="my-3 text-right">
                    <button type="submit" class="bg-sky-blue focus:outline-none py-3 px-10 text-medium rounded-sm text-white">Add</button>
                </div>
            </form>
        </el-dialog>

        <!-- Books -->
        <el-dialog title="Book management" :visible.sync="book">
            <form @submit.prevent="bookState ? updateBookUpload() : handleBookUpload()">
                <div class="mb-4">
                    <label for="">Title <span class="text-red-300">*</span></label>
                    <input type="text" placeholder="Title" v-model="form.title" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                </div>
                <div class="mb-4">
                    <label for="">Author name <span class="text-red-300">*</span></label>
                    <input type="text" placeholder="Author" v-model="form.author" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                </div>
                <div class="mb-4">
                    <label for="">Description <span class="text-red-300">*</span></label>
                    <textarea placeholder="Description" v-model="form.description" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md"></textarea>
                </div>
                <div class="mb-4">
                    <label for="">Book Type <span class="text-red-300">*</span></label>
                    <select placeholder="Type" v-model="form.book_type" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                        <option value="soft">Soft Copy</option>
                        <option value="hard">Hard Copy</option>
                        <option value="both">Both</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="">Ranking <span class="text-red-300">*</span></label>
                    <select placeholder="Type" v-model="form.rank" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                    
                        <option value="popular">Popular</option>
                        <option value="latest">Latest</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="">Choose a category <span class="text-red-300">*</span></label>
                    <select v-model="form.category_id" placeholder="Type" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                    </select>
                </div>
                <div class="cursor-pointer">
                    <label>
                        <div class="dot">
                            <p class="text-medium text-center">
                                Please choose the cover image of the Book
                            </p>
                            <p class="text-medium text-center" v-if="form.book_image != ''">
                                {{ form.book_image.name }}
                            </p>
                        </div>
                        <input type="file" class="hidden" @change="onChangeFile" accept="image/*">
                    </label>
                </div>
                <div class="my-3 text-right">
                    <button class="bg-sky-blue py-3 px-10 text-medium rounded-sm text-white focus:outline-none">Upload</button>
                </div>
            </form>
        </el-dialog>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from "vuex";
    const { mapActions } = createNamespacedHelpers('auth');

    export default {
        name: "UploadBook",
        data(){
            return {
                category:false,
                categories:{},
                books:{},
                book:false,
                bookState:false,
                form:{
                    id:'',
                    category_id:'',
                    book_type: '',
                    title:'',
                    description:'',
                    book_image:'',
                    rank:'',
                    author:''
                },
                list:{
                    name:''
                }
            }
        },
        async created(){
            this.getCategory();
            this.getBooks();
        },
        methods:{
            ...mapActions(["deleteBooks","digitalizedBook","fetchCategory","createNewCategory","fetchBooks","updateBooks"]),
            onChangeFile(e){
                const file = e.target.files[0]
                this.form.book_image = file;
                console.log(file)
            },
            openBookModal(){
                this.book = true;
                this.form ={
                    book_image:'',
                    title:'',
                    description: '',
                    categories: '',
                    book_type:'',
                    rank:''
                }
            },
            async getBooks(){
                const loading = this.loader();
                try{
                    const res = await this.fetchBooks();
                    console.log(res)
                    this.books = res.books;
                    loading.close();
                } catch (err) {
                    loading.close();
                    this.$notify({
                        message: err.response.data,
                        type: 'error'
                    });
                }
            },
            async getCategory(){
                const loading = this.loader();
                try{
                    const res = await this.fetchCategory();
                    // console.log(res)
                    this.categories = res.categories;
                    loading.close();
                } catch (err) {
                    loading.close();
                    this.$notify({
                        message: err.response.data,
                        type: 'error'
                    });
                }
            },
            async handleCategory(){
                const loading = this.loader();
                try{
                    
                    const res = await this.createNewCategory(this.list);
                    if(res.status === 201) {
                        this.list ={}
                        this.category = false;
                        this.getCategory()
                    }
                    if(res.status === 500) {
                        this.$notify({
                            message: res.errors,
                            type: 'error'
                        });
                    }
                    loading.close();
                    // console.log(res);
                    
                } catch (err) {
                    loading.close();
                    this.$notify({
                        message: err.response.data,
                        type: 'error'
                    });
                }
            },
            editBooks(item){
                this.book = true;
                this.bookState = true;
                this.form = item;
            },
            loader(){
                return this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            },
            async handleBookUpload(){
                const loading = this.loader();
                try{
                    let fd = new FormData();
                    fd.append('title', this.form.title);
                    fd.append('description', this.form.description);
                    fd.append('category_id', this.form.category_id);
                    fd.append('book_image', this.form.book_image);
                    fd.append('book_type', this.form.book_type);
                    fd.append('rank', this.form.rank);
                    fd.append('author', this.form.author);
                    
                    const res = await this.digitalizedBook(fd);
                    // console.log(res); 
                    this.book = false;
                    this.getBooks();
                    this.$notify({
                        message: 'successfully updated',
                        type: 'success'
                    });
                    loading.close();
                    this.form ={
                        book_image:'',
                        title:'',
                        description: '',
                        categories: '',
                        book_type:''
                    }
                }catch(err) {
                    loading.close();
                    this.$notify({
                        message: err.response.data,
                        type: 'error'
                    });
                }
            },

            async updateBookUpload(){
                const loading = this.loader();
                try{
                    let fd = new FormData();
                    fd.append('id', this.form.id);
                    fd.append('title', this.form.title);
                    fd.append('description', this.form.description);
                    fd.append('category_id', this.form.category_id);
                    fd.append('book_image', this.form.book_image);
                    fd.append('book_type', this.form.book_type);
                    fd.append('rank', this.form.rank);
                    fd.append('author', this.form.author);
                    
                    const res = await this.updateBooks(fd);
                    // console.log(res); 
                    this.book = false;
                    this.getBooks();
                    this.$notify({
                        message: 'successfully updated',
                        type: 'success'
                    });
                    loading.close();
                    this.form ={
                        book_image:'',
                        title:'',
                        description: '',
                        categories: '',
                        book_type:''
                    }
                }catch(err) {
                    loading.close();
                    this.$notify({
                        message: err.response.data,
                        type: 'error'
                    });
                }
            },
        
            async handleBooksDelete(id){
                try {
                    const loading = this.loader();
                    const res = await this.deleteBooks({ id: id});
                    if(res.status === 201) {
                        this.$notify({
                            message: 'successfully deleted',
                            type: 'success'
                        });
                        this.getBooks()
                    }
                    if(res.status === 500) {
                        this.$notify({
                            message: res.errors,
                            type: 'error'
                        });
                    }
                    loading.close();
                }catch (err) {
                    this.$notify({
                        message: err.response.data,
                        type: 'error'
                    });
                }
            },
            handleClose(){

            }
        }
    }
</script>

<style>
.border-gray{
    border:1px solid #f1f1f1;
}
.dot{
    border: 1px dashed #49CBFB;
    padding: 3rem 5rem;
    color:#7a7a7a;
    cursor: pointer;
}

.text-red-300{
    color:rgb(202, 26, 26);
}
</style>
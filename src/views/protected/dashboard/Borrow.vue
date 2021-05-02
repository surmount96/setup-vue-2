<template>
    <div class="pt-6">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Borrow a book" name="first">
                <div class="bg-white py-5 px-4 shadow-md rounded">
                    <h2>User's Details</h2>
                    <div class="mt-4">
                        <div class="mb-6">
                            <input type="text" placeholder="Name" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                        </div>
                        <div class="mb-6">
                            <input type="text" placeholder="Email Address" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                        </div>
                        <div class="mb-6">
                            <input type="text" placeholder="Address" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                        </div>
                        <div class="mb-6">
                             <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="Return date">
                            </el-date-picker>
                            <!-- <input type="text" placeholder="" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md"> -->
                        </div>
                        <div class="mb-4">
                            <select placeholder="Type" class="py-3 px-4 text-medium focus:outline-none border-gray w-full rounded-md">
                                <option value="">Select Books</option>
                                <option value="">Hard Copy</option>
                                <option value="">Both</option>
                            </select>
                        </div>
                        <button class="bg-sky-blue py-3 px-10 text-medium rounded-sm text-white">Save</button>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="View users" name="second">

                <div class="bg-white mt-10 shadow-sm rounded-sm overflow-y-scroll h-64">
                    <table class="w-full ">
                        <tr class="text-medium bg-gray-100 font-bold" >
                            <td class="py-3 px-5">Name</td>
                            <td class="py-3 px-3">Email</td>
                            <td class="py-3 px-3">Book</td>
                            <td class="py-3 px-3">Return date</td>
                            <td class="py-3 px-5">Action</td>
                        </tr>
                        <tr  class="text-medium">
                            <td class="py-3 px-5">Bridget</td>
                            <td class="py-3 px-3">janedoe@mail.com</td>
                            <td class="py-3 px-3">Having a good woman</td>
                            <td class="py-3 px-3">02 Feb 2020</td>
                            <td class="py-3 px-5">
                                <button class="text-warning border border-warning mr-2">
                                    <i class="ri-pencil-line"></i>
                                </button>
                                <button class="text-red border border-warning">
                                    <i class="ri-delete-bin-line"></i>
                                </button>
                            </td>
                        </tr>
                        <tr  class="text-medium">
                            <td class="py-3 px-5">Jane Doe</td>
                            <td class="py-3 px-3">example@mail.com</td>
                            <td class="py-3 px-3">Technological Stack</td>
                            <td class="py-3 px-3">22 Mar 2021</td>
                            <td class="py-3 px-5">
                                <button class="text-warning border border-warning mr-2">
                                    <i class="ri-pencil-line"></i>
                                </button>
                                <button class="text-red border border-warning">
                                    <i class="ri-delete-bin-line"></i>
                                </button>
                            </td>
                        </tr>
                        <tr  class="text-medium">
                            <td class="py-3 px-5">Bridget</td>
                            <td class="py-3 px-3">janedoe@mail.com</td>
                            <td class="py-3 px-3">Having a good woman</td>
                            <td class="py-3 px-3">02 Feb 2020</td>
                            <td class="py-3 px-5">
                                <button class="text-warning border border-warning mr-2">
                                    <i class="ri-pencil-line"></i>
                                </button>
                                <button class="text-red border border-warning">
                                    <i class="ri-delete-bin-line"></i>
                                </button>
                            </td>
                        </tr>
                        <tr  class="text-medium">
                            <td class="py-3 px-5">Bridget</td>
                            <td class="py-3 px-3">janedoe@mail.com</td>
                            <td class="py-3 px-3">Having a good woman</td>
                            <td class="py-3 px-3">02 Feb 2020</td>
                            <td class="py-3 px-5">
                                <button class="text-warning border border-warning mr-2">
                                    <i class="ri-pencil-line"></i>
                                </button>
                                <button class="text-red border border-warning">
                                    <i class="ri-delete-bin-line"></i>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        value1:''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>
.el-input__inner{
    display:block!important;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%!important;
}
</style>
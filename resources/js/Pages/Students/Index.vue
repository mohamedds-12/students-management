<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { defineComponent } from 'vue';
// import type { Header, Item } from "vue3-easy-data-table";


defineProps({
    students: {
        type: Object
    }
})



const headers = [
    { text: "ID", value: "id" },
    { text: "Name", value: "name" },
    { text: "Email", value: "email", sortable: true },
    { text: "Class", value: "class.name", sortable: true },
    { text: "Section", value: "section.name", sortable: true },
    { text: "CreatedAt", value: "created_at", sortable: true },
];

</script>

<template>
    <Head title="Students" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Students
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <EasyDataTable :headers="headers" :items="students.data" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>

</template>

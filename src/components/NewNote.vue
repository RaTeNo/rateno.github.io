<template>
    <div class="new-note">
        <label for="">Заголовок</label>
        <input type="text" v-model="note.title">
        <label for="">Приоритет</label>
        <select v-model="note.priority">
            <option disabled value="">Выберите один из вариантов</option>
            <option value=1>Обычная</option>
            <option value=2>Важная</option>
            <option value=3>Критическая</option>
        </select>
        <label for="">Описание</label>
        <textarea  v-model="note.descr"></textarea>
        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
export default {
    props:{
        note:{
            type: Object,
            required: true
        }
    },
    methods:{
        addNote(){
            this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
    .new-note{
        text-align: center;
        select{
            padding: 16px 26px;
            border-radius: 20px;
            font-size: 16px;
            height: auto;
            width: 100%;
            margin-bottom: 30px;
            display: block;
        }
    }
    
    .btnPrimary{
        margin-top:15px;
        margin-bottom: 20px;
    }
    
</style>
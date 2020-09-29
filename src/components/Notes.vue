<template>
    <div class="notes">
        <div class="note"  v-for="(note, index) in notes" :key="index" 
        :class="{ full : !grid, 'warning' : note.priority == 2, 'error' : note.priority == 3 }">
            <div class="note-header" :class="{ full : !grid }" >
                <div @click="editTodoItem(index)">
                    <input type="text" v-if="note.editing" v-model="note.title" @blur="finishEditTodoItem(index)" @keyup.enter="finishEditTodoItem(index)" @keyup.esc="cancelEditTodoItem(index)">
                    <p  v-if="!note.editing">{{ note.title }}</p>
                </div>
                <p style="cursor:pointer;" @click="removeNote(index)">x</p>
            </div>
            <div class="note-body">
                <p>
                    {{ note.descr}}
                </p>
                <span>{{ note.date}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        },
        titleBeforeEdit: {
            type: String,
            required: true
        }
    },
    methods: {
        removeNote(index) {
            console.log(`Note id - ${index} removed`);
            this.$emit('remove', index);
        },
        editTodoItem(index) {
            this.$emit('editTodoItem', index);
        },
        finishEditTodoItem(index) {
            this.$emit('finishEditTodoItem', index);
        },
        cancelEditTodoItem(index) {
            this.$emit('cancelEditTodoItem', index);
        }
    }
}
</script>

<style lang="scss" >
.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}
.note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
    &:hover {
        box-shadow: 0 30px 30px rgba(0,0,0,.04);
        transform: translate(0,-6px);
        transition-delay: 0s !important;
    }
    &.full {
        width: 100%;
        text-align: center;
    }
    &.warning{
        background-color: #f5f4ad;
    }
    &.error{
        background-color: #ffd7d7;
    }
}
.note-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 32px;
    }
    p{
        color:blue;
        font-size: 20px;
        cursor: pointer;
    }
    svg{
        margin-right: 12px;
        color:#999;
        cursor: pointer;
        &.active {
            color:blue;
        }
        &:last-child {
            margin-right:0px;
        }
    }
    &.full {
        justify-content: center;
        p {
            margin-right: 16px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
}
.note-body{
    p{
        margin: 20px 0;
    }
    span{
        font-size: 14px;
        color:#999;
    }
}
</style>
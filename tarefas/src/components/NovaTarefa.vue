<template>
    <div>
        <input v-model="tarefa" @keydown.enter="criarTarefa" placeholder="Sua tarefa"/>
        <button @click="criarTarefa">+</button>
    </div>
</template>

<script>
import barramento from '../barramento'

export default {
    data(){
        return{
            tarefa: ''
        }
    },
    methods:{
        criarTarefa(){
            barramento.$emit('tarefaAdicionada', this.tarefa)
            this.tarefa = ''
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <p v-if="tarefasConcluidas<0">Porcentagem de tarefas concluídas: 0</p>
        <p v-else>Porcentagem de tarefas concluídas: {{ Math.round((tarefasConcluidas/totalTarefas) *100) }}</p>

        <ul>
            <li v-for="(item, indice) in listaTarefas" :key="indice">
                {{ item.nome }} 
                <button @click="removerTarefa(indice)">-</button>
                <button v-if="listaTarefas[indice].pendente == true" @click="concluirTarefa(indice)">Feita</button>
                <button v-if="listaTarefas[indice].pendente == false" @click="desfazerTarefa(indice)">Desfazer</button>
            </li>
        </ul>
        <p>Total de tarefas: {{ totalTarefas }}</p>
        <p>Tarefas concluídas: {{ tarefasConcluidas }}</p>
    </div>
</template>

<script>
import barramento from '../barramento'

export default {
    data(){
        return{
            listaTarefas: [
                {
                    nome: 'Tarefa',
                    pendente: true
                },
            ],
            totalTarefas: 1,
            tarefasConcluidas: 0,
        }
    },
    methods:{
        registrarTarefa(tarefa){
            this.listaTarefas.push({nome: tarefa, pendente: true})
            this.totalTarefas++
        },
        removerTarefa(indice){
            if(this.listaTarefas[indice].pendente == false){
                this.tarefasConcluidas--
            }
            this.listaTarefas.splice(indice)
            this.totalTarefas--
        },
        concluirTarefa(indice){
            this.listaTarefas[indice].pendente = false
            this.tarefasConcluidas++
        },
        desfazerTarefa(indice){
            this.listaTarefas[indice].pendente = true
            this.tarefasConcluidas--
        }
    },
    created(){
        barramento.$on('tarefaAdicionada', tarefa =>{
            this.registrarTarefa(tarefa)
        })
    }
}
</script>

<style scoped>
 .div {
     display: flex;
     justify-content: center;
 }

 .p {
     display: flex;
     justify-content: center;
 }

 .ul {
     display: flex;
     justify-content: center;
 }
</style>

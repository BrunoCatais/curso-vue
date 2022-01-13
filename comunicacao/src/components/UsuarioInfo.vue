<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarIdade">Reiniciar idade</button>
    </div>
</template>

<script>
import barramento from '../barramento.js'

export default {
    props: {
        nome: String,
        idade: Number,
    },
    methods:{
        reiniciarNome(){
            this.$emit('nomeMudou', 'Pedro')
        },
        reiniciarIdade(){
            this.$emit('idadeReiniciou', 22)
        },
    },
    created(){
        barramento.$on('idadeMudou', idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>

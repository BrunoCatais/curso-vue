<template>
	<div class="usuario">
		<h2>Usuários</h2>
        <p><strong>Código: {{ id }}</strong></p>
        <button sucesso @click="voltarParaInico">Voltar</button>
	</div>
</template>

<script>
export default {
    props: ['id'],
    methods:{
        voltarParaInico(){
            this.$router.push('/')
        }
    },
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to){
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>
<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvarForm" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" class="ml-2" variant="success">Obter usuários</b-button>
		</b-card>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }} <br>
				<strong>Email: </strong> {{ usuario.email }} <br>
				<strong>Id:</strong> {{ id }} <br>
				<b-button variant="warning" @click="alterar(id)">Alterar</b-button>
				<b-button variant="danger" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data(){
		return{
			usuarios: [],
			id: null,
			usuario:{
				nome: '',
				email: '',
			},
		}
	},
	methods:{
		limparForm(){
			this.usuario.nome = '',
			this.usuario.email = '',
			this.id = null
		},
		alterar(id){
			this.id = id,
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id){
			this.$http.delete(`/usuarios/${this.id}.json`)
				.then(() => this.limparForm())
		},
		salvarForm(){
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => this.limparForm())
		},
		obterUsuarios(){
			this.$http.get('usuarios.json').then(res => {
				this.usuarios = res.data
			})
		},
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>

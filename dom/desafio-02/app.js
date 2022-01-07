new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        chamarAlerta (){
            alert('ALERTA!')
        },
        armazenarValor (e){
            this.valor = e.target.value;
        },
        armazenarValor2 (e){
            this.valor2 = e.target.value;
        }
        
    }
})
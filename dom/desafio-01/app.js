new Vue({
    el: '#desafio',
    data: {
        nome: 'Bruno',
        idade: 19,
        imagem: 'https://cpar.ufms.br/files/2020/07/ufms_logo_negativo_rgb-740x1024.jpg'
    },
    methods: {
        numeroRand() {
            return Math.random()
        }
    }
})
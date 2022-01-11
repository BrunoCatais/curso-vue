new Vue({
    el: '#app',
    data: {
        isRunning: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 | this.monsterLife == 0
        }
    },
    methods:{
        startGame(){
            this.isRunning = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        getRandom(min, max){
            const value = Math.random() * (max-min) + min
            return Math.round(value)
        },
        attack(especial){
            this.hurt('playerLife', 7, 12, false, 'Jogador', 'Monstro', 'player')
            this.hurt('monsterLife', 5, 10, especial, 'Monstro', 'Jogador', 'monster')
        },
        hurt(prop, min, max, especial, source, target, cls){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] -  hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou ${heal} de vida.`, 'player')
        },
        healAndHurt(){
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        registerLog(text, cls){
            this.logs.unshift({ text, cls })
        }
    },
    watch:{
        hasResult(value){
            if (value) this.isRunning = false
        }
    },
})

new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        changeGameMode: function (state) {
            this.gameIsRunning = state;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            this.damageMonster(this.calculateDamage(10, 3));
            this.damagePerson(this.calculateDamage(11, 4));
        },
        specialAttack: function () {
            this.damageMonster(this.calculateDamage(20, 10));
            this.damagePerson(this.calculateDamage(15, 5));
        },
        healPlayer: function () {
            var newHealth = this.playerHealth + this.calculateDamage(15, 5);
            this.playerHealth = newHealth >= 100 ? 100 : newHealth;
            this.damagePerson(this.calculateDamage(10, 4));
        },
        calculateDamage: function (max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        damagePerson: function (damage) {
            this.turns.unshift({
                message: 'Person Got Damaged by ' + damage,
                isPlayer: true
            });
            this.playerHealth -= damage;
        },
        damageMonster: function (damage) {
            this.turns.unshift({
                message: 'Monster Got Damaged by ' + damage,
                isPlayer: false
            });
            this.monsterHealth -= damage;
        }
    },
    watch: {
        monsterHealth: function (value) {
            if (value <= 0) {
                const choice = confirm('You Won! New Game ?');
                this.changeGameMode(choice);
            }
        },
        playerHealth: function (value) {
            if (value <= 0) {
                const choice = confirm('You Lost! New Game ?');
                this.changeGameMode(choice);
            }
        }
    }
})
export const fruitMixin = {
    data() {
        return {
            fruits: ["Apple", "Banana", "Mango", "Melon"],
            filterText: ""
        };
    },
    computed: {
        filterdFruits() {
            if (!this.filterText) {
                return this.fruits;
            }
            return this.fruits.filter(frt =>
                frt.toUpperCase().match(this.filterText.toUpperCase())
            );
        }
    }
};
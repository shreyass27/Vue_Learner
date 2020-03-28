export const textMixin = {
    computed: {
        textFlip() {
            return this.text
                .split("")
                .reverse()
                .join("");
        },
        letterCount() {
            if (typeof this.text !== "string") {
                return this.text;
            }
            return `${this.text}(${this.text.length})`;
        }
    }
}
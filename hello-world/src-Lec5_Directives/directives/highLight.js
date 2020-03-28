export function highLightDir() {
    return {
        bind(el, binding) {
            let delay = 0;
            el.style.padding = '8px 16px';
            if (binding.modifiers['delayed']) {
                delay = 3000;
            }
            setTimeout(() => {
                el.style[binding.arg] = binding.value;
            }, delay)
        }
    }
}
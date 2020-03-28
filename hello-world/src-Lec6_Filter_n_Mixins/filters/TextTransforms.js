export const toUpperCase = function (value) {
    if (value && typeof (value) === 'string') {
        return value.toUpperCase();
    }
    return '';
}
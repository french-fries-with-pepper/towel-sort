// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    const res = [];
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        if (i & 1) {
            res.push(...matrix[i].reverse());
        } else {
            res.push(...matrix[i]);
        }
    }
    return res;
};

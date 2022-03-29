export const sum = (a, b) => a + b;
export const totale = list => list.reduce(sum, 0);
export const media = list => totale(list) / list.lenght;

export default {sum, totale, media}



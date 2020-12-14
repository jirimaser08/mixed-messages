let signs = ['Wind', 'Earth', 'Water', 'Fire'];
let birthLoc = ['River', 'Sea', 'Desert', 'Jungle', 'Mountain'];
let tribe = ['Raven', 'Boulder', 'Ocean', 'Enthalpy'];
const randSign = () => {
    let i = Math.floor(Math.random()*signs.length);
    return signs[i];
}
const randLoc = () => {
    let i = Math.floor(Math.random()*birthLoc.length);
    return birthLoc[i];
}
const randTribe = () => {
    let i = Math.floor(Math.random()*tribe.length);
    return tribe[i];
}



const prompt = `Hello young bender, you come from the ${randTribe()} tribe. You were born near the ${randLoc()}, and Ahh i see you are a ${randSign()} bender`;
console.log(prompt);
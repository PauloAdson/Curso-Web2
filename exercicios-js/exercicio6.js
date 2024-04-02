// Minha Resolução
function inverso(vaiSerInverso) {
    const invertendo = -1 * vaiSerInverso
    const invertendoBoolean = !vaiSerInverso
    if (typeof vaiSerInverso === 'number') {
        return invertendo
    } else if (typeof vaiSerInverso === 'boolean') {
        return invertendoBoolean
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof vaiSerInverso}`
    }
}

console.log(inverso(0));
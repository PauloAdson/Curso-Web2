const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// o x seria o indice
// quando chegar no indice 5 ele vai interromper
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`);
}

// o y seria o indice
// quando chegar no indice 5 ele vai ser excluído e continuar depois
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`);
}

// não é recomendado usar
// externo seria um rotulo
externo: for (a in nums) {
    for (b in nums){
        if (a == 2 && b == 3) {
            break externo
        }
        console.log(`Par = ${a},${b}`);
    }
}
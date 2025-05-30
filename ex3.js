function maiorDeTres(a, b, c) {
    let valores = [a, b, c]
    let maior = valores[0]

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i]
        }
    }
    console.log(maior)
    return maior

}

maiorDeTres(5, 9, 2)
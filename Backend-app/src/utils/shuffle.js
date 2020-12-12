module.exports = (array) => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    // Enquanto existir elementos para embaralhar...

    while(currentIndex !== 0){

        // Pegue um elemnto aleatoriamente
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // e troque de posicao com o elemento atual
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
}
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (ok, cool) {
    a = 0
    while (a <= ok.length) {
        for (let i = 0; i < a; i++) {
            if (i > 1 & (i + 1)%3 === 0) {
                let points = (i+1)/3
                exclamations = ""
                for (let i = 1; i <= points; i++) {
                    exclamations = exclamations + cool
                }
                console.log(ok[i] + exclamations)
            }
            else {
                console.log(ok[i])
            }
        }
        a += 1
    }
}
addExcitement(sentence, "!");

const betterSentence = ["This", "is", "a", "much", "better", "sentence", "than", "that", "other", "one", "."]

addExcitement(betterSentence, "&")

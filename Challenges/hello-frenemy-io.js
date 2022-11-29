const { rejects } = require("assert")
const { resolve } = require("path")
const readline = require("readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve)
    })
}

let enemyList = ["darth vader", "voldemort", "palpatine", "lex luthor"]

async function respond() {
    let answer = await ask("What is your name?")
    
    // if answer matches "darth vader" say "no thats impossible"
    //  if answer matches items in array, say Go Away
    // else, interpolate "Hello <name>"

    if (enemyList.includes(answer)){
        console.log(`Go away, ${answer}... No, that's impossible!`)
    } else if (enemyList.includes(answer)){
        console.log(`Fo away, ${answer}`)
    } else { 
        console.log(`Hello, ${answer}`)
    }
    rl.close()
}

respond()
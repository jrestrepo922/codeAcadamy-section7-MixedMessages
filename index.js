// creates a random numbers based on number pass
function randomNum(num){
    return Math.floor(Math.random() * num); 
}

// all possible random words 
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

// final array containing all the sentences
// function that pushes a random collective Wisdom onto the forturn array. 
 function createFortune(){
    const fortune = []; 
    for(let prop in collectiveWisdom){
        const optionIdx = randomNum(collectiveWisdom[prop].length)
        switch(prop){
            case 'signInfo':
                fortune.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
                break
              case 'fortuneOutput':
                fortune.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
                break
              case 'advice':
                fortune.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
                break
              default:
                fortune.push('There is not enough info.')
        }
    }
    return fortune;
 }

 function displayFortune(){
     const fortune  = createFortune(); 
     console.log(fortune.join("\n"));
 }

displayFortune();


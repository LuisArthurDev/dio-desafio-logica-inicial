// Nome do Heroi, Quantidade de XP, Levels

let nomeHeroi = "Jose, o Espadachim"
let experience = 4001
let level = ""
let levelData = [
    ["Ferro", 1000], ["Bronze", 2000], ["Prata", 5000], ["Ouro", 7000], ["Platina", 8000], ["Ascendente", 9000], ["Imortal", 10000], ["Radiante", 10001]
]

for(var l = 0; l < 7; l++){
    if(experience <= levelData[l][1]){
        level = levelData[l][0];
        break;
    }
}

console.log("O Héroi de nome " + nomeHeroi + " esta no nivel " + level)


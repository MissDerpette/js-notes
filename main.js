
// var list = [
//     "Andrew",
//     "Kers",
//     "Freya",
//     "Archer",
//     "Rick"
// ]


// // FOR LOOP
// //  H2 elements 
// // id output

// for ( let i = 0; i < list.length; i++) {
// console.log(`${i}`);
// }
// const output = document.querySelector("#output")
// for (let i =0 ; i < list.length; i++) {
//     output.innerHTML += `<br> LOOP VALUE ${i} <br>`
//     // output.innerHTML += list[i]
//     output.innerHTML += `<h6> ${list[i]} </h6>`
    
// }



// const newList = [
//     "Jon Snow",
//     "Danaerys Targaryen",
//     "Tyrion Lannister",
//     "Jamie Lannister",
//     "Cersei Lannister",
//     "Ned Stark"
// ]

//  for (let i = 0; i < newList.length; i++) {
//     console.log(`${i}`);
//  }

//  const newOutPut = document.querySelector("#output2")
//  for (let i = 0 ; i < newList.length; i++) {
//     newOutPut.innerHTML += `<br> LOOP VALUE ${i} <br>`
//     newOutPut.innerHTML += newList[i]
//     newOutPut.innerHTML += `<h2> ${newList[i]} </h2>`
//  }

 const gotList = [
    {
      "name": "jon snow",
      "image": "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
      "pet" : "ghost",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
      "family": "stark"
    },
    {
      "name": "Danaerys Targaryen",
      "image": "https://media.glamour.com/photos/5cec17dd583d36831269eb26/16:9/w_1280,c_limit/emilia-clarke-game-of-thrones.jpg",
      "pet" : "3 Dragons",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
      "family": "Targaryen"
    },
    {
      "name": "Tyrion Lannister",
      "image": "https://static.wikia.nocookie.net/gameofthrones/images/9/95/HandoftheKingTyrionLannister.PNG/revision/latest?cb=20190520175204",
      "pet" : "Bronn ",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
      "family": "Lannister"
    },
    {
      "name": "Arya Stark",
      "image": "https://pyxis.nymag.com/v1/imgs/846/9bb/440e83edacba3579e42bb6ad20860b50b0-18-arya-stark.rsquare.w700.jpg",
      "pet" : "Nymeria ",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
      "family": "Stark"
    },
    {
      "name": "Sansa Stark",
      "image": "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F03%2FScreen-Shot-2019-03-13-at-10.36.08-AM.jpg",
      "pet" : "Nymeria ",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
      "family": "Stark"
    },
    {
      "name": "Ned Stark",
      "image":  "https://static.wikia.nocookie.net/gameofthrones/images/5/5c/Eddard_1x01.jpg/revision/latest/scale-to-width-down/270?cb=20120511213934",
      "pet" : "xxx ",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
      "family": "Stark"
    }
]

// for( let i =0; i < gotList.length; i++){
//     console.log(`LOOP VALUE ${i}`)
//     console.log(gotList[i])

//     console.log(
//         gotList[i].name,
//         gotList[i].image,
//         gotList[i].description,
//         gotList[i].family,
//         gotList[i].pet   
//     )
//     console.log("LOOP ENDS HERE!")
// }


for (let i = 0; i < gotList.length; i++) {
    console.log(`${i}`);
}

const gotSection = document.querySelector("#got")
for (let i = 0 ; i < gotList.length; i++) {
    gotSection.innerHTML += `<br> LOOP VALUE ${i} <br>`
    gotSection.innerHTML += `<p> ${gotList[i].name} </p>`
    gotSection.innerHTML += `<img class="img-holder" src="${gotList[i].image}" >`
    gotSection.innerHTML += `<p> ${gotList[i].description} </p>`
    gotSection.innerHTML += `<p> ${gotList[i].family} </p>`
    gotSection.innerHTML += `<p> ${gotList[i].pet} </p>`
}


// const gotSection2 = document.querySelector("#got2")
// for (let i = 0 ; i < gotList.length; i++) {
//     gotSection2.innerHTML += `
//     <div class="card">
//         <p> ${gotList[i].name} </p>
//         <img class="img-holder" src="${gotList[i].image}" >
//     </div>
//     `
// }


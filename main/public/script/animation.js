
let title = 'Download eBook of Your Course for Free'

async  function   charOnebyOne(){
     let d = document.querySelector('.title');
     d.innerText = "";
    for(let i = 0 ; i < title.length ; i++){
    await new Promise(resolve=>setTimeout(resolve,50))
        console.log(title[i])
        d.innerText += title[i]
        }
}

charOnebyOne()
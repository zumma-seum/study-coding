const fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

const input = document.querySelector("input");
const btn = document.querySelector("button");
const span = document.createElement("span");
span.remove();

function getCount(){
    const choseFruit = input.value;
    
    let count = 0;
    for(let i = 0; i < fruit_list.length; i++){
        
        if(choseFruit === fruit_list[i]){
            count += 1;
        }
    }
    
    span.innerText = `[ ${fruit_list} ] 에는 ${choseFruit} : ${count} 개` 
    document.body.appendChild(span)
}

btn.addEventListener("click", getCount)
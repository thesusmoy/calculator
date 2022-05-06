    const display1El = document.querySelector(".display-1");
    const display2El = document.querySelector(".display-2");
    const tempResultEl = document.querySelector(".temp-result");
    const numbersEl = document.querySelectorAll(".number");
    const operationEl = document.querySelectorAll(".operation");
    const equalEl = document.querySelector(".equal");
    const clearEl = document.querySelector(".all-clear");
    const lastEntityClearEl = document.querySelector(".last-entity-clear");
    const dotEl = document.querySelector(".dot");
    

    let dis1Num = '';
    let dis2Num = '';
    let result = null;
    let lastOperation = '';
    let haveDot = false;
    

    numbersEl.forEach(number =>{
        number.addEventListener('click', (e) =>{
            if(e.target.innerText === '.' && !haveDot){
                haveDot = true;
            }else if(e.target.innerText === '.' && haveDot){
                return;
            }
            dis2Num += e.target.innerText;
            display2El.innerText = dis2Num;
        });
    });
    operationEl.forEach(operation => {
        operation.addEventListener('click', (e) => {
            if(!dis2Num) result;
            haveDot = false;

            const operatonName = e.target.innerText;
            if(dis1Num && dis2Num && lastOperation){
                mathOperaton();
            }else{
                result = parseFloat(dis2Num);

            }
            clearVar(operatonName);
            lastOperation = operatonName;
            console.log(result);
        });

    });

    function clearVar(name = ''){
        dis1Num += dis2Num + ' ' + name + ' ';
        display1El.innerText = dis1Num;
        display2El.innerText = '';
        dis2Num = '';
        tempResultEl.innerText = result;
    }

    function mathOperaton(){
        if(lastOperation === 'X'){
            result = parseFloat(result) * parseFloat(dis2Num);
        }else if(lastOperation === '+'){
            result = parseFloat(result) + parseFloat(dis2Num);
        }else if(lastOperation === '-'){
            result = parseFloat(result) - parseFloat(dis2Num);
        }else if(lastOperation === '/'){
            result = parseFloat(result) / parseFloat(dis2Num);
        }else if(lastOperation === '%'){
            result = parseFloat(result) % parseFloat(dis2Num);
        }
    }


    equalEl.addEventListener('click', (e)=>{
        if(!dis1Num || !dis2Num) return;
        haveDot = false;
        mathOperaton();
        clearVar();
        display2El.innerText = result;
        display1El.innerText = '';
        dis2Num = result;
        dis1Num ='';
        tempResultEl.innerText = '';

    });

    clearEl.addEventListener('click', (e)=>{
        display1El.innerText = 0;
        display2El.innerText = 0;
        tempResultEl.innerText = 0;
        dis1Num = '';
        dis2Num = '';
        result = '';
    });

    lastEntityClearEl.addEventListener('click', (e)=> {
        dis2Num = '';
        display2El.innerText= '';
    })
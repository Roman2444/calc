window.addEventListener('load', function(){

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let oper = document.querySelector('.operation')

    inp1.addEventListener('input', btnEnable)
    inp2.addEventListener('input', btnEnable)
    oper.addEventListener('input', btnEnable)
    
    function btnEnable(){
        btn.disabled = false;  
    }
    
    // возможна более краткая запись
    // (работает почему то только после function btnEnable??? мб цикл forEach не дает дойти до функции )
    // [inp1, inp2, oper].forEach(elem => elem.addEventListener('input', btnEnable));

    function checkNumbers(){
        this.value = this.value.replace(/[^0-9]/g,"")
    }
    inp1.addEventListener('input', checkNumbers)
    inp2.addEventListener('input', checkNumbers)

    btn.addEventListener('click', function(){
        let num1 = parseInt(inp1.value);
        let num2 = parseInt(inp2.value);
        let result

        if(oper.value==='+'){ 
            result = num1 + num2
        } else if (oper.value==='-'){
            result = num1 - num2
        } else if (oper.value==='*'){
            result = num1 * num2
        } else if (oper.value==='/'){
            result = num1 / num2
        }
        if (isNaN(result)){
            result='Ошибка'
        }
        res.innerHTML = result 
        btn.disabled = true
    });
});


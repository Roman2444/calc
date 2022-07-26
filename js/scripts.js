window.addEventListener('load', function(){

    let container = document.querySelector('.container');
    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let oper = document.querySelector('.operation')

    const operations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
    };
    
    function calculate(){
        let num1 = parseInt(inp1.value);
        let num2 = parseInt(inp2.value);
        let result = operations[oper.value](num1, num2);

        if (isNaN(result)){
            result='Ошибка'
        }
        if (isNaN(result)) {
            result= 'Ошибка'
        }
        res.innerHTML = result 
        btn.disabled = true
    }

    btn.addEventListener('click', calculate);

    container.addEventListener('input', function(e){
        btn.disabled = false;  
        if (e.target.classList.contains('inp')){
            e.target.value=e.target.value.replace(/[^0-9]/g,"")
        }
    })


    this.document.addEventListener('keydown', function(e) {
        if (e.key === '+'){
            oper.value='+'
        } else if (e.key === '-'){
            oper.value='-'
        } else if (e.key === '*'){
            oper.value='*'
        } else if (e.key === '/'){
            oper.value='/'
        } else if (e.key === 'Enter'){
            calculate()
        } 
    })
});


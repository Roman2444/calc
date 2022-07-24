window.addEventListener('load', function(){

    let container = document.querySelector('.container');
    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let oper = document.querySelector('.operation')

    container.addEventListener('input', function(){
        btn.disabled = false;  
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
        } 
    })
    
    // function checkNumbers(){
    //     this.value = this.value.replace(/[^0-9]/g,"")
    // }
    // inp1.addEventListener('input', checkNumbers)
    // inp2.addEventListener('input', checkNumbers)

    container.addEventListener('input', function(e){
        if (e.target.classList.contains('inp')){
            e.target.value=e.target.value.replace(/[^0-9]/g,"")
        }
    })

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


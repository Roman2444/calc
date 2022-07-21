window.addEventListener('load', function(){

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let oper = document.querySelector('.operation')


    inp1.addEventListener('input', function(){    
       btn.disabled=false})
    inp2.addEventListener('input', function(){
       btn.disabled=false})
    oper.addEventListener('input', function(){
        btn.disabled=false})

    function checkNumbers(){
        if (event.key=='Backspace') {
            inp2.value.pop()
        } else if(isNaN(event.key)|| event.key==' ') {
            event.preventDefault()
        }
    }
    
    inp1.addEventListener('keydown', checkNumbers)
    inp2.addEventListener('keydown', checkNumbers)

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
        res.innerHTML = result 
        btn.disabled = true
    });
});


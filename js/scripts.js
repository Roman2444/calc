window.addEventListener('load', function(){

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let oper = document.querySelector('.operation')


    inp1.addEventListener('keydown', function(){    
       btn.disabled=false})
    inp2.addEventListener('keydown', function(){
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
        if(oper.value==='+'){
            res.innerHTML = (parseInt(inp1.value) + parseInt(inp2.value))
        } else if (oper.value==='-'){
            res.innerHTML = (parseInt(inp1.value) - parseInt(inp2.value))
        } else if (oper.value==='*'){
            res.innerHTML = (parseInt(inp1.value) * parseInt(inp2.value))
        } else if (oper.value==='/'){
            res.innerHTML = (parseInt(inp1.value) / parseInt(inp2.value))
        }
        btn.disabled=true
    });
});


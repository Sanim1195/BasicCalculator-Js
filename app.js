(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Creating an event for each button and adding the value to the screen
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    // Creating an event for the equal button and evaluating the value
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = '';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    // Creating an event for the clear button and clearing the screen
    clear.addEventListener('click', function(e){
        screen.value = '';
        //  let ans = confirm('Are you sure you want to clear the screen?');
        //  if (ans){ 
        //     screen.value = '';
        // }
        });



}
)();
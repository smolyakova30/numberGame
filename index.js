const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector("#guess").value;

    if (userNumber < 1 || userNumber > 20){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter number between 1 and 20!'
          })
    } else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You need enter a number!'
          })
    }else {
        if (userNumber > answer){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Try smaller number!'
              })
        }else if (userNumber < answer){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Try bigger number!'
              })
        }else{
              Swal.fire({
                icon: 'success',
                title: 'You got the right number!'
              })
        }
    }
}
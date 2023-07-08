var player_step = "X"
var initial_state = []
// document.getElementById(`col${1}`).innerHTML = "vishnu";
var win_combinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
// var cols = document.querySelectorAll("col")

var bool = false
// var count = 0
// console.log(cols.length)
for(var i = 1;i <= 9;i++){
    document.getElementById(`col${i}`).addEventListener("click", function(){
        if ( this.innerHTML === "" && !bool) {
            // document.getElementById(`col${i}`).innerHTML = player_step;
            this.innerHTML = player_step
            initial_state.push(player_step)
            // console.log(initial_state)

            this.classList.add(player_step.toLowerCase());

            win_check(player_step)
            draw_check(initial_state)
            if (player_step === "X"){
                player_step = "O"
            }
            else{
                player_step = "X"
            }
        }
    }
    )
}
function win_check(player_step){
    for(var i = 0;i< win_combinations.length;i++){
        if(document.getElementById(`col${win_combinations[i][0]}`).innerHTML === player_step && document.getElementById(`col${win_combinations[i][1]}`).innerHTML === player_step &&
        document.getElementById(`col${win_combinations[i][2]}`).innerHTML === player_step){
            setTimeout(function() {
                alert(player_step + " wins!");
              }, 500);
            // restart()

        }
    }
}

function draw_check(initial_state){
    var count = 0
    for(var i = 0;i < initial_state.length;i++){
        if(initial_state[i] !== ""){
            count++
        }
    }
    if(count == 9){
        alert("It's a draw")
        restart()
    }
}


// document.getElementById("restart").addEventListener("click", restart())

function restart(){
    cohnt = 0
    player_step = "X"
    bool = false
    for(var i = 1;i <= 9;i++){
        document.getElementById(`col${i}`).innerHTML = ""
        // bool = false
    }
}




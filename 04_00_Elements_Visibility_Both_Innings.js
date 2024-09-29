let striker = null
let non_striker = null
let batters = document.getElementById("")
let scoreboard = document.getElementById("scoreboard")
let scoreboard_bowling = document.getElementById("scoreboard_bowling")
let run_1
let run_2
let run_3
let run_4
let run_5
let run_6
let wicket
let wide_ball
let wide_ball_1
let wide_ball_2
let wide_ball_3
let wide_ball_4
let wide_ball_5
let wide_ball_6
let no_ball
let no_ball_1
let no_ball_2
let no_ball_3
let no_ball_4
let no_ball_5
let no_ball_6
let dot_ball
let others
let leg_bye_1
let leg_bye_2
let leg_bye_3
let leg_bye_4
let leg_bye_5
run_1 = document.getElementById("run_1")
run_2 = document.getElementById("run_2")
run_3 = document.getElementById("run_3")
run_4 = document.getElementById("run_4")
run_5 = document.getElementById("run_5")
run_6 = document.getElementById("run_6")
wicket = document.getElementById("wicket")
wide_ball = document.getElementById("wide_ball")
no_ball = document.getElementById("no_ball")
dot_ball = document.getElementById("dot_ball")
no_ball_1 = document.getElementById("no_ball_1")
no_ball_2 = document.getElementById("no_ball_2")
no_ball_3 = document.getElementById("no_ball_3")
no_ball_4 = document.getElementById("no_ball_4")
no_ball_5 = document.getElementById("no_ball_5")
no_ball_6 = document.getElementById("no_ball_6")
wide_ball_1 = document.getElementById("wide_ball_1")
wide_ball_2 = document.getElementById("wide_ball_2")
wide_ball_3 = document.getElementById("wide_ball_3")
wide_ball_4 = document.getElementById("wide_ball_4")
wide_ball_5 = document.getElementById("wide_ball_5")
wide_ball_6 = document.getElementById("wide_ball_6")
others = document.getElementById("others")
leg_bye_1 = document.getElementById("leg_bye_1")
leg_bye_2 = document.getElementById("leg_bye_2")
leg_bye_3 = document.getElementById("leg_bye_3")
leg_bye_4 = document.getElementById("leg_bye_4")
leg_bye_5 = document.getElementById("leg_bye_5")

function disabled_action() {

    others.hidden = true
    scoreboard.disabled = true
    scoreboard_bowling.disabled = true
    run_1.hidden = true
    run_2.hidden = true
    run_3.hidden = true
    run_4.hidden = true
    run_5.hidden = true
    run_6.hidden = true
    wicket.hidden = true
    no_ball.hidden = true
    no_ball_1.hidden = true
    no_ball_2.hidden = true
    no_ball_3.hidden = true
    no_ball_4.hidden = true
    no_ball_5.hidden = true
    no_ball_6.hidden = true
    wide_ball.hidden = true
    leg_bye_1.hidden = true
    leg_bye_2.hidden = true
    leg_bye_3.hidden = true
    leg_bye_4.hidden = true
    leg_bye_5.hidden = true
    dot_ball.hidden = true
    wide_ball_1.hidden = true
    wide_ball_2.hidden = true
    wide_ball_3.hidden = true
    wide_ball_4.hidden = true
    wide_ball_5.hidden = true
    wide_ball_6.hidden = true

    return false
}





function enable_action() {


    others.hidden = false
    scoreboard.hidden = false
    scoreboard_bowling.hidden = false
    run_1.hidden = false
    run_2.hidden = false
    run_3.hidden = false
    run_4.hidden = false
    run_5.hidden = false
    run_6.hidden = false
    wicket.hidden = false
    no_ball.hidden = false
    no_ball_1.hidden = false
    no_ball_2.hidden = false
    no_ball_3.hidden = false
    no_ball_4.hidden = false
    no_ball_5.hidden = false
    no_ball_6.hidden = false
    wide_ball.hidden = false
    leg_bye_1.hidden = false
    leg_bye_2.hidden = false
    leg_bye_3.hidden = false
    leg_bye_4.hidden = false
    leg_bye_5.hidden = false
    dot_ball.hidden = false
    wide_ball_1.hidden = false
    wide_ball_2.hidden = false
    wide_ball_3.hidden = false
    wide_ball_4.hidden = false
    wide_ball_5.hidden = false
    wide_ball_6.hidden = false
    return false
}


function disabled_all() {

    document.getElementById("scorecard_div").hidden = false
    document.getElementById("brief_scoreboard").hidden = false
    scoreboard.hidden = false
    scoreboard_bowling.hidden = false
    run_1.hidden = false
    run_2.hidden = false
    run_3.hidden = false
    run_4.hidden = false
    run_5.hidden = false
    run_6.hidden = false
    wicket.hidden = false
    no_ball.hidden = false
    no_ball_1.hidden = false
    no_ball_2.hidden = false
    no_ball_3.hidden = false
    no_ball_4.hidden = false
    no_ball_5.hidden = false
    no_ball_6.hidden = false
    wide_ball.hidden = false
    leg_bye_1.hidden = false
    leg_bye_2.hidden = false

    leg_bye_3.hidden = false
    leg_bye_4.hidden = false
    leg_bye_5.hidden = false
    dot_ball.hidden = false
    wide_ball_1.hidden = false
    wide_ball_2.hidden = false
    wide_ball_3.hidden = false
    wide_ball_4.hidden = false
    wide_ball_5.hidden = false
    wide_ball_6.hidden = false

    document.getElementById("change_strike_button").hidden = false
    document.getElementById("end_of_an_inning").hidden = false
    striker = document.getElementById("_batter_1")
    striker_value = striker.value
    striker.style.backgroundColor = "#90EE90"

    non_striker = document.getElementById("_batter_2")
    non_striker.style.backgroundColor = "#FF6671"
    return false
}







function avoid_doubleClicking(x) {

    setTimeout(() => {
        document.getElementById('wicket').disabled = true
        document.getElementById('dot_ball').disabled = true
        document.getElementById('run_1').disabled = true
        document.getElementById('run_2').disabled = true
        document.getElementById('run_3').disabled = true
        document.getElementById('run_4').disabled = true
        document.getElementById('run_5').disabled = true
        document.getElementById('run_6').disabled = true
        document.getElementById('wide_ball').disabled = true
        document.getElementById('no_ball').disabled = true
        document.getElementById('no_ball_1').disabled = true
        document.getElementById('no_ball_2').disabled = true
        document.getElementById('no_ball_3').disabled = true
        document.getElementById('no_ball_4').disabled = true
        document.getElementById('no_ball_5').disabled = true
        document.getElementById('no_ball_6').disabled = true
        document.getElementById('wide_ball_1').disabled = true
        document.getElementById('wide_ball_2').disabled = true
        document.getElementById('wide_ball_3').disabled = true
        document.getElementById('wide_ball_4').disabled = true
        document.getElementById('wide_ball_5').disabled = true
        document.getElementById('wide_ball_6').disabled = true
        document.getElementById('others').disabled = true
        document.getElementById('leg_bye_1').disabled = true
        document.getElementById('leg_bye_2').disabled = true
        document.getElementById('leg_bye_3').disabled = true
        document.getElementById('leg_bye_4').disabled = true
        document.getElementById('leg_bye_5').disabled = true

    }, 0);
    setTimeout(() => {
        document.getElementById('wicket').disabled = false
        document.getElementById('run_2').disabled = false
        document.getElementById('run_1').disabled = false
        document.getElementById('run_4').disabled = false
        document.getElementById('run_5').disabled = false
        document.getElementById('run_3').disabled = false
        document.getElementById('run_6').disabled = false
        document.getElementById('dot_ball').disabled = false
        document.getElementById('wide_ball').disabled = false
        document.getElementById('no_ball').disabled = false
        document.getElementById('no_ball_1').disabled = false
        document.getElementById('no_ball_2').disabled = false
        document.getElementById('no_ball_3').disabled = false
        document.getElementById('no_ball_4').disabled = false
        document.getElementById('no_ball_5').disabled = false
        document.getElementById('no_ball_6').disabled = false
        document.getElementById('wide_ball_1').disabled = false
        document.getElementById('wide_ball_2').disabled = false
        document.getElementById('wide_ball_3').disabled = false
        document.getElementById('wide_ball_4').disabled = false
        document.getElementById('wide_ball_5').disabled = false
        document.getElementById('wide_ball_6').disabled = false
        document.getElementById('others').disabled = false
        document.getElementById('leg_bye_1').disabled = false
        document.getElementById('leg_bye_2').disabled = false
        document.getElementById('leg_bye_3').disabled = false
        document.getElementById('leg_bye_4').disabled = false
        document.getElementById('leg_bye_5').disabled = false

    }, 400);
    total_bowler_score()

}

function disable_bowler() {
    let x = document.getElementsByClassName('bowlers_class')
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
    return false
}
function enable_bowlers() {
    let x = document.getElementsByClassName('bowlers_class')
    for (i = 0; i < x.length; i++) {
        x[i].disabled = false;
        if (x[i] == current_bowler) {

            x[i].disabled = true
        }
    }
    return false
}
const this_over = document.getElementById("this_over")
this_over.addEventListener('click', this_over_data)

value_show_count = 0
function this_over_data() {

    if (value_show_count == 0) {
        document.getElementById("this_over_label").hidden = false
        value_show_count = 1
        this_over.innerText = "Hide balls"
    }
    else {
        document.getElementById("this_over_label").hidden = true
        value_show_count = 0
        this_over.innerText = "Show balls"

    }
}
function disable_batsman() {

}
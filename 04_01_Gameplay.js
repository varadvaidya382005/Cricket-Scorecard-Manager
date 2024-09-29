function match_diary(x, is_no_ball, is_leg_before) {
    if (counter_variable_for_first_inning) {

        //    let current_bowler_id = current_bowler_id
        // alert("match diary id set" + current_bowler_id)
        y = x
        let present_score = null
        let present_over = null
        avoid_doubleClicking(y)

        // if (is_no_ball == false) {
        //    
        // }
        if (!is_leg_before && !is_no_ball) {
            present_score = parseInt(document.getElementById("present_runs").innerText)
            present_score += parseInt(x)
            document.getElementById("present_runs").innerHTML = present_score
            batsman_runs(x)
            bowlers_runs(x, false, false)
            increase_ball(0)
            change_strike(x)

        }
        else if (is_no_ball) {

            match_wide(1, false, false)
            yes = confirm("Are Runs Scored By Batsman")
            if (yes) {
                batsman_runs(x)
                present_score = parseInt(document.getElementById("present_runs").innerText)
                present_score += parseInt(x)
                document.getElementById("present_runs").innerHTML = present_score
                change_strike(x)
                bowlers_runs(parseInt(x), false, true)
            }
            else {

                batsman_runs(0)
                change_strike(x)

            }
        }
        else if (is_leg_before) {
            batsman_runs(0)
            match_wide(parseInt(x), false, true)
            if (x == 1 || x == 3 || x == 5) {
                bowlers_runs(0, false, false)
                increase_ball(0, true)
            }
            else {
                bowlers_runs(0, false, false)
                increase_ball(0, false)
            }
            change_strike(x)
        }

        total_bowler_score()
    }
    else {
        new_innning_match_diary(x, is_no_ball, is_leg_before)
    }
}

function increase_ball(wic, is_odd_ball) {
    if (counter_variable_for_first_inning) {

        present_over = parseFloat(document.getElementById('present_overs').innerText)

        prenst_over_splitting = String(present_over).split('.')
        present_over = parseFloat(present_over)
        if (prenst_over_splitting[1] == 5 && wic == 0 || prenst_over_splitting[1] == 5 && wic == 1) {

            temp = striker
            striker = non_striker
            non_striker = temp
            striker.style.backgroundColor = "#90EE90"
            non_striker.style.backgroundColor = "#FF6671"
            present_over += 0.5
            enable_bowlers(current_bowler)
            disabled_action()
            document.getElementById("warning_marquee").innerText = " Please Select Bowler of your Choice from Above"
            document.getElementById("this_over_label").innerText += " | "
            




        }

        else {

            present_over += 0.1

        }


        document.getElementById('present_overs').innerHTML = present_over.toFixed(1)
        if ((parseFloat(maximum_overs)) == (parseFloat(document.getElementById("present_overs").innerText))) {
        
            document.getElementById("start_new_inning").hidden = false
            end_inning()
        }
    }
    else {
        second_inning_increease_ball(0)
    }
}
function match_wide(wide_runs, i_dont_know, is_leg_bye) {
    if (counter_variable_for_first_inning) {


        total_extras = parseInt(document.getElementById("present_extras").innerText)

        total_extras += wide_runs
        document.getElementById("present_extras").innerHTML = total_extras

        present_score = parseInt(document.getElementById("present_runs").innerText)
        present_score += parseInt(wide_runs)
        document.getElementById("present_runs").innerHTML = present_score
        avoid_doubleClicking(9)
        if (is_leg_bye)
            bowlers_runs(0, false, true)
        else
            bowlers_runs(1, false, true)

        total_bowler_score()

    }
    else{
        total_extras = parseInt(document.getElementById("new_present_extras").innerText)

        total_extras += wide_runs
        document.getElementById("new_present_extras").innerHTML = total_extras

        present_score = parseInt(document.getElementById("new_present_runs").innerText)
        present_score += parseInt(wide_runs)
        document.getElementById("new_present_runs").innerHTML = present_score
        avoid_doubleClicking(9)
        if (is_leg_bye)
            bowlers_runs(0, false, true)
        else
            bowlers_runs(1, false, true)

        total_bowler_score()
 
    }
}
function change_strike(x) {
    if (counter_variable_for_first_inning) {

        if (x == 1 || x == 3 || x == 5) {

            temp = striker
            striker = non_striker
            non_striker = temp
            striker.style.backgroundColor = "#90EE90"
            non_striker.style.backgroundColor = "#FF6671"
        }
    }
    else {
        if (x == 1 || x == 3 || x == 5) {

            temp = new_striker
            new_striker = non_new_striker
            non_new_striker = temp
            new_striker.style.backgroundColor = "#90EE90"
            non_new_striker.style.backgroundColor = "#FF6671"
        }
    }
}
function match_wicket() {
    if (counter_variable_for_first_inning) {
            document.getElementById("change_strike_button").disabled=true
        x = 0
        count++
        current_wicket = parseInt(document.getElementById('present_wicket').innerText)
        current_wicket = current_wicket + 1
        document.getElementById('present_wicket').innerHTML = current_wicket
        avoid_doubleClicking('w')
        document.getElementById("warning_marquee").innerText = "Please Select Next Batsman From The List"

        disabled_action()
        if (striker.getAttribute("data-unique-id") == '1') {
            document.getElementById('score_batter_1').innerHTML += " W"
            striker = null
            openoers = 1
            document.getElementById('score_batter_1').style.backgroundColor = "pink"
            document.getElementById('_batter_1').style.backgroundColor = "pink"
            document.getElementById('_batter_1').style.backgroundColor = "pink"
            document.getElementById('total__batter_1').style.backgroundColor = "pink"
            document.getElementById('bat_1').style.backgroundColor = "pink"
            bowlers_runs(0, true, false)
            total_bowler_score()
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }

        }
        if (striker && striker.getAttribute("data-unique-id") == '2') {
            document.getElementById('score_batter_2').innerHTML += " W"
            document.getElementById('score_batter_2').style.backgroundColor = "pink"
            document.getElementById('_batter_2').style.backgroundColor = "pink"
            document.getElementById('total__batter_2').style.backgroundColor = "pink"
            document.getElementById('bat_2').style.backgroundColor = "pink"
            striker = null
            bowlers_runs(0, true, false)
            total_bowler_score()
            openoers = 1
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '3') {
            document.getElementById('score_batter_3').innerHTML += " W"
            striker = null
            openoers = 1
            document.getElementById('score_batter_3').style.backgroundColor = "pink"
            document.getElementById('_batter_3').style.backgroundColor = "pink"
            document.getElementById('total__batter_3').style.backgroundColor = "pink"
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('bat_3').style.backgroundColor = "pink"
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '4') {
            document.getElementById('score_batter_4').innerHTML += " W"
            striker = null
            openoers = 1
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('score_batter_4').style.backgroundColor = "pink"
            document.getElementById('_batter_4').style.backgroundColor = "pink"
            document.getElementById('total__batter_4').style.backgroundColor = "pink"
            document.getElementById('bat_4').style.backgroundColor = "pink"
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '5') {
            document.getElementById('score_batter_5').innerHTML += " W"
            striker = null
            openoers = 1
            document.getElementById('score_batter_5').style.backgroundColor = "pink"
            document.getElementById('total__batter_5').style.backgroundColor = "pink"
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('bat_5').style.backgroundColor = "pink"
            document.getElementById('_batter_5').style.backgroundColor = "pink"
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '6') {
            document.getElementById('score_batter_6').innerHTML += " W"
            striker = null
            openoers = 1
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('score_batter_6').style.backgroundColor = "pink"
            document.getElementById('_batter_6').style.backgroundColor = "pink"
            document.getElementById('total__batter_6').style.backgroundColor = "pink"
            document.getElementById('bat_6').style.backgroundColor = "pink"
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '7') {
            document.getElementById('score_batter_7').innerHTML += " W"
            striker = null
            openoers = 1
            document.getElementById('score_batter_7').style.backgroundColor = "pink"
            document.getElementById('_batter_7').style.backgroundColor = "pink"
            document.getElementById('total__batter_7').style.backgroundColor = "pink"
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('bat_7').style.backgroundColor = "pink"
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '8') {
            document.getElementById('score_batter_8').innerHTML += " W"
            striker = null
            openoers = 1
            document.getElementById('score_batter_8').style.backgroundColor = "pink"
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('total__batter_8').style.backgroundColor = "pink"
            document.getElementById('bat_8').style.backgroundColor = "pink"
            document.getElementById('_batter_8').style.backgroundColor = "pink"
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '9') {
            document.getElementById('score_batter_9').innerHTML += " W"
            striker = null
            document.getElementById('score_batter_9').style.backgroundColor = "pink"
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('_batter_9').style.backgroundColor = "pink"
            document.getElementById('total__batter_9').style.backgroundColor = "pink"
            document.getElementById('bat_9').style.backgroundColor = "pink"
            openoers = 1
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '10') {
            document.getElementById('score_batter_10').innerHTML += " W"
            striker = null
            openoers = 1
            document.getElementById('score_batter_10').style.backgroundColor = "pink"
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('_batter_10').style.backgroundColor = "pink"
            document.getElementById('total__batter_10').style.backgroundColor = "pink"
            document.getElementById('bat_10').style.backgroundColor = "pink"
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
        if (striker && striker.getAttribute("data-unique-id") == '11') {
            document.getElementById('score_batter_11').innerHTML += " W"
            striker = null
            openoers = 1
            bowlers_runs(0, true, false)
            total_bowler_score()
            document.getElementById('score_batter_11').style.backgroundColor = "pink"
            document.getElementById('_batter_11').style.backgroundColor = "pink"
            document.getElementById('total__batter_11').style.backgroundColor = "pink"
            document.getElementById('bat_11').style.backgroundColor = "pink"
            alert("Select Batsman From Upside")
            if (count == 12) {
                end_inning()
            }
        }
    }else{
        document.getElementById("change_strike_button").disabled=true

        wicket_second_inning()
    }
}
function end_inning() {
    total_batsman_score()
    disabled_action()
    alert("Innding Ended 123")
    document.getElementById("batsman_1_Team_1").disabled = false
    document.getElementById("batsman_1_Team_2").disabled = false
    document.getElementById("batsman_1_Team_3").disabled = false
    document.getElementById("batsman_1_Team_4").disabled = false
    document.getElementById("batsman_1_Team_5").disabled = false
    document.getElementById("batsman_1_Team_6").disabled = false
    document.getElementById("batsman_1_Team_7").disabled = false
    document.getElementById("batsman_1_Team_8").disabled = false
    document.getElementById("batsman_1_Team_9").disabled = false
    document.getElementById("batsman_1_Team_10").disabled = false
    document.getElementById("batsman_1_Team_11").disabled = false
    document.getElementById("bowler_1_Team_1").disabled = false
    document.getElementById("bowler_1_Team_2").disabled = false
    document.getElementById("bowler_1_Team_3").disabled = false
    document.getElementById("bowler_1_Team_4").disabled = false
    document.getElementById("bowler_1_Team_5").disabled = false
    document.getElementById("bowler_1_Team_6").disabled = false
    document.getElementById("bowler_1_Team_7").disabled = false
    document.getElementById("bowler_1_Team_8").disabled = false
    document.getElementById("bowler_1_Team_9").disabled = false
    document.getElementById("bowler_1_Team_10").disabled = false
    document.getElementById("bowler_1_Team_11").disabled = false
    counter_variable_for_first_inning = false
    striker.style.backgroundColor="#87CEEB"
    non_striker.style.backgroundColor="#87CEEB"
    document.getElementById("this_over_label").innerHTML+="<br>Second Inning:<br>"
    document.getElementById("start_new_inning").hidden = false
    document.getElementById("batter_1").hidden = true
    document.getElementById("batter_2").hidden = true
    document.getElementById("current_bowler1").hidden = true
    document.getElementsByClassName("select_label").item(0).hidden = true
    document.getElementsByClassName("select_label").item(1).hidden = true
    document.getElementById("batting_first").innerText = "The Target to " + ball_first_team + " is of " + (parseInt(document.getElementById("present_runs").innerText) + 1) + " runs"
    document.getElementById("brief_scoreboard_2").hidden = false
    document.getElementById("scoreboard_bowling_2").hidden = false
    document.getElementById("scoreboard_2").hidden = false
    document.getElementById("required_details").hidden = false
    document.getElementById("change_strike_button").hidden = true
    document.getElementById("end_of_an_inning").hidden = true
    counter_variable_for_first_inning = false
    count = 0
    reverse_bowling_batting_buttons()
    disabled_action()
    first_inning_total =parseInt(document.getElementById("present_runs").innerText)
    document.getElementById("required_details").style.color="red"
    document.getElementById("required_details").innerText = "You Need more "+ (first_inning_total+1)+ " in "+ (maximum_overs*6) +" balls."
    count_bowler =0
    
    hide_players()
    return false
}


function hide_players(){

    for(i=1;i<12;i++){
        document.getElementById("batsman_1_Team_"+i).hidden=true
        document.getElementById("bowler_1_Team_"+i).hidden=true
        document.getElementById("play_the_ball").hidden=true

    }
    return false


}
function show_players(){
    for(i=1;i<12;i++){
        document.getElementById("batsman_1_Team_"+i).hidden=false
        document.getElementById("bowler_1_Team_"+i).hidden=false
        

    }
    return false

}
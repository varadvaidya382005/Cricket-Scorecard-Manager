function new_innning_match_diary(x, is_no_ball, is_leg_before) {
    y = x
    let present_score = null
    let present_over = null
    avoid_doubleClicking(y)

    // if (is_no_ball == false) {
    //    
    // }a
    if (!is_leg_before && !is_no_ball) {
        present_score = parseInt(document.getElementById("new_present_runs").innerText)
        present_score += parseInt(x)
        document.getElementById("new_present_runs").innerHTML = present_score
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
            present_score = parseInt(document.getElementById("new_present_runs").innerText)
            present_score += parseInt(x)
            document.getElementById("new_present_runs").innerHTML = present_score
            change_strike(x)
            bowlers_runs(parseInt(x), false, true)
        }
        else {
            alert("hello")
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


function second_inning_increease_ball(wic, is_odd_ball) {

    present_over = parseFloat(document.getElementById('new_present_overs').innerText)

    prenst_over_splitting = String(present_over).split('.')
    present_over = parseFloat(present_over)
    if (prenst_over_splitting[1] == 5 && wic == 0 || prenst_over_splitting[1] == 5 && wic == 1) {

        temp = new_striker
        new_striker = non_new_striker
        non_new_striker = temp
        new_striker.style.backgroundColor = "#90EE90"
        non_new_striker.style.backgroundColor = "#FF6671"
        present_over += 0.5
        enable_bowlers(current_bowler)
        disabled_action()
        document.getElementById("warning_marquee").innerText = " Please Select Bowler of your Choice from Above"
        document.getElementById("this_over_label").innerText += " | "

        if ((parseFloat(maximum_overs) - 0.4) == (parseFloat(document.getElementById("present_overs").innerText))) {
            match_end()
        }





    }

    else {

        present_over += 0.1

    }

    balls_remain = document.getElementById('new_present_overs').innerText
    splitted_balls = balls_remain.split(".")
    remaining_balls = parseInt(splitted_balls[0]) * 6 + parseInt(splitted_balls[1])
    document.getElementById('new_present_overs').innerHTML = present_over.toFixed(1)
    document.getElementById("required_details").innerText = "You Need more " + ((parseInt(document.getElementById("present_runs").innerText) + 1) - parseInt(document.getElementById("new_present_runs").innerText)) + " in " + ((maximum_overs * 6) - (remaining_balls + 1)) + " balls."
    zero_remaining_balls_count = (maximum_overs * 6) - (remaining_balls + 1)
    if (zero_remaining_balls_count == 0) {
        match_end()
    }
    if (parseInt(document.getElementById("present_runs").innerText) < parseInt(document.getElementById("new_present_runs").innerText)) {
        match_end()
    }

}
function match_end() {

    disabled_action()

    document.getElementById("required_details").hidden = true
    document.getElementById("change_strike_button").hidden = true
    document.getElementById("end_of_an_inning").hidden = true
    document.getElementById("start_new_inning").hidden = true
    document.getElementById("match_end_label").hidden = false
    document.getElementById("view_summary").hidden = false

    if (parseInt(document.getElementById("new_present_runs").innerText) > parseInt(document.getElementById("present_runs").innerText)) {
        document.getElementById("match_end_label").innerText = document.getElementById("team_name_2").innerText + " won the match by " + (10 - parseInt(document.getElementById("new_present_wicket").innerText)) + " wickets"
    }
    else if (parseInt(document.getElementById("new_present_runs").innerText) < parseInt(document.getElementById("present_runs").innerText)) {
        document.getElementById("match_end_label").innerText = document.getElementById("team_name").innerText + " won the match by " + (parseInt(document.getElementById("present_runs").innerText) - parseInt(document.getElementById("new_present_runs").innerText)) + " runs"

    }
    else {
        document.getElementById("match_end_label").innerText = " Match Is Tied"
    }

}
function wicket_second_inning() {
    x = 0
    count++
    current_wicket = parseInt(document.getElementById('new_present_wicket').innerText)
    current_wicket = current_wicket + 1
    document.getElementById('new_present_wicket').innerHTML = current_wicket
    avoid_doubleClicking('w')
    document.getElementById("warning_marquee").innerText = "Please Select Next Batsman From The List"

    disabled_action()
    if (new_striker.getAttribute("data-unique-id") == '101') {
        document.getElementById('new_score_batter_1').innerHTML += " W"
        new_striker = null
        openoers = 1
        document.getElementById('new_score_batter_1').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_1').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_1').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_1').style.backgroundColor = "pink"
        document.getElementById('new_bat_1').style.backgroundColor = "pink"
        bowlers_runs(0, true, false)
        total_bowler_score()
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }

    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '102') {
        document.getElementById('new_score_batter_2').innerHTML += " W"
        document.getElementById('new_score_batter_2').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_2').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_2').style.backgroundColor = "pink"
        document.getElementById('new_bat_2').style.backgroundColor = "pink"
        new_striker = null
        bowlers_runs(0, true, false)
        total_bowler_score()
        openoers = 1
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '103') {
        document.getElementById('new_score_batter_3').innerHTML += " W"
        new_striker = null
        openoers = 1
        document.getElementById('new_score_batter_3').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_3').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_3').style.backgroundColor = "pink"
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_bat_3').style.backgroundColor = "pink"
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '104') {
        document.getElementById('new_score_batter_4').innerHTML += " W"
        new_striker = null
        openoers = 1
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_score_batter_4').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_4').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_4').style.backgroundColor = "pink"
        document.getElementById('new_bat_4').style.backgroundColor = "pink"
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '105') {
        document.getElementById('new_score_batter_5').innerHTML += " W"
        new_striker = null
        openoers = 1
        document.getElementById('new_score_batter_5').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_5').style.backgroundColor = "pink"
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_bat_5').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_5').style.backgroundColor = "pink"
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '106') {
        document.getElementById('new_score_batter_6').innerHTML += " W"
        new_striker = null
        openoers = 1
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_score_batter_6').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_6').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_6').style.backgroundColor = "pink"
        document.getElementById('new_bat_6').style.backgroundColor = "pink"
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '107') {
        document.getElementById('new_score_batter_7').innerHTML += " W"
        new_striker = null
        openoers = 1
        document.getElementById('new_score_batter_7').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_7').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_7').style.backgroundColor = "pink"
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_bat_7').style.backgroundColor = "pink"
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '108') {
        document.getElementById('new_score_batter_8').innerHTML += " W"
        new_striker = null
        openoers = 1
        document.getElementById('new_score_batter_8').style.backgroundColor = "pink"
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_total__batter_8').style.backgroundColor = "pink"
        document.getElementById('new_bat_8').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_8').style.backgroundColor = "pink"
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '109') {
        document.getElementById('new_score_batter_9').innerHTML += " W"
        new_striker = null
        document.getElementById('new_score_batter_9').style.backgroundColor = "pink"
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_inning__batter_9').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_9').style.backgroundColor = "pink"
        document.getElementById('new_bat_9').style.backgroundColor = "pink"
        openoers = 1
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '110') {
        document.getElementById('new_score_batter_10').innerHTML += " W"
        new_striker = null
        openoers = 1
        document.getElementById('new_score_batter_10').style.backgroundColor = "pink"
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_inning__batter_10').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_10').style.backgroundColor = "pink"
        document.getElementById('new_bat_10').style.backgroundColor = "pink"
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }
    }
    if (new_striker && new_striker.getAttribute("data-unique-id") == '111') {
        document.getElementById('new_score_batter_11').innerHTML += " W"
        new_striker = null
        openoers = 1
        bowlers_runs(0, true, false)
        total_bowler_score()
        document.getElementById('new_score_batter_11').style.backgroundColor = "pink"
        document.getElementById('new_inning__batter_11').style.backgroundColor = "pink"
        document.getElementById('new_total__batter_11').style.backgroundColor = "pink"
        document.getElementById('new_bat_11').style.backgroundColor = "pink"
        alert("Select Batsman From Upside")
        if (count == 12) {
            match_end()
        }


    }

    return false
}
function view_summary() {
    team_1_top_1 = 0
    team_1_top_2 = 0
    team_1_top_3 = 0
    team_1_top_4 = 0
    team_2_top_1 = 0
    team_2_top_2 = 0
    team_2_top_3 = 0
    team_2_top_4 = 0
    // let team_1 = new Array([
    //     document.getElementById("total__batter_1").innerText.split("/")[0],
    //     document.getElementById("total__batter_2").innerText.split("/")[0],
    //     document.getElementById("total__batter_3").innerText.split("/")[0],
    //     document.getElementById("total__batter_4").innerText.split("/")[0],
    //     document.getElementById("total__batter_5").innerText.split("/")[0],
    //     document.getElementById("total__batter_6").innerText.split("/")[0],
    //     document.getElementById("total__batter_7").innerText.split("/")[0],
    //     document.getElementById("total__batter_8").innerText.split("/")[0],
    //     document.getElementById("total__batter_9").innerText.split("/")[0],
    //     document.getElementById("total__batter_10").innerText.split("/")[0],
    //     document.getElementById("total__batter_11").innerText.split("/")[0]
    // ]);
    // for (i = 1; i < 2; i++) {
    //     for (j = 0; j <= i; j++) {
    //         if(team_1[i+1]&&team_1[i]<team_1[i+1]){
    //             temp = team_1[i+1]
    //             team_1[i+1] =team_1[i]
    //             team_1[i] = temp
    //         }
    //     }
    // }

    let team_1 = [
        document.getElementById("total__batter_1").innerText.split("/")[0],
        document.getElementById("total__batter_2").innerText.split("/")[0],
        document.getElementById("total__batter_3").innerText.split("/")[0],
        document.getElementById("total__batter_4").innerText.split("/")[0],
        document.getElementById("total__batter_5").innerText.split("/")[0],
        document.getElementById("total__batter_6").innerText.split("/")[0],
        document.getElementById("total__batter_7").innerText.split("/")[0],
        document.getElementById("total__batter_8").innerText.split("/")[0],
        document.getElementById("total__batter_9").innerText.split("/")[0],
        document.getElementById("total__batter_10").innerText.split("/")[0],
        document.getElementById("total__batter_11").innerText.split("/")[0]
    ];
    let batter_1 =
        [
            document.getElementById("_batter_1").innerText,
            document.getElementById("_batter_2").innerText,
            document.getElementById("_batter_3").innerText,
            document.getElementById("_batter_4").innerText,
            document.getElementById("_batter_5").innerText,
            document.getElementById("_batter_6").innerText,
            document.getElementById("_batter_7").innerText,
            document.getElementById("_batter_8").innerText,
            document.getElementById("_batter_9").innerText,
            document.getElementById("_batter_10").innerText,
            document.getElementById("_batter_11").innerText
        ]
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (team_1[i] < team_1[i + 1]) {
                teamp = team_1[i]
                team_1[i] = team_1[i + 1]
                team_1[i + 1] = teamp

                teamp = batter_1[i]
                batter_1[i] = batter_1[i + 1]
                batter_1[i + 1] = teamp
            }
        }
    }

    let team_2 = [
        document.getElementById("new_total__batter_1").innerText.split("/")[0],
        document.getElementById("new_total__batter_2").innerText.split("/")[0],
        document.getElementById("new_total__batter_3").innerText.split("/")[0],
        document.getElementById("new_total__batter_4").innerText.split("/")[0],
        document.getElementById("new_total__batter_5").innerText.split("/")[0],
        document.getElementById("new_total__batter_6").innerText.split("/")[0],
        document.getElementById("new_total__batter_7").innerText.split("/")[0],
        document.getElementById("new_total__batter_8").innerText.split("/")[0],
        document.getElementById("new_total__batter_9").innerText.split("/")[0],
        document.getElementById("new_total__batter_10").innerText.split("/")[0],
        document.getElementById("new_total__batter_11").innerText.split("/")[0]
    ];
    let batter_2 =
        [
            document.getElementById("new_inning__batter_1").innerText,
            document.getElementById("new_inning__batter_2").innerText,
            document.getElementById("new_inning__batter_3").innerText,
            document.getElementById("new_inning__batter_4").innerText,
            document.getElementById("new_inning__batter_5").innerText,
            document.getElementById("new_inning__batter_6").innerText,
            document.getElementById("new_inning__batter_7").innerText,
            document.getElementById("new_inning__batter_8").innerText,
            document.getElementById("new_inning__batter_9").innerText,
            document.getElementById("new_inning__batter_10").innerText,
            document.getElementById("new_inning__batter_11").innerText
        ]
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {

            if (team_2[i] < team_2[i + 1]) {
                teamp = team_2[i]
                team_2[i] = team_2[i + 1]
                team_2[i + 1] = teamp

                teamp = batter_2[i]
                batter_2[i] = batter_2[i + 1]
                batter_2[i + 1] = teamp
            }
        }
    }
    alert(batter_1)
    alert(batter_2)


}

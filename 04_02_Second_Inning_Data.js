function reverse_bowling_batting_buttons() {
    let temp;


    temp = document.getElementById("batsman_1_Team_1").innerText
    document.getElementById("batsman_1_Team_1").innerText = document.getElementById("bowler_1_Team_1").innerText
    document.getElementById("bowler_1_Team_1").innerText = temp

    temp = document.getElementById("batsman_1_Team_2").innerText
    document.getElementById("batsman_1_Team_2").innerText = document.getElementById("bowler_1_Team_2").innerText
    document.getElementById("bowler_1_Team_2").innerText = temp

    temp = document.getElementById("batsman_1_Team_3").innerText
    document.getElementById("batsman_1_Team_3").innerText = document.getElementById("bowler_1_Team_3").innerText
    document.getElementById("bowler_1_Team_3").innerText = temp

    temp = document.getElementById("batsman_1_Team_4").innerText
    document.getElementById("batsman_1_Team_4").innerText = document.getElementById("bowler_1_Team_4").innerText
    document.getElementById("bowler_1_Team_4").innerText = temp

    temp = document.getElementById("batsman_1_Team_5").innerText
    document.getElementById("batsman_1_Team_5").innerText = document.getElementById("bowler_1_Team_5").innerText
    document.getElementById("bowler_1_Team_5").innerText = temp

    temp = document.getElementById("batsman_1_Team_6").innerText
    document.getElementById("batsman_1_Team_6").innerText = document.getElementById("bowler_1_Team_6").innerText
    document.getElementById("bowler_1_Team_6").innerText = temp

    temp = document.getElementById("batsman_1_Team_7").innerText
    document.getElementById("batsman_1_Team_7").innerText = document.getElementById("bowler_1_Team_7").innerText
    document.getElementById("bowler_1_Team_7").innerText = temp

    temp = document.getElementById("batsman_1_Team_8").innerText
    document.getElementById("batsman_1_Team_8").innerText = document.getElementById("bowler_1_Team_8").innerText
    document.getElementById("bowler_1_Team_8").innerText = temp

    temp = document.getElementById("batsman_1_Team_9").innerText
    document.getElementById("batsman_1_Team_9").innerText = document.getElementById("bowler_1_Team_9").innerText
    document.getElementById("bowler_1_Team_9").innerText = temp

    temp = document.getElementById("batsman_1_Team_10").innerText
    document.getElementById("batsman_1_Team_10").innerText = document.getElementById("bowler_1_Team_10").innerText
    document.getElementById("bowler_1_Team_10").innerText = temp

    temp = document.getElementById("batsman_1_Team_11").innerText
    document.getElementById("batsman_1_Team_11").innerText = document.getElementById("bowler_1_Team_11").innerText
    document.getElementById("bowler_1_Team_11").innerText = temp





}

function batsman_selection_new_inning(x) {

    if (!counter_variable_for_first_inning) {
        if (count == 0) {
            alert("First Batsman")
            if (x == "1") {
                document.getElementById("batter_1").innerText = document.getElementById("batsman_1_Team_1").innerText
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                current_batter = document.getElementById("batsman_1_Team_1").innerText
                document.getElementById("batsman_1_Team_1").disabled = true
                count++
            }
            if (x == "2") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                current_batter = document.getElementById("batsman_1_Team_2").innerText
                document.getElementById("batsman_1_Team_2").disabled = true
                count++
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_2").innerText

            }
            if (x == "3") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                current_batter = document.getElementById("batsman_1_Team_3").innerText
                document.getElementById("batsman_1_Team_3").disabled = true
                count++
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_3").innerText

            }
            if (x == "4") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                current_batter = document.getElementById("batsman_1_Team_4").innerText
                document.getElementById("batsman_1_Team_4").disabled = true
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                count++
            }
            if (x == "5") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_5").innerText
                current_batter = document.getElementById("batsman_1_Team_5").innerText
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_5").innerText
                document.getElementById("batsman_1_Team_5").disabled = true
                count++
            }
            if (x == "6") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_6").innerText
                current_batter = document.getElementById("batsman_1_Team_6").innerText
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                document.getElementById("batsman_1_Team_6").disabled = true
                count++
            }
            if (x == "7") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_7").innerText
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_7").innerText
                current_batter = document.getElementById("batsman_1_Team_7").innerText

                document.getElementById("batsman_1_Team_7").disabled = true
                count++
            }
            if (x == "8") {
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_8").innerText
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_8").innerText
                current_batter = document.getElementById("batsman_1_Team_8").innerText

                document.getElementById("batsman_1_Team_8").disabled = true
                count++
            }
            if (x == "9") {
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_9").innerText
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_9").innerText
                current_batter = document.getElementById("batsman_1_Team_9").innerText

                document.getElementById("batsman_1_Team_9").disabled = true
                count++
            }
            if (x == "10") {
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_10").innerText
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_10").innerText
                current_batter = document.getElementById("batsman_1_Team_10").innerText

                document.getElementById("batsman_1_Team_10").disabled = true
                count++
            }
            if (x == "11") {
                document.getElementById("new_inning__batter_1").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                current_batter = document.getElementById("batsman_1_Team_11").innerText

                document.getElementById("batsman_1_Team_11").disabled = true
                count++
            }
            new_striker = document.getElementById("new_inning__batter_1")
            new_striker.style.backgroundColor = "#90EE90"

        }



        else if (count == 1) {
            alert("Second Batsman")
            if (x == "1") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                current_batter = document.getElementById("batsman_1_Team_1").innerText
                document.getElementById("batsman_1_Team_1").disabled = true
                count++


            }
            if (x == "2") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                current_batter = document.getElementById("batsman_1_Team_2").innerText
                document.getElementById("batsman_1_Team_2").disabled = true
                count++


            }
            if (x == "3") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                current_batter = document.getElementById("batsman_1_Team_3").innerText
                document.getElementById("batsman_1_Team_3").disabled = true

                count++
            }
            if (x == "4") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                current_batter = document.getElementById("batsman_1_Team_4").innerText
                document.getElementById("batsman_1_Team_4").disabled = true
                count++

            }
            if (x == "5") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_5").innerText
                current_batter = document.getElementById("batsman_1_Team_5").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                document.getElementById("batsman_1_Team_5").disabled = true
                count++

            }
            if (x == "6") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_6").innerText
                current_batter = document.getElementById("batsman_1_Team_6").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                document.getElementById("batsman_1_Team_6").disabled = true
                count++

            }
            if (x == "7") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_7").innerText
                current_batter = document.getElementById("batsman_1_Team_7").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                count++
                document.getElementById("batsman_1_Team_7").disabled = true

            }
            if (x == "8") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_8").innerText
                current_batter = document.getElementById("batsman_1_Team_8").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                count++
                document.getElementById("batsman_1_Team_8").disabled = true

            }
            if (x == "9") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_9").innerText
                current_batter = document.getElementById("batsman_1_Team_9").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_9").innerText
                count++

                document.getElementById("batsman_1_Team_9").disabled = true

            }
            if (x == "10") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_10").innerText
                current_batter = document.getElementById("batsman_1_Team_10").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_10").innerText
                count++

                document.getElementById("batsman_1_Team_10").disabled = true

            }
            if (x == "11") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                current_batter = document.getElementById("batsman_1_Team_11").innerText
                document.getElementById("new_inning__batter_2").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                document.getElementById("batsman_1_Team_11").disabled = true
                count++

            }
            non_new_striker = document.getElementById("new_inning__batter_2")
            non_new_striker.style.backgroundColor = "#FF6671"



        } else if (openoers == null) {
            alert("Openers Already Selected")
        }
        if (openoers != null) {
            if (count == 3 && document.getElementById("new_inning__batter_3").innerHTML == "") {
                alert("Third Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true
                    present_over = parseFloat(document.getElementById('present_overs').innerText)



                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_3").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_3")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)

            }

            else if (count == 4 && document.getElementById("new_inning__batter_4").innerHTML == "") {
                alert("Fourth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_4").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_4")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)

            }
            else if (count == 5 && document.getElementById("new_inning__batter_5").innerHTML == "") {
                alert("Fifth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_5").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_5")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)

            }
            else if (count == 6 && document.getElementById("new_inning__batter_6").innerHTML == "") {
                alert("Sixth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_6").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_6")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)

            }

            else if (count == 7 && document.getElementById("new_inning__batter_7").innerHTML == "") {
                alert("Seventh Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_7").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_7")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)
            }
            else if (count == 8 && document.getElementById("new_inning__batter_8").innerHTML == "") {
                alert("Eighth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_8").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_8")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)
            }
            else if (count == 9 && document.getElementById("new_inning__batter_9").innerHTML == "") {
                alert("Ninth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_9").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_9")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)
            }
            else if (count == 10 && document.getElementById("new_inning__batter_10").innerHTML == "") {
                alert("Tenth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_10").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_10")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)
            }
            else if (count == 11 && document.getElementById("new_inning__batter_11").innerHTML == "") {
                alert("Eleventh Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("new_inning__batter_11").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                new_striker = document.getElementById("new_inning__batter_11")
                new_striker.style.backgroundColor = "#90EE90"
                document.getElementById("change_strike_button").disabled=false

                enable_action()
                increase_ball(1, false)

            }
        }
    }
    return false
}
function new_innning(){
    document.getElementById("label_of_scoreboard").hidden = false
    document.getElementById("scorecard_child_div_2").hidden = false
    document.getElementById("scorecard_overview_div_2").hidden = false
    document.getElementById("brief_scoreboard_2").hidden = false
    document.getElementById("start_new_inning").hidden=true
    count_bowler=0
    enable_action()
    show_players()

    return false
}
function set_bowler_second_inning(x, this_variable_for_name,counter_variable_for_repeting_bowler){
    alert(this_variable_for_name.innerHTML)
    for (i = 1; i <= 11; i++) {

        if (document.getElementById(("new_inning_overs_bowler_") + i).innerText == max_bowling_overs) {
            alert("You Cant Select This Bowler")
            document.getElementById("new_inning__bowler_" + i).disabled = true
        }
        else if (this_variable_for_name.innerHTML == document.getElementById("new_inning__bowler_" + i).innerHTML) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;
            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            current_bowler = document.getElementById(bowlerId)
            disable_bowler()
            enable_action()
            counter_variable_for_repeting_bowler = true
        }
    }
    if (counter_variable_for_repeting_bowler == false) {
        if (count_bowler < 1) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;
            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_1").innerHTML = currentBowlerText;
            count_bowler++;

            // enable_action()
            current_bowler = document.getElementById(bowlerId)
            disable_bowler()

        }
        else if (count_bowler < 2) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_2").innerHTML = currentBowlerText;
            count_bowler++;
            current_bowler = document.getElementById(bowlerId)
            enable_action()
            disable_bowler()
        }
        else if (count_bowler < 3) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;
            current_bowler = document.getElementById(bowlerId)
            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_3").innerHTML = currentBowlerText;
            count_bowler++;
            current_bowler = document.getElementById(bowlerId)
            disable_bowler()
            enable_action()
        }
        else if (count_bowler < 4) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_4").innerHTML = currentBowlerText;
            current_bowler = document.getElementById(bowlerId)
            count_bowler++;
            enable_action()
            disable_bowler()
        }
        else if (count_bowler < 5) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            current_bowler = document.getElementById(bowlerId)
            document.getElementById("new_inning__bowler_5").innerHTML = currentBowlerText;
            count_bowler++;
            enable_action()
            disable_bowler()
        }
        else if (count_bowler < 6) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_6").innerHTML = currentBowlerText;
            current_bowler = document.getElementById(bowlerId)
            count_bowler++;
            enable_action()
            disable_bowler()
        }
        else if (count_bowler < 7) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_7").innerHTML = currentBowlerText;
            count_bowler++;
            current_bowler = document.getElementById(bowlerId)
            enable_action()
            disable_bowler()
        }
        else if (count_bowler < 8) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_8").innerHTML = currentBowlerText;
            count_bowler++;
            current_bowler = document.getElementById(bowlerId)
            enable_action()

            disable_bowler()
        }
        else if (count_bowler < 9) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;
            current_bowler = document.getElementById(bowlerId)
            enable_action()

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_9").innerHTML = currentBowlerText;
            count_bowler++;
            current_bowler = document.getElementById(bowlerId)
            disable_bowler()
        }
        else if (count_bowler < 10) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;
            current_bowler = document.getElementById(bowlerId)

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_10").innerHTML = currentBowlerText;
            count_bowler++;
            enable_action()
            disable_bowler()
        }
        else if (count_bowler < 11) {
            const bowlerId = `bowler_1_Team_${x}`;
            const currentBowlerText = document.getElementById(bowlerId).innerText;
            current_bowler = document.getElementById(bowlerId)

            document.getElementById("current_bowler").innerHTML = currentBowlerText;
            document.getElementById("current_bowler1").innerHTML = currentBowlerText;
            document.getElementById("new_inning__bowler_11").innerHTML = currentBowlerText;
            count_bowler++;
            enable_action()
            disable_bowler()
        }
        else {
            alert("BOWLER CHOOSED");
        }
    }
}
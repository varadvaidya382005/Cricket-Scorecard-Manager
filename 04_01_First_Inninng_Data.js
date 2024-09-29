
// if(maximum_overs>50){
//     maximum_overs=parseInt(maximum_overs)


// }
// else if (typeof(maximum_overs)=='number'){
//     maximum_overs =parseInt(prompt("The match is of how many overs each side"))
// }
var counter_variable_for_first_inning = true
var urlParams = new URLSearchParams(window.location.search);
var receivedData = urlParams.get('team');
let bat_first_team
let ball_first_team
console.log(typeof (receivedData))
console.log('Received data:', receivedData);
teams = receivedData.split("|")
document.getElementById("batting_first").innerHTML = "Toss Is Won By " + teams[24] + " and They Will " + teams[25] + " First";

document.getElementById("match_between").innerHTML = teams[0] + " V/S " + teams[12]
// Mumbai won toss and will bat
let max_bowling_overs = teams[29]

if (teams[24] == teams[0] && teams[25] == "bat" || teams[24] == teams[12] && teams[25] == "bowl" || teams[27] == teams[12] && teams[26] == "bowl" || teams[27] == teams[0] && teams[25] == "bat") {
    bat_first_team = teams[0]
    ball_first_team = teams[12]
    document.getElementById("batsman_1_Team_1").innerText = teams[1]
    document.getElementById("batsman_1_Team_2").innerText = teams[2]
    document.getElementById("batsman_1_Team_3").innerText = teams[3]
    document.getElementById("batsman_1_Team_4").innerText = teams[4]
    document.getElementById("batsman_1_Team_5").innerText = teams[5]
    document.getElementById("batsman_1_Team_6").innerText = teams[6]
    document.getElementById("batsman_1_Team_7").innerText = teams[7]
    document.getElementById("batsman_1_Team_8").innerText = teams[8]
    document.getElementById("batsman_1_Team_9").innerText = teams[9]
    document.getElementById("batsman_1_Team_10").innerText = teams[10]
    document.getElementById("batsman_1_Team_11").innerText = teams[11]

    document.getElementById("team_name").innerText = teams[0]
    document.getElementById("team_name_2").innerText = teams[12]


    // RCB LOSS TOSS AND WILL BOWL


}
document.getElementById("bowler_1_Team_1").innerText = teams[13]
document.getElementById("bowler_1_Team_2").innerText = teams[14]
document.getElementById("bowler_1_Team_3").innerText = teams[15]
document.getElementById("bowler_1_Team_4").innerText = teams[16]
document.getElementById("bowler_1_Team_5").innerText = teams[17]
document.getElementById("bowler_1_Team_6").innerText = teams[18]
document.getElementById("bowler_1_Team_7").innerText = teams[19]
document.getElementById("bowler_1_Team_8").innerText = teams[20]
document.getElementById("bowler_1_Team_9").innerText = teams[21]
document.getElementById("bowler_1_Team_10").innerText = teams[22]
document.getElementById("bowler_1_Team_11").innerText = teams[23]







// MUMBAI LOSS TOSS AND WILL bat
if (teams[24] == teams[0] && teams[25] == "bowl" || teams[24] == teams[12] && teams[25] == "bat" || teams[27] == teams[0] && teams[25] == "bat" || teams[27] == teams[12] && teams[25] == "bowl") {
    document.getElementById("batsman_1_Team_1").innerText = teams[13]
    document.getElementById("batsman_1_Team_2").innerText = teams[14]
    document.getElementById("batsman_1_Team_3").innerText = teams[15]
    document.getElementById("batsman_1_Team_4").innerText = teams[16]
    document.getElementById("batsman_1_Team_5").innerText = teams[17]
    document.getElementById("batsman_1_Team_6").innerText = teams[18]
    document.getElementById("batsman_1_Team_7").innerText = teams[19]
    document.getElementById("batsman_1_Team_8").innerText = teams[20]
    document.getElementById("batsman_1_Team_9").innerText = teams[21]
    document.getElementById("batsman_1_Team_10").innerText = teams[22]
    document.getElementById("batsman_1_Team_11").innerText = teams[23]

    document.getElementById("team_name").innerText = teams[12]
    document.getElementById("team_name_2").innerText = teams[0]

    document.getElementById("bowler_1_Team_1").innerText = teams[1]
    document.getElementById("bowler_1_Team_2").innerText = teams[2]
    document.getElementById("bowler_1_Team_3").innerText = teams[3]
    document.getElementById("bowler_1_Team_4").innerText = teams[4]
    document.getElementById("bowler_1_Team_5").innerText = teams[5]
    document.getElementById("bowler_1_Team_6").innerText = teams[6]
    document.getElementById("bowler_1_Team_7").innerText = teams[7]
    document.getElementById("bowler_1_Team_8").innerText = teams[8]
    document.getElementById("bowler_1_Team_9").innerText = teams[9]
    document.getElementById("bowler_1_Team_10").innerText = teams[10]
    document.getElementById("bowler_1_Team_11").innerText = teams[11]
    bat_first_team = teams[12]
    ball_first_team = teams[0]
}

maximum_overs = teams[28]

let count = 0
let extra_count = 2
let current_batter = ""
let count_bowler = 0
let bowler_bowling = ""
let openoers = null
function set_batsman(x) {

    if (counter_variable_for_first_inning) {
        if (document.getElementById("batter_1").innerText == "" || document.getElementById("batter_2").innerText == "" || document.getElementById("current_bowler1").innerText == "") {
            document.getElementById("play_the_ball").disabled = true
        }
        else {
            document.getElementById("play_the_ball").disabled = false

        }

        if (count == 0) {
            alert("First Batsman")
            if (x == "1") {

                document.getElementById("batter_1").innerText = document.getElementById("batsman_1_Team_1").innerText
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                current_batter = document.getElementById("batsman_1_Team_1").innerText
                document.getElementById("batsman_1_Team_1").disabled = true
                count++
            }
            if (x == "2") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                current_batter = document.getElementById("batsman_1_Team_2").innerText
                document.getElementById("batsman_1_Team_2").disabled = true
                count++
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_2").innerText

            }
            if (x == "3") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                current_batter = document.getElementById("batsman_1_Team_3").innerText
                document.getElementById("batsman_1_Team_3").disabled = true
                count++
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_3").innerText

            }
            if (x == "4") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                current_batter = document.getElementById("batsman_1_Team_4").innerText
                document.getElementById("batsman_1_Team_4").disabled = true
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                count++
            }
            if (x == "5") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_5").innerText
                current_batter = document.getElementById("batsman_1_Team_5").innerText
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_5").innerText
                document.getElementById("batsman_1_Team_5").disabled = true
                count++
            }
            if (x == "6") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_6").innerText
                current_batter = document.getElementById("batsman_1_Team_6").innerText
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                document.getElementById("batsman_1_Team_6").disabled = true
                count++
            }
            if (x == "7") {
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_7").innerText
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_7").innerText
                current_batter = document.getElementById("batsman_1_Team_7").innerText

                document.getElementById("batsman_1_Team_7").disabled = true
                count++
            }
            if (x == "8") {
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_8").innerText
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_8").innerText
                current_batter = document.getElementById("batsman_1_Team_8").innerText

                document.getElementById("batsman_1_Team_8").disabled = true
                count++
            }
            if (x == "9") {
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_9").innerText
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_9").innerText
                current_batter = document.getElementById("batsman_1_Team_9").innerText

                document.getElementById("batsman_1_Team_9").disabled = true
                count++
            }
            if (x == "10") {
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_10").innerText
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_10").innerText
                current_batter = document.getElementById("batsman_1_Team_10").innerText

                document.getElementById("batsman_1_Team_10").disabled = true
                count++
            }
            if (x == "11") {
                document.getElementById("_batter_1").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                document.getElementById("batter_1").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                current_batter = document.getElementById("batsman_1_Team_11").innerText

                document.getElementById("batsman_1_Team_11").disabled = true
                count++
            }

        }



        else if (count == 1) {
            alert("Second Batsman")
            if (x == "1") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                current_batter = document.getElementById("batsman_1_Team_1").innerText
                document.getElementById("batsman_1_Team_1").disabled = true
                count++


            }
            if (x == "2") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                current_batter = document.getElementById("batsman_1_Team_2").innerText
                document.getElementById("batsman_1_Team_2").disabled = true
                count++


            }
            if (x == "3") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                current_batter = document.getElementById("batsman_1_Team_3").innerText
                document.getElementById("batsman_1_Team_3").disabled = true

                count++
            }
            if (x == "4") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                current_batter = document.getElementById("batsman_1_Team_4").innerText
                document.getElementById("batsman_1_Team_4").disabled = true
                count++

            }
            if (x == "5") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_5").innerText
                current_batter = document.getElementById("batsman_1_Team_5").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                document.getElementById("batsman_1_Team_5").disabled = true
                count++

            }
            if (x == "6") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_6").innerText
                current_batter = document.getElementById("batsman_1_Team_6").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                document.getElementById("batsman_1_Team_6").disabled = true
                count++

            }
            if (x == "7") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_7").innerText
                current_batter = document.getElementById("batsman_1_Team_7").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                count++
                document.getElementById("batsman_1_Team_7").disabled = true

            }
            if (x == "8") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_8").innerText
                current_batter = document.getElementById("batsman_1_Team_8").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                count++
                document.getElementById("batsman_1_Team_8").disabled = true

            }
            if (x == "9") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_9").innerText
                current_batter = document.getElementById("batsman_1_Team_9").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_9").innerText
                count++

                document.getElementById("batsman_1_Team_9").disabled = true

            }
            if (x == "10") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_10").innerText
                current_batter = document.getElementById("batsman_1_Team_10").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_10").innerText
                count++

                document.getElementById("batsman_1_Team_10").disabled = true

            }
            if (x == "11") {
                document.getElementById("batter_2").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                current_batter = document.getElementById("batsman_1_Team_11").innerText
                document.getElementById("_batter_2").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                document.getElementById("batsman_1_Team_11").disabled = true
                count++

            }


        } else if (openoers == null) {
            alert("Openers Already Selected")
        }
        if (openoers != null) {
            if (count == 3 && document.getElementById("_batter_3").innerHTML == "") {
                alert("Third Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true
                    present_over = parseFloat(document.getElementById('present_overs').innerText)



                }
                if (x == "2") {

                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_3").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_3")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                increase_ball(1, false)
                 document.getElementById("change_strike_button").disabled=false


            }

            else if (count == 4 && document.getElementById("_batter_4").innerHTML == "") {
                alert("Fourth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_4").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_4")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                document.getElementById("change_strike_button").disabled=false


                increase_ball(1, false)

            }
            else if (count == 5 && document.getElementById("_batter_5").innerHTML == "") {
                alert("Fifth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_5").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_5")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                document.getElementById("change_strike_button").disabled=false

                increase_ball(1, false)

            }
            else if (count == 6 && document.getElementById("_batter_6").innerHTML == "") {
                alert("Sixth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_6").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_6")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                document.getElementById("change_strike_button").disabled=false

                increase_ball(1, false)

            }

            else if (count == 7 && document.getElementById("_batter_7").innerHTML == "") {
                alert("Seventh Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_7").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_7")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                document.getElementById("change_strike_button").disabled=false

                increase_ball(1, false)
            }
            else if (count == 8 && document.getElementById("_batter_8").innerHTML == "") {
                alert("Eighth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_8").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_8")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                document.getElementById("change_strike_button").disabled=false

                increase_ball(1, false)
            }
            else if (count == 9 && document.getElementById("_batter_9").innerHTML == "") {
                alert("Ninth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_9").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_9")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                document.getElementById("change_strike_button").disabled=false

                increase_ball(1, false)
            }
            else if (count == 10 && document.getElementById("_batter_10").innerHTML == "") {
                alert("Tenth Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_10").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_10")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                document.getElementById("change_strike_button").disabled=false

                increase_ball(1, false)
            }
            else if (count == 11 && document.getElementById("_batter_11").innerHTML == "") {
                alert("Eleventh Batsman")
                if (x == "1") {

                    // document.getElementById("batter_3").innerHTML = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_1").innerText

                    current_batter = document.getElementById("batsman_1_Team_1").innerText
                    document.getElementById("batsman_1_Team_1").disabled = true

                }
                if (x == "2") {

                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_2").innerText
                    current_batter = document.getElementById("batsman_1_Team_2").innerText
                    document.getElementById("batsman_1_Team_2").disabled = true


                }
                if (x == "3") {
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_3").innerText
                    current_batter = document.getElementById("batsman_1_Team_3").innerText
                    document.getElementById("batsman_1_Team_3").disabled = true

                }
                if (x == "4") {
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_4").innerText
                    current_batter = document.getElementById("batsman_1_Team_4").innerText
                    document.getElementById("batsman_1_Team_4").disabled = true

                }
                if (x == "5") {
                    current_batter = document.getElementById("batsman_1_Team_5").innerText
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_5").innerText

                    document.getElementById("batsman_1_Team_5").disabled = true

                }
                if (x == "6") {
                    current_batter = document.getElementById("batsman_1_Team_6").innerText
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_6").innerText

                    document.getElementById("batsman_1_Team_6").disabled = true

                }
                if (x == "7") {
                    current_batter = document.getElementById("batsman_1_Team_7").innerText
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_7").innerText

                    document.getElementById("batsman_1_Team_7").disabled = true

                }
                if (x == "8") {
                    current_batter = document.getElementById("batsman_1_Team_8").innerText
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_8").innerText

                    document.getElementById("batsman_1_Team_8").disabled = true

                }
                if (x == "9") {
                    current_batter = document.getElementById("batsman_1_Team_9").innerText
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_9").innerText

                    document.getElementById("batsman_1_Team_9").disabled = true

                }
                if (x == "10") {
                    current_batter = document.getElementById("batsman_1_Team_10").innerText
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_10").innerText

                    document.getElementById("batsman_1_Team_10").disabled = true

                }
                if (x == "11") {
                    current_batter = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("_batter_11").innerHTML = document.getElementById("batsman_1_Team_11").innerText
                    document.getElementById("batsman_1_Team_11").disabled = true

                }
                striker = document.getElementById("_batter_11")
                striker.style.backgroundColor = "#90EE90"
                document.getElementById("batter_1").innerHTML = striker.innerText
                document.getElementById("batter_2").innerHTML = non_striker.innerText
                document.getElementById("change_strike_button").disabled=false

                increase_ball(1, false)
            }

            enable_action()
            if (prenst_over_splitting[1] == 5) {
                disabled_action()
            }
        }


    } else {
        batsman_selection_new_inning(x)
    }
    return false
}

// #Junaid ka Naam Double Kaise
current_bowler = ""
function set_bowler(x, this_variable_for_name) {
    counter_variable_for_repeting_bowler = false
    // for(i = 0 ; i <11 ; i++){

    //     if(document.getElementById("_bowler_"+i+1).innerHTML == current_bowler.innerHTML){
    //     }
    // }uljlmyhhjhk
    if (counter_variable_for_first_inning) {
        if (document.getElementById("batter_1").innerText == "" || document.getElementById("batter_2").innerText == "" || document.getElementById("current_bowler1").innerText == "") {
            document.getElementById("play_the_ball").disabled = true
        }
        else {
            document.getElementById("play_the_ball").disabled = false

        }
        alert(this_variable_for_name.innerHTML)
        for (i = 1; i <= 11; i++) {

            if (document.getElementById(("overs_bowler_") + i).innerText == max_bowling_overs) {
                alert("You Cant Select This Bowler")
                document.getElementById("_bowler_" + i).disabled = true
            }
            else if (this_variable_for_name.innerHTML == document.getElementById("_bowler_" + i).innerHTML) {
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
                document.getElementById("_bowler_1").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_2").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_3").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_4").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_5").innerHTML = currentBowlerText;
                count_bowler++;
                enable_action()
                disable_bowler()
            }
            else if (count_bowler < 6) {
                const bowlerId = `bowler_1_Team_${x}`;
                const currentBowlerText = document.getElementById(bowlerId).innerText;

                document.getElementById("current_bowler").innerHTML = currentBowlerText;
                document.getElementById("current_bowler1").innerHTML = currentBowlerText;
                document.getElementById("_bowler_6").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_7").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_8").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_9").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_10").innerHTML = currentBowlerText;
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
                document.getElementById("_bowler_11").innerHTML = currentBowlerText;
                count_bowler++;
                enable_action()
                disable_bowler()
            }
            else {
                alert("BOWLER CHOOSED");
            }
        }
    }
    else {

        set_bowler_second_inning(x, this_variable_for_name, counter_variable_for_repeting_bowler,)
    }
    // enable_action()
    return false;
}

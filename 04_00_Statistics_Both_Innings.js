
function batsman_runs(x) {
    if (counter_variable_for_first_inning) {
        if (striker && striker.getAttribute("data-unique-id") == '1') {
            document.getElementById('score_batter_1').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '2') {
            document.getElementById('score_batter_2').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '3') {
            document.getElementById('score_batter_3').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '4') {
            document.getElementById('score_batter_4').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '5') {
            document.getElementById('score_batter_5').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '6') {
            document.getElementById('score_batter_6').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '7') {
            document.getElementById('score_batter_7').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '8') {
            document.getElementById('score_batter_8').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '9') {
            document.getElementById('score_batter_9').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '10') {
            document.getElementById('score_batter_10').innerHTML += " " + x
        }
        if (striker && striker.getAttribute("data-unique-id") == '11') {
            document.getElementById('score_batter_11').innerHTML += " " + x
        }
    }
    else {
        if (new_striker && new_striker.getAttribute("data-unique-id") == '101') {
            document.getElementById('new_score_batter_1').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '102') {
            document.getElementById('new_score_batter_2').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '103') {
            document.getElementById('new_score_batter_3').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '104') {
            document.getElementById('new_score_batter_4').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '105') {
            document.getElementById('new_score_batter_5').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '106') {
            document.getElementById('new_score_batter_6').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '107') {
            document.getElementById('new_score_batter_7').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '108') {
            document.getElementById('new_score_batter_8').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '109') {
            document.getElementById('new_score_batter_9').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '110') {
            document.getElementById('new_score_batter_10').innerHTML += " " + x
        }
        if (new_striker && new_striker.getAttribute("data-unique-id") == '111') {
            document.getElementById('new_score_batter_11').innerHTML += " " + x
        }
    }
    return false
}



function bowlers_runs(bowler_runs, _wicket_, is_wide) {
    let runs_given
    let wickets_taken

    if (counter_variable_for_first_inning) {
        if (current_bowler.innerText == document.getElementById("_bowler_1").innerText) {
            if (document.getElementById('runs_bowler_1').innerText == "") {
                document.getElementById('runs_bowler_1').innerText = 0
                runs_given = '0'
                document.getElementById('wickets_bowler_1').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_1').innerText)
            wickets_taken = document.getElementById("wickets_bowler_1").innerText


            document.getElementById('runs_bowler_1').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {
                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_1").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_1");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_1").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_2").innerText) {
            if (document.getElementById('runs_bowler_2').innerText == "") {
                document.getElementById('runs_bowler_2').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_2').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_2').innerText)
            wickets_taken = document.getElementById("wickets_bowler_2").innerText
            document.getElementById('runs_bowler_2').innerText = parseInt(runs_given) + parseInt(bowler_runs)
            if (_wicket_) {
                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_2").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_2");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_2").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_3").innerText) {
            if (document.getElementById('runs_bowler_3').innerText == "") {
                document.getElementById('runs_bowler_3').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_3').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_3').innerText)
            wickets_taken = document.getElementById("wickets_bowler_3").innerText


            document.getElementById('runs_bowler_3').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {
                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_3").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_3");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_3").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_4").innerText) {
            if (document.getElementById('runs_bowler_4').innerText == "") {
                document.getElementById('runs_bowler_4').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_4').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_4').innerText)
            wickets_taken = document.getElementById("wickets_bowler_4").innerText


            document.getElementById('runs_bowler_4').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_4").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_4");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_4").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_5").innerText) {
            if (document.getElementById('runs_bowler_5').innerText == "") {
                document.getElementById('runs_bowler_5').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_5').innerText = 0
                wickets_taken = 0
            }
            runs_given = parseInt(document.getElementById('runs_bowler_5').innerText)
            wickets_taken = document.getElementById("wickets_bowler_5").innerText
            document.getElementById('runs_bowler_5').innerText = parseInt(runs_given) + parseInt(bowler_runs)
            if (_wicket_) {
                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_5").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_5");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_5").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_6").innerText) {
            if (document.getElementById('runs_bowler_6').innerText == "") {
                document.getElementById('runs_bowler_6').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_6').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_6').innerText)
            wickets_taken = document.getElementById("wickets_bowler_6").innerText


            document.getElementById('runs_bowler_6').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_6").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_6");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_6").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_7").innerText) {
            if (document.getElementById('runs_bowler_7').innerText == "") {
                document.getElementById('runs_bowler_7').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_7').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_7').innerText)
            wickets_taken = document.getElementById("wickets_bowler_7").innerText


            document.getElementById('runs_bowler_7').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_7").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_7");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_7").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_8").innerText) {
            if (document.getElementById('runs_bowler_8').innerText == "") {
                document.getElementById('runs_bowler_8').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_8').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_8').innerText)
            wickets_taken = document.getElementById("wickets_bowler_8").innerText


            document.getElementById('runs_bowler_8').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_8").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_8");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_8").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_9").innerText) {
            if (document.getElementById('runs_bowler_9').innerText == "") {
                document.getElementById('runs_bowler_9').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_9').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_9').innerText)
            wickets_taken = document.getElementById("wickets_bowler_9").innerText


            document.getElementById('runs_bowler_9').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_9").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_9");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_9").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_10").innerText) {
            if (document.getElementById('runs_bowler_10').innerText == "") {
                document.getElementById('runs_bowler_10').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_10').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_10').innerText)
            wickets_taken = document.getElementById("wickets_bowler_10").innerText


            document.getElementById('runs_bowler_10').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_10").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_10");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_10").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("_bowler_11").innerText) {
            if (document.getElementById('runs_bowler_11').innerText == "") {
                document.getElementById('runs_bowler_11').innerText = 0
                runs_given = 0
                document.getElementById('wickets_bowler_11').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('runs_bowler_11').innerText)
            wickets_taken = document.getElementById("wickets_bowler_11").innerText


            document.getElementById('runs_bowler_11').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("wickets_bowler_11").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("overs_bowler_11");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("overs_bowler_11").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
    }
    else {

        if (current_bowler.innerText == document.getElementById("new_inning__bowler_1").innerText) {
            if (document.getElementById('new_inning_runs_bowler_1').innerText == "") {
                document.getElementById('new_inning_runs_bowler_1').innerText = 0
                runs_given = '0'
                document.getElementById('new_inning_wickets_bowler_1').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_1').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_1").innerText


            document.getElementById('new_inning_runs_bowler_1').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {
                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_1").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_1");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_1").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_2").innerText) {
            if (document.getElementById('new_inning_runs_bowler_2').innerText == "") {
                document.getElementById('new_inning_runs_bowler_2').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_2').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_2').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_2").innerText
            document.getElementById('new_inning_runs_bowler_2').innerText = parseInt(runs_given) + parseInt(bowler_runs)
            if (_wicket_) {
                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_2").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_2");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_2").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_3").innerText) {
            if (document.getElementById('new_inning_runs_bowler_3').innerText == "") {
                document.getElementById('new_inning_runs_bowler_3').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_3').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_3').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_3").innerText


            document.getElementById('new_inning_runs_bowler_3').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {
                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_3").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_3");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_3").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_4").innerText) {
            if (document.getElementById('new_inning_runs_bowler_4').innerText == "") {
                document.getElementById('new_inning_runs_bowler_4').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_4').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_4').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_4").innerText


            document.getElementById('new_inning_runs_bowler_4').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_4").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_4");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_4").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_5").innerText) {
            if (document.getElementById('new_inning_runs_bowler_5').innerText == "") {
                document.getElementById('new_inning_runs_bowler_5').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_5').innerText = 0
                wickets_taken = 0
            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_5').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_5").innerText
            document.getElementById('new_inning_runs_bowler_5').innerText = parseInt(runs_given) + parseInt(bowler_runs)
            if (_wicket_) {
                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_5").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_5");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_5").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_6").innerText) {
            if (document.getElementById('new_inning_runs_bowler_6').innerText == "") {
                document.getElementById('new_inning_runs_bowler_6').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_6').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_6').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_6").innerText


            document.getElementById('new_inning_runs_bowler_6').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_6").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_6");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_6").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_7").innerText) {
            if (document.getElementById('new_inning_runs_bowler_7').innerText == "") {
                document.getElementById('new_inning_runs_bowler_7').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_7').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_7').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_7").innerText


            document.getElementById('new_inning_runs_bowler_7').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_7").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_7");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_7").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_8").innerText) {
            if (document.getElementById('new_inning_runs_bowler_8').innerText == "") {
                document.getElementById('new_inning_runs_bowler_8').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_8').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_8').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_8").innerText


            document.getElementById('new_inning_runs_bowler_8').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_8").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_8");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_8").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_9").innerText) {
            if (document.getElementById('new_inning_runs_bowler_9').innerText == "") {
                document.getElementById('new_inning_runs_bowler_9').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_9').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_9').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_9").innerText


            document.getElementById('new_inning_runs_bowler_9').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_9").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_9");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_9").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_10").innerText) {
            if (document.getElementById('new_inning_runs_bowler_10').innerText == "") {
                document.getElementById('new_inning_runs_bowler_10').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_10').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_10').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_10").innerText


            document.getElementById('new_inning_runs_bowler_10').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_10").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_10");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_10").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }
        if (current_bowler.innerText == document.getElementById("new_inning__bowler_11").innerText) {
            if (document.getElementById('new_inning_runs_bowler_11').innerText == "") {
                document.getElementById('new_inning_runs_bowler_11').innerText = 0
                runs_given = 0
                document.getElementById('new_inning_wickets_bowler_11').innerText = 0
                wickets_taken = 0

            }
            runs_given = parseInt(document.getElementById('new_inning_runs_bowler_11').innerText)
            wickets_taken = document.getElementById("new_inning_wickets_bowler_11").innerText


            document.getElementById('new_inning_runs_bowler_11').innerText = parseInt(runs_given) + parseInt(bowler_runs)

            if (_wicket_) {

                wickets_taken = parseInt(wickets_taken) + 1
                document.getElementById("new_inning_wickets_bowler_11").innerText = parseInt(wickets_taken)
            }
            if (!is_wide) {
                let splitted_over__;
                const oversElement = document.getElementById("new_inning_overs_bowler_11");
                if (oversElement.innerText == "") {
                    oversElement.innerText = "1";
                } else {
                    document.getElementById("new_inning_overs_bowler_11").innerText = parseInt(oversElement.innerText) + 1
                }
            }
        }

    }
    return false
}

function total_batsman_score() {
    length__ = 0
    if (counter_variable_for_first_inning) {
        for (let num = 1; num <= 11; num++) {
            let i = 0;
            let score_batter_1 = 0;
            let balls_faced = 0;
            let scoreElement = document.getElementById('score_batter_' + num);

            if (scoreElement.innerHTML !== "") {
                let batter_1_score = scoreElement.innerHTML;
                let splitted_batter_1 = batter_1_score.split(" ");

                while (i < splitted_batter_1.length) {
                    if (Number.isInteger(parseInt(splitted_batter_1[i]))) {
                        score_batter_1 += parseInt(splitted_batter_1[i]);
                        balls_faced++;
                        ball_faced_outside = balls_faced
                        length__ = splitted_batter_1.length
                    }
                    i++;
                }

                if (batter_1_score.includes('W')) {
                    balls_faced++;
                }
                document.getElementById('total__batter_' + num).innerHTML = score_batter_1 + "/" + balls_faced;
            }
        }
        
    }
    else {
        for (let num = 1; num <= 11; num++) {
            let i = 0;
            let score_batter_1 = 0;
            let balls_faced = 0;
            let scoreElement = document.getElementById('new_score_batter_' + num);

            if (scoreElement.innerHTML !== "") {
                let batter_1_score = scoreElement.innerHTML;
                let splitted_batter_1 = batter_1_score.split(" ");

                while (i < splitted_batter_1.length) {
                    if (Number.isInteger(parseInt(splitted_batter_1[i]))) {
                        score_batter_1 += parseInt(splitted_batter_1[i]);
                        balls_faced++;
                        ball_faced_outside = balls_faced
                        length__ = splitted_batter_1.length
                    }
                    i++;
                }

                if (batter_1_score.includes('W')) {
                    balls_faced++;
                }
                document.getElementById('new_total__batter_' + num).innerHTML = score_batter_1 + "/" + balls_faced;
            }
        }
    }
    return false
}
function total_bowler_score() {

    if (!counter_variable_for_first_inning) {
        for (let num = 1; num < 12; num++) {

            if (document.getElementById("new_inning_runs_bowler_" + num).innerText == "" || document.getElementById("new_inning_overs_bowler_" + num).innerText == "") { }
            else {
                let runs_given = parseFloat(document.getElementById("new_inning_runs_bowler_" + num).innerText)
                let balls_bowled = parseFloat(document.getElementById("new_inning_overs_bowler_" + num).innerText)
                let economy_player = document.getElementById("new_inning_economy_bowler_" + num)



                let overs_bowled = balls_bowled / 6
                economy_player.innerHTML = runs_given / overs_bowled

            }
            if (document.getElementById("new_inning_runs_bowler_" + num).innerText == "" || document.getElementById("new_inning_overs_bowler_" + num).innerText == "") {

            }
            else {
                let runs_given = parseFloat(document.getElementById("new_inning_runs_bowler_" + num).innerText)
                let balls_bowled = parseFloat(document.getElementById("new_inning_overs_bowler_" + num).innerText)
                let economy_player = document.getElementById("new_inning_economy_bowler_" + num)


                let overs_bowled = balls_bowled / 6
                economy_player.innerHTML = parseFloat(runs_given / overs_bowled).toFixed(2)

            }
        }
    } else {
        for (let num = 1; num < 12; num++) {

            if (document.getElementById("runs_bowler_" + num).innerText == "" || document.getElementById("overs_bowler_" + num).innerText == "") { }
            else {
                let runs_given = parseFloat(document.getElementById("runs_bowler_" + num).innerText)
                let balls_bowled = parseFloat(document.getElementById("overs_bowler_" + num).innerText)
                let economy_player = document.getElementById("economy_bowler_" + num)



                let overs_bowled = balls_bowled / 6
                economy_player.innerHTML = runs_given / overs_bowled

            }
            if (document.getElementById("runs_bowler_" + num).innerText == "" || document.getElementById("overs_bowler_" + num).innerText == "") {

            }
            else {
                let runs_given = parseFloat(document.getElementById("runs_bowler_" + num).innerText)
                let balls_bowled = parseFloat(document.getElementById("overs_bowler_" + num).innerText)
                let economy_player = document.getElementById("economy_bowler_" + num)


                let overs_bowled = balls_bowled / 6
                economy_player.innerHTML = parseFloat(runs_given / overs_bowled).toFixed(2)

            }
        }
    }
    return false
}

function play_ball(x) {
    document.getElementById("this_over_label").innerHTML += " " + x
}
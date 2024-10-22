let fname = "";
        
        function greet() {
            let greetParagraph = document.getElementById("greet");
            fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            let age = document.getElementById("age").value;
            greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
        }
        
        function trivia1() {
            let triviaAnswer = document.getElementById("trivia1-answer");
            let yesSelected = document.getElementById("yes").checked;
            let noSelected = document.getElementById("no").checked;
            let maybeSelected = document.getElementById("maybe").checked;
            
            if (noSelected) {
                triviaAnswer.innerHTML = fname + ", you are wrong! What a dummy!";
            } else if (maybeSelected) {
                triviaAnswer.innerHTML = fname + ", why can't you choose?";
            } else if (yesSelected) {
                triviaAnswer.innerHTML = fname + ", you are 100% correct!";
            } else {
                triviaAnswer.innerHTML = "Please select an option!";
            }
        }
//Add correct answer in order 
//exactly as the value of the corresponding radio button
var answers=["Trubisky","Walter Payton","Wrigley Field","88","Jonathan Toews","First Base","Rick Renteria","2016","Corey Crawford","Zach Lavine"]
//This will hold our user answers so we can check them
var useranswers=[]
var score=0






$("#submit").on("click",(event)=>{
    console.log("submitting answer")

    //Repeat these two lines of code for each questino
    //This takes the users input
    var radioValue1 = $("input[name='quarterback']:checked").val();
    //this pushes the user input to our useranswers array
    useranswers.push(radioValue1)


    var radioValue2 = $("input[name='greatest']:checked").val();
    useranswers.push(radioValue2)

    var radioValue3 = $("input[name='field']:checked").val();
    useranswers.push(radioValue3)

    var radioValue4 = $("input[name='numb']:checked").val();
    useranswers.push(radioValue4)

    var radioValue5 = $("input[name='capt']:checked").val();
    useranswers.push(radioValue5)

    var radioValue6 = $("input[name='pos']:checked").val();
    useranswers.push(radioValue6)

    var radioValue7 = $("input[name='mg']:checked").val();
    useranswers.push(radioValue7)

    var radioValue8 = $("input[name='ws']:checked").val();
    useranswers.push(radioValue8)

    var radioValue9 = $("input[name='g']:checked").val();
    useranswers.push(radioValue9)

    var radioValue10 = $("input[name='sg']:checked").val();
    useranswers.push(radioValue10)

    //This check our index at answers and useranswers to see if they're equivalent
    for (let index = 0; index < answers.length; index++) {
        //index of answers
        let element = answers[index];
        //index of useranswers
        let userelement=useranswers[index]
        //if they got it right, add 1 to the score
    if (element==userelement){
        score+=1
    }
    }

    //Put score on page after the scores are tallied
$("#score").text("Score: " + score)


})
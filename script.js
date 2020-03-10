function myFunction() {
    let cupsDrank, response;
    
    let cups = cupsDrank;
    if ((Number) + (cups < 4)) {
        response = "You are fine, maybe have another cup!"
    }
    else if ((Number) + (cups >= 4)) {
       response = "Run to the bathroom NOW!";
    }
// let response = cupsDrank >= 4;
    console.log(response)
    document.getElementById("result").innerHTML = response;
}

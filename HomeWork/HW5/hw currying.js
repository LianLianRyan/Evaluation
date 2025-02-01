const lottery = (function () {
    let count = 0; 
    return function (max) {
        return function playLottery() {
            if (count < max) {
                console.log("Congrats you earn the chance!");
            } else {
                console.log("Sorry you missed the chance!");
            }
            count++; 
        };
    };
})()(5); 

lottery(); // Congrats you earn the chance!
lottery(); // Congrats you earn the chance!
lottery(); // Congrats you earn the chance!
lottery(); // Congrats you earn the chance!
lottery(); // Congrats you earn the chance!
lottery(); // Sorry you missed the chance!
lottery(); // Sorry you missed the chance!

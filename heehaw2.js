function heehaw(n) {
    // console.log("test");
    var i;
    if (isNaN(n) || n > 100 || n <=0) {
        console.log("Given number is in valid");
    }
    else
        {
        for (i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("Hee Haw!");
            } else if (i % 3 == 0) {
                console.log("Hee!");
            } else if (i % 5 == 0) {
                console.log("Haw!");
            } else {
                console.log(i);
            }
        }
    }
}
//testing heehaw function
console.log("testing -2");
heehaw(-2);
console.log("testing 0");
heehaw(0);
console.log("testing 4");
heehaw(4);
console.log("testing 69");
heehaw(69);

//reversing printing form n to 1
function recursive (n) {
    var j;
    if(isNaN(n)|| n<0)
    {
        console.log("Given number is in valid");
    }
    else {
        for(j = n; j >= 1; j--)
        {
            if (j % 3 == 0 && j % 5 == 0) {
                console.log("Hee Haw!");
            } else if (j % 3 == 0) {
                console.log("Hee!");
            } else if (j % 5 == 0) {
                console.log("Haw!");
            } else {
                console.log(j);
            }
        }
    }
}
console.log("TESTING RESVERSE");
recursive(6);
console.log("TESTING when n is -1");
recursive(-1);


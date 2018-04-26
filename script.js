$(document).ready(function() {
   // alert("Welcome to Magicecream! The game of magically applied toppings onto a soft serve ice cream cone.");
   // if (confirm("Would you like to play?")) {
   //     alert("Press the Left and Right arrow keys to control the Ice Cream Cone's Movement, and click on the buttons on the left panel to release the corresponding toppings!");
   // }
   // else{
   //     if(confirm("Are you sure?"))
   //     {
    //    alert("You're sure that you want to play? Great!");
    //    }
   //     else{
   //     alert("Sweet! \n Control the ice cream cone using the Left and Right arrow keys, and click on the buttons on the left panel to unleash the corresponding toppings.");
   //     }
    //}
    
       var keyLeft = false;
    var keyRight = false;
    var x = 500;
    var y = 0;
    var countL = 0; //NEW!EDIT: All values were changed. LL = 330px L = 530px M = 630px R = 730px RR = 925px
    var countR = 0; //EDit: I'm changing the values of the LL, L, M, R, AND RR!! 100-> 330 |330 -> 450|645->635|925->720|1000->925
    $(document).keydown(function(event) {
            if ((event.which == 37) && (countL == 0) && (countR == 0)) { //<0,0> -> <1,0>
                keyLeft = true;
                //       setLeftX(x);
                $("#cone").css("left", "530px"); //330 = L
                countL++;
            }
            else if ((event.which == 37) && (countL == 1)) //keyCode (which) 37 = left, 39 = right, 40 = down
            {
                keyLeft = true; //100 = LL
                $("#cone").css("left", "330px"); //<<1,0> -> <2,0>
                countL = 2;
                countR = 0;
            }
            else if ((event.which == 39) && (countL == 2)) { //<2,0> -> <1,0>
                countL--; //this is 1 now
                $("#cone").css("left", "530px"); //330 = L
            }
            else if ((event.which == 39) && (countL == 1)) { //<1,0> -> <0,0>
                countL--; //this is 0 now
                $("#cone").css("left", "630px"); //645 = middle
            }
            else if ((event.which == 39) && (countR == 0) && (countL == 0)) { //<0,0> -> <0,1>
                keyRight = true;
                //     setRightX(x);
                $("#cone").css("left", "730px"); //925 = R
                countR++;
            }
            else if ((event.which == 39) && (countR == 1)) { //<0,1> -> <0,2>
                keyLeft = true;
                $("#cone").css("left", "925px"); //1000 = RR
                countR = 2;
                countL = 0;
            }
            else if ((event.which == 37) && (countR == 2)) { // <0,2> -> <0,1>
                countR--;
                $("#cone").css("left", "730px"); //925 = R
            }
            else if ((event.which == 37) && (countR == 1)) { // <0,1> -> <0,0>
                countR--;
                $("#cone").css("left", "630px"); //645 = middle
            }
            /*else if(event.which == 40) //for setting the middle position
            {
            $("#cone").css("left", "645px")
            }*/
            else if ((event.which != 37) && (event.which != 39) && (event.which != 40)) {
                alert("Try using the left or right key!");
                keyLeft = false;
                keyRight = false;
            }
        })
        
        
    
    $("#button1").click(function() {
        $("#gummies").animate({
            top: "310px",
        }, 2500, function() {
            $("#gummies").css({
                top: '123px'
            })
            if ($("#coneImage").position().left === 330)
            //        window.location = "icecream1.html"
                $("#coneImage").attr("src", "project imgs/Vanilla-Cone-Gummy-Bears.png");
        });
    })

    $("#button2").click(function() {
        $("#sprinkles").animate({
            top: "310px",
        }, 2500, function() {
            $("#sprinkles").css({
                top: '152px'
            })
            if ($("#coneImage").position().left === 530)
            //     window.location = "icecream2.html"
                $("#coneImage").attr("src", "project imgs/Vanilla-Cone-Sprinkles.png");

        });
    })

    $("#button3").click(function() {
        $("#chocolate").animate({
            top: "310px",
        }, 2500, function() {
            $("#chocolate").css({
                top: '123px'
            })
            if ($("#coneImage").position().left === 730)
            //       window.location = "icecream3.html"
                $("#coneImage").attr("src", "project imgs/Vanilla-Cone-Chocolate-Chip.png");

        });
    })

    $("#button4").click(function() {
        $("#mm").animate({
            top: "310px",
        }, 2500, function() {
            $("#mm").css({
                top: '123px'
            })
            if ($("#coneImage").position().left === 925)
            //            window.location = "icecream4.html"
                $("#coneImage").attr("src", "project imgs/Vanilla-Cone-Reeses-Pieces.png");
        });
    })


    //**Everything below this line is the code for Key Movement (Connected to the Cone)
 
        
}); 
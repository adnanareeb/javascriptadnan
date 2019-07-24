/*
for(i = 9 ; i > -1 ; i-- )  // FOR loop
    console.log(i);



    let favDrinks = [
        "Coffee",
        "Coke",
        "tea"
    ];

    console.log(favDrinks[0]);
    console.log(favDrinks[1]);
    console.log(favDrinks[2]);

    
    let favFilms = [
        "Mars",
        "Taken",
        "Get Out"
       
    ]
    favFilms.push("Lets Be Cops");
    favFilms.push("Starwars")         // we setup index for FOR loop to stop

    for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++) {
            console.log(favFilms[filmIndex]);
        }
        */

        //WHILE loop have a condition.
let films = [
    "Lets Be Cops",
    "Taken",
    "Ghostbusters"
]
        const filmCheck = () => {
            if (films[2] == "Ghostbusters") {
                console.log("Yay it's Ghostbusters");
            } else {
                console.log("Booo, we want Ghostbusters");
            }
        };
        filmCheck();
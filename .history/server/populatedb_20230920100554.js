#! /usr/bin/env node

console.log(
    'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Game = require("./models/book");
const Genre = require("./models/genre");

const games = [];
const genres = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createGames();
    await createGenres();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function gameCreate(index, name, description, developer, platform, genre, status, date_of_start, date_of_finish, rating) {
    const gamedetail = {
        name: name,
        description: description,
        developer: developer,
        platform: platform,
        genre: genre,
        status: status,
        date_of_start: date_of_start,
        date_of_finish: date_of_finish,
        rating: rating
    };

    const game = new Game(gamedetail);
    await game.save();
    games[index] = game;
    console.log(`Added game: ${name}`);
}

async function genreCreate(index, name) {
    const genre = new Genre({ name: name });
    await genre.save();
    genres[index] = genre;
    console.log(`Added genre: ${name}`);
}

async function createGenres() {
    console.log("Adding genres");
    await Promise.all([
        genreCreate(0, "Soulslike"),
        genreCreate(1, "RPG"),
        genreCreate(2, "Action"),
        genreCreate(3, "Horror"),
        genreCreate(4, "Simulation"),
        genreCreate(5, "Open world"),
        genreCreate(6, "Survival"),
        genreCreate(7, "Platformer")
    ]);
}

async function createGames() {
    console.log("Adding Books");
    await Promise.all([
        gameCreate(0, 
            "Dark Souls III", 
            "Dark Souls III is a 2016 action role-playing game developed by FromSoftware",
            ["FromSoftware"],
            ["PC"],
            [genres[0], genres[1], genres[2]],
            "Finished",
            "2020-11-04",
            "2020-12-06",
            9.3
        ),
        gameCreate(1,
            "Persona 5",
            "Persona 5 is a 2016 role-playing video game developed by P-Studio and published by Atlus. It is the sixth installment in the Persona series, itself a part of the larger Megami Tensei franchise.",
            ["Atlus"],
            ["PS4"],
            [genres[1], genres[4]],
            "Playing",
            "2020-11-04",
            false,
            8
        ),
        gameCreate(2,
            "The Witcher 3: Wild Hunt",
            "The Witcher 3: Wild Hunt is a 2015 open-world action role-playing game developed by CD Projekt Red. It's the third installment in The Witcher series, based on the book series by Andrzej Sapkowski.",
            ["CD Projekt Red"],
            ["PS4", "Xbox One", "PC"],
            [genres[1], genres[5]],
            "Finished",
            "2021-02-15",
            "2021-04-20",
            9.7
        ),

        gameCreate(3,
            "Super Mario Odyssey",
            "Super Mario Odyssey is a 2017 platform video game developed and published by Nintendo. It's part of the Super Mario series and features Mario traveling through various worlds to rescue Princess Peach from Bowser.",
            ["Nintendo"],
            ["Nintendo Switch"],
            [genres[1], genres[7]],
            "Playing",
            "2021-05-10",
            true,
            9.5
        ),

        gameCreate(4,
            "Red Dead Redemption 2",
            "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. It's a prequel to the 2010 game Red Dead Redemption and follows Arthur Morgan, an outlaw and member of the Van der Linde gang.",
            ["Rockstar Games"],
            ["PS4", "Xbox One", "PC"],
            [genres[1], genres[5]],
            "Finished",
            "2021-07-30",
            "2021-09-15",
            9.8
        ),

        gameCreate(5,
            "Minecraft",
            "Minecraft is a sandbox video game developed by Mojang Studios. Players can build and explore virtual worlds made up of blocks and materials, allowing for creativity and endless possibilities.",
            ["Mojang Studios"],
            ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
            [genres[5], genres[6]],
            "Ongoing",
            "2021-03-25",
            false,
            9.0
        ),

        gameCreate(6,
            "The Legend of Zelda: Breath of the Wild",
            "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo. It's part of The Legend of Zelda series and follows Link as he awakens from a long slumber to defeat Calamity Ganon.",
            ["Nintendo"],
            ["Nintendo Switch"],
            [genres[1], genres[3], genres[5], genres[7]],
            "Finished",
            "2021-01-08",
            "2021-02-20",
            9.6
        )
    ]);
}

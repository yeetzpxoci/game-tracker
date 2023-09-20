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
async function gameCreate(name, description, developer, platform, genre, status, date_of_start, date_of_finish, rating) {
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
    if (genre != false) bookdetail.genre = genre;

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
    ]);
}

async function createGames() {
    console.log("Adding Books");
    await Promise.all([
        gameCreate(0,
            "The Name of the Wind (The Kingkiller Chronicle, #1)",
            "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
            "9781473211896",
            authors[0],
            [genres[0]]
        ),
        gameCreate(1,
            "The Wise Man's Fear (The Kingkiller Chronicle, #2)",
            "Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.",
            "9788401352836",
            authors[0],
            [genres[0]]
        ),
        gameCreate(2,
            "The Slow Regard of Silent Things (Kingkiller Chronicle)",
            "Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.",
            "9780756411336",
            authors[0],
            [genres[0]]
        ),
        gameCreate(3,
            "Apes and Angels",
            "Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...",
            "9780765379528",
            authors[1],
            [genres[1]]
        ),
        gameCreate(4,
            "Death Wave",
            "In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...",
            "9780765379504",
            authors[1],
            [genres[1]]
        ),
        gameCreate(5,
            "Test Book 1",
            "Summary of test book 1",
            "ISBN111111",
            authors[4],
            [genres[0], genres[1]]
        ),
        gameCreate(6,
            "Test Book 2",
            "Summary of test book 2",
            "ISBN222222",
            authors[4],
            false
        ),
    ]);
}

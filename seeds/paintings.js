/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('paintings').del();
    await knex('paintings').insert([
        {
            id: 1,
            title: "Sea",
            size: "18X24 ",
            image: "http://localhost:8080/images/Sea.jpg",
            price: "Contact artist for price"
        },
        {
            id: 2,
            title: "Wolves",
            size: "30x15 inches",
            image: "http://localhost:8080/images/Wolves.jpg",
            price: "Contact artist for price"
        },
        {
            id: 3,
            title: "Edmonton Winter",
            size: "18X24 ",
            image: "http://localhost:8080/images/Edmonton-winter.jpg",
            price: "Contact artist for price"
        },
        {
            id: 4,
            title: "Alberta Field",
            size: "18X24 ",
            image: "http://localhost:8080/images/Alberta-field.jpg",
            price: "Contact artist for price"
        },
        {
            id: 5,
            title: "Stanley",
            size: "36x18 inches",
            image: "http://localhost:8080/images/Stanley.jpg",
            price: "Contact artist for price"
        },
        
        {
            id: 6,
            title: "Whiskey Jack",
            size: "30x15 inches inches",
            image: "http://localhost:8080/images/Whiskey-Jack.jpg",
            price: "Contact artist for price"
        },
        {
            id: 7,
            title: "Trees",
            size: "18X24 ",
            image: "http://localhost:8080/images/Trees.jpg",
            price: "Contact artist for price",
        },
        {
            id: 8,
            title: "Okanagan",
            size: "48x30 inches",
            image: "http://localhost:8080/images/Okanagan.jpg",
            price: "Contact artist for price"

        },
        {
            id: 9,
            title: "Forest",
            size: "18X24 ",
            image: "http://localhost:8080/images/Forest-Trail.jpg",
            price: "Contact artist for price"

        },
        {
            id: 10,
            title: "Technicolor",
            size: "24x12 inches",
            image: "http://localhost:8080/images/Technicolor.jpg",
            price: "Contact artist for price"
        },
        
        {
            id: 11,
            title: "Yawn",
            size: "32x40 inches",
            image: "http://localhost:8080/images/Yawn.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 12,
            title: "Cows",
            size: "18x24 inches",
            image: "http://localhost:8080/images/Cows.jpg",
            price: "Contact artist for price"

        },
        {
            id: 13,
            title: "Hedwig",
            size: "20x16 inches",
            image: "http://localhost:8080/images/Hedwig.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 14,
            title: "Northern",
            size: "18X24 ",
            image: "http://localhost:8080/images/Northern-Lights.jpg",
            price: "Contact artist for price"

        },
       
        {
            id: 15,
            title: "Hummingbird",
            size: "18X24 ",
            image: "http://localhost:8080/images/Hummingbird.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 16,
            title: "Horses",
            size: "18X24",
            image: "http://localhost:8080/images/Horses.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 17,
            title: "Sea view",
            size: "18X24",
            image: "http://localhost:8080/images/Sea1.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 18,
            title: "Iguana",
            size: "10x8 inches",
            image: "http://localhost:8080/images/Iguana.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 19,
            title: "Quail",
            size: "12x12 inches",
            image: "http://localhost:8080/images/Quail.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 20,
            title: "Woods",
            size: "36x24 inches",
            image: "http://localhost:8080/images/Woods.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 21,
            title: "Snow",
            size: "30x16 inches",
            image: "http://localhost:8080/images/Snow.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 22,
            title: "Moonwave",
            size: "18x24 inches",
            image: "http://localhost:8080/images/Moon-wave.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 23,
            title: "Moonwave dark",
            size: "18x24 inches",
            image: "http://localhost:8080/images/Moonwave1.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 24,
            title: "Shimmer",
            size: "30x16 inches",
            image: "http://localhost:8080/images/Shimmer.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 25,
            title: "Moon",
            size: "18x24 inches",
            image: "http://localhost:8080/images/Moon-Light.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 26,
            title: "Puzzle Lake",
            size: "18X24",
            image: "http://localhost:8080/images/Puzzle.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 27,
            title: "Loon",
            size: "16x20 inches",
            image: "http://localhost:8080/images/Loon.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 28,
            title: "Landing",
            size: "12x9 inches",
            image: "http://localhost:8080/images/Landing.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 29,
            title: "John",
            size: "12x9 inches",
            image: "http://localhost:8080/images/John.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 30,
            title: "Lighthouse",
            size: "16x12 inches",
            image: "http://localhost:8080/images/Lighthouse.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 31,
            title: "Whale",
            size: "16x20 inches",
            image: "http://localhost:8080/images/Whale.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 32,
            title: "Bubbles",
            size: "11x14 inches",
            image: "http://localhost:8080/images/Bubbles.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 33,
            title: "Elk dark",
            size: "36x24 inches",
            image: "http://localhost:8080/images/Moose.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 34,
            title: "Elk light",
            size: "36x24 inches",
            image: "http://localhost:8080/images/Moose1.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 35,
            title: "Seeing",
            size: "15 3/4 x 19 3/4 inches",
            image: "http://localhost:8080/images/Seeing.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 36,
            title: "Fox",
            size: "16x20 inches",
            image: "http://localhost:8080/images/Fox.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 37,
            title: "Mountain",
            size: "18X24",
            image: "http://localhost:8080/images/Mountain.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 38,
            title: "Waterfall",
            size: "18X24",
            image: "http://localhost:8080/images/Waterfall.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 39,
            title: "18X24",
            size: "16x12 inches",
            image: "http://localhost:8080/images/Otter.jpg",
            price: "Contact artist for price"

        },
        
        {
            id: 40,
            title: "Whales",
            size: "24x48 inches",
            image: "http://localhost:8080/images/Whales-Surfacing.jpg"
        },
        {
            id: 41,
            title: "Wolf at Night",
            size: "16x20 inches",
            image: "http://localhost:8080/images/Wolf-at-night.jpg",
            price: "Contact artist for price"

        },
        {
            id: 42,
            title: "Elfin",
            size: "36x60 inches",
            image: "http://localhost:8080/images/Elfin-Lodge.jpg",
            price: "Contact artist for price"

        },
        {
            id: 43,
            title: "Skaha",
            size: "36x12 inches",
            image: "http://localhost:8080/images/Skaha-Lake-2.jpg",
            price: "Contact artist for price"

        }
    ]);
};

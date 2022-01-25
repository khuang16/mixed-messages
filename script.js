// object containing array of names, messages, and 
const messages = {
    names: [
        'Susie',
        'Jeanne',
        'Fed',
        'Amani',
        'Sam',
        'Victor',
        'Chris',
        "Wesley",
        "Alma",
        "Jukes"
    ],
    inspiration: [
        'Have more fear of regret than failure.',
        'The only person you should try to be better than is the person you were yesterday.',
        'Do something today that your future self will thank you for.',
        'Don\'t quit. Suffer now and live the rest of your life as a champion.',
        'You don\'t get results by focusing on results. You get results by focusing on the actions that produce results.',
        'Don\'t try to build the greatest wall that\'s ever been built. Focus on laying a single, expertly-placed brick. Then keep doing that, every day.'
    ],
    practical: [
        'Drink water',
        'Go outside for a walk',
        'Stand up and stretch',
        'Remember to do your laundry',
        'Do your daily Wordle'
    ]
};


// function to pick a random item from an array
const randomItem = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

// function to combine the random items into a message
const displayMessage = () => {
    return (
        randomItem(messages.names) + ' tells you to ' + 
        randomItem(messages.practical) + '!\n' + 
        'Your inspirational quote for today is: \n' + 
        randomItem(messages.inspiration) 
    );
};

console.log(displayMessage());
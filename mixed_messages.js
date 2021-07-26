//main application for mixed-messages

//three different data bases (food, sports, and movies)
//using these data bases to suggest the days activities
const foods = ['fried rice', 'french fries', 'sushi', 'fried chicken'];
const sports = ['play tennis', 'go jogging', 'play soccer', 'play volleyball']; //middel of the message
const movies = ['Avengers: End Game', 'Hospital Playlist', 'No Game No Life', 'Iron Man 3']; //end of the message

//takes a array of message datas as a argument and returns a string of the final message
const messageGenerator = (messageDataBase) => {
    return {
        //initializing the databases to the object
        _foods: messageDataBase[0],
        _sports: messageDataBase[1],
        _movies: messageDataBase[2],
        //generates the message after taking random message from each category
        generateMessage() {
            //taking a random message from each category
            const food = this._foods[Math.floor(Math.random() * this._foods.length)];
            const sport = this._sports[Math.floor(Math.random() * this._sports.length)];
            const movie = this._movies[Math.floor(Math.random() * this._movies.length)];
            //creating the message
            const message = `you should eat ${food}.\nyou should ${sport}.\nyou should go watch ${movie}.`;
            return message; //returning the message
        }
    }
}


//created for basic hmtl and css page
let button = document.getElementById('message-button');
let message = document.getElementById('message');

const showMessage = () => {
    const msg = messageGenerator([foods, sports, movies]);
    message.innerHTML = msg.generateMessage();
    button.innerHTML = 'more suggestions';
}

button.addEventListener('click', showMessage);
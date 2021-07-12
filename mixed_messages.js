//main application for mixed-messages

//beginning of the message (starting simple with 'hello' and 'bye')
const start = ['hello', 'bye'];
const middle = ['my', 'crazy', 'random']; //middel of the message
const end = ['friend', 'dog', 'tree']; //end of the message

//takes a array of message datas as a argument
const messageGenerator = (messageDataBase) => {
    return {
        _start: messageDataBase[0],
        _middle: messageDataBase[1],
        _end: messageDataBase[2],
        generateMessage () {
            const start = this._start[Math.floor(Math.random()*this._start.length)];
            const middle = this._middle[Math.floor(Math.random()*this._middle.length)];
            const end = this._end[Math.floor(Math.random()*this._end.length)];
            const message = `${start}, ${middle} ${end}.`;
            return message;
        }
    }
}

//testing to see if the messageGenerator works as intended
const mg = messageGenerator([start, middle, end]);
console.log(mg.generateMessage());
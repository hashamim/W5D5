class Clock {
    constructor(){
        const raw = new Date();
        this.minutes = raw.getMinutes();
        this.hours = raw.getHours();
        this.seconds = raw.getSeconds();
    }

    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
    _tick(){
        this.seconds++;
        this.minutes += Math.floor(this.seconds/ 60);
        this.seconds %= 60;
        this.hours += Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.hours %= 24;
        this.printTime();
    }
    start(){
        setInterval(this._tick.bind(this),1000);
    }
}
const clock = new Clock();
clock.start();
// Original Interface
interface Car {
    brand: string;
    start(): void;
}

// Declaration merging (interface extension)
interface Car {
    model: string;
    stop(): void;
}

const myCar: Car = {
    brand: "BMW",
    model: 'M3',
    start() {
        console.log("Car is starting...");
    },
    stop() {
        console.log("Car is stopping...")
    }
};

myCar.start();
myCar.stop();
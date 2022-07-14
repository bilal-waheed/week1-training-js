const EventEmitter = require('events');

const temperature = new EventEmitter();
const airPressure = new EventEmitter();
const humidity = new EventEmitter();
const observable = new EventEmitter();

//initial random values
let tempValue = Math.random();
let airPressureValue = Math.random();
let humidityValue = Math.random();


let oldTemp, oldAP, oldHum; // for comparison of old and new values
observable.on('observe', () => {
    temperature.emit('data');
    airPressure.emit('data');
    humidity.emit('data');
    if (oldTemp != tempValue || oldAP != airPressureValue || oldHum != humidityValue) {
        console.log('temp:', tempValue);
        console.log('airPressure:', airPressureValue);
        console.log('humidity:', humidityValue);
        console.log('-----------');
    }
    oldTemp = tempValue;
    oldAP = airPressureValue;
    oldHum = humidityValue;
})

// emitters (sensors)
temperature.on('data', () => {
    let random = getRandom();
    setTimeout(() => {
        if (random < 1000) {
            tempValue = Math.random();
        } else {
            tempValue = 'N/A'
        }
    }, random)

})

airPressure.on('data', () => {
    let random = getRandom();
    setTimeout(() => {
        if (random < 1000) {
            airPressureValue = Math.random();
        } else {
            airPressureValue = 'N/A'
        }
    }, random)

})

humidity.on('data', () => {
    let random = getRandom();
    setTimeout(() => {
        if (random < 1000) {
            humidityValue = Math.random();
        } else {
            humidityValue = 'N/A'
        }
    }, random)

})

// gives a random value for time (100 to 2000ms)
function getRandom() {
    let random = (Math.floor(Math.random() * 20) + 1) * 100;
    return random;
}


const observe = () => {
    setInterval(() => {
        observable.emit('observe');
    }, 100);
}
observe();

// OUTPUT
// temp: 0.5604172202151159
// airPressure: 0.6967456231804001
// humidity: 0.8978560981114476
// -----------
// temp: 0.7932189866415673
// airPressure: 0.9824929531268876
// humidity: N/A
// -----------
// temp: 0.3839524648199242
// airPressure: N/A
// humidity: 0.2982752131818911
// -----------
// temp: 0.3839524648199242
// airPressure: 0.9255498052726581
// humidity: N/A
// -----------
// temp: 0.3839524648199242
// airPressure: N/A
// humidity: N/A
// -----------
// temp: N/A
// airPressure: 0.9110168664737017
// humidity: N/A
// -----------
// temp: N/A
// airPressure: N/A
// humidity: N/A
// -----------
// temp: 0.06956144982334145
// airPressure: 0.2342931651213498
// humidity: N/A
// -----------
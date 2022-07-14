//task 5
let resultsArray = [];

let processUrlsCallbacks = (urls, callback) => {
    urls.forEach(url => {
        fetch(url)
            .then(response => {
                callback(response)
            })
            .catch(err => console.log(err));
    });
}

// processUrlsCallbacks(['https://world.openfoodfacts.org/category/pastas/1.json', 'https://world.openfoodfacts.org/category/pastas/1.json'], (response)=>{resultsArray.push(response);});

// Output
// (2) [Response, Response]
// 0: Response {type: 'cors', url: 'https://world.openfoodfacts.org/category/pastas/1.json', redirected: false, status: 200, ok: true, …}
// 1: Response {type: 'cors', url: 'https://world.openfoodfacts.org/category/pastas/1.json', redirected: false, status: 200, ok: true, …}
// length: 2


let processUrlsPromisesSerial = (urls) => {
    urls.forEach(url => {
        new Promise((resolve, reject) => {
            fetch(url).then(res => {
                if (res.ok) {
                    resolve(res);
                }
            }).catch(err => {
                console.log(err);
            })
        }).then(response => {
            resultsArray.push(response);
            console.log(resultsArray);
        }).catch(err => {
            reject(err)
        })
    })
}

// processUrlsPromisesSerial(['https://jsonplaceholder.typicode.com/todos', 'https://jsonplaceholder.typicode.com/todos ']);

// output
// (2) [Response, Response]
// 0: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
// 1: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
// length: 2


let processUrlsPromisesParallel = (urls) => {
    let promiseArray = [];
    urls.forEach(url => {
        promiseArray.push(new Promise((resolve, reject) => {
            fetch(url).then(res => {
                if (res.ok) {
                    resolve(res);
                }
            })
        }))
    });
    Promise.all(promiseArray).then(values => {
        console.log(values);
    }).catch(err => {
        console.log(err);
    });
}

// processUrlsPromisesParallel(['https://jsonplaceholder.typicode.com/todos', 'https://jsonplaceholder.typicode.com/todos'])

// output
// (2) [Response, Response]
// 0: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
// 1: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
// length: 2

let processUrlsAsync = async (urls) => {
    urls.forEach(async url => {
        let response = await fetch(url);
        resultsArray.push(response);
    })
    return resultsArray
}

// let result = processUrlsAsync(['https://jsonplaceholder.typicode.com/todos', 'https://jsonplaceholder.typicode.com/todos']).then(data=>console.log(data));

// output
// []
// 0: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
// 1: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
// length: 2
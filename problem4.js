const memoizedFetch = (url) => {
    return caches.open('url-cache').then(cache => {
        return cache.match(url).then(responseObject => {
            if (responseObject) {
                return responseObject;
            } else {
                return cache.add(url).then(() => {
                    console.log("Adding the response to the cache");
                    return cache.match(url).then(res => res);
                });
            }
        })
    });
}
memoizedFetch('https://jsonplaceholder.typicode.com/todos').then(response=>console.log(response));

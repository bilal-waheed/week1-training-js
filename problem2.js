let urls = ['https://jsonplaceholder.typicode.com/todos', 'https://world.openfoodfacts.org/category/pastas/1.json'];

Array.prototype.populate = async function(){
    this.forEach((element, index) => {
        fetch(element, {method: 'GET'}).then(res => {
            if (res.status==200) {
                this[index] = res;
                console.log(this); // * This log helps to visualize the array after every 
                                   //   iteration when the url is replaced with the res.
            }
            else {
                throw Error('Something went wrong!');
            }
        }).catch(err => {
            console.log(err);
        });
    });
}
urls.populate();
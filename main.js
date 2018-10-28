const getAPI = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url:'https://icanhazdadjoke.com/',
            headers: {
                'Accept': 'application/json'
            }
        }).done((data) => {
            resolve(data);
        })
        .fail((error) => {
            reject(error);
        })
    });
};

const printAPI = () => {
    getAPI()
    .then(joke => {
        console.log(joke)
        $('#mainDiv').append(`<h6>${joke.joke}</h6>`);
    })
    .catch(error => {
        console.error(error);
    });
}

printAPI();
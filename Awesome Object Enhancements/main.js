let data = 

function getData(data) {
    var results = data.results; // ESS
    var count = data.count;

    console.log(results, count);

}

getData({
name: 'Karen',
age: 32,
results: ['foo', 'bar'],
count: 30

});
 
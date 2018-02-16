/*
*   NAME:   
*   AUTHOR: 
*   DATE:   
*   VERSION:
*   BRIEF:  
*/

function queryFood(dataset, key, value){
    return dataset.filter(function(x) { return x[key] == value; });
}

function getAllKeys(dataset){
    return new Set(dataset.reduce(function(keys, element){ 
        for (key in element) {
            keys.push(key);
        } 
        return keys; 
    },[]));
}

function parseAndDownload(){
    var newJson = Papa.parse(document.getElementById("files").files[0], {
        header:true, complete: function(results, file) {
            download("myFoodJSON.txt",JSON.stringify(results.data));
        }
    });
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
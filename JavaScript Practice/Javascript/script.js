var persons = new XMLHttpRequest();
persons.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
persons.open("GET", "data.json", true);
persons.send();
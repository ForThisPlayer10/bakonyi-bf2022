var page = 0;

const getFromApi = async () => {
    if(window.page < 0) return console.log("can't be negative");
    var answer = [];
    document.getElementById("conteiner").innerHTML = "Betöltés...";
     await fetch(`http://www.neowsapp.com/rest/v1/neo/browse?page=${page}&size=20`)
    .then((response) => response.json())
    .then((data) => {
        data["near_earth_objects"].forEach(x => {
            answer.push({
                "name": x.name,
                "diameter": x["estimated_diameter"]["meters"],
                "url": x["nasa_jpl_url"]
            });
        });
    });
    document.getElementById("conteiner").innerHTML = "";
    for (let i = 0; i < answer.length; i++){
      html = `<h2 class = 'name_Of_Object'>${answer[i].name}</h2><p>Minimum mérete: ${answer[i].diameter.estimated_diameter_min} meter<br />Maximum mérete: ${answer[i].diameter.estimated_diameter_max} meter</p><p>A Nasa oldala: <a target = "blank_" href = "${answer[i].url}">${answer[i].url}</a></p>`;
      document.getElementById("conteiner").innerHTML += `<div class = "object">${html}</div>`;
    }
}

var changePage = (num) => {
    if(num == 0 && window.page > 0) page--;
    else if(num == 1) page++;
    getFromApi();
};

window.onload = getFromApi;

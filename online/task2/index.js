var page = 0;

const getFromApi = async (page) => {
    if(page < 0) return console.log("can't be negative");
    var answer = [];
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

    return answer;
}

var changePage = (num) => {
    if(num == 0) page--;
    else if(num == 1) page++;

    console.log(page);
    // getFromApi(page);
};

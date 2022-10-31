var filter = {
    ul : [],
    l : []
}
increment = 15;
last_Index = increment;
filterd_Movies = [];
class HTML{
    static random_Id(length){
        length = length ? length : 20;
        this.id = "";
        for (let i = 0; i < length; i++){
            this.id += Math.floor(Math.random()*10);
        }
        return this.id;
    }
    static input(id, class_Name, value, type, onclick){
        return `<input ${id ? `id = "${id}"` : `id = "${this.random_Id()}"`} ${class_Name ? `class = "${class_Name}"` : ""} ${type ? `type = "${type}"` : "type = 'text'"} ${onclick ? `onclick = "${onclick}"` : ""} ${value ? `value = "${value}"` : ""}>`;
    }
    static label(id, class_Name, value, for_This){
        return `<label ${id ? `id = "${id}"` : `id = "${this.random_Id()}"`} ${class_Name ? `class = "${class_Name}"` : ""} ${for_This ? `for = "${for_This}"` : ""}>${value}</label>`;
    }
    static div(id, class_Name, value){
        return `<div ${id ? `id = "${id}"` : `id = "${this.random_Id()}"`} ${class_Name ? `class = "${class_Name}"` : ""}>${value}</div>`;
    }
    static h(id, class_Name, value, size){
        return `<h${size} ${id ? `id = "${id}"` : `id = "${this.random_Id()}"`} ${class_Name ? `class = "${class_Name}"` : ""}>${value}</h${size}>`;
    }
    static element(id,data){
        document.getElementById(id).innerHTML = data;
    }
    static get_Value(id){
        return document.getElementById(id).value;
    }
    static add_Value(id, data){
        document.getElementById(id).value = data;
    }
    static append_Element(id, data){
        document.getElementById(id).innerHTML += data;
    }
}


function read_Filters(){
    window.last_Index = window.increment;
    let list = map_Genres();
    window.filter = {l : [], ul : []};
    for (let i = 0;i < list.length; i++){
        document.getElementById(list[i]).checked ? window.filter.l.push(list[i]) : document.getElementById(`d${list[i]}`).checked ? window.filter.ul.push(list[i]) : "";
    }
    load();
}

function element_Filters(){

}

function map_Genres(){
    let genres = [];
    for (let i = 0; i < window.movies.length; i++){
        for (let j = 0; j < window.movies[i].genres.length; j++){
            control = false;
            for (let k = 0; k < genres.length; k++){
                if (genres[k] == window.movies[i].genres[j]){
                    control = true;
                }
            }
            if (!control){
                genres.push(window.movies[i].genres[j]);
            }
        }
    }
    return genres;
}

function select_Movies(){
    first_Filter = [];
    window.filterd_Movies = [];
    if (!filter.l && !filter.ul){
        window.filterd_Movies = window.movies;
    }else{
        for (let i = 0; i < window.movies.length; i++){
            add = false;
            for (let j = 0; j < window.movies[i].genres.length; j++){
                for (let k = 0; k < filter.l.length; k++){
                    filter.l[k] == window.movies[i].genres[j] ? add = true :false;
                }
            }
            if (add){
                first_Filter.push(window.movies[i]);
            }
        }
        !first_Filter.length ? first_Filter = window.movies : "";
        for (let i = 0; i < first_Filter.length; i++){
            let control = false;
            for (let j = 0; j < first_Filter[i].genres.length; j++){
                for (let k = 0; k < window.filter.ul.length; k++){
                    window.filter.ul[k] == first_Filter[i].genres[j] ? control = true:false;
                }
            }
            if (!control){
                window.filterd_Movies.push(first_Filter[i]);
            }
        }
    }
    return window.filterd_Movies;
}

function load(){
    let list = map_Genres();
    list = list.sort();
    htmls = [HTML.h("", "", "Szimpatikus", 4), HTML.h("", "", "Nem szimpatikus",4)];
    for (let i = 0; i < list.length; i++){
        lambda = ["", ""];
        lambda[0] += HTML.label("", "movies_Type_Label", list[i], list[i]);
        lambda[0] += HTML.input(list[i], "movies_Type_Radio_Button", "", "checkbox", "");
        lambda[1] += HTML.label("", "movies_Type_Label", list[i], `d${list[i]}`);
        lambda[1] += HTML.input(`d${list[i]}`, "movies_Type_Radio_Button", "", "checkbox", "");
        htmls[0] += HTML.div("", "movies_Type_Div", lambda[0]);
        htmls[1] += HTML.div("", "movies_Type_Div", lambda[1]);
    }
    HTML.element("radiobuttons_likeable", htmls[0]);
    HTML.element("radiobuttons_unlikeable", htmls[1]);
    HTML.element("movies", "");
    for (let i = 0;i < list.length; i++){
        document.getElementById(list[i]).addEventListener('change', function() {read_Filters()});
        document.getElementById(`d${list[i]}`).addEventListener('change', function() {read_Filters()});
    }
    let filterd_Movies = select_Movies();
    let html = "";
    if (filterd_Movies.length <= window.increment){
    for (let i = 0; i < filterd_Movies.length; i++){
        lambda = HTML.h("", "title_Of_Movie", `Title: ${filterd_Movies[i].title}`, 4);
        for (let k = 0; k < filterd_Movies[i].genres.length; k++){
            lambda += HTML.label("", "categories", filterd_Movies[i].genres[k]);
        }
        html += HTML.div("", "movies_Grid_Div", lambda);
    }
    for (let i = 0; i < window.filter.l.length; i++){
        document.getElementById(window.filter.l[i]).checked = true;
    }
    for (let i = 0; i < window.filter.ul.length; i++){
        document.getElementById(`d${window.filter.ul[i]}`).checked = true;
    }
    HTML.element("turner", "");
}
else{
    x = window.last_Index > window.increment ? window.last_Index-window.increment : 0;
    max = window.last_Index > filterd_Movies.length ? window.last_Index-(window.last_Index-filterd_Movies.length) : window.last_Index;
    console.log(x, max);
    for (let i = x; i < max; i++){
        lambda = HTML.h("", "title_Of_Movie", `${filterd_Movies[i].title}`, 4);
        for (let k = 0; k < filterd_Movies[i].genres.length; k++){
            lambda += HTML.label("", "categories", filterd_Movies[i].genres[k]);
        }
        html += HTML.div("", "movies_Grid_Div", lambda);
    }
    for (let i = 0; i < window.filter.l.length; i++){
        document.getElementById(window.filter.l[i]).checked = true;
    }
    for (let i = 0; i < window.filter.ul.length; i++){
        document.getElementById(`d${window.filter.ul[i]}`).checked = true;
    }
    generate_Turner(filterd_Movies.length);
}
    HTML.element("movies", html);
}


function generate_Turner(length){
    number_Of_Side = Math.ceil(length/window.increment);
    html = "";
    for (let i = 0; i < number_Of_Side; i++){
        html += HTML.input("", "turner_Button", i+1, "button", `turner(${i+1})`);
    }
    HTML.element("turner", html);
}

function turner(x){
    x = x  ? x : 1;
    window.last_Index = x*window.increment;;
    //window.last_Index += window.increment;
    load();
}


window.onload = load();

let additionalSources = [{
    "fixvalue": 0,
    "id": 10,
    "position": {
        "x": 78,
        "y": 547
    },
    "sensortype": "TEMPERATURE"
}, {
    "fixvalue": 19,
    "id": 21,
    "position": null,
    "sensortype": "FIXVALUE"
}]
let controlConnections = [{
    "controlid": "D",
    "inputid": 5
}, {
    "controlid": "B",
    "inputid": 30
}]
let logicConnections = [{
    "gatetype": "MIN",
    "id": 30,
    "inputids": [7, 10, 21]
}]


class Final {
    constructor(additional, control, logic) {
        this.add = additional;
        this.control = control;
        this.logic = logic;
    }

    replaceInLogic() {
        this.logic.forEach(x => {
            x['inputids'].forEach(y => {
                y = this.add.find(z => z['id'] == y)?.fixvalue;
            })
        })
    }
    replaceInControl() {
        this.control.forEach(x => {
            console.log(this.logic.find(y => y['id'])?.value);
            console.log(this.add.find(y => y['id'])?.fixvalue);
            // console.log(x['inputid']);
        })
    }
}

var asd = new Final(additionalSources, controlConnections, logicConnections);
console.log(asd.replaceInControl());


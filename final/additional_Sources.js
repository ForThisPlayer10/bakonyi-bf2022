


class Room{
    constructor(){
        this.position = 0;
        this.temperature = 0;
        this.light = 0;
    }
}

function create_Rooms(){
    all_Of_Rooms = [];
    for (let i = 0; i < window.rooms.length; i++){

    }
}

class additional{
    constructor(fixvalue, id, position, sensortype, room_Values){
        this.fixvalue = fixvalue;
        this.value = sensortype == "FIXVALUE" ? this.fixvalue : 0.0;
        this.id = id;
        this.position = position;
        this.sensortype = sensortype;
        this.room_Values = room_Values;
        this.rooms = [
            [[0, 300], [699, 399]],
            [[300, 0], [699, 299]],
            [[700, 0], [1099, 399]],
            [[0, 0], [299, 299]],
            [[0, 400], [399, 799]],
            [[400, 400], [1099, 799]],
        
        ];
        this.rooms_Values_Id = {
            0 : ["A", "G"],
            1 : ["B", "H"],
            2 : ["C", "I"],
            3  : ["D", "J"],
            4 : ["E", "K"],
            5 : ["F", "L"]
        };
        this.dataOfHause = {
            "A" : 4,
            "B" : 1,
            "C" : 1,
            "D" : 4,
            "E" : 1,
            "F" : 5,
            "G" : 1,
            "H" : 4,
            "I" : 1,
            "J" : 1,
            "K" : 1,
            "L" : 0,
            "M" : 0,
            "N" : 0
        };
        

    }
    room(){
        let room_Index = -1;
        for (let i = 0; i < this.rooms.length;i++){
            this.rooms[i][0][0] < this.position.x && this.rooms[i][1][0] > this.position.x && this.rooms[i][0][1] < this.position.y && this.rooms[i][1][1] > this.position.y
            this.rooms[i][0][0] < this.position.x && this.rooms[i][1][0] > this.position.x && this.rooms[i][0][1] < this.position.y && this.rooms[i][1][1] > this.position.y ? room_Index = i : 0;
        }
        return room_Index;
    }
    temperature(){
        return this.dataOfHause[this.rooms_Values_Id[this.room()][1]];
    }
    location(){
        return this.room()+1;
    }
    lightlevel(){
        return this.dataOfHause[this.rooms_Values_Id[this.room()][0]];
    }
}
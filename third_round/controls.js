class Controls{
    constructor(){
        this.left = false,
        this.right = false,
        this.forward = false,
        this.reverse = false;

        this.#addListeners();
    }

    #addListeners(){
        window.onkeydown =(event)=>{
            switch(event.key){
                case "w":
                    this.forward = true;
                    break;
                case "s":
                    this.reverse = true;
                    break;
                case "a":
                    this.left = true;
                    break;
                case "d":
                    this.right = true;
            }
            //console.table(this);
        }

        window.onkeyup =(event)=>{
            switch(event.key){
                case "w":
                    this.forward = false;
                    break;
                case "s":
                    this.reverse = false;
                    break;
                case "a":
                    this.left = false;
                    break;
                case "d":
                    this.right = false;
            }
            //console.table(this);
        }
    }
}
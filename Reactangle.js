import shape from "./shape"
class Reactangle extends shape{
    constructor(color,width,height){
        super(color)
       this.width =width
       this.height=height
    }
    calculate (){
        return this.width * this.height
    }
    }
    export default Reactangle
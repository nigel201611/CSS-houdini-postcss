class NigelSky{
    constructor(){}
    static get inputProperties(){
        return ["--star-opacity","--star-density"]
    }
    paint(ctx,paintSize,properites){
        let xMax = paintSize.width;
        let yMax = paintSize.height;
        
    }
}

registerPaint('nigel-sky',NigelSky);
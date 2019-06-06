// class NigelSky {
//     constructor() { }
//     static get inputProperties() {
//         return ["--star-opacity", "--star-density"]
//     }
//     paint(ctx, paintSize, properites) {
//         let xMax = paintSize.width;
//         let yMax = paintSize.height;
//         let starOpacity = properites.get("--star-opacity");
//         let starDensity = properites.get("--star-density").toString() || 1;
//         starDensity > 1 && (starDensity = 1);
//         //设置星星
//         let hmTimes = Math.round((xMax + yMax) * starDensity);
//         console.log(hmTimes);
//         for (let i = 0; i < hmTimes; i++) {
//             let x = Math.floor(Math.random() * xMax + 1);
//             let y = Math.floor(Math.random() * yMax + 1);
//             let size = Math.floor(Math.random() * 2 + 1);
//             let o1 = Math.floor(Math.random() * 9 + 1);
//             let o2 = Math.floor(Math.random() * 9 + 1);
//             let opacity = +("." + (o1 + o2)) * starOpacity;
//             let hue = Math.floor(Math.random() * 360 + 1);
//             ctx.fillStyle = `hsla(${hue},30%,80%,${opacity})`;
//             ctx.fillRect(x, y, size, size);
//         }
//         ctx.fillRect(0, 0, xMax, yMax);
//     }
// }

registerPaint('nigel-sky', class {
    constructor() { }
    static get inputProperties() {
        return ["--star-opacity", "--star-density"]
    }
    paint(ctx, paintSize, properites) {
        let xMax = paintSize.width;
        let yMax = paintSize.height;
        let starOpacity = properites.get("--star-opacity");
        let starDensity = properites.get("--star-density").toString() || 1;
        starDensity > 1 && (starDensity = 1);
        //设置星星
        let hmTimes = Math.round((xMax + yMax) * starDensity);
        // console.log(xMax);
        for (let i = 0; i < hmTimes; i++) {
            let x = Math.floor(Math.random() * xMax + 1);
            let y = Math.floor(Math.random() * yMax + 1);
            let size = Math.floor(Math.random() * 2 + 1);
            let o1 = Math.floor(Math.random() * 9 + 1);
            let o2 = Math.floor(Math.random() * 9 + 1);
            let opacity = +("." + (o1 + o2)) * starOpacity;
            let hue = Math.floor(Math.random() * 360 + 1);
            ctx.fillStyle = `hsla(${hue},30%,80%,${opacity})`;
            ctx.fillRect(x, y, size, size);
        }
        ctx.fillRect(0, 0, xMax, yMax);
    }
});
export const FINAL = 4;
export const NAME = "Differentiation";

var gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }



export default function differentiation(levelno) {
    let stdfx = [
        "poly",
        //"trig",
        //"exp"
    ]
    let fx = "";
    for (let i = 0; i < levelno; i++) {
        let fxtype = stdfx[Math.floor(Math.random() * stdfx.length)];
        if (fxtype == "poly") {
            let maxdepth = 6;
            let polynom = "";
            let str = "";
            for (let j = maxdepth; j >= 0; j -- ) {
                let top = Math.floor(Math.random() * 9) + 1;
                let bottom = Math.floor(Math.random() * 9) + 1;
                let zerochance = Math.floor(Math.random) * 4;
                if (!(zerochance == 0)) {
                    if (gcd(top, bottom) != 1) {
                        let fgcd = gcd(top, bottom)
                        top /= fgcd;
                        bottom /= fgcd;
                    }
                    if (bottom != 1) {
                        str = "\\frac{" + top.toString() + "}{" + bottom.toString() + "}";
                    } else {
                        str = top.toString();
                    }
                    if (str == "1") {
                        str = "";
                    }
                    if (j == 1) {
                        polynom += str + "x + ";
                    } else if (j == 0) {
                        polynom += str;
                    } else {
                        polynom += str + "x^" + j.toString() + " + ";
                    }
                }
            }
            fx += polynom;
        }
    }
    return {question:fx, solution:"1"}
}

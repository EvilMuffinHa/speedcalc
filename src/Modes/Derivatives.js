export const FINAL = 1;
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
        "trig",
        "exp"
    ]
    let stdrules = [
        "chain",
        "product",
        "quotient"
    ]
    let functions = [];
    for (let i = 0; i < levelno+1; i++) {
        let fxtype = stdfx[Math.floor(Math.random() * stdfx.length)];
        if (fxtype === "poly") {
            let maxdepth = 6;
            let polynom = "";
            let str = "";
            for (let j = maxdepth; j >= 0; j--) {
                let top = Math.floor(Math.random() * 9) + 1;
                let bottom = Math.floor(Math.random() * 9) + 1;
                let zerochance = Math.floor(Math.random() * 2);
                if (zerochance !== 0) {
                    if (gcd(top, bottom) !== 1) {
                        let fgcd = gcd(top, bottom)
                        top /= fgcd;
                        bottom /= fgcd;
                    }
                    if (bottom !== 1) {
                        str = "\\frac{" + top.toString() + "}{" + bottom.toString() + "}";
                    } else {
                        str = top.toString();
                    }
                    if (str === "1") {
                        str = "";
                    }
                    if (j === 1) {
                        polynom += str + "x + ";
                    } else if (j === 0) {
                        if (str === "") {
                            str = "1"
                        }
                        polynom += str;
                    } else {
                        polynom += str + "x^" + j.toString() + " + ";
                    }
                } else {
                    if (j === 0) {
                        polynom = polynom.substr(0, polynom.length - 2);
                    }
                }
            }
            functions.push(polynom);
        }
        else if (fxtype === "trig") {
            let choices = [
                "\\sin({x})",
                "\\cos({x})",
                "\\tan({x})",
                "\\sec({x})",
                "\\csc({x})",
                "\\cot({x})"
            ]
            let selectedTrig = choices[Math.floor(Math.random() * choices.length)];
            functions.push(selectedTrig);
        }
        else {
            let choices = [
                "\\log_2({x})",
                "\\ln({x})",
                "2^{x}",
                "e^{x}"
            ]
            let selectedExp = choices[Math.floor(Math.random() * choices.length)];
            functions.push(selectedExp);
        }
    }
    let fx = functions[0];
    for (let i = 1; i < functions.length; i++) {
        let fx1 = functions[i];
        let combinator = stdrules[Math.floor(Math.random() * stdrules.length)];
        if (combinator === "chain") {
            fx = fx.replaceAll("x", fx1);
        } else if (combinator === "product") {
            fx = "(" + fx + ")(" + fx1 + ")";
        } else {
            fx = "\\frac{" + fx + "}{" + fx1 + "}";
        }

    }
    return {question:fx, solution:"1"}
}

export const FINAL = 4;
export const NAME = "Differentiation";

let gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }



export default function differentiation(levelno) {
    let stdfx;
    let lvl = levelno;
    if (levelno === 1) {
        stdfx = ["poly"];
    } else if (levelno === 2) {
        stdfx = ["trig", "exp"];
        lvl = 1;
    } else {
        stdfx = [
            "poly",
            "trig",
            "exp"
        ]
        lvl -= 2;
    }
    let stdrules = [
        "chain",
        "product",
        "quotient"
    ]
    let functions = [];
    for (let i = 0; i < lvl; i++) {
        let fxtype = stdfx[Math.floor(Math.random() * stdfx.length)];
        if (fxtype === "poly") {
            let maxdepth = 6;
            let polynom = "";
            let str = "";
            for (let j = maxdepth; j >= 0; j--) {
                let top = Math.floor(Math.random() * 4) + 1;
                let bottom = Math.floor(Math.random() * 4) + 1;
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
                        polynom += str + "{x} + ";
                    } else if (j === 0) {
                        if (str === "") {
                            str = "1"
                        }
                        polynom += str;
                    } else {
                        polynom += str + "{x}^" + j.toString() + " + ";
                    }
                } else {
                    if (j === 0) {
                        polynom = polynom.substr(0, polynom.length - 2);
                    }
                }
            }
            if (polynom === "") {
                polynom = "0";
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
        let notpoly = [
            "\\sin({x})",
            "\\cos({x})",
            "\\tan({x})",
            "\\sec({x})",
            "\\csc({x})",
            "\\cot({x})",
            "\\log_2({x})",
            "\\ln({x})",
            "2^{x}",
            "e^{x}"
        ];
        let chainallowed = false;
        let fx1 = functions[i];
        for (let f in notpoly) {
            if (fx1.includes(f)) {
                chainallowed = true;
            }
        }
        let combinator = "";
        if (chainallowed) {
            combinator = stdrules[Math.floor(Math.random() * stdrules.length)];
        } else {
            combinator = stdrules[Math.floor(Math.random() * (stdrules.length - 1)) + 1];
        }
        console.log(chainallowed);
        if (combinator === "chain") {
            fx = fx.replaceAll("x", fx1);
        } else if (combinator === "product") {
            fx = "(" + fx + ")(" + fx1 + ")";
        } else {
            fx = "\\frac{" + fx + "}{" + fx1 + "}";
        }

    }
    console.log(fx);
    return {question:fx, solution:"1"}
}

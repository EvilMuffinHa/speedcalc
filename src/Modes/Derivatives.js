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
            let deriv = "";
            let ds = "";
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
                    let td = top * j;
                    let bd = bottom;
                    if (gcd(td, bd) !== 1) {
                        let fgcd = gcd(td, bd);
                        td /= fgcd;
                        bd /= fgcd;
                    }

                    if (bottom !== 1) {
                        str = "\\frac{" + top.toString() + "}{" + bottom.toString() + "}";
                    } else {
                        str = top.toString();
                    }
                    if (bd !== 1) {
                        ds = "\\frac{" + td.toString() + "}{" + bd.toString() + "}";
                    } else {
                        ds = td.toString();
                    }
                    if (str === "1") {
                        str = "";
                    }
                    if (ds === "1") {
                        ds = "";
                    }
                    if (td === 0) {
                        ds = "";
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
                    if (j === 2) {
                        deriv += ds + "{x} + ";
                    } else if (j === 1) {
                        if (ds === "") {
                            ds = "1"
                        }
                        deriv += ds;
                    } else if (j === 0) {
                        deriv += ds;
                    } else {
                        deriv += ds + "{x}^" + (j - 1).toString() + " + ";
                    }
                } else {
                    if (j === 0) {
                        polynom = polynom.substr(0, polynom.length - 2);
                    } if (j === 1) {
                        deriv = deriv.substr(0, deriv.length - 2);
                    }
                }
            }
            if (polynom === "") {
                polynom = "0";
            }
            functions.push([polynom, deriv]);
        }
        else if (fxtype === "trig") {
            let choices = [
                ["\\sin({x})", "\\cos({x})"],
                ["\\cos({x})", "-\\sin({x})"],
                ["\\tan({x})", "\\sec({x})^2"],
                ["\\sec({x})", "\\tan({x})\\sec({x})"],
                ["\\csc({x})", "-\\cot({x})\\csc({x})"],
                ["\\cot({x})", "-\\csc({x})^2"],
                ["\\arcsin({x})", "\\frac{1}{\\sqrt{1 - x^2}}"],
                ["\\arccos({x})", "-\\frac{1}{\\sqrt{1 - x^2}}"],
                ["\\arctan({x})", "\\frac{1}{\\sqrt{1 + x^2}}"],
                ["\\sec^{-1}({x})", "\\frac{1}{\\mid {x}\\mid\\sqrt{{x}^2 - 1}}"],
                ["\\csc^{-1}({x})", "-\\frac{1}{\\mid {x}\\mid\\sqrt{{x}^2 - 1}}"],
                ["\\cot^{-1}({x})", "-\\frac{1}{\\sqrt{1 + x^2}}"],
            ]
            let selectedTrig = choices[Math.floor(Math.random() * choices.length)];
            functions.push(selectedTrig);
        }
        else {
            let choices = [
                ["\\ln({x})", "\\frac{1}{x}"],
                ["\\log_2({x})", "\\frac{1}{\\ln(2){x}}"],
                ["2^{x}", "\\ln(2)2^{x}"],
                ["e^{x}", "e^{x}"]
            ]
            let selectedExp = choices[Math.floor(Math.random() * choices.length)];
            functions.push(selectedExp);
        }
    }
    let fx = functions[0][0];
    let fxderiv = functions[0][1];
    for (let i = 1; i < functions.length; i++) {
        let notpoly = [
            "\\sin({x})",
            "\\cos({x})",
            "\\tan({x})",
            "\\sec({x})",
            "\\csc({x})",
            "\\cot({x})",
            "\\arcsin({x})",
            "\\arccos({x})",
            "\\arctan({x})",
            "\\sec^{-1}({x})",
            "\\csc^{-1}({x})",
            "\\cot^{-1}({x})",
            "\\log_2({x})",
            "\\ln({x})",
            "2^{x}",
            "e^{x}"
        ];
        let chainallowed = false;
        let fx1 = functions[i][0];
        let fx1d = functions[i][1];
        for (let l = 0; l < notpoly.length; l++) {
            if (fx1.includes(notpoly[l])) {
                chainallowed = true;
            }
        }
        console.log(chainallowed);
        console.log(functions);
        let combinator = "";
        if (chainallowed) {
            combinator = stdrules[Math.floor(Math.random() * stdrules.length)];
        } else {
            combinator = stdrules[Math.floor(Math.random() * (stdrules.length - 1)) + 1];
        }
        if (combinator === "chain") {
            fxderiv = "(" + fxderiv.replaceAll("x", "{" + fx1 + "}") + ")(" + fx1d + ")";
            fx = fx.replaceAll("x", "{" + fx1 + "}");
        } else if (combinator === "product") {
            fxderiv = "(" + fxderiv + ")(" + fx1 + ") + (" + fx1d + ")(" + fx + ")";
            fx = "(" + fx + ")(" + fx1 + ")";
        } else {
            fxderiv = "\\frac{(" + fxderiv + ")(" + fx1 + ") - (" + fx1d + ")(" + fx + ")}{{(" + fx1 + ")}^2}";
            fx = "\\frac{" + fx + "}{" + fx1 + "}";
        }

    }
    return {question:fx, solution:fxderiv}
}

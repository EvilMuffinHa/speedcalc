import { create, all } from "mathjs";

export const FINAL = 4;
export const NAME = "Differentiation";
const config = {
};
const math = create(all, config);

let gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  };


export const differentiation = function(levelno) {
    math.derivative("x^2 + x", "x");
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
        ];
        lvl -= 2;
    }
    let stdrules = [
        "chain",
        "product",
        "quotient"
    ];
    let functions = [];
    for (let i = 0; i < lvl; i++) {
        let fxtype = stdfx[Math.floor(Math.random() * stdfx.length)];
        if (fxtype === "poly") {
            let maxdepth = 6;
            let polynom = "";
            let polynomM = "";
            let str = "";
            let strM = "";
            let deriv = "";
            let ds = "";
            for (let j = maxdepth; j >= 0; j--) {
                let top = Math.floor(Math.random() * 4) + 1;
                let bottom = Math.floor(Math.random() * 4) + 1;
                let zerochance = Math.floor(Math.random() * 2);
                if (zerochance !== 0) {
                    if (gcd(top, bottom) !== 1) {
                        let fgcd = gcd(top, bottom);
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
                        strM += "(" + top.toString() + "/" + bottom.toString() + ")";
                    } else {
                        str = top.toString();
                        strM = top.toString();
                    }
                    if (bd !== 1) {
                        ds = "\\frac{" + td.toString() + "}{" + bd.toString() + "}";
                    } else {
                        ds = td.toString();
                    }
                    if (str === "1") {
                        str = "";
                        strM = "";
                    }
                    if (ds === "1") {
                        ds = "";
                    }
                    if (td === 0) {
                        ds = "";
                    }
                    if (j === 1) {
                        polynom += str + "{x} + ";
                        polynomM += strM + "(x) + ";
                    } else if (j === 0) {
                        if (str === "") {
                            str = "1";
                            strM = "1";
                        }
                        polynom += str;
                        polynomM += strM;
                    } else {
                        polynom += str + "{x}^" + j.toString() + " + ";
                        polynomM += strM + "(x)^" + j.toString() + " + ";
                    }
                    if (j === 2) {
                        deriv += ds + "{x} + ";
                    } else if (j === 1) {
                        if (ds === "") {
                            ds = "1";
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
                        polynomM = polynomM.substr(0, polynomM.length - 2);
                    } if (j === 1) {
                        deriv = deriv.substr(0, deriv.length - 2);
                    }
                }
            }
            if (polynom === "") {
                polynom = "0";
                polynomM = "0";
            }
            functions.push([polynom, polynomM]);
        }
        else if (fxtype === "trig") {
            let choices = [
                ["\\sin{({x})}","sin(x)", "\\cos{({x})}"],
                ["\\cos{({x})}","cos(x)", "-\\sin{({x})}"],
                ["\\tan{({x})}","tan(x)", "\\sec{({x})}^2"],
                ["\\sec{({x})}","sec(x)", "\\tan{({x})}\\sec{({x})}"],
                ["\\csc{({x})}","csc(x)", "-\\cot{({x})}\\csc{({x})}"],
                ["\\cot{({x})}","cot(x)", "-\\csc{({x})}^2"],
                ["\\asin{({x})}","asin(x)", "\\frac{1}{\\sqrt{1 - x^2}}"],
                ["\\acos{({x})}","acos(x)", "-\\frac{1}{\\sqrt{1 - x^2}}"],
                ["\\atan{({x})}","atan(x)", "\\frac{1}{\\sqrt{1 + x^2}}"],
                ["\\asec{({x})}","asec(x)", "\\frac{1}{\\mid {x}\\mid\\sqrt{{x}^2 - 1}}"],
                ["\\acsc{({x})}","acsc(x)", "-\\frac{1}{\\mid {x}\\mid\\sqrt{{x}^2 - 1}}"],
                ["\\acot{({x})}","acot(x)", "-\\frac{1}{\\sqrt{1 + x^2}}"],
            ];
            let selectedTrig = choices[Math.floor(Math.random() * choices.length)];
            functions.push([selectedTrig[0], selectedTrig[1]]);
        }
        else {
            let choices = [
                ["\\log{({x})}", "log(x)", "\\frac{1}{x}"],
                ["e^{x}", "e^(x)", "e^{x}"]
            ];
            let selectedExp = choices[Math.floor(Math.random() * choices.length)];
            functions.push([selectedExp[0], selectedExp[1]]);
        }
    }
    let fx = functions[0][0];
    let fxM = functions[0][1];
    for (let i = 1; i < functions.length; i++) {
        let notpoly = [
            "\\sin{({x})}",
            "\\cos{({x})}",
            "\\tan{({x})}",
            "\\sec{({x})}",
            "\\csc{({x})}",
            "\\cot{({x})}",
            "\\asin{({x})}",
            "\\cos{({x})}",
            "\\atan{({x})}",
            "\\asec{({x})}",
            "\\acsc{({x})}",
            "\\acot{({x})}",
            "\\log{({x})}",
            "e^{x}"
        ];
        let fx1 = functions[i][0];
        let fx1M = functions[i][1];
        const chainallowed = notpoly.some(l => fx1.includes(l));
        let combinator = "";
        if (chainallowed) {
            combinator = stdrules[Math.floor(Math.random() * stdrules.length)];
        } else {
            combinator = stdrules[Math.floor(Math.random() * (stdrules.length - 1)) + 1];
        }
        if (combinator === "chain") {
            fx = fx.replaceAll("x", "{" + fx1 + "}");
            fxM = fxM.replaceAll("x", "(" + fx1M + ")");
        } else if (combinator === "product") {
            fx = `(${fx})\\cdot(${fx1})`;
            fxM = `(${fxM})*(${fx1M})`;
        } else {
            fx = `\\frac{${fx}}{${fx1}}`;
            fxM = `(${fxM})/(${fx1M})`;
        }
    }
    let deriv = math.simplify(math.derivative(fxM, 'x')).toTex()
        .replaceAll("acos", "arccos")
        .replaceAll("asin", "arcsin")
        .replaceAll("atan", "arctan")
        .replaceAll("asec", "sec^{-1}")
        .replaceAll("acsc", "csc^{-1}")
        .replaceAll("acot", "cot^{-1}");
    fx = fx.replaceAll("acos", "arccos")
        .replaceAll("asin", "arcsin")
        .replaceAll("atan", "arctan")
        .replaceAll("asec", "sec^{-1}")
        .replaceAll("acsc", "csc^{-1}")
        .replaceAll("acot", "cot^{-1}");
    return {question:fx, solution:deriv};
};
export default function derivative(levelno) {
    let q = differentiation(levelno);
    return { question:`\\frac{d}{dx}{${q.question}}`, solution:q.solution};
}
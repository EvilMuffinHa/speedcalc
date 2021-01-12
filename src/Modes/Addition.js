// Just for testing the generator
export const FINAL = 5;
export const NAME = "Addition";

export default function addition(levelno) {
    if (levelno <= 5) {
        let num1 = "";
        let num2 = "";
        let sol = "";
        for (let i = 0; i < levelno; i++) {
            let gen = Math.floor(Math.random() * 10);
            let numr = 10 - gen;
            let lselec = [];
            for (let j = 0; j < numr; j ++ ) {
                lselec.push(j);
            }
            let gen2 = lselec[Math.floor(Math.random() * lselec.length)];
            num1 += gen.toString();
            num2 += gen2.toString();
            sol += (gen + gen2).toString();
        }
        while (num1.startsWith("0")) {
            num1 = num1.substr(1, num1.length);
        }
        while (num2.startsWith("0")) {
            num2 = num2.substr(1, num2.length);
        }
        return {question: num1 + " + " + num2 + "= ", solution: sol};
    }
}

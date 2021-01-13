import { differentiation } from "./Derivatives";
export const FINAL = 4;
export const NAME = "Integration";

export default function integration(levelno) {
    let inverse = differentiation(levelno);
    while (inverse.solution === "0") {
        inverse = differentiation(levelno);
    }
    return {question:"\\displaystyle\\int{" + inverse.solution + "}\\hspace{2mm}\\text{dx}",
        solution:"\\displaystyle"+ inverse.question + " + C"};
}
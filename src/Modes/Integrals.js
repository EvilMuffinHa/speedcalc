import { differentiation } from "./Derivatives";
export const FINAL = 4;
export const NAME = "Integration";

export default function integration(levelno) {
    let inverse = differentiation(levelno);
    while (inverse.solution === "0") {
        inverse = differentiation(levelno);
    }
    return {question:"\\int{" + inverse.solution + "}\\hspace{2mm}dx", solution:inverse.question + " + C"};
}
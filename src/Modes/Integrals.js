import differentiation from "./Derivatives";
export const FINAL = 4;
export const NAME = "Integration";

export default function integration(levelno) {
    let inverse = differentiation(levelno);
    return {question:inverse.solution, solution:inverse.question};
}
import addition, { FINAL as additionF, NAME as additionN } from "./Modes/Addition";
import derivative, { FINAL as diffF, NAME as diffN } from "./Modes/Derivatives";
import integration, { FINAL as intF, NAME as intN } from "./Modes/Integrals";


export const modes = [
    [addition, additionF, additionN],
    [derivative, diffF, diffN],
    [integration, intF, intN],
];

import {Coach} from "./Coach";
import {SwimmingCoach} from "./SwimmingCoach";
import {BasketCoach} from "./BasketCoach";

let basketCoach = new BasketCoach();

let swimmingCoach = new SwimmingCoach();

let coaches : Coach[] = [basketCoach, swimmingCoach];

for(let index of coaches) {
    console.log(index.getDailyWorkOut());
}
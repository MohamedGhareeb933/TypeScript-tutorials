
import {Coach} from "./Coach";

export class BasketCoach implements Coach {
    getDailyWorkOut(): string {
        return "do 100 dribbling";
    }
    
}
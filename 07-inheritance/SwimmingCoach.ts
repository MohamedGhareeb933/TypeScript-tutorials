
import {Coach} from "./Coach";

export class SwimmingCoach implements Coach {
    
    getDailyWorkOut(): string {
        return "do 50 meter Catch ";
    }
    
}
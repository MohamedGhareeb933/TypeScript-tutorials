"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwimmingCoach_1 = require("./SwimmingCoach");
var BasketCoach_1 = require("./BasketCoach");
var basketCoach = new BasketCoach_1.BasketCoach();
var swimmingCoach = new SwimmingCoach_1.SwimmingCoach();
var coaches = [basketCoach, swimmingCoach];
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var index = coaches_1[_i];
    console.log(index.getDailyWorkOut());
}

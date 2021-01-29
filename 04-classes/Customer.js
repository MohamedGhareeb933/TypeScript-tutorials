"use strict";
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastname = lastName;
    }
    Object.defineProperty(Customer.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getLastName", {
        get: function () {
            return this.lastname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setFirstName", {
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setLastName", {
        set: function (lastName) {
            this.lastname = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
;
var customer = new Customer("mohamed", "ahmed");
customer.setFirstName = "mohamed";
console.log(customer.getFirstName);
console.log(customer.getLastName);

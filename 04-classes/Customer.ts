class Customer{

    private firstName: string;
    private lastname :string;

    constructor(firstName :string, lastName: string) {
        this.firstName = firstName;
        this.lastname = lastName;
    }

    public get getFirstName(): string {
        return this.firstName;
    }

    public get getLastName() :string {
        return this.lastname;
    }
    set setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    set setLastName(lastName :string) {
        this.lastname = lastName;
    }

};


let customer = new Customer("mohamed", "ahmed");

customer.setFirstName = "mohamed";

console.log(customer.getFirstName);
console.log(customer.getLastName);

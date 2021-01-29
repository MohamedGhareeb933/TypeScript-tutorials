
export class Customer{

    constructor(private firstName :string, 
                private lastName: string) {

                }
    

    public get getFirstName(): string {
        return this.firstName;
    }

    public get getLastName() :string {
        return this.lastName;
    }
    set setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    set setLastName(lastName :string) {
        this.lastName = lastName;
    }

};


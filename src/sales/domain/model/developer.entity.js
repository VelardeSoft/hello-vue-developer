export class Developer {
    constructor(firstname, lastname) {
        this._firstname + firstname;
        this._lastname = lastname;
    }
    get fullname(){
        return `${this._firstname} ${this._lastname}`
    }
}
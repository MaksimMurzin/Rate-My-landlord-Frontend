export class Rental{
    address: string;
    price: number;
    pictureUrl: string;

    constructor(add: string, price: number, pic? : string) {
        this.address = add;
        this.price = price;
        this.pictureUrl = pic
    }

}
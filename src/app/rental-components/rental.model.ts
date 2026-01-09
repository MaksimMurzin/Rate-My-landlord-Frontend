export class Rental{
    id : number;
    address: string;
    price: number;
    pictureUrl: string;

    constructor(id : number,add: string, price: number, pic? : string) {
        this.id = id;
        this.address = add;
        this.price = price;
        this.pictureUrl = pic
    }

}
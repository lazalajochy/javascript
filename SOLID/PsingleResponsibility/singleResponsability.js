class SingleREsponsability{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    getBrand = () => {
        return this.brand;
    };

    getModel = () => {
        return this.model;
    };
}

const singleResponsability = new SingleREsponsability("toyota","mbs155");

console.log(singleResponsability.getBrand());

console.log(singleResponsability.getModel());
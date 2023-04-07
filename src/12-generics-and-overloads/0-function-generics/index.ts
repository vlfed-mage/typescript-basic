class PizzaClass {
    constructor(private name: string, private price: number) {}
}

class CouponClass {
    constructor(private percentages: number) {}
}

class ListClass<T> {
    private list: T[] = [];

    addItem(item: T): void {
        this.list.push(item);
    }

    getList(): T[] {
        return this.list;
    }
}

const list = new ListClass<PizzaClass>();

list.addItem(new PizzaClass('Pepperoni', 16));
console.log(list.getList());

const list2 = new ListClass<CouponClass>();

list2.addItem(new CouponClass(25));
console.log(list2.getList());

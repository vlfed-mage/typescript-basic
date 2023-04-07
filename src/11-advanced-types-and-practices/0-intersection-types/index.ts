interface Order {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe {
    card: string;
    cvc: string;
}

interface PayPal {
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & { name: string } // you can use it even in this way

const orderData: Order = {
    id: 'zs234l',
    amount: 100,
    currency: 'UAH',
};

const orderDataCard: CheckoutCard = {
    ...orderData,
    card: '1111 2222 3333 4444',
    cvc: '123',
};

const orderDataPayPal: CheckoutPayPal = {
    ...orderData,
    email: 'abc@def.com',
};

const assigned = Object.assign({}, orderData, orderDataCard); // const assigned: Order & Stripe

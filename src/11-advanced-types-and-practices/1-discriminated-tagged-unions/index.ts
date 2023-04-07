interface Order1 {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe1 {
    type: 'stripe';
    card: string;
    cvc: string;
}

interface PayPal1 {
    type: 'paypal';
    email: string;
}

type CheckoutCard1 = Order1 & Stripe1;
type CheckoutPayPal1 = Order1 & PayPal1;
// type CheckoutABC = Order1 & { name: string } // you can use it even in this way

const orderData1: Order1 = {
    id: 'zs234l',
    amount: 100,
    currency: 'UAH',
};

const orderDataCard1: CheckoutCard1 = {
    ...orderData1,
    type: 'stripe',
    card: '1111 2222 3333 4444',
    cvc: '123',
};

const orderDataPayPal1: CheckoutPayPal1 = {
    ...orderData1,
    type: 'paypal',
    email: 'abc@def.com',
};

type Payload = CheckoutCard1 | CheckoutPayPal1;

function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc);
    }

    if (payload.type === 'paypal') {
        console.log(payload.email);
    }
}

checkout(orderDataCard1);
checkout(orderDataPayPal1);

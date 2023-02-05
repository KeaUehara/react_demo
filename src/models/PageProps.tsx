import OrderState from "./OrderState";

export default class PageProps {
    orderState : OrderState;
    onStateUpdate : Function;

    constructor(orderState : OrderState, onStateUpdate : Function) {
        this.orderState = orderState;
        this.onStateUpdate = onStateUpdate;
    }
}
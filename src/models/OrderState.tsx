import OrderType from './OrderType'

interface OrderState {
    orderType: OrderType;
    numPeople: number;
    page: number;
    restaurant: string;
    items: SelectedItems
    totalItems: number
}

interface SelectedItems {
    [key: string]: number
}

export default OrderState
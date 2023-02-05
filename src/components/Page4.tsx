import React, {Component} from 'react';
import PageProps from "../models/PageProps";
import OrderState from "../models/OrderState";
import menus from "../models/menus";
import {Table} from "semantic-ui-react";

export default class Page4 extends Component<PageProps, OrderState> {
    constructor(props: PageProps) {
        super(props);
        this.state = props.orderState;
    }

    render() {
        const {restaurant, orderType, items} = this.state;
        const totalPrice = Object.entries(items)
            .map(([item, quantity]) => menus[orderType][restaurant].menu[item].price * quantity)
            .reduce((a, b) => a + b)

        return <>
            <p>Is this the {orderType.toLowerCase()} that you want to order from {restaurant}?</p>
            <Table unstackable celled textAlign={'center'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {Object.entries(items).map(([item, quantity]) => {
                        return <Table.Row key={item}>
                            <Table.Cell>{item}</Table.Cell>
                            <Table.Cell>{quantity}</Table.Cell>
                            <Table.Cell>{menus[orderType][restaurant].menu[item].price}</Table.Cell>
                        </Table.Row>
                    })}

                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>{totalPrice}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    }
}
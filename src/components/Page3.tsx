import React, {Component} from 'react';
import {Button, Card, Image} from 'semantic-ui-react';
import PageProps from "../models/PageProps";
import OrderState from "../models/OrderState";
import menus from "../models/menus";

export default class Page3 extends Component<PageProps, OrderState> {
    constructor(props: PageProps) {
        super(props);
        const {restaurant, orderType, items, totalItems} = props.orderState;
        const state = props.orderState;

        if (totalItems === 0) {
            Object.keys(menus[orderType][restaurant].menu).forEach(itemName => {
                items[itemName] = 0;
            })
        }

        this.state = state;
    }

    render() {
        const {restaurant, orderType, items} = this.state;

        return <>
            <p>Choose from {restaurant}'s menu:</p>
            <Card.Group centered itemsPerRow={4} doubling textAlign='center'>
                {Object.entries(menus[orderType][restaurant].menu).map(([itemName, itemInfo]) => {
                    return <Card key={itemName}>
                        <Image src={itemInfo.image}/>
                        <Card.Content style={{padding: 0}}>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Header>{itemName}</Card.Header>
                            <Card.Description>Price: {itemInfo.price}</Card.Description>
                            <br/>
                            <Button.Group fluid>
                                <Button secondary icon={'minus'} onClick={this.removeItem(itemName)}/>
                                <Button.Or text={items[itemName]}/>
                                <Button primary icon={'plus'} onClick={this.addItem(itemName)}/>
                            </Button.Group>
                        </Card.Content>
                    </Card>
                })}
            </Card.Group>
        </>
    }

    addItem = (itemName: string) => {
        return () => {
            let {items, totalItems} = this.state
            if (totalItems >= 10) {
                alert("Sorry, you've reached the maximum number of items per-order.")
            } else {
                items[itemName]++
                totalItems++;
                this.setState({items, totalItems})
                this.props.onStateUpdate({items, totalItems})
            }
        }
    }

    removeItem = (itemName: string) => {
        return () => {
            let {items, totalItems} = this.state
            if (items[itemName] === 0) {
                return
            } else {
                items[itemName]--
                totalItems--;
                this.setState({items, totalItems})
                this.props.onStateUpdate({items, totalItems})
            }
        }
    }
}
import React, {Component} from 'react';
import {Grid, Menu} from 'semantic-ui-react';
import PageProps from "../models/PageProps";
import OrderState from "../models/OrderState";
import OrderType from "../models/OrderType";

export default class Page1 extends Component<PageProps, OrderState> {
    constructor(props: PageProps) {
        super(props);
        this.state = props.orderState;
    }

    render() {
        const {orderType, numPeople} = this.state;

        return <Grid columns={2} stackable textAlign='center'>
            <Grid.Column>
                <p>What are you looking to order? (This affects the menus shown later)</p>
                <Menu widths={3}>
                    {[OrderType.Breakfast, OrderType.Lunch, OrderType.Dinner].map(targetOrderType => {
                        return <Menu.Item
                            key={targetOrderType}
                            active={orderType === targetOrderType}
                            onClick={this.setOrderType(targetOrderType)}
                        >{targetOrderType}</Menu.Item>
                    })}
                </Menu>
            </Grid.Column>
            <Grid.Column>
                <p>How many people are you ordering for?</p>
                <Menu widths={10}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((targetNum) => {
                        return <Menu.Item
                            key={targetNum}
                            active={numPeople === targetNum}
                            onClick={this.setNumPeople(targetNum)}
                        >{targetNum}</Menu.Item>
                    })}
                </Menu>
            </Grid.Column>
        </Grid>
    }

    setOrderType = (orderType: OrderType) => {
        return () => {
            this.setState({orderType, items: {}, totalItems: 0, restaurant: ''})
            this.props.onStateUpdate({orderType});
        }
    }

    setNumPeople = (numPeople: number) => {
        return () => {
            this.setState({numPeople})
            this.props.onStateUpdate({numPeople});
        }
    }
}
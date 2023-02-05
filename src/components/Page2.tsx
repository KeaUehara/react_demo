import React, {Component} from 'react';
import {Card, Image} from 'semantic-ui-react';
import PageProps from "../models/PageProps";
import OrderState from "../models/OrderState";
import menus from "../models/menus";

export default class Page2 extends Component<PageProps, OrderState> {
    constructor(props: PageProps) {
        super(props);
        this.state = props.orderState;
    }

    render() {
        const {restaurant, orderType} = this.state;

        return <>
            <p>Here are the restaurants with options for {orderType.toLowerCase()}:</p>
            <Card.Group centered itemsPerRow={4} doubling textAlign='center'>
                {Object.entries(menus[orderType]).map(([restaurantName, restaurantInfo]) => {
                    return <Card fluid raised key={restaurantName}
                                 color={restaurantName === restaurant ? 'green' : undefined}
                                 onClick={this.updateRestaurant(restaurantName)}
                    >
                        <Image src={restaurantInfo.image}/>
                        <Card.Content style={{paddingLeft: 0, paddingTop: 30}}>
                            <Card.Header
                                style={{position: 'absolute', bottom: 10, width: '100%'}}>{restaurantName}</Card.Header>
                        </Card.Content>
                    </Card>
                })}
            </Card.Group>
        </>
    }

    updateRestaurant = (restaurant: string) => {
        return () => {
            this.setState({restaurant})
            this.props.onStateUpdate({restaurant, totalItems: 0, items: {}})
        }
    }
}
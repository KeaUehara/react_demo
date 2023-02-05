import React, {Component} from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import OrderState from "./models/OrderState";
import OrderType from "./models/OrderType";
import Page1 from "./components/Page1";
import Page4 from "./components/Page4";
import Page3 from "./components/Page3";
import Page2 from "./components/Page2";

class App extends Component<any, OrderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            orderType: OrderType.Choose,
            numPeople: 1,
            page: 1,
            restaurant: '',
            items: {},
            totalItems: 0
        };
    }

    render() {
        const {page} = this.state;
        return <Container textAlign={'center'}>
            <br/>
            <Menu compact widths={4}>
                <Menu.Item active={page === 1}>Page 1</Menu.Item>
                <Menu.Item active={page === 2}>Page 2</Menu.Item>
                <Menu.Item active={page === 3}>Page 3</Menu.Item>
                <Menu.Item active={page === 4}>Page 4</Menu.Item>
            </Menu>
            <div style={{marginTop: 30}}>
                {this.uncommonContent()}
            </div>
            <div style={{marginTop: 30}}>
                {page !== 1 ? <Button onClick={this.prevPage}>Prev</Button> : ''}
                {page !== 4 ? <Button positive onClick={this.nextPage}>Next</Button> : ''}
                {page === 4 ? <Button positive onClick={this.submitOrder}>Yeah!</Button> : ''}
            </div>
        </Container>
    }

    uncommonContent = () => {
        switch (this.state.page) {
            case 1:
                return <Page1 onStateUpdate={this.updateState} orderState={this.state}/>
            case 2:
                return <Page2 onStateUpdate={this.updateState} orderState={this.state}/>
            case 3:
                return <Page3 onStateUpdate={this.updateState} orderState={this.state}/>
            case 4:
                return <Page4 onStateUpdate={this.updateState} orderState={this.state}/>
        }
    }

    updateState = (newState: OrderState) => {
        this.setState(newState);
    }


    prevPage = () => {
        const page = this.state.page - 1
        this.setState({page})
    }

    nextPage = () => {
        const currentPage = this.state.page;
        switch (currentPage) {
            case 1:
                if (this.state.orderType !== OrderType.Choose) {
                    this.setState({page: currentPage + 1})
                } else {
                    alert('Must choose a meal type! (Breakfast, Lunch, Dinner)')
                }
                break;
            case 2:
                if (this.state.restaurant !== '') {
                    this.setState({page: currentPage + 1})
                } else {
                    alert('Must choose a restaurant!')
                }
                break;
            case 3:
                const {totalItems, numPeople} = this.state
                if (totalItems >= numPeople) {
                    this.setState({page: currentPage + 1})
                } else {
                    alert(`Must order enough for the registered number of people! (${totalItems}/${numPeople})`)
                }
                break;
        }
    }

    submitOrder = () => {
        console.log(this.state)
    }
}

export default App;

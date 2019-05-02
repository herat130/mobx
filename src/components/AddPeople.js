import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
class AddPeople extends React.Component {

    state = {
        people: null,
    }

    render() {
        return (
            <React.Fragment>
                <input type='text' onChange={e => this.setState({people:e.currentTarget.value})}/>
                <button onClick={() =>this.props.store.peopleStore.addPeople(this.state.people)}>Submit</button>
            </React.Fragment>
        )
    }

}

export default AddPeople;
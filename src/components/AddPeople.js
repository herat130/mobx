import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
class AddPeople extends React.Component {

    state = {
        people: null,
    }

    render() {
        const { store } = this.props;
        return (
            <div style={{ backgroundColor: store.pagePropertiesStore.colorNode }}>
                <input type='text' onChange={e => this.setState({ people: e.currentTarget.value })} />
                <button onClick={() => this.props.store.peopleStore.addPeople(this.state.people)}>Submit</button>
            </div>
        )
    }

}

export default AddPeople;
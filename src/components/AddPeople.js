import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class AddPeople extends React.Component {

    state = {
        people: null,
    }

    componentDidMount(){
        this.props.store.peopleStore.getDataFromAPI();
    }

    render() {
        const { store } = this.props;
        const allAPIPeople =store.peopleStore.apiPeople.map((v,i) =>{
            return <li key={i}>{v.name}</li>
        });
        return (
            <div style={{ backgroundColor: store.pagePropertiesStore.colorNode }}>
                <input type='text' onChange={e => this.setState({ people: e.currentTarget.value })} />
                <button onClick={() => store.peopleStore.addPeople(this.state.people)}>Submit</button>
                <br/>
                <b>List from an API</b>
                <div>
                    {allAPIPeople}
                </div>
                <br/>
                <b>Resize Window</b>
                <div>
                    {store.pagePropertiesStore.windowWidth}
                </div>
                
            </div>
        )
    }

}

export default AddPeople;
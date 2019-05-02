import React from  'react';
import { inject, observer } from 'mobx-react';
// import {observer} from 'mobx-react';

@inject('store')
@observer
class ListPeople extends React.Component{

    render(){
        const {store}= this.props;
        const allPeopleList = store.peopleStore.people.map((v,i) =>{
            return <p key={i}>{v.name}</p>
        });
        return (
            <div style={{ backgroundColor:store.pagePropertiesStore.colorNode}}>
                <p> total peoples are : {store.peopleStore.peopleCount}</p>
                {allPeopleList}
            </div>
        )
    }

}

export default ListPeople;
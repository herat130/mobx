import React from  'react';
import { inject, observer } from 'mobx-react';
// import {observer} from 'mobx-react';

@inject('store')
@observer
class ListPeople extends React.Component{

    render(){
        const {store}= this.props;
        const allPeopleList = store.people.map((v,i) =>{
            return <p key={i}>{v.name}</p>
        });
        return (
            <React.Fragment>
                <p> total peoples are : {store.peopleCount}</p>
                {allPeopleList}
            </React.Fragment>
        )
    }

}

export default ListPeople;
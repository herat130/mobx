/* eslint-disable no-undef */
import { observable, action, computed } from 'mobx';
import axios from 'axios';
// mobx.configure({ enforceActions: "observed" })

export default class PeopleStore {
    // constructor(rootStore) {
    //     this.rootStore = rootStore
    // }
    @observable people = [{ name: 'herat' }];
    @observable apiPeople = [];
    @action addPeople(people) {
        this.people.push({ name: people });
    }
    @action getDataFromAPI() {
        this.fetchData().then(action('fetchSuccess', data => {
            this.apiPeople =data;
        }))
    }
    @computed get peopleCount() {
        return this.people.length;
    }

    fetchData() {
        return axios.get('http://localhost:8000').then(response => {
            return response.data;
        }).catch(err => {
            console.log('error in fetch' + err);
        })
    }
}


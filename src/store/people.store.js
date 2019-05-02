/* eslint-disable no-undef */
import { observable, action, computed } from 'mobx';


export default class PeopleStore {
    // constructor(rootStore) {
    //     this.rootStore = rootStore
    // }
    @observable people = [{ name: 'herat' }];
    @action addPeople(people) {
        this.people.push({ name: people });
    }
    @computed get peopleCount() {
        return this.people.length;
    }
}


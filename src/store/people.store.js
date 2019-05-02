/* eslint-disable no-undef */
import {decorate, observable, action, computed } from 'mobx';

export default class Store {
    @observable people=[{name:'herat'}];
    @action addPeople(people){
        this.people.push({name:people});
    }
    @computed get peopleCount(){
        return this.people.length;
    }
  }
  

import { observable, action } from 'mobx';
export default class PagePropertiesStore {
    // constructor(rootStore) {
    //     this.rootStore = rootStore
    // }
    @observable colorNode = '#cdcdcd';
    @action setColor(color) {
        this.colorNode = color;
    }
}

import { observable, action } from 'mobx';
export default class PagePropertiesStore {
    @observable colorNode = '#cdcdcd';
    @observable windowWidth;
    constructor(rootStore) {
        this.rootStore = rootStore;
        window.addEventListener('resize', ()=>{
            this.windowWidth = window.innerWidth;
        });
    }

    
    
    @action setColor(color) {
        this.colorNode = color;
    }
}

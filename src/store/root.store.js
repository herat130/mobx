import PeopleStore from "./people.store";
import PagePropertiesStore from "./pageProperty.store";

export default class RootStore{
    constructor(){
        this.peopleStore = new PeopleStore();
        this.pagePropertiesStore= new PagePropertiesStore();
    }
}
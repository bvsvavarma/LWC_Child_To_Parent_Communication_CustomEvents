import { LightningElement } from 'lwc';

export default class ParentCustomEventLwc extends LightningElement {
    displayMessage= false;

    displayMessageHandler(event){
        this.displayMessage = true;
    }
}
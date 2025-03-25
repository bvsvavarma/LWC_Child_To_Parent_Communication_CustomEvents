import { LightningElement } from 'lwc';

export default class ChildCustomEventLwc extends LightningElement {
    clickHandler(){
        //1. Create of Custom Event
        let myCustomEvent = new CustomEvent("displaymsg");

        //2. dispatch the event
        this.dispatchEvent(myCustomEvent);
        
    }
}
import { LightningElement, api } from 'lwc';

export default class ContactItemLwc extends LightningElement {
    @api contact;

    clickHandler(event){
        //prevent the anchor element from navigation
        event.preventDefault();

        const myCustomEvent = new CustomEvent("selection", {
            detail: this.contact.Id
        });

        this.dispatchEvent(myCustomEvent);
    }
}
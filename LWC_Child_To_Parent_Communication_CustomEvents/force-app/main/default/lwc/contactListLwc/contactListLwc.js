import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/contactControllerLwc.getContactList';
export default class ContactListLwc extends LightningElement {
    
    selectedContact;

    @wire(getContactList) contacts;

    selectionHandler(event){
        let selectedContactId = event.detail;
        this.selectedContact = this.contacts.data.find((currItem) => 
            currItem.Id === selectedContactId);
    }
}
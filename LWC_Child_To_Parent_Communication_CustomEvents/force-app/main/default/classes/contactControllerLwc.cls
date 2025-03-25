public with sharing class contactControllerLwc {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        List<Contact> contactList = [SELECT Id, Name, FirstName, LastName, Title, Email, Phone, PhotoUrl 
                                        FROM Contact
                                        WHERE PhotoUrl != null
                                        WITH USER_MODE
                                        LIMIT 10 
                                    ];
        return contactList;
    }
}
@isTest
private class ContactHandlerTest2 {
// test 24 
// // Again test PR
    @isTest
    static void testCreateContact_ValidInput() {
        Test.startTest();
        String result = ContactHandler.createContact('Jane', 'Doe', 'jane.doe@example.com');
        Test.stopTest();
        System.assert(result.contains('Contact created with Id'), 'Expected success message');
    }

    @isTest
    static void testCreateContact_MissingFirstName() {
        Test.startTest();
        String result = ContactHandler.createContact('', 'Doe', 'jane.doe@example.com');
        Test.stopTest();
        System.assertEquals('First and last name are required', result);
    }
//100% test coverage 20 to 38 lines should enabled
  @isTest
    static void testCreateContact_MissingLastName() {
        Test.startTest();
        String result = ContactHandler.createContact('Jane', '', 'jane.doe@example.com');
        Test.stopTest();
        System.assertEquals('First and last name are required', result);
    } 

   /*   @isTest
    static void testCreateContact_DmlException() {
        // Provide invalid data to trigger a DML exception (e.g., email exceeds max length)
        String longEmail = 'a'.repeat(500) + '@example.com';

        Test.startTest();
        String result = ContactHandler.createContact('Jane', 'Doe', longEmail);
        Test.stopTest();

        System.assert(result.startsWith('Error creating contact:'), 'Expected DML error message');
    }
*/
}
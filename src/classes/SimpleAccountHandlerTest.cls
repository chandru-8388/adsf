@IsTest
public class SimpleAccountHandlerTest {
    @IsTest
    static void testUpdateDescription() {
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        // Fetch the updated record
        acc = [SELECT Id, Description FROM Account WHERE Id = :acc.Id];
        System.assertEquals('Created by Trigger', acc.Description);
    }
}
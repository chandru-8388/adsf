@isTest
private class SampleApexControllerTest {

    @isTest
    static void testProcessAccounts() {

        // Arrange: create test data
        List<Account> seed = new List<Account>();
        for (Integer i = 0; i < 5; i++) {
            seed.add(new Account(Name = 'TestAcc ' + i));
        }
        insert seed;

        // Act
        Test.startTest();
        SampleApexController.processAccounts();
        Test.stopTest();

        // Assert: verify 3 accounts inserted by processAccounts()
        List<Account> created = [
            SELECT Id, Name
            FROM Account
            WHERE Name LIKE 'Test %'
        ];
        System.assertEquals(3, created.size(), 'Expected 3 accounts created by processAccounts');

        Set<String> names = new Set<String>();
        for (Account a : created) {
            names.add(a.Name);
        }
        System.assert(names.contains('Test 0'), 'Missing account: Test 0');
        System.assert(names.contains('Test 1'), 'Missing account: Test 1');
        System.assert(names.contains('Test 2'), 'Missing account: Test 2');

        // Assert helper logic (removes duplicate logic violation cleanly)
        System.assertEquals(10, SampleApexController.sumUpTo(5), 'Sum from 0..4 should be 10');
    }
}
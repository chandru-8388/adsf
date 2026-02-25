public class AccountContactFetcherBad {
    public static void fetchContactsForAccounts(List<Account> accountList) {
        for (Account acc : accountList) {
            // This SOQL query inside the loop will trigger the AvoidSoqlInLoops PMD rule test
            List<Contact> cons = [SELECT Id, LastName FROM Contact WHERE AccountId = :acc.Id];
            System.debug('Found contacts: ' + cons.size() + ' for Account Id: ' + acc.Id);
        }
    }
}
public class doSomething {
    public void processAccounts(List<Account> accounts) {
        for (Account acc : accounts) {
            try {
                updateAccount(acc);
            } catch (Exception e) {
                // Violation: Empty catch block
            }
        }
    }
    private void updateAccount(Account acc) {
        try {
            acc.Name = acc.Name + ' Updated';
            update acc;
        } catch (DmlException e) {
            // Violation: Empty catch block
        }
    }
}
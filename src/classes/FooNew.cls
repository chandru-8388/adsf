public class FooNew {
    public void bar() {
        Account acc = [SELECT Name, Owner.Name FROM Account LIMIT 1];
        System.debug(acc); // will get reported
    }

    @SuppressWarnings('PMD.AvoidDebugStatements')
    public void baz() {
        try {
          //  Account myAccount = bar();
            bar();
        } catch (Exception e) {
            System.debug(LoggingLevel.ERROR, e.getMessage()); // good to go
        }
    }
}
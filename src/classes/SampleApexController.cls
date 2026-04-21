public with sharing class SampleApexController {

    // TestVisible so we can assert the logic in unit tests without exposing it publicly
    @TestVisible
    private static Integer sumUpTo(Integer maxExclusive) {
        Integer total = 0;
        for (Integer i = 0; i < maxExclusive; i++) {
            total += i;
        }
        return total;
    }

    public static void processAccounts() {

        // CRUD/FLS safe checks (helps avoid common code scan violations)
        if (!Schema.sObjectType.Account.isAccessible()) {
            return;
        }

        // Single SOQL (no SOQL-in-loop)
        List<Account> accList = [
            SELECT Id, Name
            FROM Account
            WITH SECURITY_ENFORCED
            LIMIT 200
        ];
        System.debug('Fetched accounts: ' + accList.size());

        // Prepare records in-memory
        List<Account> toInsert = new List<Account>();
        for (Integer i = 0; i < 3; i++) {
            toInsert.add(new Account(Name = 'Test ' + i));
        }

        // Single DML (no DML-in-loop)
        if (!toInsert.isEmpty() && Schema.sObjectType.Account.isCreateable()) {
            insert toInsert;
        }

        // No duplicate logic; reuse helper
        Integer sum = sumUpTo(5);
        Integer sum2 = sum; // reuse result instead of recalculating
        System.debug('sum=' + sum + ', sum2=' + sum2);
    }
}
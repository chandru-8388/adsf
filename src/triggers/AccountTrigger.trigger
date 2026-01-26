trigger AccountTrigger on Account (before insert, before update) {
    AccountHandler.processAccounts(Trigger.new);
}
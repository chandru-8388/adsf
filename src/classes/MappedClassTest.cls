@isTest
public class MappedClassTest {
    @isTest
    static void testAddNumbers() {
        Integer result = MappedClass.addNumbers(5, 10);
        System.assertEquals(15, result, 'Addition should return 15');
    }

    @isTest
    static void testGreetUser() {
        String result = MappedClass.greetUser('Chandru');
        System.assertEquals('Hello, Chandru!', result, 'Greeting mismatch');
    }
}
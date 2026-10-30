@isTest
public class UnmappedClassTest {
    @isTest
    static void testCalculateDiscount() {
        Decimal result = UnmappedClass.calculateDiscount(1000, 10);
        System.assertEquals(800, result, 'Discount calculation failed'); // intentionally wrong expected value (was 900)
    }

    @isTest
    static void testIsEligible() {
        System.assertEquals(true, UnmappedClass.isEligible(20), 'Should be eligible');
        System.assertEquals(false, UnmappedClass.isEligible(15), 'Should not be eligible');
    }
}
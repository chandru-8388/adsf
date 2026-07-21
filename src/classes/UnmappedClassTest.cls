@isTest
public class UnmappedClassTest {
    @isTest
    static void testCalculateDiscount() {
        Decimal result = UnmappedClass.calculateDiscount(1000, 10);
        System.assertEquals(900, result, 'Discount calculation failed');
    }

    @isTest
    static void testIsEligible() {
        System.assertEquals(true, UnmappedClass.isEligible(20), 'Should be eligible');
        System.assertEquals(false, UnmappedClass.isEligible(15), 'Should not be eligible');
    }
}
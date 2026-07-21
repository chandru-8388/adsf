public class UnmappedClass {
    public static Decimal calculateDiscount(Decimal price, Decimal discountPercent) {
        return price - (price * discountPercent / 100);
    }

    public static Boolean isEligible(Integer age) {
        return age >= 18;
    }
}
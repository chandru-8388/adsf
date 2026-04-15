public class ContactHandler {
// Demo of Auto Include Dashboard sept
// //test PR
// Again test PR API
    public static String createContact(String firstName, String lastName, String email) {
        if (String.isBlank(firstName) || String.isBlank(lastName)) {
            return 'First and last name are required';
        }

        try {
            Contact con = new Contact(
                FirstName = firstName,
                LastName = lastName,
                Email = email
            );
            insert con;
            return 'Contact created with Id: ' + con.Id;
        } catch (DmlException e) {
            return 'Error creating contact: ' + e.getMessage();
        }
    }
}
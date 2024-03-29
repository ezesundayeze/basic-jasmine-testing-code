describe("Address Book", function() {
  var addressBook, thisContact;

  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });
  
  it(" should be able to add a contact", function() {
    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it("should delete a contact", function() {
    addressBook.deleteContact(thisContact);
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

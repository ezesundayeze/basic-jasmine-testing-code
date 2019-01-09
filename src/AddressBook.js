class AddressBook {
  contacts = [];
  addContact(contact) {
    this.contacts.push(contact);
  }

  getContact(contact) {
    
      return this.contacts[contact]
    
    }

    deleteContact(contact){
        this.contacts.splice(contact, 1)

    }
  }


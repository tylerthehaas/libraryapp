import Ember from 'ember';

export default Ember.Controller.extend({
    isDisabled: true,
    emailAddress: '',
    phoneNumber: '',
    responseMessage: '',
    userQuestion: '',
    isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isPhoneValid: Ember.computed.match('phoneNumber', /^\(\d{3}\)\s\d{3}\s-\s\d{4}$/),
    isQuestionValid: Ember.computed.gte('userQuestion', 5),
    isValid: Ember.computed('emailAddress', 'phoneNumber', 'userQuestion', function(){
        return (this.get('isPhoneValid') && this.get('isEmailValid') && !this.get('isQuestionValid'));
    }),
    actions: {
        saveContact: function(){
            alert(`Saving of the following email address and Phone number is in progress: ${this.get('emailAddress')} ${this.get('phoneNumber')}`);
            this.set('responseMessage', `Thank you! We've just saved your email address and phone number and will get back to you shortly!`);
            this.set('emailAddress', '');
            this.set('phoneNumber', '');
            this.set('userQuestion', '');
        }
    }
});

import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    responseMessage: '',
    headerMessage: 'Coming Soon',
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    actions: {
        saveInvitation: function(){
            var email = this.get('emailAddress');

            var newInvitation = this.store.createRecord('invitation', {email: email});

            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            
            this.set('emailAddress', '');
        }
    }
});

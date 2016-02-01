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

            newInvitation.save().then((response) => {
                console.log(response)
                this.set('responseMessage', `Thank you! We've saved your email address with the following id: ${response.get('id')}`);
                this.set('emailAddress', '');
            }.bind(this));
        }
    }
});

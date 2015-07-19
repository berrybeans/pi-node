function User(u) {
	var self = this;
	if (u == null) {
		self.fname = ko.observable('');
		self.lname = ko.observable('');
		self.delta_number = '';
		self.admin = false;
	} else if (!(u instanceof User)) { //came from ajax
		self.fname = ko.observable(u.fname);
		self.lname = ko.observable(u.lname);
		self.delta_number = u.delta_number;
		self.admin = u.admin;
	}
	self.FullName = ko.computed(function() {
		return self.fname() + ' ' + self.lname();
	}, self);
} 

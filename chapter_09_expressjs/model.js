'use strict';

class Person {
	constructor() {
		this.persons = [
			'Gamma', 'Helm', 'Johnson', 'Forster'
		];
	}

	getPersons() {
		return this.persons;
	}
}

module.exports = Person;
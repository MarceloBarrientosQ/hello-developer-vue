/**
 * Representation a developer with first name and last name
 */

export class Developer {
    #fisrtName;
    #lastName;

    /**
     *
     * The first name and last name are required
     * To create a new instance of Developer
     * @param {string} fisrtName
     * @param {string} lastName
     */
    constructor(fisrtName, lastName) {
        this.#fisrtName = fisrtName;
        this.#lastName = lastName;
    }

    /**
     * Gets the first name of the developer
     * @returns {string}
     */
    get firstName() {
        return this.#fisrtName;
    }

    /**
     * Gets the last name of the developer
     * @returns {string}
     */
    get lastName() {
        return this.#lastName;
    }

    /**
     * Gets the full name of the developer
     * @returns {string}
     */
    get fullName() {
        return this.#fisrtName && this.#lastName
            ? `${this.#fisrtName} ${this.#lastName}`
            : 'Unknown';
    }
}
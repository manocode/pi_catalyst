export class BaseEntity {
    id;
    constructor(id) {
        this.id = id;
    }
    equals(other) {
        if (other === null || other === undefined) {
            return false;
        }
        return this.id === other.id;
    }
}

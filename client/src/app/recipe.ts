export class Recipe {
    constructor(
        public _id: String = '',
        public name: String = '',
        public rating: Number = 0,
        public chef: String = '',
        public ingredients: Array<any> = []
    ) {}
}

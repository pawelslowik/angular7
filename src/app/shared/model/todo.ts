export class Todo {
    constructor(public title: string = '', public description: string = '',
                public endDate: Date = new Date(), public status: string = 'not started') {
    }
}

export class Todo {
    constructor(public id: number, public title: string, public description: string,
                public endDate: Date, public status: string = 'not started') {
    }
}

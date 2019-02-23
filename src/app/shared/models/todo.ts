export class Todo {
    constructor(public id: number, public title: string, public description: string, public endDate: Date) {
    }
}

export const TODO_LIST: Todo[] = [
    new Todo(1, 'Learn Angular', 'Read the manual and prepare a demo project', new Date('2019-04-01')),
    new Todo(2, 'Buy potatoes', 'Pick the best potatoes available!', new Date()),
    new Todo(3, 'Fix the car', 'Go to local car service', new Date('2019-03-01'))
  ];

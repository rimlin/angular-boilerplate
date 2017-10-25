import { IItem } from '../interfaces/item.interface';

export class ItemModel {
    id: number;
    name: string;
    selected?: boolean;

    constructor(item: IItem) {
        this.id = item.id;
        this.name = item.name;
        this.selected = item.selected;
    }
}

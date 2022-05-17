import { Content } from "./content";

export class List {

 static contentCount = 0;
  private _items: Content[];
  constructor(item: Content) {
    this._items = [];
    this._items[0] = item;
    this.addCount();
  }

  get items():Content[] {
    return this._items;
  }
  addCount() {
    return ++List.contentCount;
  }

}

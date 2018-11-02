export class EventModel {
  id: number;
  kinderId: number;
  title: string;
  bodyText: string;
  dateTime?: string;
  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
}

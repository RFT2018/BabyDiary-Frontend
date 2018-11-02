import {UserModel} from './user-model';
import {KidModel} from './kid-model';

export class FamilyModel {
  id: number;
  familyName: string;
  userid: UserModel;
  kidid: KidModel;
}

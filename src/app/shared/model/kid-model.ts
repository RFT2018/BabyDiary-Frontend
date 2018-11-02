import {Sex} from '../enum/sex.enum';
import {FunfactModel} from './funfact-model';

export class KidModel {
  id: number;
  birthday: Date;
  name: string;
  sex: Sex;
  height: string;
  weight: string;
  conception: string;
  funfact: FunfactModel[];
  picture: string;
}

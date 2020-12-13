import {Camera} from './camera';

export class Terminal {
  id: number;
  camera: Array<Camera>;
  // tslint:disable-next-line:variable-name
  iiko_id: string;
  // tslint:disable-next-line:variable-name
  iiko_profile_id: number;
  // tslint:disable-next-line:variable-name
  is_enabled: boolean;
  name: string;
}

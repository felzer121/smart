import {TariffPlan} from './tariff-plan';

export class IikoProfile {
  id: number;
  host: string;
  login: string;
  password: string;
  // tslint:disable-next-line:variable-name
  tariff_plan: TariffPlan;
}

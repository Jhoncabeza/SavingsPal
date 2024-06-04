import { ILoand, ILoandFormData } from "../../types/loand.interface";

export interface LoandModel {
  allLoands: ILoand[];
  currentLoand: ILoandFormData | undefined;
  showFormLoand: boolean;
  loadingLoand: boolean;
  stateLoand: boolean;
}

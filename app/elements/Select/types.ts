import { IOption } from "./Option/types";

export interface ISelect extends IOption {
    placeholder: string,
    label: string;
    value: any[];
    errors: any;
    touched: any
}
import { SyntheticEvent } from "react";

export interface INavLink {
    title: string;
    activeLink: string;
    clickHandler: (event: SyntheticEvent) => void;
}
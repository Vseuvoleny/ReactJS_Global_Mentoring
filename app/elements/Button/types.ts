type ButtonType =
    'button' | 'reset' | 'submit'


export interface IButton {
    clickHandler?: () => void,
    type: ButtonType;
    text: string
}
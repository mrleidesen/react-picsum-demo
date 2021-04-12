export interface NavBarLinkProps {
    to: string;
    title: string;
    key?: string;
}

export interface ButtonProps {
    key?: string;
    type?: 'primary' | 'secondary' | 'warning' | 'disabled';
    children?: any;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
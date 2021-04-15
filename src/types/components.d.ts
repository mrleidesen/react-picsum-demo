import React from "react";

export interface NavBarLinkProps {
    to: string;
    title: string;
    key?: string;
}

export interface ButtonProps {
    key?: string;
    type?: 'primary' | 'secondary' | 'warning' | 'disabled';
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}
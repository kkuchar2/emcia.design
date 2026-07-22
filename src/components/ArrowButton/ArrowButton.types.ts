export interface ArrowButtonProps {
    text: string;
    href?: string;
    title?: string;
    strokeColor?: string;
    /** When true, opens in a new tab. Defaults to true for backwards compatibility. */
    external?: boolean;
}
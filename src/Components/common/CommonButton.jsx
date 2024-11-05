import Button from '@mui/material/Button';
const CommonButton = ({ children, disabled, size, sx, variant }) => {
    return (
        <Button
        color='565656'
            disabled={disabled}
            size={size}
            sx={sx}
            variant={variant}
        >
            {children}
        </Button>
    )
}

export default CommonButton
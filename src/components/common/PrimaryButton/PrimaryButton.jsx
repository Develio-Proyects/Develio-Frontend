import { Button } from "@mui/material"

const PrimaryButton = ({children, Icon, small, link}) => {
  return (
    <Button variant="contained"
    href={link}
    sx={{
        width: small ? 'auto' : '200px',
        marginTop:  small ? '0' : '2rem',
        padding:  small ? 'auto' : '10px 1rem',
        border: '1px solid var(--secundary-background)',
        borderRadius: '5px',
        color: 'var(--darker-secundary)',
        fontWeight: '700',
        backgroundColor: 'var(--secundary-background)',
        '&:hover': {
            backgroundColor: 'var(--secundary-background-hover)',
            borderColor: 'var(--secundary-background-hover)'
        }
    }}
    >
        {children}
        {
            Icon && <Icon sx={{color: 'var(--darker-secundary)'}}/>
        }
    </Button>
  )
}

export default PrimaryButton
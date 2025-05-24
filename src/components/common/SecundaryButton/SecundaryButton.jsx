import { Button } from "@mui/material"

const SecundaryButton = ({children, Icon}) => {
  return (
    <Button variant="outlined"
    sx={{
        width: '200px',
        marginTop: '2rem',
        padding: '10px 1rem',
        borderRadius: '5px',
        border: '2px solid var(--secundary-background)',
        color: 'var(--text)',
        '&:hover': {
            backgroundColor: 'var(--secundary-background)',
            borderColor: 'var(--secundary-background)',
            color: 'var(--secundary)'
        }
    }}
    >
        <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: '5px'
        }}>
            {children}
            {
                Icon && <Icon sx={{color: 'var(--text)'}}/>
            }
        </a>
    </Button>
  )
}

export default SecundaryButton
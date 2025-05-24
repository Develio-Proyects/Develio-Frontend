import './agendar.scss'
import { useState } from 'react';
import { Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Modal from '@mui/material/Modal';

const Agendar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className='agendar-container'>
        <div className="agendar">
            <div className="agendar-titles">
                <h3 className="title">¿Tenés una idea en mente?</h3>
                <p className='text'>Estamos listos para ayudarte a desarrollarla</p>
            </div>
            {/* <Button variant='contained' onClick={handleOpen} sx={{backgroundColor: 'var(--primary)'}}>
                ¡Agenda tu consulta!
            </Button> */}
            <Button variant='contained' sx={{backgroundColor: 'var(--primary)'}}>
                <a href="#contacto">¡Agenda tu consulta!</a>
            </Button>
        </div>
        {/* <Modal open={open}  onClose={handleClose}>
            <div className="modal">
                <h3 className='modal-agendar-title'>Selecciona tu fecha</h3>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar autoFocus={true} />
                </LocalizationProvider>
                <Button variant='contained' sx={{backgroundColor: 'var(--terciary)', margin: '0 1rem 2rem'}}>Solicitar turno</Button>
            </div>
        </Modal> */}
    </section>
  )
}

export default Agendar
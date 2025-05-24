import './contacto.scss';
import { Button, Fade, Slide, Snackbar, TextField } from "@mui/material"
import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const [open, setOpen] = useState(false);
    const form = useRef()
    
    const {handleSubmit, handleChange, handleBlur, touched, values, setValues, errors, isSubmitting} = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Campo obligatorio').max(30),
            email: Yup.string().email('Email invalido').required('Campo obligatorio'),
            message: Yup.string()
        }),
        onSubmit: (values, action) => {
            emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            setOpen(true);
            action.resetForm();
        }
    })
   
    const handleClose = () => {
        setOpen(false);
    }

  return (
    <section id='contacto' className='containerExpanded'>
        <div className="container contacto-cotnainer">
            <div className="contacto-titles">
                <h2 className="title">¡Conéctate con Nosotros Hoy!</h2>
                <p className='text'>Estamos Aquí para Responder tus Preguntas</p>
            </div>
            <form ref={form} onSubmit={handleSubmit} className='contacto-form'>
                <TextField 
                    type="text"
                    name="name"
                    label="Nombre"
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={errors.name && touched.name ? true : false}
                    helperText={errors.name && touched.name && errors.name}
                    className="input"
                />
                <TextField 
                    type="text"
                    name="email"
                    label="Email"
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email && touched.email ? true : false}
                    helperText={errors.email && touched.email && errors.email}
                    className="input"
                />
                <TextField
                    type="text"
                    name="message"
                    label="Mensaje"
                    variant="filled"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className="input textarea"
                />
                <Button type="submit" size="lg" variant="contained" className='submit-btn'
                    sx={{
                    textTransform: 'unset', 
                    borderRadius: '5px',
                    margin: '1rem auto',
                    padding: '.5rem 2rem',
                    fontSize: '18px'  
                }}>
                    Enviar
                </Button>
            </form>
        </div>
        <Snackbar 
            open={open} 
            autoHideDuration={3000} 
            onClose={handleClose} 
            message="¡Correo enviado con éxito!"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            TransitionComponent={(props) => <Slide {...props} direction="left" />} 
            sx={{
                '& .MuiSnackbarContent-root': {
                    backgroundColor: 'var(--text)', 
                    color: 'var(--secundary)', 
                    fontWeight: 'bold'
                }
            }}
        />
    </section>
  )
}

export default Contacto
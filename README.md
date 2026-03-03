# Develio.dev — Landing Page

Landing page oficial de [Develio.dev](https://develio.dev), hosteada en **GitHub Pages**.

Construida con React + Vite.

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables antes de hacer el build:

```env
VITE_PUBLIC_KEY=
VITE_SERVICE_ID=
VITE_TEMPLATE_ID=
```

Los valores de estas variables están documentados en el Drive de Develio.

---

## Deploy en GitHub Pages

El deploy se realiza con el script `deploy` del `package.json`, que primero ejecuta el build y luego publica el contenido de `dist/` en GitHub Pages.

### Requisitos previos

1. Instalar [GitHub CLI](https://cli.github.com/)
2. Autenticarse con el usuario que tiene acceso a la organización de Develio:
   ```bash
   gh auth login
   ```

### Ejecutar el deploy

```bash
npm run deploy
```
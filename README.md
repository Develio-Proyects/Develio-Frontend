# TIP
Para que el proceso siempre ocupe el mismo puerto, matarlo con q + enter. Si no se hace de esta manera el proceso ocupara el puerto hasta reiniciar la PC. Se necesita ocupar siempre el mismo puerto ya que el backend solo le da permiso a lo que viene de localhost:81.

# Environment
VITE_PUBLIC_KEY=  
VITE_SERVICE_ID=  
VITE_TEMPLATE_ID=  
Estas variables tienen que estar en un .env al momento de construir la imagen docker

# Docker
Comandos para generar la imagen que utiliza el server
```bash
docker login
```
```bash
npm run build
```
```bash
docker build --platform linux/amd64 -t tobiasriccone/frontend-develio:latest .
```
```bash
docker push tobiasriccone/frontend-develio:latest
```
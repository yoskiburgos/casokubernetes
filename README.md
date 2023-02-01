# casokubernetes
Despliegue de aplicaciones en Kubernetes mediante Ingress


1. Se cuenta con la imagen : yoskidavid/demoapp:v1 y yoskidavid/demoapp:v2
2. El codigo de la aplicacion de test se encuentra en  "aplicacion"
3. Para realizar el despliegue:
    3.1. Desplegar la carpeta "ingress"; mediante :  kubectl apply -f .
    3.2. Regresar a la carpeta "despliegue". y cargar los archivos en orden con [kubectl apply -f "archivo.yaml"]
4. Usar minikube o Docker Desktop, habiendo instalado kubernetes con anticipación

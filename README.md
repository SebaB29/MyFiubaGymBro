# 🏋️‍♂️ MyFiubaGymBro

**myFiubaGymBro** es una plataforma web desarrollada como trabajo práctico para FIUBA, pensada para ayudar a estudiantes a mantenerse en forma y llevar un registro saludable de sus hábitos. Está compuesta por un backend en **FastAPI**, un frontend en **React + TypeScript**, y una base de datos **PostgreSQL**, todo orquestado con Docker y lista para correr en DevContainers.

---

## 📚 Índice

- [📦 Tecnologías principales](#-tecnologías-principales)
- [🧱 Estructura del proyecto](#-estructura-del-proyecto)
- [⚙️ Requisitos previos](#️-requisitos-previos)
- [🧪 Desarrollo local con DevContainer](#-desarrollo-local-con-devcontainer)
- [🐘 Configuración de la base de datos](#-configuración-de-la-base-de-datos)
- [🛠️ Backend (FastAPI)](#️-backend-fastapi)
- [💻 Frontend (React + Vite)](#-frontend-react--vite)
- [🐳 Docker Compose](#-docker-compose)
- [👥 Integrantes](#-integrantes)

---

## 📦 Tecnologías principales

- 🐍 **Python** + **FastAPI** + **SQLAlchemy**
- 🧠 Arquitectura en capas (routers, dtos, services, repositories)
- 🐘 **PostgreSQL** + **Alembic**
- ⚛️ **React** + **TypeScript** + **Vite**
- 🐳 Docker + Docker Compose
- 🛠️ DevContainer para entorno de desarrollo consistente

---

## 🧱 Estructura del proyecto

```
.
├── .devcontainer/  # Configuración para DevContainer
├── backend/        # Backend FastAPI
├── frontend/       # Frontend React + Vite
├── local-running/  # Scripts para correr con Docker Compose
├── README.md
├── package-lock.json
└── setup.sh
```

---

## ⚙️ Requisitos previos

- [Docker](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/) + extensión **Dev Containers** (opcional pero recomendado)

---

## 🧪 Desarrollo local con DevContainer

1. Abrí el proyecto en VS Code.
2. Si se te solicita, hacé clic en **"Reabrir en contenedor"**.
3. El entorno se levantará automáticamente con:
   - Backend: `http://localhost:8000`
   - Frontend: `http://localhost:8080`

> Si no te aparece la opción, usá `Ctrl+Shift+P → Dev Containers: Reopen in Container`.

---

## 🐘 Configuración de la base de datos

La base PostgreSQL está definida en `docker-compose.yml`.

### Datos de conexión

```
Host: db
Puerto: 5432
Usuario: postgres
Contraseña: secret
Base de datos: myfiubagymbro
```

Agregar en el `.env` del backend:

```env
DATABASE_URL=postgresql://postgres:secret@db:5432/myfiubagymbro
```

---

## 🛠️ Backend (FastAPI)

### Instalación

```bash
cd backend
pip install -r requirements.txt
```

### Correr migraciones

```bash
alembic upgrade head
```

### Crear nueva migración

```bash
alembic revision --autogenerate -m "descripcion"
alembic upgrade head
```

### Ejecutar el servidor

```bash
fastapi run src/main.py --port 8000
```

### Acceder a la API

- Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)

### Tests

```bash
pytest
```

---

## 💻 Frontend (React + Vite)

### Instalación

```bash
cd frontend
npm install
```

### Modo desarrollo

```bash
npm run dev
```

Acceder en [http://localhost:8080](http://localhost:8080)

### Build de producción

```bash
npm run build
npm run preview
```

---

## 🐳 Docker Compose

Si preferís usar Docker Compose directamente (fuera del DevContainer):

```bash
./start.sh   # Inicia todos los servicios
./stop.sh    # Detiene todos los servicios
```

Accesos:

- Frontend: [http://localhost:8080](http://localhost:8080)
- Backend Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 👥 Integrantes

| Nombre                | Usuario de GitHub                                       |
|-----------------------|---------------------------------------------------------|
| Sebastián Brizuela    | [@SebaB29](https://github.com/SebaB29)                  |
| Federico Solari       | [@FedericoSolari](https://github.com/FedericoSolari)    |
| Luciano Gamberale     | [@lucianogamberale](https://github.com/lucianogamberale)|
| Joaquín Velurtas      | [@joaquinvelurtas](https://github.com/joaquinvelurtas)  |
| Santiago Rocco        | [@SantiagoRocco](https://github.com/SantiagoRocco)      |

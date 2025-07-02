# Cognyte

# Cognyte Event Manager

A full-stack project built with **Java Spring Boot**, **PostgreSQL**, and **React + TypeScript** to manage events via a web interface.

---

### Database and Style choices

-Postgres was choosen because its a simple to use database, that runs without issues on the docker.
-The style had was inspired on Cognyte website style, with personal changes.

## 🚀 Features

- Create, edit, delete, and list events
- Start and end date with datepickers
- Status dropdown (Started, Paused, Completed)
- Price input with currency formatting
- Modal confirmation and loading indicators
- Toast notifications for feedback

---

## ✅ Requirements

### Backend

- Java 17 (or Java 21 if updating Gradle accordingly)
- Gradle (optional if using the wrapper)
- Docker & Docker Compose

### Frontend

- Node.js (>= 18) 
- npm or yarn

---

## 📦 Project Structure

```
Cognyte/
├── api/       # Java Spring Boot backend
├── view/      # React + TS frontend
└── docker-compose.yml
```

---

## 🔧 Installation & Setup

### 1. Clone the project

```bash
git https://github.com/paulojnneto/Cognyte.git
cd cognyte-event-manager
```

### 2. Configure `.env`

Confirm that there is a `.env` file in `view/`:

```env
VITE_API_URL=http://localhost:8080/events
```

### 3. Run with Docker (Recommended)

```bash
docker-compose up --build
```

This spins up:

- PostgreSQL (port 5432)
- Spring Boot API (port 8080)
- React Dev Server (port 3000)

---

## 🛠️ Development without Docker (optional)

### Backend

```bash
cd api
./gradlew bootRun
```

### Frontend

```bash
cd view
npm install
npm run dev
```

---

## 🧪 Testing Access

1. Open browser at: `http://localhost:3000`
2. Use the interface to create events.
3. Confirm that API calls are working (via DevTools > Network).

---

## 🐛 Troubleshooting

- If you see errors like `^M: bad interpreter`, run:

```bash
git config --global core.autocrlf input
```

- Ensure `.gitattributes` is forcing `LF` line endings for Unix-based environments.
- In some cases, the api doens't run if the file gradlew is on `CRLF` mode, it can be found on the api, and the mode it is can be seen on the bottom right side of the VSCode
- Ensure `.env` is correctly defined and present.
- Use `docker-compose logs` to debug container output.

---


##  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" width="26"/> Next.js + TypeScript + Redux Toolkit + Axios + Formik + Tailwind CSS

Перед началом не забудьте выполнить установку зависимостей:

```bash
npm install
```
### Инсталляция по порядку:
  
npx create-next-app@latest 08-opal-fe-next --typescript  
npm install formik yup  
npm install @reduxjs/toolkit@latest  
npm install axios clsx tailwind-merge  
npm install react-redux  
  
.env:  
NEXT_PUBLIC_API_URL=BACKEND_URL  

### 🎨 Стилизация с Tailwind CSS

Проект уже настроен с использованием **Tailwind CSS**.
Рекомендуем потратить немного времени на изучение его синтаксиса, чтобы легко и эффективно стилизовать интерфейс.

* Документация: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

### 📡 Работа с API через Axios

Для отправки запросов используется **Axios**.
Глобальная конфигурация уже настроена и находится в папке:

```
/src/lib/axiosInstance.ts
```

✅ Поддержка cookie-based аутентификации .

---

### ⚠️ Обработка ошибок

Пример обработки серверных ошибок можно найти в **authSlice** (`/features/auth/authSlice.ts`).

---

### ✅ Редирект после успешных запросов

Форма регистрации демонстрирует, как выполнять **редирект** после успешного действия:


---

### 🗂️ Структура проекта

#### 📁 `/app/{name}/page.tsx`

Содержит **страницы приложения**, соответствующие маршрутам (routes).

#### 📁 `/components`

Хранятся **переиспользуемые UI-компоненты** и общие визуальные блоки, не относящиеся напрямую к конкретным фичам.

#### 📁 `/features`

Каждая фича (feature) — это **логически изолированная область приложения**:

```
features/
  auth/         # Аутентификация
  projects/     # Проекты
  tasks/        # Таски
```

Внутри каждой фичи:

| Папка       | Назначение                          |
| ----------- | ----------------------------------- |
| `slice.ts`  | Redux slice + бизнес-логика         |
| `services/` | API-запросы, связанные с этой фичей |
| `types.ts`  | Локальные типы для данной фичи      |
| `routes.ts` | Список роутов к бекенду             |

#### 📁 `/types`

Глобальные типы, общие для всего приложения (например, `User`, `Tokens`, `ApiError` и т.д.).

---


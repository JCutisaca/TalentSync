# 🧠 TalentSync — Plataforma de reclutamiento colaborativo con Clerk

> Plataforma que ayuda a equipos de reclutamiento a organizar búsquedas laborales, gestionar candidatos y colaborar internamente usando Clerk como núcleo de autenticación y control de acceso por organizaciones.

## 🚀 Demo

👉 [Ver demo en Vercel](https://talentsync.vercel.app)

> Usuario demo: Podés loguearte con Google gracias a Clerk. Si estás en una organización, podés empezar a crear búsquedas directamente.

## 🧩 ¿Qué hace TalentSync?

- Administra búsquedas laborales creadas por reclutadores o administradores de empresa.
- Los usuarios se agrupan por organizaciones (gracias a Clerk), y cada búsqueda pertenece a una organización.
- Reclutadores pueden mover candidatos entre etapas, agregar preguntas personalizadas y más.
- Clerk maneja completamente la autenticación, roles y gestión de organizaciones.
- El sistema se adapta tanto a reclutamiento IT como general.

## 📸 Capturas

| Página principal de una búsqueda           | Vista de organización                |
| ------------------------------------------ | ------------------------------------ |
| ![search](./public/screenshots/search.png) | ![org](./public/screenshots/org.png) |

## 🛠️ ¿Cómo usamos Clerk?

- **Autenticación con Clerk**: Cada usuario se autentica mediante Clerk. Se utiliza `@clerk/nextjs` con App Router.
- **Organizaciones**: TalentSync usa las _organizations_ de Clerk para agrupar usuarios. Solo usuarios dentro de una misma organización pueden ver/crear búsquedas compartidas.
- **Roles**: Se reconoce al administrador de la empresa (admin) y reclutadores mediante los roles dentro de la organización.
- **Protección de rutas**: Las rutas están protegidas por `auth()` y `currentUser()` de Clerk.
- **Acceso a `userId` y `organizationId`**: Se usa `auth()` para extraer `userId` y `orgId` en el backend al momento de crear o leer búsquedas.

## ⚙️ Tecnologías

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **PostgreSQL**
- **Clerk (auth + organizations)**
- **Vercel**

## 📂 Repositorio

Este es el repositorio público del proyecto:

🔗 [https://github.com/jhonathan-dev/talentsync](https://github.com/jhonathan-dev/talentsync)

Incluye todo el código fuente, instrucciones y documentación adicional.

## 📜 Requisitos cumplidos

- ✅ Proyecto original e inédito (sin usuarios ni uso previo)
- ✅ Uso notorio de Clerk (auth, roles, organizations)
- ✅ Proyecto publicado con demo funcional
- ✅ Repositorio público con documentación
- ✅ Presentado en issue pública con plantilla completa

---

Si querés probar el proyecto o sumarte a la conversación, ¡te esperamos!

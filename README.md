This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Bookstore CRUD - Parcial 1

## Arquitectura de la solución

Dentro de la carpeta `app/` se encuentran las páginas principales:

* `/authors/favoritos` muestra los autores marcados como favoritos.

Los componentes reutilizables, como `AuthorForm` y `AuthorList`, están en `components/`.

La lógica de negocio como el manejo de estado global (`FavoritesContext`) está en su propia carpeta y `contexts/`

Esta arquitectura favorece la separación de responsabilidades: las páginas controlan la navegación, los componentes renderizan la interfaz y contextos encapsulan la lógica de estado y conexión con la API.

---

## Parte B – Accesibilidad

La opción implementada fue  **Accesibilidad** .

Las mejoras incluidas son:

* Navegación con teclado (todos los botones y enlaces son accesibles mediante `Tab`).
* Uso de atributos  **ARIA** :
  * `aria-label` en botones de acciones (eliminar, favoritos).
  * `aria-pressed` en el botón de favoritos para indicar el estado.
  * `aria-invalid` y `aria-describedby` en inputs con validación.
* Mensajes de error se muestran con `role="alert"` para que los lectores de pantalla los detecten.

**Validación:**

Puedes usar el teclado para recorrer la aplicación, verificar que los botones indiquen su propósito con `aria-label` y que los campos vacíos en el formulario muestren mensajes de error accesibles.

---

## Instrucciones de ejecución

### Frontend

1. Instalar dependencias:

   <pre class="overflow-visible!" data-start="2402" data-end="2431"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
   </span></span></code></div></div></pre>
2. Levantar la aplicación:

   <pre class="overflow-visible!" data-start="2462" data-end="2491"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
   </span></span></code></div></div></pre>
3. Acceder en el navegador:

   [http://localhost:3000](http://localhost:3000)

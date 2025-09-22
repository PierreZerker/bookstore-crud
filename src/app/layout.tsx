import { FavoritesProvider } from "@/contexts/FavoritesContext";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav>
          <Link href="/authors">Autores</Link> |{" "}
          <Link href="/crear">Crear Autor</Link> |{" "}
          <Link href="/favoritos">Autores Favoritos</Link>
        </nav>
        <main>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </main>
      </body>
    </html>
  );
}

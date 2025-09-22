"use client";

import Link from "next/link";
import { useAuthors } from "../hooks/useAuthors";
import { useFavorites } from "../contexts/FavoritesContext";

export default function AuthorList({onlyFavorites = false} : {onlyFavorites?: boolean}) {
  const { authors, deleteAuthor } = useAuthors();
  const { favorites, toggleFavorite } = useFavorites();

  const list = onlyFavorites ? favorites : authors;


  return (
    <ul>
      <h1>Autores</h1>
        {list.map((a) => {
          const isFav = favorites.some((f) => f.id === a.id);
          return (
            <details>
                <summary aria-label={`Información del autor ${a.name}`}>
                    <article>
                      <img src={a.image} alt={a.name} width={80} />
                      <h2>{a.name}</h2> / {a.birthDate}
                    </article>
                </summary>
                <p>{a.description}</p>
                <Link href={`/authors/${a.id}`}> ✏️ Editar </Link>
                <button 
                  onClick={() => deleteAuthor(a.id!)}
                  aria-label={`Eliminar autor ${a.name}`}
                > 🗑 Eliminar  </button>
                <button
                  onClick={() => toggleFavorite(a)}
                  aria-label={`Marcar ${a.name} como favorito`}
                  aria-pressed={isFav}
                >
                   {isFav ? " ⭐ Favorito " : " ☆ Marcar favorito "}
                </button>
            </details>
        )
      })}
    </ul>
  );
}

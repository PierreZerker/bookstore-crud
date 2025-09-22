"use client";

import Link from "next/link";
import { useAuthors } from "../hooks/useAuthors";

export default function AuthorList() {
  const { authors, deleteAuthor } = useAuthors();

  return (
    <>
      <h1>Autores</h1>
        {authors.map((a) => (
            <details>
                <summary>
                    <img src={a.image} alt={a.name} width={80} />
                    <h2>{a.name}</h2> - {a.birthDate}
                </summary>
                <p>{a.description}</p>
                <Link href={`/authors/${a.id}`}>✏️ Editar</Link>
                <button onClick={() => deleteAuthor(a.id!)}>🗑 Eliminar</button>
            </details>
        ))}
    </>
  );
}

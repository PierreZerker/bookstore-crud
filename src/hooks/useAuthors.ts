

import { useEffect, useState } from "react";
import axios from "axios";
import { Author } from "../types/author";

export function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/authors")
      .then(res => setAuthors(res.data));
  }, []);

  const createAuthor = async (author: Author) => {
    const res = await axios.post("http://127.0.0.1:8080/api/authors", author);
    setAuthors([...authors, res.data]);
  };

  const updateAuthor = async (id: number, updated: Author) => {
    await axios.put(`http://127.0.0.1:8080/api/authors/${id}`, updated);
    setAuthors(authors.map(a => (a.id === id ? updated : a)));
  };

  const deleteAuthor = async (id: number) => {
    await axios.delete(`http://127.0.0.1:8080/api/authors/${id}`);
    setAuthors(authors.filter(a => a.id !== id));
  };

  return { authors, createAuthor, updateAuthor, deleteAuthor };
}

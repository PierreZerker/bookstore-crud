"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Author } from "../types/author";
import axios from "axios";

interface Props {
  initialData?: Author;
}

export default function AuthorForm({ initialData }: Props) {
  const [form, setForm] = useState<Author>(
    initialData || { name: "", birthDate: "", description: "", image: "" }
  );
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.id) {
      await axios.put(`http://127.0.0.1:8080/api/authors/${form.id}`, form);
    } else {
      await axios.post("http://127.0.0.1:8080/api/authors", form);
    }
    router.push("/authors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
      <input name="birthDate" value={form.birthDate} onChange={handleChange} placeholder="Fecha de nacimiento" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Descripción" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="URL Imagen" />
      <button type="submit">{form.id ? "Guardar cambios" : "Crear autor"}</button>
    </form>
  );
}

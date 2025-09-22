"use client";

import { useState, FormEvent, ChangeEvent, FocusEvent } from "react";
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
  const [errors, setErrors] = useState<Partial<Record<keyof Author, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Author, boolean>>>({});
  const router = useRouter();

  const validateField = (name: keyof Author, value: string) => {
    let error = "";
    if (!value.trim()) {
      switch (name) {
        case "name":
          error = "El nombre es obligatorio";
          break;
        case "birthDate":
          error = "La fecha de nacimiento es obligatoria";
          break;
        case "description":
          error = "La descripción es obligatoria";
          break;
        case "image":
          error = "La URL de la imagen es obligatoria";
          break;
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof Author]) {
      validateField(name as keyof Author, value);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name as keyof Author, value);
  };

  const validateAll = () => {
    const newErrors: Partial<Record<keyof Author, string>> = {};
    const newTouched: Partial<Record<keyof Author, boolean>> = {};
  
    if (!form.name) {
      newErrors.name = "El nombre es obligatorio";
      newTouched.name = true;
    }
    if (!form.birthDate) {
      newErrors.birthDate = "La fecha de nacimiento es obligatoria";
      newTouched.birthDate = true;
    }
    if (!form.description) {
      newErrors.description = "La descripción es obligatoria";
      newTouched.description = true;
    }
    if (!form.image) {
      newErrors.image = "La URL de la imagen es obligatoria";
      newTouched.image = true;
    }
  
    setErrors(newErrors);
    setTouched((prev) => ({ ...prev, ...newTouched }));
  
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      birthDate: true,
      description: true,
      image: true,
    });
  
    if (!validateAll()) return;
  
    if (form.id) {
      await axios.put(`http://127.0.0.1:8080/api/authors/${form.id}`, form);
    } else {
      await axios.post("http://127.0.0.1:8080/api/authors", form);
    }
    router.push("/authors");
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Nombre"
        aria-invalid={!!errors.name}
        aria-describedby="name-error"
      />
      <br />
      {touched.name && errors.name && (
        <p id="name-error" role="alert" style={{ color: "red" }}>
          {errors.name}
        </p>
      )}
<br />
      <label htmlFor="birthDate">Fecha de nacimiento:</label>
      <input
        id="birthDate"
        name="birthDate"
        value={form.birthDate}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="AAAA-MM-DD"
        aria-invalid={!!errors.birthDate}
        aria-describedby="birthDate-error"
      />
      <br/>
      {touched.birthDate && errors.birthDate && (
        <p id="birthDate-error" role="alert" style={{ color: "red" }}>
          {errors.birthDate}
        </p>
      )}

      <br/>
      <label htmlFor="description">Descripción:</label>
      <input
        id="description"
        name="description"
        value={form.description}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Descripción"
        aria-invalid={!!errors.description}
        aria-describedby="description-error"
      />
      <br/>
      {touched.description && errors.description && (
        <p id="description-error" role="alert" style={{ color: "red" }}>
          {errors.description}
        </p>
      )}

<br/>
      <label htmlFor="image">Imagen:</label>
      <input
        id="image"
        name="image"
        value={form.image}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="URL de la imagen"
        aria-invalid={!!errors.image}
        aria-describedby="image-error"
      />
      <br/>
      {touched.image && errors.image && (
        <p id="image-error" role="alert" style={{ color: "red" }}>
          {errors.image}
        </p>
      )}

      <br />
      <button type="submit">
        {form.id ? "Guardar cambios" : "Crear autor"}
      </button>
    </form>
  );
}

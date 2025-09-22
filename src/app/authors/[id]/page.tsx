import axios from "axios";
import { Author } from "../../../types/author";
import AuthorForm from "../../../components/AuthorForm";

interface Props {
  params: { id: string };
}

export default async function EditAuthorPage({ params }: Props) {
  const id = params.id;

  const res = await axios.get<Author>(`http://127.0.0.1:8080/api/authors/${id}`);
  const author = res.data;

  return (
    <div>
      <h1>Editar autor</h1>
      <AuthorForm initialData={author} />
    </div>
  );
}

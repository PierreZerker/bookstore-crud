import AuthorForm from "../../../components/AuthorForm";
import axios from "axios";
import { Author } from "../../../types/author";

interface Props {
  params: { id: string };
}

export default async function EditAuthorPage({ params }: Props) {
  const res = await axios.get<Author>(`http://127.0.0.1:8080/api/authors/${params.id}`);
  const author = res.data;

  return (
    <div>
      <h1>Editar Autor</h1>
      <AuthorForm initialData={author} />
    </div>
  );
}

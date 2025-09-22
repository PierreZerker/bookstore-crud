import AuthorList from "../../components/AuthorList";

export default function FavoritosPage() {
  return (
    <div>
      <h1>Autores Favoritos</h1>
      <AuthorList onlyFavorites />
    </div>
  );
}

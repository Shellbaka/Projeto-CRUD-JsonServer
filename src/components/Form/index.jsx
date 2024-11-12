import "./styles.css";
import { useForm } from "react-hook-form";

export function Form({title, textButton}) {
  
  const {register, handleSubmit, reset} = useForm ()
  function handleCreatedPost (data) {
    console.log("Post criado!!!" , data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreatedPost)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")}/>
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")}/>
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" />
      </div>

      <button>{textButton}</button>
    </form>
  );
}

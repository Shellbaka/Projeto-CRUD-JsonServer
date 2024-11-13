import "./styles.css";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdDescription } from "react-icons/md";

const postSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  content: yup.string().required(),
});

export function Form({ title, textButton }) {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(postSchema),
  });
  function handleCreatePost(data) {
    api.post("./posts", data);
    console.log("Criado com sucesso");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")} />
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")} />
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")} />
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}

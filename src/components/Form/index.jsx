import "./styles.css";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdDescription } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const postSchema = yup.object({
  title: yup.string().required('Informe um título'),
  description: yup.string().required('Acrescente uma descrição'),
  content: yup.string().required('Coloque o conteúdo'),
});

export function Form({ title, textButton }) {

  const navigate=useNavigate();

  const { register, handleSubmit, reset, formState:{errors} } = useForm({
    resolver: yupResolver(postSchema),
  });
  function handleCreatePost(data) {
    api.post("./posts", data);
    console.log("Criado com sucesso");
    navigate('/');
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")} />
        {errors.title?.message}
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")} />
        {errors.description?.message}
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")} />
        {errors.content?.message}
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}

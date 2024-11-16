import "./styles.css";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const postSchema = yup.object({
  title: yup.string().required("Informe um título"),
  description: yup.string().required("Acrescente uma descrição"),
  content: yup.string().required("Coloque o conteúdo"),
});

export function Form({ title, textButton, onAction }) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  async function getDataUpdate() {
    const response = await api.get(`/posts/${id}`);
    reset(response.data);
  }

  useEffect(() => {
    getDataUpdate();
  }, []);

  return (
    <form onSubmit={handleSubmit(onAction)}>
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

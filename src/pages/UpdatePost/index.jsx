import { Form } from "../../components/Form";
import { useParams } from "react-router-dom";
import{api} from '../../lib/axios';
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

export function UpdatePost() {

  const navigate = useNavigate();

  const { id } = useParams();

  function handleUpdatePost(data) {
    api.put(`/posts/${id}`, data);
    console.log("Editado com sucesso");
    navigate('/');
  }

  return (
    <div>
      <Form title={"Editar Publicação"} textButton={"Editar"} onAction={handleUpdatePost} />
    </div>
  );
}

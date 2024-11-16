import { Form } from "../../components/Form";
import "./styles.css";
import {useNavigate} from 'react-router-dom'


export function CreatePost() {

  const navigate = useNavigate();

  function handleCreatePost(data) {
    api.post("./posts", data);
    console.log("Criado com sucesso");
    navigate('/');
    
  }

  return (
    <div>
      <Form title={'Criar Publicação'} textButton={'Criar'} onAction={handleCreatePost} />
    </div>
  );
}

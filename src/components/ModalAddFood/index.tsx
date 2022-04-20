import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IModalAddFoodProps{
  setIsOpen: () => void;
  handleAddFood: (data: any) => void;
  isOpen: boolean;
}

function ModalAddFood({setIsOpen, handleAddFood , isOpen}: IModalAddFoodProps){
  
  const formRef = useRef<any>(null);

  const handleSubmit = async (data: any) => {    
    handleAddFood(data);
    setIsOpen();
  };      

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={(data) => handleSubmit(data)}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalAddFood;
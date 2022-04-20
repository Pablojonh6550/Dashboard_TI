// --CSS--


// --Form--
import Input from '../Input/Input';
import SubmitButton from '../Button/SubmitButton';

function ProjectForm({ buttonText}) {
    

    return (
        <form className="">
                <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" value="" />
                <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o valor total do projeto" value="" />           
               
                <SubmitButton text={buttonText} />
        </form>
    );

}

export default ProjectForm;
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Dashboard</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFNap9BXoLriw/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=9jmpq_G8MpINHjULoLYinhb23r7Rne4MSU1leeQX5xA"
          alt="Craudio"
        />

        <div>
          <strong>Repositório</strong>
          <p>Descrição</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFNap9BXoLriw/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=9jmpq_G8MpINHjULoLYinhb23r7Rne4MSU1leeQX5xA"
          alt="Craudio"
        />

        <div>
          <strong>Repositório</strong>
          <p>Descrição</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFNap9BXoLriw/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=9jmpq_G8MpINHjULoLYinhb23r7Rne4MSU1leeQX5xA"
          alt="Craudio"
        />

        <div>
          <strong>Repositório</strong>
          <p>Descrição</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;

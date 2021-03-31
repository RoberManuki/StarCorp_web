import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { Form, Repositories, Error } from './styles';
import api from '../../services/api';

interface Repository {
  // eslint-disable-next-line camelcase
  full_name: string;
  description: string;
  owner: {
    login: string;
    // eslint-disable-next-line camelcase
    avatar_url: string;
  };
}

const Dashboard: React.FunctionComponent = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o usuário/nome do repositório.');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Repositório não encontrado.');
    }
  }

  async function handleDeleteRepository(repository: Repository): Promise<void> {
    setRepositories(
      repositories.filter(repo => repo.full_name !== repository.full_name),
    );
  }

  return (
    <>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Usuário/Repositório"
        />
        <button type="submit">Adicionar Repositório</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <>
            <button
              type="button"
              onClick={() => handleDeleteRepository(repository)}
            >
              <FiTrash2 color="#621f27" size={20} />
            </button>

            <button type="button" onClick={() => {}}>
              <FiEdit color="#99ad26" size={20} />
            </button>

            <Link
              key={repository.full_name}
              to={`repositories/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          </>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;

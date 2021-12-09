import UserDTO from '../domain/UserDTO';

interface IUsersRepository {
  create(user: UserDTO): Promise<void>;
}

export default IUsersRepository;

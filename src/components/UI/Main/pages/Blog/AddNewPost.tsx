import { UserCardWrapper } from './UserCardWrapper';
import { useUser } from '../../../../context/UsersContext';

export const AddNewPost = () => {
  const { loggedInUser } = useUser();
  if (loggedInUser) {
    return (
      <UserCardWrapper userId={loggedInUser?.id as number}>
        
      </UserCardWrapper>
    );
  }
};

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors/selectors';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My contacts</StyledLink>}
    </>
  );
};

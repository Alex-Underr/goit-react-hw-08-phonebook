import { StyledLink} from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">My contacts</StyledLink>
      <div>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
      </div>
    </>
  );
};
export default Navigation;

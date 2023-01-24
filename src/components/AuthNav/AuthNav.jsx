import { StyledLink } from 'components/Navigation/Navigation.styled';
export const AuthNav = () => {
  return (
    <>
      <div>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
      </div>
    </>
  );
};

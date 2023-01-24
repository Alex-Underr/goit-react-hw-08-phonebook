import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/selectors/selectors';
import { logout } from 'redux/operations/authOperation';
import { StyledBadge } from './UserMenu.Style';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import s from './user.module.css';
export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <>
      <Stack
        direction="row"
        spacing={0.5}
        style={{
          fontFamily: 'Slackey,cursive',
          fontSize: '14px',
          fontWeight: '700',
          marginRight: '3px',
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            alt="User Avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzi0vVrhR-JNyt0_i-saAFskMIe3ggnkWOto8lVkC6jrMlX_p7CHuAQGIiD4xzMgAtiU&usqp=CAU"
            // sx={{ width: 36, height: 36 }}
          />
        </StyledBadge>

        <p
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          Welcome, <span className={s.userColor}>{name}</span>!
        </p>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </Stack>
    </>
  );
}

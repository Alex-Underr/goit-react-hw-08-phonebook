import { ScaleLoader } from 'react-spinners';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import {
  selectIsLoading,
  selectFetchContacts,
  selectError,
} from 'redux/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import styles from 'components/form.module.css';
import { useEffect } from 'react';
import { currentContacts } from 'redux/operations/contactsOperations';

const override = {
  position: 'fixed',
  top: '45%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
};

export default function Contacts() {
  const contacts = useSelector(selectFetchContacts);
  const spinner = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentContacts());
  }, [dispatch]);

  return (
    <div className={styles.formBack}>
      <div className={styles.form}>
        <h1 className={styles.header}>My contacts</h1>
        <ContactForm />
        {spinner && (
          <ScaleLoader
            color="hsla(175, 100%, 37%, 1)"
            height={27}
            margin={4}
            width={4}
            cssOverride={override}
          />
        )}
        {error && (
          <b style={{ color: '#ab0009', textAlign: 'center' }}>{error}</b>
        )}

        <h3>Contacts :</h3>
        <>
          {contacts.length === 0 ? (
            <p>The contact list is empty</p>
          ) : (
            <Filter />
          )}
        </>
        <ContactList />
      </div>
      <NotificationContainer />
    </div>
  );
}

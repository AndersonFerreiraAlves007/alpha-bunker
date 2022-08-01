import React, { useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader'
import PersonalData from '../../components/PersonalData'
import AccountsList from '../../components/AccountsList'
import { useUser } from '../../providers/UserProvider'

export const Profile = () => {

  const { updateBalance } = useUser()

  async function handleProfile() {
    try {
      await updateBalance()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleProfile()
  }, [])

  return (
    <>
      <ProfileHeader />
      <PersonalData/>
      <AccountsList  />
    </>
  );
};

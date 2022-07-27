import React, { ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from '../providers/UserProvider';

import { CreateAccount } from '../pages/CreateAccount';
import { Extract } from '../pages/Extract';
import { Login } from '../pages/Login';
import { MakeDeposit } from '../pages/MakeDeposit';
import { MakeTransfer } from '../pages/MakeTransfer';
import { MakeWithdraw } from '../pages/MakeWithdraw';
import { Profile } from '../pages/Profile';
import { Transaction } from '../pages/Transaction';

interface ChildrenTypes {
  children: ReactElement;
}

const Private = ({ children }: ChildrenTypes) => {
  const { user } = useUser();

  if (!user) {
    return (<Navigate to="/login" />);
  }

  return children;
};

const Public = ({ children }: ChildrenTypes) => {
  const { user } = useUser();

  if (user) {
    return <Navigate to="/extract" />;
  }

  return children;
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route
      path="/login"
      element={
        <Public>
          <Login />
        </Public>
      }
    />
    <Route
      path="/create-account"
      element={
        <Public>
          <CreateAccount />
        </Public>
      }
    />
    <Route
      path="/make-deposit"
      element={
        <Private>
          <MakeDeposit />
        </Private>
      }
    />
    <Route
      path="/extract"
      element={
        <Private>
          <Extract />
        </Private>
      }
    />
    <Route
      path="/make-transfer"
      element={
        <Private>
          <MakeTransfer />
        </Private>
      }
    />
    <Route
      path="/make-withdraw"
      element={
        <Private>
          <MakeWithdraw />
        </Private>
      }
    />
    <Route
      path="/profile"
      element={
        <Private>
          <Profile/>
        </Private>
      }
    />
    <Route
      path="/transaction/:transactionId"
      element={
        <Private>
          <Transaction />
        </Private>
      }
    />
    <Route path="*" element={<h1 className="text-white">Error 404</h1>} />
  </Routes>
);

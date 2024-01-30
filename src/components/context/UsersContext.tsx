import React, { createContext } from 'react';
import { useContext, useEffect, useState } from 'react';

type AddressType = {
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  state: string;
};

type BankType = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type CompanyType = {
  address: AddressType;
  department: string;
  name: string;
  title: string;
};

type HairType = {
  color: string;
  type: string;
};

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairType;
  domain: string;
  ip: string;
  address: AddressType;
  macAddress: string;
  university: string;
  bank: BankType;
  company: CompanyType;
  ein: string;
  ssn: string;
  userAgent: string;
};

type UserContextType = {
  setUsersId: React.Dispatch<React.SetStateAction<number | undefined>>;
  registeredUser: UserType | undefined;
  setRegisteredUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  authenticatedUser: UserType |undefined;
  setAuthenticatedUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
};


const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderType = {
  children: React.ReactNode;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Oops, there is an error with applying context');
  }
  return context;
};

export const UserProvider = ({ children }: UserProviderType) => {
  const [usersId, setUsersId] = useState<number | undefined>();
  const [registeredUser, setRegisteredUser] = useState<UserType | undefined>();
  const [authenticatedUser,setAuthenticatedUser]=useState<UserType | undefined>()

  useEffect(() => {
    if (usersId) {
      fetch(`https://dummyjson.com/users/${usersId}`)
        .then(res => res.json())
        .then(data => setRegisteredUser(data));
    }
  }, [usersId]);

  return <UserContext.Provider value={{ setUsersId, registeredUser, setRegisteredUser,authenticatedUser,setAuthenticatedUser }}>{children}</UserContext.Provider>;
};

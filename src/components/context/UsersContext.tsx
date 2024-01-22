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


  export const emptyUser: UserType = {
    id: 0,
    firstName: '',
    lastName: '',
    maidenName: '',
    age: 0,
    gender: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    birthDate: '',
    image: '',
    bloodGroup: '',
    height: 0,
    weight: 0,
    eyeColor: '',
    hair: {
        color: '',
        type: ''
    },
    domain: '',
    ip: '',
    address: {
        address: '',
        city: '',
        coordinates: {
            lat: 0,
            lng: 0
        },
        postalCode: '',
        state: ''
    },
    macAddress: '',
    university: '',
    bank: {
        cardExpire: '',
        cardNumber: '',
        cardType: '',
        currency: '',
        iban: ''
    },
    company: {
        address: {
            address: '',
            city: '',
            coordinates: {
                lat: 0,
                lng: 0
            },
            postalCode: '',
            state: ''
        },
        department: '',
        name: '',
        title: ''
    },
    ein: '',
    ssn: '',
    userAgent: ''
};
  
  export type UserContextType = {

  }

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

  export const BlogProvider = ({ children }: UserProviderType) => {
    const []=useState()

    // useEffect(() => {
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json())
    //     .then((data) => setCommentsList(data))
    //     .catch(error => console.error('Error fetching comments:', error));
    // }, []);

    return (
      <UserContext.Provider value={{}}>
        {children}
      </UserContext.Provider>
    )
  }
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
  
import { create } from "zustand";

import IAddress from "../model/IAddress";

interface HostState {
  propertyType: string;
  address: IAddress;
  images: any[];
  title: string;
  description: string;
  price: number;
  unitFeature: string[];

  updatePropertyType: (input: string) => void;
  updateAddress: (input: IAddress) => void;
  updateImages: (input: any[]) => void;
  updateTitle: (input: string) => void;
  updateDescription: (input: string) => void;
  updatePrice: (input: number) => void;
  updateUnitFeature: (input: string[]) => void;
}

export const useHostStore = create<HostState>()((set) => ({
  propertyType: "",
  address: {
    country: "",
    postalCode: "",
    unitNo: "",
    aptName: "",
    geo: {
      lat: 0,
      lng: 0,
    },
    street: "",
  },
  images: [],
  title: "",
  description: "",
  price: 0,
  unitFeature: [],

  updatePropertyType: (input) => set(() => ({ propertyType: input })),
  updateAddress: (input) => set(() => ({ address: input })),
  updateImages: (input) => set(() => ({ images: input })),
  updateTitle: (input) => set(() => ({ title: input })),
  updateDescription: (input) => set(() => ({ description: input })),
  updatePrice: (input) => set(() => ({ price: input })),
  updateUnitFeature: (input) => set(() => ({ unitFeature: input })),
}));

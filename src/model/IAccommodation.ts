import EPropertyType from "./EPropertyType";
import IAddress from "./IAddress";
import IUnitFeature from "./IUnitFeature";

export default interface IAccommodation {
  id: string;
  title: string;
  propertyType: EPropertyType;
  price: number;
  description: string;
  rented: boolean;
  unitFeature?: string[];
  address: IAddress;
  availableDate: string;
  images: any[];
  userId: string;
  createdAt: string;
  User: any;
  isSaved?: any;
  savedAccommodationId?: string;
}

import IGeo from "./IGeo";

export default interface IAddress {
  country: string;
  postalCode: string;
  unitNo: string;
  aptName: string;
  addressLine1: string;
  addressLine2: string;
  geo: IGeo;
  street: string;
}

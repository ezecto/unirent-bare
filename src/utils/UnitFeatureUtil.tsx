import IUnitFeature from "../model/IUnitFeature";

export const initialFeatureState: IUnitFeature = {
  airConditioning: false,
  wifi: false,
  cookerHood: false,
  fridge: false,
  washingMachine: false,
  dryer: false,
  nearPublicTransport: false,
  balcony: false,
};

// Define a mapping of feature names to keys
const featureNameToKeyMap: { [key: string]: keyof IUnitFeature } = {
  "Air-Conditioning": "airConditioning",
  WIFI: "wifi",
  "Cooker Hood": "cookerHood",
  Fridge: "fridge",
  "Washing Machine": "washingMachine",
  Dryer: "dryer",
  "Near Public Transport": "nearPublicTransport",
  Balcony: "balcony",
};

// Define a mapping of keys to feature names
const keyToFeatureNameMap: { [key in keyof IUnitFeature]: string } = {
  airConditioning: "Air-Conditioning",
  wifi: "WIFI",
  cookerHood: "Cooker Hood",
  fridge: "Fridge",
  washingMachine: "Washing Machine",
  dryer: "Dryer",
  nearPublicTransport: "Near Public Transport",
  balcony: "Balcony",
};

export const getFeatureLabel = (key: string) => {
  return keyToFeatureNameMap[key];
};

// Function to convert unitFeature to an array of feature names
export const convertUnitFeatureToArray = (unitFeature: IUnitFeature) => {
  return Object.keys(unitFeature)
    .filter((key) => {
      return unitFeature[key as keyof IUnitFeature];
    })
    .map((key) => {
      return keyToFeatureNameMap[key as keyof IUnitFeature];
    });
};

// Function to convert an array of feature names to unitFeature
// Function to convert feature names to unitFeature
export const convertArrayToUnitFeature = (featureNames: string[]) => {
  const unitFeature: IUnitFeature = { ...initialFeatureState };

  for (const featureName of featureNames) {
    const key = featureNameToKeyMap[featureName];
    if (key) {
      unitFeature[key] = true;
    }
  }

  return unitFeature;
};

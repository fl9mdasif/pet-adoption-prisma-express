export type TPetFilterableFields = {
  species?: string | undefined;
  breed?: string | undefined;
  age?: number | undefined;
  size?: string | undefined;
  searchTerm?: string | undefined;
};
export type TPets = {
  name: string;
  species: string;
  breed: string;
  age: number;
  size: string;
  location: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
};

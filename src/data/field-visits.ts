import data from "./field-visits.json";

export type FieldVisitStop = {
  name: string;
  address: string;
  hours?: string;
  typicallyClosed?: string;
  phone?: string;
  website?: string;
  email?: string;
  note?: string;
  extra?: boolean;
};

export type FieldVisitSet = {
  id: string;
  name: string;
  distance: string;
  note: string;
  mapsUrl: string;
  stops: FieldVisitStop[];
};

export type FieldVisitList = {
  home: { address: string };
  sets: FieldVisitSet[];
};

export const fieldVisits = data as FieldVisitList;

export function mapsSearchUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits ? `tel:+1${digits}` : "";
}

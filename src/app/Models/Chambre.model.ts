import { Hotel } from "./Hotel.model";
export interface Chambre {
  id_chambre: number;
  nom: string;
  img: string;
  surface: string;
  nbre_personnes: number;
  id_hotel: number;
  prix: number;
  hotel: Hotel;
}
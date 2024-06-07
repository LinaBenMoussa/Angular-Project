import { Chambre } from "./Chambre.model";
import { Client } from "./Client.model";

export interface Reservation {
    id_client: number;
    dateDebut: Date;
    dateFin: Date;
    id_chambre: number;
    id_reservation: number;
   
  client: Client;


  chambre: Chambre;

}

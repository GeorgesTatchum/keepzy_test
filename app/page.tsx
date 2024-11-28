import { card_items } from "./models/data/card_items";
import Button from "./ui/Button";
import CustomCard from "./ui/CustomCard";
import InputDate from "./ui/InputDate";
import InputSelect from "./ui/InputSelect";
import InputText from "./ui/InputText";
import SideBar from "./ui/SideBar";

export default function Home() {
  return (
    <div className="w-full h-[100dvh] flex">
      <SideBar />
      <div className="px-[5%] flex flex-col w-full overflow-hidden">
        <form className="flex flex-col gap-4 mt-14 w-full">
            <div className="w-auto flex items-center justify-between gap-2">
              <InputText placeholder="Filtrer sur une référence de demande" name="ref_demande"/>
              <InputText placeholder="Filtrer sur une référence de demande" name="ref_demande"/>
            </div>
            <div className="flex gap-2 w-auto">
            <div className="flex flex-col gap-4 flex-1">
              <InputSelect 
                name="pro_status" 
                values={["cdi", "cdd", "stage"]} 
                label="Situatio pro"
              />
              <InputSelect 
                name="location_duration" 
                values={["court terme", "long terme"]} 
                label="Durée de location"
              />
              <InputSelect 
                name="folder_status" 
                values={['complet', 'incomplet', 'rejeté']} 
                label="Statut du dossier"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <InputSelect 
                name="guarantor_type" 
                values={['physique', 'morale']} 
                label="Type de garant"
              />
              <InputDate 
                name="request_date" 
                placeholder="Date de début de location"
              />
              <InputSelect 
                name="folder_type" 
                values={['personnel', 'groupé']} 
                label="type de dossier"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <Button title='filtrer' className="uppercase" onClick={() => {console.log('Archiver');}} />
              <Button title='Réinitialiser les filtres' type="reset" className="capitalize" onClick={() => {console.log('Archiver');}} />
              <InputSelect 
                  name="filter_by" 
                  values={['Trier par date croissante', 'Trier par date croissante']} 
                  label="Trier par ..."
                  icon="/filter_alt.svg"
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-6 items-start mt-4 pt-5 overflow-y-auto pr-2 pb-4 w-full">
            {card_items.map((item, index) => (<><CustomCard item={item} key={item.reference + index}/></>))}
        </div>
      </div>
    </div>
  );
}

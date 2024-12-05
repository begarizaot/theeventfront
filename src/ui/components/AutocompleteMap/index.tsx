import { useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "../InputIcon";

interface AutocompleteMapProps {
  onPlaceSelected: (address: any) => void;
}

export const AutocompleteMap = ({ onPlaceSelected }: AutocompleteMapProps) => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    const loadAutocomplete = () => {
      if (!window.google) {
        console.error("Google Maps JavaScript API no está disponible.");
        return;
      }

      // Inicializa Autocomplete con el input
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["address"],
        }
      );

      // Agrega el evento place_changed
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place && place.geometry) {
          onPlaceSelected(place);
        } else {
          console.warn("No se encontró un lugar válido.");
        }
      });
    };

    loadAutocomplete();
  }, [onPlaceSelected]);
  return (
    <InputIcon icon="pi-map-marker">
      <InputText
        className="py-1 text-white"
        placeholder="Address"
        name="address"
        autoComplete="off"
        ref={inputRef}
      />
    </InputIcon>
  );
};

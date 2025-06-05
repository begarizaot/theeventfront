import { Input } from "antd";
import { useEffect, useRef, useState } from "react";

interface LocationFieldProps {
  value?: string;
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}

export const LocationField = ({
  value,
  onPlaceSelected,
}: LocationFieldProps) => {
  const inputRef = useRef<any>(null);
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    if (!inputRef.current) return;

    const inputEl = inputRef.current.input as HTMLInputElement;
    if (!inputEl) return;

    const autocomplete = new google.maps.places.Autocomplete(inputEl, {
      types: ["establishment", "geocode"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const formattedAddress = place.formatted_address || place.name || "";
      setInputValue(formattedAddress);
      onPlaceSelected(place);
    });
  }, []);

  return (
    <Input
      ref={inputRef}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter Location"
      className="rounded-full! bg-transparent! border-white! text-white!"
      classNames={{
        input: "placeholder-white/20! py-[6px]!",
      }}
      inputMode="text"
      autoComplete="off"
    />
  );
};

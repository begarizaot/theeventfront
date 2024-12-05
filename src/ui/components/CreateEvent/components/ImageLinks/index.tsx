import "./styles.scss";

import { InputIcon } from "../../../InputIcon";
import { InputFileBtn } from "../../../InputFileBtn";

import { InputText } from "primereact/inputtext";

import { useState } from "react";

interface ImageLinksProps {
  data: any;
  inputChange: (ev: any) => void;
  setInput: (data: any) => void;
}

export const ImageLinks = ({
  data,
  inputChange,
  setInput,
}: ImageLinksProps) => {
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setInput({ image: e.target.files[0] });
  }
  return (
    <div className="grid imageLinks">
      <div
        className={`col-12 contImg ${
          file ? "h-15rem sm:h-20rem lg:h-25rem" : "h-8rem sm:h-10rem"
        } flex align-items-center justify-content-center bg-cover bg-top`}
        style={{ backgroundImage: `url(${file})` }}
      >
        {!file && (
          <span className="pi pi-image text-4xl pointer-events-none"></span>
        )}
      </div>

      <div className="col-12 text-center">
        <InputFileBtn handleChange={handleChange} />
      </div>

      <div className="col-12">
        <div className="grid">
          <div className="col-12 flex flex-column">
            <span className="mb-2 text-base">Youtube</span>
            <InputIcon icon="pi-youtube">
              <InputText
                className="py-1 text-white"
                placeholder="https://www.youtube.com/watch?v=..."
                name="youtube_url"
                autoComplete="off"
                required
                value={data.youtube_url}
                onChange={inputChange}
              />
            </InputIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

import "./styles.scss";

import { InputIcon } from "../../../InputIcon";
import { InputFileBtn } from "../../../InputFileBtn";

import { InputText } from "primereact/inputtext";

import { useState } from "react";

export const ImageLinks = () => {
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="grid imageLinks">
      <div
        className={`col-12 contImg ${
          file ? "h-15rem sm:h-20rem lg:h-25rem" : "h-8rem sm:h-10rem"
        } flex align-items-center justify-content-center bg-cover bg-center`}
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
                name="youtube"
                autoComplete="off"
                required
              />
            </InputIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

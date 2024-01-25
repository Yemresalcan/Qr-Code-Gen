import React, { useState, useEffect, useRef } from "react";
import {useTranslation} from "react-i18next";
import { IoQrCodeOutline,IoHeartHalf } from "react-icons/io5";
import { BsQrCodeScan } from "react-icons/bs";

import { MdOutlineColorLens } from "react-icons/md";

import Input from "./components/Input";
import ColorPicker from "./components/ColorPicker";
import SizeSelect from "./components/SizeSelect";
import QrCode from "./components/QrCode";
import i18n from "./i18n";
import data from "./components/ColorPicker/color";
import trFlag from "./assets/tr.png";
import enFlag from "./assets/en.png";
  

function App() {
const {t, i18n} = useTranslation();




  const [value, setValue] = useState("");
  const [back, setBack] = useState("#F3F4F6");
  const [isBack, setIsBack] = useState(false);
  const [fore, setFore] = useState("#000000");
  const [isFore, setIsFore] = useState(false);
  const [size, setSize] = useState(250);
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    setQrValue(value);
  }, [value, back, fore, size]);

  const refBackPicker = useRef(null);
  const refForePicker = useRef(null);

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
  };

  const handleClosePicker = (event) => {
    if (
      refBackPicker.current &&
      !refBackPicker.current.contains(event.target)
    ) {
      setIsBack(false);
    }

    if (
      refForePicker.current &&
      !refForePicker.current.contains(event.target)
    ) {
      setIsFore(false);
    }
  };

  return (

    <div className="w-full min-h-screen max-sm:pr-9" onClick={handleClosePicker}>
     <button onClick={() => i18n.changeLanguage("tr")} className="flag-button"  >
          <img src={trFlag} alt="TR" style={{ width: "70px", height: "45px" }} />
        </button>
        <button onClick={() => i18n.changeLanguage("en")} className="flag-button">
          <img src={enFlag} alt="EN" style={{ width: "70px", height: "45px" }}  />
        </button>



      <div className="max-w-md flex flex-col items-center justify-center min-h-screen mx-auto">
     
          
        <BsQrCodeScan  size={44} className="mb-3 text-black-500 animate-bounce" />
        <h1 className="flex items-center justify-center text-4xl mb-7 text-start  font-semibold text-orange-400">
          {t("QR Kod Oluşturucu")}
     
        </h1>
      
        

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t("Linki Yapıştırın")}
        />

        <ColorPicker
          color="back"
          colors={data.lightColors}
          selectedColor={back}
          onColorChange={(color) => setBack(color.hex)}
          setIsOpen={setIsBack}
          isOpen={isBack}
          refPicker={refBackPicker}
          icon={<MdOutlineColorLens size={22} />}
          placeholder={t("Arka plan rengi")}
        />

        <ColorPicker
          color="fore"
          colors={data.darkColors}
          selectedColor={fore}
          onColorChange={(color) => setFore(color.hex)}
          setIsOpen={setIsFore}
          isOpen={isFore}
          refPicker={refForePicker}
          icon={<MdOutlineColorLens color="white" size={22} />}
          placeholder={t("Ön plan rengi")}
        />

        <SizeSelect value={size} onChange={handleSizeChange} />

        <QrCode qrValue={qrValue} back={back} fore={fore} size={size} />
      </div>
    </div>
  );
}

export default App;

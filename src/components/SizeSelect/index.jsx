import React from "react";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";
const SizeSelect = ({ value, onChange }) => {
  const {t, i18n} = useTranslation();
  return (
    <div className="w-[300px] ml-1 h-16 flex items-center justify-between bg-gray-100 rounded-xl px-4 ">
      <label htmlFor="sizeSelect" className="font-medium">
      {t("QR Kod Boyutu")}
      </label>
      <select
        id="sizeSelect"
        className="p-2 border font-medium border-gray-300 border-none outline-none rounded-md"
        onChange={onChange}
        value={value}
      >
        <option value="200">200</option>
        <option value="400">400</option>
        <option value="600">600</option>
      </select>
    </div>
  );
};

export default SizeSelect;

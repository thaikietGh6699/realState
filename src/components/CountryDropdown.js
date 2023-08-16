import React, { useState, useEffect, useContext } from "react";
import { RiMapPinLine, RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative ">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary"></RiMapPinLine>
        <div className="">
          <div className=" text-[15px] font-medium leading-tight">
            {country}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpLine className="dropdown-icon-secondary"></RiArrowUpLine>
        ) : (
          <RiArrowDownLine className="dropdown-icon-secondary"></RiArrowDownLine>
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;

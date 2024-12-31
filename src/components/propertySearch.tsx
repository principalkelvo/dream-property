"use client"
import { useState } from "react";
import {Dropdown} from "./dropdown"

const dummyData = {
  types: ["House", "Apartment"],
  priceRanges: ["Kes 800 - Kes 1000", "Kes 1200 - Kes 1500", "Kes 1500 - Kes 2000"],
  locations: ["New York", "Los Angeles", "Chicago", "Houston"],
};

interface Filters {
  type: string;
  price: string;
  location: string;
}

export default function PropertySearch() {
  const [filters, setFilters] = useState<Filters>({
    type: "",
    price: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    console.log("Searching with filters:", filters);
  };


  return (
    <form className="sm:flex items-end sm:space-x-4 space-y-4 sm:space-y-0">
      <Dropdown
        id="type"
        name="type"
        label="Type"
        options={dummyData.types}
        value={filters.type}
        onChange={handleChange}
      />

      <Dropdown
        id="price"
        name="price"
        label="Price Range"
        options={dummyData.priceRanges}
        value={filters.price}
        onChange={handleChange}
      />

      <Dropdown
        id="location"
        name="location"
        label="Location"
        options={dummyData.locations}
        value={filters.location}
        onChange={handleChange}
      />

      <button
        type="button"
        onClick={handleSearch}
        className="py-2.5 px-5 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Search Now
      </button>
    </form>
  );
}

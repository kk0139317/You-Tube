import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const DataContext = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState('light'); // default theme

  useEffect(() => {
    const fetchSelectedCaregoryData = async () => {
      setLoading(true);
      const data = await fetchDataFromApi(`search/?q=${selectedCategory}`);
      setSearchResults(data ? data.contents : []);
      setLoading(false);
    };

    fetchSelectedCaregoryData();
  }, [selectedCategory]);

  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(preferredTheme);

    const themeHandler = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', themeHandler);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', themeHandler);
    };
  }, []);

  useEffect(() => {
    const root = document.getElementById("root");
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
        theme,
        setTheme,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

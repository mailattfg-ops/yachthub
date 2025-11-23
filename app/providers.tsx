"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
});

export function ContactProvider({ children }: any) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
    }

    window.addEventListener("open-contact", handleOpen);
    return () => window.removeEventListener("open-contact", handleOpen);
  }, []);

  return (
    <ContactContext.Provider value={{ open, setOpen }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}

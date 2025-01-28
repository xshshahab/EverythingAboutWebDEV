import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const usePasswords = () => {
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const storedPasswords = localStorage.getItem("passwords");
    if (storedPasswords) {
      setPasswordArray(JSON.parse(storedPasswords));
    }
  }, []);

  const savePassword = (form, isEditing, editingId) => {
    if (isEditing) {
      // Update existing password entry
      const updatedPasswords = passwordArray.map((item) =>
        item.id === editingId ? { ...item, ...form } : item
      );
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    } else {
      // Save new password
      const newPassword = { ...form, id: uuidv4() };
      setPasswordArray([...passwordArray, newPassword]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, newPassword])
      );
    }
  };

  const deletePassword = (id) => {
    const updatedPasswords = passwordArray.filter((pass) => pass.id !== id);
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  return {
    passwordArray,
    savePassword,
    deletePassword,
  };
};

export default usePasswords;

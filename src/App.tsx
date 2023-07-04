import { useState } from "react";
import KoderCard from "./components/KoderCard";

export default function App() {
  const [names, setNames] = useState<string[]>([]);
  const [firstName, setName] = useState("");
  const [lastName, setLast] = useState("");

  const AddFullName = () => {
    if (firstName && lastName) {
      const fullName = `${firstName} ${lastName}`;
      setNames([...names, fullName]);
      setName("");
      setLast("");
    } else alert(" Faltan campos por llenar ");
  };

  const HandleFirst = (e) => {
    setName(e.target.value);
  };

  const HandleLast = (e) => {
    setLast(e.target.value);
  };

  function onDelete(indexToDelete: number) {
    names.splice(indexToDelete, 1);
    setNames([...names]);
  }
  return (
    <>
      <header className="flex justify-start ps-10 text-black ">
        <h1 className="font-bold">Lista de Koders</h1>
      </header>
      <main className="flex justify-start ps-5">
        <section className="flex flex-col my-2 gap-3">
          <input
            type="text"
            placeholder="Type first name"
            value={firstName}
            onChange={HandleFirst}
            className=" bg-slate-700 rounded-md text-white"
          ></input>
          <input
            type="text"
            placeholder="Type last name"
            onChange={HandleLast}
            value={lastName}
            className=" bg-slate-700 rounded-md text-white"
          ></input>
          <button
            type="submit"
            onClick={AddFullName}
            className="flex flex-col bg-slate-700 text-center font-medium text-white ps-4"
          >
            ➕Agregar Koder➕
          </button>
        </section>
        <section className="flex flex-row flex-wrap">
          <>
            {names.map((fullName, index) => (
              <KoderCard
                key={index}
                fullName={fullName}
                onToDelete={(index) => onDelete(index)}
              />
            ))}
          </>
        </section>
      </main>
    </>
  );
}

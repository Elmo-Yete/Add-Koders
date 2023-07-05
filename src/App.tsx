import { useState } from "react";
import KoderCard from "./components/KoderCard";
import { Koder } from "./types/common.types";
import { useForm } from "react-hook-form";
import clsx from "clsx";

export default function App() {
  const [names, setNames] = useState<Koder[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Koder>();

  function onSubmit(data: Koder) {
    setNames([
      { firstname: data.firstname, lastname: data.lastname },
      ...names,
    ]);
    reset();
  }

  function onDelete(indexToDelete: number) {
    names.splice(indexToDelete, 1);
    setNames([...names]);
  }

  function empty() {
    setNames([]);
  }
  return (
    <>
      <header className="flex justify-start ps-10 text-black ">
        <h1 className="font-bold">Lista de Koders</h1>
      </header>
      <main className="flex justify-start ps-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col my-2 gap-3"
        >
          <input
            id="text"
            type="text"
            placeholder="Type first name"
            className=" bg-slate-700 rounded-md text-white"
            {...register("firstname", {
              required: { value: true, message: "El nombre es requerido" },
              minLength: {
                value: 3,
                message: "El nombre debe ser mas largo de 3 palabras ",
              },
            })}
          ></input>
          <input
            id="text"
            type="text"
            placeholder="Type last name"
            className=" bg-slate-700 rounded-md text-white"
            {...register("lastname")}
          ></input>
          <button
            type="submit"
            className="flex flex-col bg-slate-700 text-center font-medium text-white ps-4"
          >
            ➕Agregar Koder➕
          </button>
        </form>
        {errors.firstname && <p>{errors.firstname.message}</p>}

        <button className="bg-orange-600" onClick={empty}>
          Delete All
        </button>
        <section className="flex flex-row flex-wrap">
          <>
            {names.map((index) => (
              <KoderCard key={index} onToDelete={(index) => onDelete(index)} />
            ))}
          </>
        </section>
      </main>
    </>
  );
}

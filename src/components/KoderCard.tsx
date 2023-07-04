interface Props {
  fullName: string;
  onToDelete: (index: number) => void;
}

export default function KoderCard(props: Props) {
  function handleDelete() {
    const index = 0;
    props.onToDelete(index);
  }
  return (
    <div className="w-30 px-5">
      <div>
        <img
          src="https://picsum.photos/200"
          className="rounded-lg drop-shadow-2xl"
        ></img>
      </div>
      <div className="text-center flex">
        <h2 className="font-bold flex flex-wrap ">{props.fullName}</h2>
        <button
          onClick={handleDelete}
          className="ps-5 bg-red-600 justify-center"
        >
          X
        </button>
      </div>
    </div>
  );
}

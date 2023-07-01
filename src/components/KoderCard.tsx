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
          className="rounded-lg drop-shadow-2xl"></img>
      </div>
      <div className="text-center">
        <h2 className="font-bold flex flex-wrap ">{props.fullName}</h2>
      </div>
      <button onClick={handleDelete}></button>
    </div>
  );
}

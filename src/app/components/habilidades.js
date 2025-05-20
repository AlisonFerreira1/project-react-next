export default function Habilidades({ icon, nomeh, nivel }) {
  return (
    <div className="flex flex-row w-[100%] justify-between bg-gray-500 p-[1rem] rounded-[0.5rem]">
      <div className="flex flex-row">
        <div>{icon}</div>
        <h1>{nomeh}</h1>
      </div>
      <span>{nivel}</span>
    </div>
  );
}

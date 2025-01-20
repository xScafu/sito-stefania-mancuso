import { Ripple } from "primereact/ripple";

export default function MainButton({ children }) {
  return (
    <>
      <button className="bg-bistre dark:bg-darkPurple text-apricot dark:text-wine px-6 py-2 p-ripple">
        {children}
        <Ripple
          pt={{ root: { style: { background: "rgba(255, 241, 242, 0.3)" } } }}
        />
      </button>
    </>
  );
}

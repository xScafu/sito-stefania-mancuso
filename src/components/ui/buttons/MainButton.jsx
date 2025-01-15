export default function MainButton({ children }) {
  return (
    <>
      <button className="bg-bistre dark:bg-englishViolet text-apricot dark:text-bistre px-6 py-2">
        {children}
      </button>
    </>
  );
}

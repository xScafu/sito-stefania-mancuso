export default function MainButton({ children }) {
  return (
    <>
      <button className="bg-bistre dark:bg-darkPurple text-apricot dark:text-englishViolet px-6 py-2">
        {children}
      </button>
    </>
  );
}

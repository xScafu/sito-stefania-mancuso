export default function HamburgerButton() {
  return (
    <>
      <div>
        <svg className="absolute -ml-1 -mt-1">
          <circle r={25} cx={25} cy={25} className="fill-melon" />
        </svg>
      </div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={1}
          className="inline"
        >
          <line x1={0} x2={40} className="stroke-bistre stroke-2" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={1}>
          <line
            x1={0}
            x2={25}
            className="stroke-bistre stroke-2 relative top-10"
          />
        </svg>
      </div>
    </>
  );
}

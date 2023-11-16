const Tooltip = ({ fill = "#2c3e50", onClick = () => {} }) => {
  return (
    <svg
      onClick={onClick}
      cursor="pointer"
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-help"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={fill}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />{" "}
      <path d="M12 17l0 .01" />{" "}
      <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />{" "}
    </svg>
  );
};

export default Tooltip;

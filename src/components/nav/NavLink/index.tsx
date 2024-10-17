import useDispatch from "../../../hooks/useDispatch";

export default function NavLink({ text = "Sample", target = "sectionId" }) {
  const dispatch = useDispatch();
  const closeHandler = function () {
    dispatch("common", { type: "menuClosed" });
  };
  return (
    <li className="my-5">
      <a
        onClick={closeHandler}
        className="font-baseFont text-[32px] font-semibold text-tp1 hover:text-th cursor-pointer transition-[color] delay-0 ease-in duration-150 "
        href={`#${target}`}
      >
        {text}
      </a>
    </li>
  );
}

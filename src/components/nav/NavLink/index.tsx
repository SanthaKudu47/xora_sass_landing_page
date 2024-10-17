export default function NavLink({ text = "Sample", target = "sectionId" }) {
  return (
    <li className="my-5">
      <a
        className="font-baseFont text-[32px] font-semibold text-tp1 hover:text-th cursor-pointer transition-[color] delay-0 ease-in duration-150 "
        href={target}
      >
        {text}
      </a>
    </li>
  );
}

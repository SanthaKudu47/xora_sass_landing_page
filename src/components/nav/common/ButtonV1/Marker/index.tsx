function Marker({ fill = "#2ef2ff" }: { fill?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="22">
      <path
        fill="#2ef2ff"
        d="M2 0H0v4 14 4h2v-5.75l5.14-4.498a1 1 0 0 0 0-1.505L2 5.75V0z"
      />
    </svg>
  );
}
export default Marker;

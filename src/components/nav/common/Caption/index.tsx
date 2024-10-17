function Caption({ text = "Video editing" }: { text?: string }) {
  return (
    <h4 className="font-baseFont text-[12px] font-semibold text-caption1 uppercase tracking-[0.3rem] mb-4">
      {text}
    </h4>
  );
}

export default Caption;

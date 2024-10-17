function CaptionV1({ text = "Work smarter not harder" }: { text?: string }) {
  return (
    <div>
      <h2 className="font-baseFont text-[32px] lg:text-[48px] text-caption2 font-semibold leading-10 lg:leading-[50px]">{text}</h2>
    </div>
  );
}

export default CaptionV1;

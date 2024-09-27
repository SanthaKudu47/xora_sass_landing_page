function MobileMenu({ isOpened = false }: { isOpened: boolean }) {
  return (
    <>
      {isOpened && (
        <div className="flex w-full  h-screen z-20  overflow-y-hidden bg-p5">
          <div></div>
          <div className="w-[252px] h-[440px] bg-p4 absolute rounded-full blur-[200px] -right-[260px] top-[calc(50%-220px)]"></div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;

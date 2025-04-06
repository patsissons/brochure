import Image from "next/image";

export function DefaultHeader() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10 w-full h-16 bg-base-100/80 border-b border-base-content/50">
      <div className="container mx-auto w-full h-full">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full">
          <Image
            className="justify-self-start rounded-md border border-secondary/50 size-14"
            src="https://picsum.photos/112"
            alt="logo"
            width={112}
            height={112}
          />
          <div className="justify-self-center">name</div>
          <div className="justify-self-end">menu</div>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";

export function Footer() {
  return (
    <div className="relative flex justify-center flex-col items-center mb-1 mt-1">
      <Image
        className="rounded-lg mt-8 opacity-50"
        src={"/logo_footernw.png"}
        alt="Mockup credit Norwe"
        width={100}
        height={17}
      />
    </div>
  );
}

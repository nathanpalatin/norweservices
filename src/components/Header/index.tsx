import Image from 'next/image'

interface HeaderProps {
  title: string
  variant?: boolean
}

export function Header({ title, variant }: HeaderProps) {
  return (
    <div className="relative">
      <Image
        src={'/background_top.png'}
        className="shadow-lg shadow-zinc-700 border-0"
        alt="Header"
        priority
        width={600}
        height={50}
      />
      {!variant ? (
        <h1
          className="text-white
        font-bold
        whitespace-pre-wrap
        text-xl
        absolute left-10 bottom-6
        flex-wrap"
        >
          {title}
        </h1>
      ) : (
        <>
          <h1
            className="text-white
        font-bold
        whitespace-pre-wrap
        text-center absolute
        left-32 bottom-14
        flex-wrap"
          >
            {title}
          </h1>
          <Image
            src={'/ok.png'}
            alt="Header"
            priority
            className="absolute
            left-40 -bottom-10"
            width={80}
            height={80}
          />
        </>
      )}

      {!variant && (
        <Image
          src={'/top_bar.png'}
          alt="Top Bar"
          priority
          className="right-0 -bottom-1 absolute"
          width={260}
          height={30}
        />
      )}
    </div>
  )
}

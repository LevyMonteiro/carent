import Image from 'next/image';

export default function Logo() {
  return (
    <div className='flex items-center w-min'>
      <Image
        src='/carentLogo.png'
        alt='Carent logo'
        width={32}
        height={32}
        className='object-contain'
      />
      <p className='ml-2 font-montserrat font-bold text-3xl italic text-black'>
        Carent
      </p>
    </div>
  );
}

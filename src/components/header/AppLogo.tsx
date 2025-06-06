import logoDark from '@/assets/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';

const AppLogo = () => {
  return (
    <Link href="/" className="w-[200px] relative aspect-5/2">
      <Image
        src={logoDark}
        alt="Low-Ops Platform"
        quality={90}
        fill
        priority
        sizes="200px"
        className="object-contain object-center"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
    </Link>
  );
};

export default AppLogo;

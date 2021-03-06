import Image from 'next/image';

export default function ImageComponent({utilStyles, name}) {
  return (
     <div>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </div>
  )
}
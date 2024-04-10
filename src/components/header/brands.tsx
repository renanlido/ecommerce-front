import Image from 'next/image'

import Calvin from '../../../public/assets/brands/calvin-klein.svg'
import Gucci from '../../../public/assets/brands/gucci.svg'
import Prada from '../../../public/assets/brands/prada.svg'
import Versage from '../../../public/assets/brands/versage.svg'
import Zara from '../../../public/assets/brands/zara.svg'

export function Brands() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6 bg-black px-4 py-10 md:justify-evenly">
      <div className="h-[23px] w-[116px] md:h-[33px] md:w-[166px]">
        <Image src={Versage} alt="Zara" />
      </div>
      <div className="h-[27px] w-[64px] md:h-[38px] md:w-[91px]">
        <Image src={Zara} alt="Zara" />
      </div>
      <div className="h-[26px] w-[110px] md:h-[36px] md:w-[156px]">
        <Image src={Gucci} alt="Zara" />
      </div>
      <div className="h-[21px] w-[127px] md:h-[32px] md:w-[194px]">
        <Image src={Prada} alt="Zara" />
      </div>
      <div className="h-[22px] w-[135px] md:h-[33px] md:w-[206px]">
        <Image src={Calvin} alt="Zara" />
      </div>
    </div>
  )
}

import {useContext} from 'react';

import {motion} from 'framer-motion';
import Image from 'next/image';

import {MenuToggler, RightDrawer} from 'src/components/ui';
import {MAX_PX_FOR_SHOW_NAVBAR} from 'src/constants/common';
import {RightDrawerContext} from 'src/context';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import styles from 'src/styles';

import searchIcon from 'public/common-icons/search.svg';

export function Header() {
  const {width, height} = useWindowDimensions();
  const {isOpen, setNotOpen, setOpen} = useContext(RightDrawerContext);

  const navBarVisible = width <= MAX_PX_FOR_SHOW_NAVBAR;

  return (
    <>
      <motion.nav
        className={`py-4 absolute w-[100vw] z-50 top-0 px-6 bg-[#2a052e]`}
        initial={false}
        custom={height}>
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          <Image
            src={searchIcon}
            alt="search"
            width={40}
            height={40}
            className="w-[24px] h-[24px] object-contain"
          />
          <h2 className="font-extrabold font-abel text-[24px] leading-[30.24px] text-white">
            METAVERSUS
          </h2>

          {navBarVisible ? (
            <MenuToggler
              isOpen={isOpen}
              onPress={isOpen ? setNotOpen : setOpen}
            />
          ) : (
            <div className="w-5" />
          )}
        </div>
        <RightDrawer isOpen={isOpen} />
      </motion.nav>
    </>
  );
}
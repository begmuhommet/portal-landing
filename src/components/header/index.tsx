'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import AppLogo from './AppLogo';
import DocsLink from './DocsLink';
import HeaderNav from './HeaderNav';
import MobileHeaderNav from './MobileHeaderNav';

type TProps = {
  classes?: string;
};

const Header: FC<TProps> = (props) => {
  const { classes } = props;
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Renders
  return (
    <header
      className={cn('absolute top-0 w-full z-50 bg-primary-800', classes)}
    >
      <div className="container">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <AppLogo />
          </div>
          <HeaderNav />
          {!isDesktop && <MobileHeaderNav />}
          <DocsLink />
        </div>
      </div>
    </header>
  );
};

export default Header;

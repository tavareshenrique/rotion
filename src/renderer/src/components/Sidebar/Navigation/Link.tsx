import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { DotsThree } from 'phosphor-react';

import clsx from 'clsx';

interface LinkProps {
  to: string;
  children: ReactNode;
}

export function Link({ children, to }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx(
          'flex items-center text-sm gap-2 text-rotion-100 hover:text-rotion-50 py-1 px-3 rounded group hover:bg-rotion-700',
          {
            'bg-rotion-700': isActive,
          },
        );
      }}
    >
      <span className="flex-1 truncate">{children}</span>

      <div className="flex items-center h-full ml-auto group-hover:visible text-rotion-100">
        <button className="px-px rounded-sm hover:bg-rotion-500">
          <DotsThree weight="bold" className="w-4 h-4" />
        </button>
      </div>
    </NavLink>
  );
}

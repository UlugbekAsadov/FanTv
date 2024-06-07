import { availableRoutes } from '@/utils/mocks/login/routes.mock';

import { DropdownMenuItem } from './ui/dropdown-menu';
import { NavLink } from './ui/link';

interface IProps {
  withIcon?: boolean;
  withActiveBg?: boolean;
  asDropdownItem?: boolean;
}

export const NavLinks = ({
  withIcon = false,
  withActiveBg = false,
  asDropdownItem = false,
}: IProps) => {
  const routes = availableRoutes.map((route, index) => {
    if (route.isHidden) {
      return null;
    }

    if (asDropdownItem) {
      return (
        <DropdownMenuItem key={index} asChild>
          <NavLink href={route.path}>{route.title}</NavLink>
        </DropdownMenuItem>
      );
    }

    return (
      <NavLink key={index} href={route.path} withActiveBg={withActiveBg}>
        {withIcon && route.icon && (
          <route.icon className="h-5 w-5 text-primary" />
        )}
        {route.title}
      </NavLink>
    );
  });
  return routes;
};

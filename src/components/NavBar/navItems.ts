import { INavBarItem, ProjectNavLabels } from '../../portfolioConfig.types';

/**
 * Builds nav items for the current path. On a project detail page, inserts the
 * project label after "Projects" so the top bar shows which case study is open.
 */
export function resolveNavItems(
  items: INavBarItem[],
  pathname: string,
  projectLabels: ProjectNavLabels = {},
): INavBarItem[] {
  const projectTitle = projectLabels[pathname];
  if (!projectTitle) {
    return items;
  }

  const result: INavBarItem[] = [];
  for (const item of items) {
    result.push(item);
    if (item.link === '/projects') {
      result.push({ title: projectTitle, link: pathname });
    }
  }
  return result;
}

export function isNavItemActive(pathname: string, link?: string): boolean {
  if (!link) {
    return false;
  }

  if (link === '/') {
    return pathname === '/';
  }

  // Exact match only — nested project pages use their own nav item.
  if (link === '/projects') {
    return pathname === '/projects';
  }

  return pathname === link;
}

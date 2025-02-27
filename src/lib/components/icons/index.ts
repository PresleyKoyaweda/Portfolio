import type { Icon as LucideIcon } from 'lucide-svelte';
import {
    Loader2,
    Instagram,
    Link,
    X,
    ChevronsUpDown,
    LayoutDashboard,
    ScrollText,
    Users2,
    CircleDollarSign,
    Settings,
    Menu,
    ArrowRight,
    Twitter,
    Github,
    Linkedin,
    Home,
    TriangleAlert
} from 'lucide-svelte';

export type Icon = LucideIcon;

export const Icons = {
    spinner: Loader2,
    camera: Instagram,
    link: Link,
    close: X,
    select: ChevronsUpDown,
    dashboard: LayoutDashboard,
    documents: ScrollText,
    users: Users2,
    dollarCircle: CircleDollarSign,
    settings: Settings,
    menu: Menu,
    arrowRight: ArrowRight,
    twitter: Twitter,
    github: Github,
    linkedin: Linkedin,
    home: Home,
    triangleAlert: TriangleAlert
};

export type IconType = any;
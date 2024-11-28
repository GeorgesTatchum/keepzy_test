import { SideBarItem } from "../types/SideBarItem";

export const side_bar_items: SideBarItem[] = [
    {
        title: 'Mon espace pro',
        icon: '/folder.svg',
        side_item_id: 'pro_space'
    },
    {
        title: 'Mes dossiers archivés',
        icon: '/folder.svg',
        side_item_id: 'archived_folders'
    },
    {
        title: 'Demande envoyée',
        icon: '/add_circle.svg',
        side_item_id: 'sent_request'
    },
    {
        title: 'Mon compte',
        icon: '/settings.svg',
        side_item_id: 'account'
    },
    {
        title: 'Se déconnecter',
        icon: '/logout.svg',
        side_item_id: 'logout'
    }
];
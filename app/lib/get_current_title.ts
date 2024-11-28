export const get_current_title = (side_item_id: string) => {
    switch (side_item_id) {
      case "pro_space":
        return 'Mon espace pro'
      case "archived_folders":
        return 'Mes dossiers archivés'
      case "sent_request":
        return 'Demande envoyée'
      case "account":
        return 'Mon compte'
      case "logout":
        return 'Se déconnecter'
      default:
        break;
    }
  }
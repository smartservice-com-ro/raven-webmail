import { Locale } from "../../types";
 
const locale: Locale = {
  "mailbox": {
    "title": {
      "inbox": "Safata d'entrada",
      "sent": "Enviat",
      "drafts": "Esborranys",
      "trash": "Paperera",
      "junk": "Correu brossa"
    },
    "empty": "Aquesta bústia està buida"
  },
  "message": {
    "labels": {
      "from": "De:",
      "to": "A:",
      "date": "Enviada:"
    }
  },
  "mailboxMessage": {
    "to": "A:"
  },
  "login": {
    "title": "Inicieu la sessió",
    "action": "Inicieu la sessió",
    "labels": {
      "username": "Nom d'usuari",
      "password": "Contrasenya"
    }
  },
  "accountButton": {
    "logout": "Tanca sessió",
    "myAccount": "El meu compte"
  },
  "compose": {
    "labels": {
      "to": "A:",
      "subject": "Assignatura:",
      "cc": "Cc:",
      "bcc": "Cco:"
    },
    "tabs": {
      "newMessageTitle": "Nou missatge"
    }
  },
  "editor": {
    "cmd": {
      "undo": "Desfer",
      "redo": "Rehabilita",
      "fontName": "Tipus de lletra",
      "fontSize": "Mida de la font",
      "bold": "Negre",
      "italic": "Itàlica",
      "underline": "Subratllar",
      "justifyLeft": "Alinear l’esquerra",
      "justifyCenter": "Alinear el centre",
      "justifyRight": "Alinear bé",
      "insertUnorderedList": "Llista",
      "insertOrderedList": "Llista numerada",
      "removeFormat": "Elimina el format"
    },
    "color": {
      "tooltip": "Color",
      "foreColor": "Text",
      "backColor": "Antecedents"
    },
    "upload": {
      "tooltip": "Adjuntar",
      "add": "Afegiu",
      "remove": "Elimina"
    },
    "send": "Envia"
  },
  "selection": {
    "title": [
      "{n} missatges",
      "{n} missatge",
      "{n} missatges"
    ]
  },
  "actions": {
    "backToMailbox": "Torna a la bústia",
    "reload": "Actualització",
    "select": "Selecciona",
    "markAsUnread": "Marca com a no llegit",
    "markAsRead": "Marcar com llegit",
    "moveTo": "Moure's cap a",
    "delete": "Suprimeix",
    "deletePermanently": "Suprimeix-ho definitivament",
    "discardDrafts": "Eliminar els esborranys",
    "markAsSpam": "Marca com a correu brossa",
    "unMarkAsSpam": "Això no és correu brossa",
    "forward": "Endavant",
    "reply": "Respon",
    "attachments": "Arxius adjunts"
  },
  "weekDays": {
    "0": "Diumenge",
    "1": "Dilluns",
    "2": "Dimarts",
    "3": "Dimecres",
    "4": "Dijous",
    "5": "Divendres",
    "6": "Dissabte"
  },
  "months": {
    "0": "Gener",
    "1": "Febrer",
    "2": "Març",
    "3": "Abril",
    "4": "Maig",
    "5": "Juny",
    "6": "Juliol",
    "7": "Agost",
    "8": "Setembre",
    "9": "Octubre",
    "10": "de novembre",
    "11": "Desembre"
  },
  "notifier": {
    "messageSent": "Missatge enviat"
  },
  "drawerActions": {
    "createMailbox": {
      "label": "Carpeta nova",
      "success": "Carpeta creada"
    }
  },
  "dialogs": {
    "createMailbox": {
      "title": "Crea una carpeta nova",
      "label": "Nom de la carpeta",
      "accept": "Crear",
      "cancel": "Cancel · lar"
    }
  },
  "myAccount": {
    "title": "El meu compte",
    "limits": {
      "gbUsed": "{gb} GB",
      "gbTotal": "de {gb} GB",
      "storage": {
        "title": "Emmagatzematge"
      },
      "imapDownload": {
        "title": "Baixada IMAP"
      },
      "imapUpload": {
        "title": "Carrega IMAP"
      },
      "pop3Download": {
        "title": "Baixada POP3"
      }
    }
  }
};

export default locale;
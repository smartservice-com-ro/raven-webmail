import { Locale } from "../../types";
 
const locale: Locale = {
  "mailbox": {
    "title": {
      "inbox": "Pašto dėžutę",
      "sent": "Išsiųsta",
      "drafts": "Juodraščiai",
      "trash": "Šiukšlių dėžė",
      "junk": "Šlamštas"
    },
    "empty": "Ši pašto dėžutė tuščia"
  },
  "message": {
    "labels": {
      "from": "Iš:",
      "to": "Kam:",
      "date": "Išsiųsta:"
    }
  },
  "mailboxMessage": {
    "to": "Kam:"
  },
  "login": {
    "title": "Prisijungti",
    "action": "Prisijungti",
    "labels": {
      "username": "Vartotojo vardas",
      "password": "Slaptažodis"
    }
  },
  "accountButton": {
    "logout": "Atsijungti",
    "myAccount": "Mano sąskaita"
  },
  "compose": {
    "labels": {
      "to": "Kam:",
      "subject": "Tema:",
      "cc": "Kopija:",
      "bcc": "Nematoma kopija:"
    },
    "tabs": {
      "newMessageTitle": "Nauja žinutė"
    }
  },
  "editor": {
    "cmd": {
      "undo": "Anuliuoti",
      "redo": "Perdaryti",
      "fontName": "Šrifto tipas",
      "fontSize": "Šrifto dydis",
      "bold": "Drąsiai",
      "italic": "Kursyvas",
      "underline": "Pabrėžti",
      "justifyLeft": "Sulygiuokite kairę",
      "justifyCenter": "Sulygiuokite vidurį",
      "justifyRight": "Sulygiuokite dešinę",
      "insertUnorderedList": "Sąrašas",
      "insertOrderedList": "Sunumeruotas sąrašas",
      "removeFormat": "Pašalinti formatą"
    },
    "color": {
      "tooltip": "Spalva",
      "foreColor": "Tekstas",
      "backColor": "Bendrosios aplinkybės"
    },
    "upload": {
      "tooltip": "Pritvirtinkite",
      "add": "Papildyti",
      "remove": "Pašalinti"
    },
    "send": "Siųsti"
  },
  "selection": {
    "title": [
      "{n} pranešimai",
      "{n} pranešimas",
      "{n} pranešimai"
    ]
  },
  "actions": {
    "backToMailbox": "Grįžti į pašto dėžutę",
    "reload": "Atnaujinkite",
    "select": "Pasirinkite",
    "markAsUnread": "Pažymėti kaip neskaitytą",
    "markAsRead": "Žymėti kaip skaitytas",
    "moveTo": "Pereiti prie",
    "delete": "Ištrinti",
    "deletePermanently": "Ištrinti visam laikui",
    "discardDrafts": "Išmeskite juodraščius",
    "markAsSpam": "pažymėti kaip šlamštą",
    "unMarkAsSpam": "Tai nėra šlamštas",
    "forward": "Persiųsti",
    "reply": "Atsakyk",
    "attachments": "Priedai"
  },
  "weekDays": {
    "0": "Sekmadienis",
    "1": "Pirmadienis",
    "2": "Antradienis",
    "3": "Trečiadienis",
    "4": "Ketvirtadienis",
    "5": "Penktadienis",
    "6": "Šeštadienis"
  },
  "months": {
    "0": "Sausio mėn",
    "1": "Vasario mėn",
    "2": "Kovas",
    "3": "Balandis",
    "4": "Gegužė",
    "5": "Birželio mėn",
    "6": "Liepa",
    "7": "Rugpjūtis",
    "8": "Rugsėjo mėn",
    "9": "Spalio mėn",
    "10": "Lapkritį",
    "11": "Gruodį"
  },
  "notifier": {
    "messageSent": "Žinutė išsiųsta"
  },
  "drawerActions": {
    "createMailbox": {
      "label": "Naujas aplankas",
      "success": "Sukurtas aplankas"
    }
  },
  "dialogs": {
    "createMailbox": {
      "title": "Sukurkite naują aplanką",
      "label": "Aplanko pavadinimas",
      "accept": "Sukurti",
      "cancel": "Atšaukti"
    }
  },
  "myAccount": {
    "title": "Mano sąskaita",
    "limits": {
      "gbUsed": "{gb} GB",
      "gbTotal": "iš {gb} GB",
      "storage": {
        "title": "Sandėliavimas"
      },
      "imapDownload": {
        "title": "IMAP atsisiųsti"
      },
      "imapUpload": {
        "title": "IMAP įkėlimas"
      },
      "pop3Download": {
        "title": "POP3 atsisiųsti"
      }
    }
  }
};

export default locale;
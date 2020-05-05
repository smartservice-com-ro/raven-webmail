import { Locale } from "../../types";
 
const locale: Locale = {
  "mailbox": {
    "title": {
      "inbox": "Inbox",
      "sent": "Poslano",
      "drafts": "Skice",
      "trash": "Otpad",
      "junk": "Neželjena pošta"
    },
    "empty": "Ovaj poštanski sandučić je prazan"
  },
  "message": {
    "labels": {
      "from": "Od:",
      "to": "Za:",
      "date": "Poslano:"
    }
  },
  "mailboxMessage": {
    "to": "Za:"
  },
  "login": {
    "title": "Prijavite se",
    "action": "Prijavite se",
    "labels": {
      "username": "Korisničko ime",
      "password": "Lozinka"
    }
  },
  "accountButton": {
    "logout": "Odjaviti se",
    "myAccount": "Moj račun"
  },
  "compose": {
    "labels": {
      "to": "Za:",
      "subject": "Predmet:",
      "cc": "Cc:",
      "bcc": "Skr."
    },
    "tabs": {
      "newMessageTitle": "Nova poruka"
    }
  },
  "editor": {
    "cmd": {
      "undo": "Poništi",
      "redo": "Redo",
      "fontName": "Vrsta fonta",
      "fontSize": "Veličina slova",
      "bold": "Hrabro",
      "italic": "Italik",
      "underline": "Podvući",
      "justifyLeft": "Poravnaj ulevo",
      "justifyCenter": "Poravnajte sredinu",
      "justifyRight": "Poravnajte pravo",
      "insertUnorderedList": "Lista",
      "insertOrderedList": "Numerirani popis",
      "removeFormat": "Ukloni format"
    },
    "color": {
      "tooltip": "Boja",
      "foreColor": "Tekst",
      "backColor": "Pozadina"
    },
    "upload": {
      "tooltip": "Priložiti",
      "add": "Dodati",
      "remove": "Uklonite"
    },
    "send": "Pošalji"
  },
  "selection": {
    "title": [
      "{n} poruke",
      "{n} poruka",
      "{n} poruke"
    ]
  },
  "actions": {
    "backToMailbox": "Nazad u poštanski sandučić",
    "reload": "Osvježiti",
    "select": "Odaberite",
    "markAsUnread": "Označi kao pročitano",
    "markAsRead": "Označi kao pročitano",
    "moveTo": "Premjesti u",
    "delete": "Izbriši",
    "deletePermanently": "Trajno izbriši",
    "discardDrafts": "Odbacite skice",
    "markAsSpam": "Označi kao neželjenu poštu",
    "unMarkAsSpam": "Ovo nije neželjena pošta",
    "forward": "Napred",
    "reply": "Odgovori",
    "attachments": "Prilozi"
  },
  "weekDays": {
    "0": "Nedjelja",
    "1": "Ponedeljak",
    "2": "Utorak",
    "3": "Srijeda",
    "4": "Četvrtak",
    "5": "Petak",
    "6": "Subota"
  },
  "months": {
    "0": "Januar",
    "1": "februar",
    "2": "Marta",
    "3": "Aprila",
    "4": "Maja",
    "5": "Jun",
    "6": "Jula",
    "7": "Avgusta",
    "8": "Septembra",
    "9": "Oktobar",
    "10": "Novembra",
    "11": "Prosinca"
  },
  "notifier": {
    "messageSent": "Poruka poslana"
  },
  "drawerActions": {
    "createMailbox": {
      "label": "Nova mapa",
      "success": "Mapa je kreirana"
    }
  },
  "dialogs": {
    "createMailbox": {
      "title": "Kreirajte novu mapu",
      "label": "Naziv mape",
      "accept": "Stvoriti",
      "cancel": "Otkaži"
    }
  },
  "myAccount": {
    "title": "Moj račun",
    "limits": {
      "gbUsed": "{gb} GB",
      "gbTotal": "od {gb} GB",
      "storage": {
        "title": "Skladištenje"
      },
      "imapDownload": {
        "title": "Preuzmite IMAP"
      },
      "imapUpload": {
        "title": "IMAP upload"
      },
      "pop3Download": {
        "title": "Preuzimanje POP3"
      }
    }
  }
};

export default locale;
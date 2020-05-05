import { Locale } from "../../types";
 
const locale: Locale = {
  "mailbox": {
    "title": {
      "inbox": "Inbox",
      "sent": "Sent",
      "drafts": "Skicat",
      "trash": "plehra",
      "junk": "Të bllokuara"
    },
    "empty": "Kjo kuti postare është bosh"
  },
  "message": {
    "labels": {
      "from": "From:",
      "to": "për:",
      "date": "Sent:"
    }
  },
  "mailboxMessage": {
    "to": "për:"
  },
  "login": {
    "title": "Hyni",
    "action": "Hyni",
    "labels": {
      "username": "Emri i përdoruesit",
      "password": "fjalëkalim"
    }
  },
  "accountButton": {
    "logout": "Shenja",
    "myAccount": "Llogaria ime"
  },
  "compose": {
    "labels": {
      "to": "për:",
      "subject": "Subject:",
      "cc": "Cc:",
      "bcc": "Bcc:"
    },
    "tabs": {
      "newMessageTitle": "Mesazh i ri"
    }
  },
  "editor": {
    "cmd": {
      "undo": "Undo",
      "redo": "Redo",
      "fontName": "Lloji i shkronjave",
      "fontSize": "Përmasa e germave",
      "bold": "guximtar",
      "italic": "kursiv",
      "underline": "Underline",
      "justifyLeft": "Rreshtimi majtas",
      "justifyCenter": "Rreshtoni mes",
      "justifyRight": "Rreshto djathtas",
      "insertUnorderedList": "Listë",
      "insertOrderedList": "Lista e numëruar",
      "removeFormat": "Hiq formatin"
    },
    "color": {
      "tooltip": "Ngjyrë",
      "foreColor": "tekst",
      "backColor": "sfond"
    },
    "upload": {
      "tooltip": "Bashkangjit",
      "add": "shtoj",
      "remove": "Hiq"
    },
    "send": "Send"
  },
  "selection": {
    "title": [
      "{n} mesazhe",
      "Mesazh {1",
      "{n} mesazhe"
    ]
  },
  "actions": {
    "backToMailbox": "Kthehu tek kutia postare",
    "reload": "freskoj",
    "select": "zgjedh",
    "markAsUnread": "Shëno si nuk lexohet",
    "markAsRead": "Shëno si të lexuar",
    "moveTo": "Leviz ne",
    "delete": "fshini",
    "deletePermanently": "Fshini përgjithmonë",
    "discardDrafts": "Hidhni poshtë hartimet",
    "markAsSpam": "Shëno si spam",
    "unMarkAsSpam": "Kjo nuk është spam",
    "forward": "përpara",
    "reply": "përgjigje",
    "attachments": "attachments"
  },
  "weekDays": {
    "0": "e diel",
    "1": "e hënë",
    "2": "e martë",
    "3": "e mërkurë",
    "4": "e enjte",
    "5": "e premte",
    "6": "e shtunë"
  },
  "months": {
    "0": "janar",
    "1": "shkurt",
    "2": "marsh",
    "3": "prill",
    "4": "Mund",
    "5": "qershor",
    "6": "korrik",
    "7": "gusht",
    "8": "shtator",
    "9": "tetor",
    "10": "nëntor",
    "11": "dhjetor"
  },
  "notifier": {
    "messageSent": "Mesazhi u Dergua"
  },
  "drawerActions": {
    "createMailbox": {
      "label": "Dosje e re",
      "success": "Dosja e krijuar"
    }
  },
  "dialogs": {
    "createMailbox": {
      "title": "Krijoni një dosje të re",
      "label": "Emri i dosjes",
      "accept": "krijoj",
      "cancel": "anuloj"
    }
  },
  "myAccount": {
    "title": "Llogaria ime",
    "limits": {
      "gbUsed": "{gb} GB",
      "gbTotal": "prej {gb} GB",
      "storage": {
        "title": "ruajtje"
      },
      "imapDownload": {
        "title": "Shkarkim IMAP"
      },
      "imapUpload": {
        "title": "Ngarko IMAP"
      },
      "pop3Download": {
        "title": "Shkarkim POP3"
      }
    }
  }
};

export default locale;
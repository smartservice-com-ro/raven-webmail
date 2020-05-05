import { Locale } from "../../types";
 
const locale: Locale = {
  "mailbox": {
    "title": {
      "inbox": "Inbox",
      "sent": "Kutumwa",
      "drafts": "Zviridzwa",
      "trash": "Marara",
      "junk": "Spam"
    },
    "empty": "Iri bhokisi retsamba harina chinhu"
  },
  "message": {
    "labels": {
      "from": "Kubva:",
      "to": "Ku:",
      "date": "Kutumwa:"
    }
  },
  "mailboxMessage": {
    "to": "Ku:"
  },
  "login": {
    "title": "Nyorera mu",
    "action": "Nyorera mu",
    "labels": {
      "username": "Username",
      "password": "Pasiwedhi"
    }
  },
  "accountButton": {
    "logout": "Buda",
    "myAccount": "Akaundi yangu"
  },
  "compose": {
    "labels": {
      "to": "Ku:",
      "subject": "Nyaya:",
      "cc": "Cc:",
      "bcc": "Bcc:"
    },
    "tabs": {
      "newMessageTitle": "New message"
    }
  },
  "editor": {
    "cmd": {
      "undo": "Unndo",
      "redo": "Redo",
      "fontName": "Font Type",
      "fontSize": "Kukura kwemavara",
      "bold": "Bold",
      "italic": "Italic",
      "underline": "Dzvanya",
      "justifyLeft": "Gadziridza kuruboshwe",
      "justifyCenter": "Tungamira pakati",
      "justifyRight": "Gadzirisa chaipo",
      "insertUnorderedList": "Rondedzero",
      "insertOrderedList": "Nhamba yakanyorwa",
      "removeFormat": "Bvisa chimiro"
    },
    "color": {
      "tooltip": "Ruvara",
      "foreColor": "Zvinyorwa",
      "backColor": "Shure"
    },
    "upload": {
      "tooltip": "Batanidza",
      "add": "Wedzera",
      "remove": "Bvisa"
    },
    "send": "Tumira"
  },
  "selection": {
    "title": [
      "{n} mameseji",
      "{n} meseji",
      "{n} mameseji"
    ]
  },
  "actions": {
    "backToMailbox": "Dzokera kubhokisi retsamba",
    "reload": "Zorodza",
    "select": "Sarudza",
    "markAsUnread": "Maka kunge usinga verengi",
    "markAsRead": "Maka sekuverenga",
    "moveTo": "Fambisa kuenda",
    "delete": "Delete",
    "deletePermanently": "Delete zvachose",
    "discardDrafts": "Rasa zvinyorwa",
    "markAsSpam": "Maka se spam",
    "unMarkAsSpam": "Izvi hazvisi spam",
    "forward": "Pamberi",
    "reply": "Pindura",
    "attachments": "Zvisungo"
  },
  "weekDays": {
    "0": "Svondo",
    "1": "Muvhuro",
    "2": "Chipiri",
    "3": "Chitatu",
    "4": "China",
    "5": "Chishanu",
    "6": "Mugovera"
  },
  "months": {
    "0": "Ndira",
    "1": "Kukadzi",
    "2": "Kurume",
    "3": "Kubvumbi",
    "4": "Chivabvu",
    "5": "Jun",
    "6": "Chikunguru",
    "7": "Nyamavhuvhu",
    "8": "Gunyana",
    "9": "Gumiguru",
    "10": "Mbudzi",
    "11": "Zvita"
  },
  "notifier": {
    "messageSent": "Message yatumirwa"
  },
  "drawerActions": {
    "createMailbox": {
      "label": "Nyowani nyowani",
      "success": "Folda yakagadzirwa"
    }
  },
  "dialogs": {
    "createMailbox": {
      "title": "Gadzira nyowani nyowani",
      "label": "Folder zita",
      "accept": "Gadzira",
      "cancel": "Kanzura"
    }
  },
  "myAccount": {
    "title": "Akaundi yangu",
    "limits": {
      "gbUsed": "{gb} GB",
      "gbTotal": "ye {gb} GB",
      "storage": {
        "title": "Kuchengetedza"
      },
      "imapDownload": {
        "title": "IMAP Download"
      },
      "imapUpload": {
        "title": "IMAP Kurodha"
      },
      "pop3Download": {
        "title": "POP3 Download"
      }
    }
  }
};

export default locale;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locale = {
    lang: "en",
    mailbox: {
        title: {
            inbox: "Inbox",
            sent: "Sent",
            drafts: "Drafts",
            trash: "Trash",
            junk: "Spam",
        },
        empty: "This mailbox is empty",
    },
    message: {
        labels: {
            from: "From:",
            to: "To:",
            date: "Sent:"
        }
    },
    mailboxMessage: {
        to: "To:"
    },
    login: {
        title: "Sign in",
        action: "Sign in",
        labels: {
            username: "Username",
            password: "Password",
        }
    },
    accountButton: {
        logout: "Sign out"
    },
    compose: {
        labels: {
            to: "To:",
            subject: "Subject:",
            cc: "Cc:",
            bcc: "Bcc:",
        },
        tabs: {
            newMessageTitle: "New message"
        },
    },
    editor: {
        cmd: {
            undo: "Undo",
            redo: "Redo",
            fontName: "Font type",
            fontSize: "Font size",
            bold: "Bold",
            italic: "Italic",
            underline: "Underline",
            justifyLeft: "Align left",
            justifyCenter: "Align middle",
            justifyRight: "Align right",
            insertUnorderedList: "List",
            insertOrderedList: "Numbered list",
            removeFormat: "Remove format",
        },
        color: {
            tooltip: "Color",
            foreColor: "Text",
            backColor: "Background"
        },
        upload: {
            tooltip: "Attach",
            add: "Add",
            remove: "Remove",
        },
        send: "Send",
    },
    selection: {
        title: [
            "{n} messages",
            "{n} message",
            "{n} messages",
        ],
    },
    actions: {
        backToMailbox: "Back to mailbox",
        reload: "Reload",
        select: "Select",
        markAsUnread: "Mark as not read",
        markAsRead: "Mark as read",
        moveTo: "Move to",
        delete: "Delete",
        deletePermanently: "Delete permanently",
        discardDrafts: "Discard drafts",
        markAsSpam: "Mark as spam",
        unMarkAsSpam: "This is not spam",
        forward: "Forward",
        reply: "Reply",
        attachments: "Attachments"
    }
};
exports.default = locale;

const { createApp } = Vue;


createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },

            ],
            chatIndex: 0,
            contactSearch: '',
            enteredMessage: '',
            dropDownDisplay: '',
            requestedContacts: []
        }

    },
    methods: {
        setMessagesIndex(index) {
            this.chatIndex = index

        },
        setMessagesStatus(message) {
            if (message.status === 'sent') {
                return 'message-sent'
            }
            else return 'message-received'
        },
        selectedContact(index) {
            if (this.chatIndex === index) {
                return 'selected-contact'
            }
            else return ''
        },
        filterContacts() {
            this.requestedContacts = []
            for (i = 0; i < this.contacts.length; i++) {

                if (this.contacts[i].name.toLowerCase().includes(this.contactSearch.toLowerCase())) {
                    this.requestedContacts.push(this.contacts[i])
                }
            }

        },
        filterStarter() {
            if (this.requestedContacts.length === 0 & this.contactSearch.length === 0) {
                this.requestedContacts = this.contacts
            }
        },
        autoAnswer() {
            this.contacts[this.chatIndex].messages.push(
                {
                    date: '10/01/2020 16:15:22',
                    message: 'ok',
                    status: 'received'
                }
            )
        },
        pushMessage() {
            this.contacts[this.chatIndex].messages.push(
                {
                    date: '10/01/2020 16:15:22',
                    message: this.enteredMessage,
                    status: 'sent'
                }
            );

            this.enteredMessage = '';

            setTimeout(this.autoAnswer, 1000)
        },
        deleteMessage(index) {
            this.contacts[this.chatIndex].messages[index].message = 'Questo messaggio è stato eliminato';
            this.dropDownDisplay = ''

        },
        dropDown(index) {
            if (this.dropDownDisplay === index) {
                this.dropDownDisplay = ''
            } else {
                this.dropDownDisplay = index
            }

        },
        formattingTimeLastMsg(index) {
            const [dateValues, timeValues] = this.contacts[index].messages[this.contacts[index].messages.length - 1].date.split(' ');

            const [hours, minutes, seconds] = timeValues.split(':');

            return `${hours}:${minutes}`
        },
        formattingTimeChat(index) {
            const [dateValues, timeValues] = this.contacts[this.chatIndex].messages[index].date.split(' ');
            const [hours, minutes, seconds] = timeValues.split(':');
            return `${hours}:${minutes}`
        },
    },
    mounted() {
        this.filterStarter()
    }

}).mount('#app')
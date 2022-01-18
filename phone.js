class Phone{
    constructor(draft,inbox,send) {
        this.battery = 100;
        this.draft = draft;
        this.inbox = inbox;
        this.send = send;
    }
    checkStatus(){
        this.battery--;
        return this.battery >0;
    }
    textMessage(text){
        this.draft = text
        this.battery--;
    }
    sendMessage(otherPhone){
        otherPhone.inbox.push(this.draft);
        this.send.push(this.draft);
        this.draft="";
        this.battery--;
        otherPhone.battery--;
    }
    showInbox(){
        this.battery--;
        return this.inbox;
    }
    showSend(){
        this.battery--;
        return this.send;
    }
    onOff(){
        return confirm("Điện Thoại Bật Chưa ?")
    }
}
let Iphone = new Phone("Đi chơi không",[],[]);
let Nokia= new Phone("Ok đi luôn",[],[])
Iphone.onOff()
Iphone.checkStatus()
Iphone.textMessage();
Iphone.sendMessage()
Iphone.showInbox();
Iphone.showSend();
Nokia.onOff();
Nokia.checkStatus();
Nokia.textMessage();
Nokia.sendMessage();
Nokia.showInbox();
Nokia.showSend();

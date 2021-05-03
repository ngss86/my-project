module.exports = async function App(context) {
  console.log(context);
  if (context.event.text == 'hi' || context.event.text == 'Hi' || context.event.text == 'Hello' || context.session.lastActivity == null) {
    return SayHi;
  }

  if(context.event.postback != null){
    if (context.event.postback.title == 'Start Chatting') {
      return StartChat;
    }

    if (context.event.postback.title == 'Men Apparels') {
      return StartMen;
    }

    if (context.event.postback.title == 'Women Apparels') {
      return StartWomen;
    }
  }
  //if(context.session.lastActivity == null)
  return StartChat;
};

async function SayHi(context) {
  await context.sendText(`Welcome to That Food Things Demo.`);
  await context.sendButtonTemplate('What do you looking for today?', [
    {
      type: 'postback',
      payload: 'USER_DEFINED_PAYLOAD',
      title: 'Men Apparels',
    },    
    {
      type: 'postback',
      payload: 'USER_DEFINED_PAYLOAD',
      title: 'Women Apparels',
    },
    {
      type: 'postback',
      title: 'Start Chatting',
      payload: 'USER_DEFINED_PAYLOAD',
    },
  ]);
}

async function StartChat(context) {
  await context.sendText('Thank you for your visit. Please wait for a moment, our agent will attend to you shortly.');
  //await context.passThreadControlToPageInbox();
}

async function StartMen(context) {
  await context.sendButtonTemplate('Thanks for letting us know your interest, happy shopping!', [
    {
      type: 'web_url',
      url: 'https://www.google.com',
      title: 'Top',
    },    
    {
      type: 'web_url',
      url: 'https://www.google.com',
      title: 'Bottom',
    }
  ]);
}

async function StartWomen(context) {
  await context.sendButtonTemplate('Thanks for letting us know your interest, happy shopping!', [
    {
      type: 'web_url',
      url: 'https://www.google.com',
      title: 'Shirt',
    },    
    {
      type: 'web_url',
      url: 'https://www.google.com',
      title: 'Dress',
    },
    {
      type: 'web_url',
      url: 'https://www.google.com',
      title: 'Lingerie',
    },
  ]);
}
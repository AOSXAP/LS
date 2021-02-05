import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Bot() {
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },
    {
      _id: 1,
      text: "Hello! I'm Aleph , you can use the following commands : Help , I'm lost , Wild animal ",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Aleph',
        avatar:'https://pbs.twimg.com/profile_images/513373128827748353/Vddt34o2.png'
      }
    }
  ]);

  function handleSend(newMessage) {
    const help = {
      _id: 2,
      text: '(HELP) You should send a signal to our database , make sure to keep calm and wait for a team to pick you up',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Aleph',
        avatar:'https://pbs.twimg.com/profile_images/513373128827748353/Vddt34o2.png'
      }
    }

    const animal = {
      _id: 2,
      text: "(WILD ANIMAL) Stay Calm and try to look imposing.The secret is to stay calm and don't run. Also , do your best to not surprise the animal!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Aleph',
        avatar:'https://pbs.twimg.com/profile_images/513373128827748353/Vddt34o2.png'
      }
    }

    const lost = {
      _id: 2,
      text: "(I'M LOST) As soon as you realize you may be lost: stop, stay calm, stay put. Panic is your greatest enemy. Go over in your mind how you got to where you are. What landmarks should you be able to see? Do not move at all until you have a specific reason to take a step.Get out your compass and determine the directions based on where you are standing. Do not walk aimlessly. If you are on a trail, stay on it. As a very last resort, follow a drainage or stream downhill. This is often a difficult path but could lead to a trail or road. Again, this could be very dangerous. - U.S. Forest Service",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Aleph',
        avatar:'https://pbs.twimg.com/profile_images/513373128827748353/Vddt34o2.png'
      }
    }
    
    if(newMessage[0].text=='Help')  setMessages(GiftedChat.append(messages, help));
    if(newMessage[0].text=='Wild animal') setMessages(GiftedChat.append(messages, animal));
    if(newMessage[0].text=="I'm lost") setMessages(GiftedChat.append(messages, lost));

  }

  async function double(as) {
    const help = {
      _id: 2,
      text:
        "(HELP) You should send a signal to our database , make sure to keep calm and wait for a team to pick you up",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Aleph",
        avatar:
          "https://pbs.twimg.com/profile_images/513373128827748353/Vddt34o2.png",
      },
    };
    const animal = {
      _id: 2,
      text:
        "(WILD ANIMAL) Stay Calm and try to look imposing.The secret is to stay calm and don't run. Also , do your best to not surprise the animal!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Aleph",
        avatar:
          "https://pbs.twimg.com/profile_images/513373128827748353/Vddt34o2.png",
      },
    };

    const lost = {
      _id: 2,
      text:
        "(I'M LOST) As soon as you realize you may be lost: stop, stay calm, stay put. Panic is your greatest enemy. Go over in your mind how you got to where you are. What landmarks should you be able to see? Do not move at all until you have a specific reason to take a step.Get out your compass and determine the directions based on where you are standing. Do not walk aimlessly. If you are on a trail, stay on it. As a very last resort, follow a drainage or stream downhill. This is often a difficult path but could lead to a trail or road. Again, this could be very dangerous. - U.S. Forest Service",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Aleph",
        avatar:
          "https://pbs.twimg.com/profile_images/513373128827748353/Vddt34o2.png",
      },
    };


    await setMessages(GiftedChat.append(messages, as))
    
    if (as[0].text == "Help") await setMessages(GiftedChat.append(messages, help));
    if (as[0].text == "Wild animal") await setMessages(GiftedChat.append(messages, animal));
    if (as[0].text == "I'm lost") await setMessages(GiftedChat.append(messages, lost));

  }

  return (
    <GiftedChat
      messages={messages}
      customTextStyle={{fontSize:13, lineHeight: 20 }}
      placeholder="How can I help?"
      onSend={newMessage => double(newMessage)}
      user={{ _id: 1 }}
    />
  );
}
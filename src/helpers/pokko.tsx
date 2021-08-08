import React from 'react';
import { IPokkoContent } from '../types/tour-commentary.types';
import { Text } from 'react-native';

const parsePokkoContent = (content: IPokkoContent[]) => {
  const paragraphs: any[] = []

  content.forEach((item, i) => {
    if (item.type === "paragraph") {
      paragraphs.push(<Text
        key={item.type + i}
        style={{
          fontFamily: item.children[0].bold ? 'open-sans-bold' : 'open-sans'
        }} >
        {item.children[0].text}
      </Text>)
    }
  })
  return paragraphs
}

export {
  parsePokkoContent
}
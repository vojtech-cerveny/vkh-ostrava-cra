import React from 'react'
import Box from '../components/Box'
import TEXT from '../constants/texts'
export default {
  title: 'Box',
}

export const box = () => (
  <div>
    <p>
      Here you can see boundry testing and I found one issue with position :O
    </p>
    <Box section={{ title: '', text: '', color: 'black' }} />
    <Box
      section={{ title: 'Title', text: 'Text on one line.', color: 'red' }}
    />
    <Box section={{ title: '', text: 'without title', color: 'orange' }} />
    <Box
      section={{
        title: 'Lorem Ipsum',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nisl, faucibus in tempus id, viverra eu justo. Duis tristique tincidunt pellentesque. Phasellus non dolor hendrerit, aliquet ante sed, convallis purus. Phasellus fermentum, neque ac porta ornare, arcu lectus cursus libero, vel finibus sem nulla eu mauris. Donec in consequat sapien, nec gravida eros. Etiam mi nunc, placerat sit amet mattis vitae, ornare eu augue. Ut non lectus eu neque gravida elementum.',
        color: 'blue',
      }}
    />
  </div>
)

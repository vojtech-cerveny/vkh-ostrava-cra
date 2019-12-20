import React from 'react'
import Event from '../components/Event'

export default {
  title: 'Event',
}

export const event = () => (
  <div>
    <p>
      This can be use as showcase for different types of input - normal / no
      text / long text. You can see, that fixed height is not ideal.{' '}
    </p>
    <Event text="Event 2 - Treba bowling " bg="#59C8D0" />
    <Event text="" bg="#59C8D0" />
    <Event
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nisl, faucibus in tempus id, viverra eu justo. Duis tristique tincidunt pellentesque. Phasellus non dolor hendrerit, aliquet ante sed, convallis purus. Phasellus fermentum, neque ac porta ornare, arcu lectus cursus libero, vel finibus sem nulla eu mauris. Donec in consequat sapien, nec gravida eros. Etiam mi nunc, placerat sit amet mattis vitae, ornare eu augue. Ut non lectus eu neque gravida elementum. Maecenas sed posuere ipsum, et facilisis nunc. Cras a molestie augue, eget pharetra risus. Morbi a elementum orci, maximus laoreet tellus. Ut at libero imperdiet, porttitor nulla sollicitudin, accumsan odio. Suspendisse porta lectus vitae enim ultricies, at rutrum justo mattis. Nunc nibh sem, tempus hendrerit mattis at, aliquet scelerisque lorem. Pellentesque gravida mauris eros. Mauris quis commodo lorem, quis varius sapien."
      bg="black"
    />
  </div>
)

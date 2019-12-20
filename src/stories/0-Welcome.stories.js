import React from 'react'

export default {
  title: 'Welcome',
}

export const toStorybook = () => (
  <div style={{ padding: '20px', fontSize: '1.5rem' }}>
    <h2>Storybook</h2>
    <p>This can be use for different purpose.</p>
    <ul>
      <li>
        UI - check if everything looks good. All element are here, so you don't
        have to search them in the app{' '}
        <i>
          Some pop-up appears only if app crashes and you need to test it? No
          prob here!
        </i>{' '}
      </li>
      <li>
        Check components - boundery testing - check different props of elements.{' '}
        <i>
          None text, normal text, looong text, emoji{' '}
          <span role="img" aria-label="emoji">
            🌶🦄
          </span>
          , diacritics
        </i>
      </li>
      <li>
        Check components - translations - Does your app support multiple
        language? You can check it here easily.
      </li>
      <li>
        Check layout - Should be your app responsive? Do you want to check
        behave of all components on ONE place? Storybook.
      </li>
    </ul>
  </div>
)

toStorybook.story = {
  name: 'to Storybook',
}

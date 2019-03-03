import React from 'react';
import { render } from 'enzyme';

import UserProfile from '../UserProfile';


describe(UserProfile, () => {

  describe("Render", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<UserProfile />);
    });

    it('should add the HTML elements', () => {
      // Comprobamos los distintos aspectos de HTML
      expect(wrapper.find('span.usernameLabel').length).toBe(1);
      expect(wrapper.find('span.emailLabel').length).toBe(1);
    });

    it('should not include any username by default', () => {
      // Comprobamos el texto
      expect(wrapper.find('span.usernameLabel').text()).toBe('John Doe');
      expect(wrapper.find('span.emailLabel').text()).toBe('johndoe@email.com');
    })
  });

});

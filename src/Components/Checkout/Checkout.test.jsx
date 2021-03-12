import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

import { Checkout } from './Checkout';

xtest('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn();
    render(<Checkout onSubmit={}/>)
});

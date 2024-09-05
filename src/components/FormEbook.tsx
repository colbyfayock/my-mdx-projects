"use client";

import { SyntheticEvent } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';

interface FormEbookProps extends React.ComponentProps<'form'> {
  id?: string;
  inputClassName?: string;
}

const FormEbook = ({ id, children, inputClassName, ...rest }: FormEbookProps) => {
  function handleOnFormSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <form id="hero" className="flex flex-col gap-4 sm:max-w-xs mx-auto" action="https://app.convertkit.com/forms/1588410/subscriptions" method="post" onSubmit={handleOnFormSubmit} {...rest}>
      { children }

      <input className="hidden" type="checkbox" name="tags[]" value="1749930" checked readOnly />
      <input className="hidden" type="checkbox" name="tags[]" value="1787072" checked readOnly />
      
      <label className="sr-only" htmlFor="email">Email Address</label>

      <Input className={inputClassName} type="email" name="email_address" placeholder="Email Address" required />
      
      <Button>Get It Free</Button>
    </form>
  )
}

export default FormEbook;
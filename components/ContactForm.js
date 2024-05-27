'use client';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';

const formSchema = z.object({
  emailAddress: z.string().email(),
  name: z.string(),
});

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: '',
      name: '',
    },
  });

  async function handleSubmit(values) {
    try {
      await axios.post('/api/contact', {
        name: values.name,
        email: values.email,
      });
      form.reset();
      toast('Message received. I will contact you as soon as I can.');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
    console.log(values);
  }

  return (
    <div>
      <h1>Contact form</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      autoComplete='name'
                      placeholder='Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* email */}
          <FormField
            control={form.control}
            name='emailAddress'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Email address'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button className='mt-4' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;

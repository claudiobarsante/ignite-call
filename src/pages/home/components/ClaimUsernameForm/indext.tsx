import { ArrowRight } from 'phosphor-react';
import { Button, Text, TextInput } from '@ignite-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormAnnotation } from './styles';

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must have at least 3 chacaracters' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username can only have letters and hyphen'
    })
    .transform((value) => value.toLowerCase())
});

// -- convert zod schema to typescript
type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ClaimUsernameFormData>({
    // -- validation
    resolver: zodResolver(claimUsernameFormSchema)
  });

  async function handleClaimUsername(data: ClaimUsernameFormData) {}
  return (
    <>
      <Form as="form" role="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="username"
          {...register('username')}
        />
        <Button size="sm" type="submit">
          {' '}
          Reservation
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username ? errors.username.message : 'Type your username'}
        </Text>
      </FormAnnotation>
    </>
  );
}

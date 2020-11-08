import React, { ReactElement } from 'react';
import { useCookies } from 'react-cookie';
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    FormErrorMessage,
    Button,
    Heading,
} from '@chakra-ui/core';
import { Formik, Field } from 'formik';
import { LoginBox } from './LoginComponents';
import { LoginFormInputs } from './LoginTypes';
import { useHistory } from 'react-router-dom';

export function Login({ ...props }: any): ReactElement {
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const history = useHistory();

    const onSubmit = (values: LoginFormInputs, actions: any) => {
        setCookie('auth', {
            username: values.username,
            password: values.password,
        });
        history.push('/');
        actions.setSubmitting(false);
        window.location.reload();
    };

    return (
        <LoginBox>
            <Heading mb={3}>Login</Heading>
            <LoginForm onSubmit={onSubmit} />
        </LoginBox>
    );
}

function LoginForm({ onSubmit, ...props }: any): ReactElement {
    function validateName(value: any) {
        return false;
        let error;
        if (!value) {
            error = 'Name is required';
        } else if (value !== 'Naruto') {
            error = "Jeez! You're not a fan 😱";
        }
        return error;
    }

    return (
        <Formik initialValues={{}} onSubmit={onSubmit}>
            {(props: any) => (
                <form onSubmit={props.handleSubmit}>
                    <Field name="username" validate={validateName}>
                        {({ field, form }: any) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name} mb={3}>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input {...field} id="username" placeholder="Username" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="password" validate={validateName}>
                        {({ field, form }: any) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <PasswordInput {...field} id="password" placeholder="password" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button mt={4} variantColor="green" isLoading={props.isSubmitting} type="submit" width="100%">
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    );
}

function PasswordInput({ ...props }: any): ReactElement {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <InputGroup size="md">
            <Input {...props} pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
            <InputRightElement width="3rem">
                <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    aria-label="password_input"
                    icon={show ? 'view' : 'view-off'}
                />
            </InputRightElement>
        </InputGroup>
    );
}

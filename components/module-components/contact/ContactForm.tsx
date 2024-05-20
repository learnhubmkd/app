'use client';

import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

import { ContactFormData, submitContactForm } from './SubmitContactForm';
import Button from '../../reusable-components/button/Button';
import TextInput from '../../reusable-components/text-input/TextInput';
import TextArea from '../../reusable-components/text-area/TextArea';
import { fullNameRegexValidation, emailRegexValidation } from './regexValidation';
import CaptchaWidget from '../../reusable-components/turnstile-captcha/CaptchaWidget';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: { username: '', email: '', message: '', cfTurnstileResponse: '' },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(fullNameRegexValidation, '*Невалидно име')
        .required('*Задолжително внесете име'),
      email: Yup.string()
        .email('*Невалидна емаил адреса!')
        .required('*Задолжително внесете емаил адреса')
        .matches(emailRegexValidation, '*Погрешен емаил формат'),
      message: Yup.string()
        .matches(/^.{20,}$/, '*Минимум број на каратктери 20!')
        .required('*Пораката е задолжителна'),
      cfTurnstileResponse: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        const formData: ContactFormData = {
          name: values.username,
          email: values.email,
          message: values.message,
          cfTurnstileResponse: values.cfTurnstileResponse,
        };

        const response = await submitContactForm(formData);
        if (response.status) {
          toast.success('Успешно испратено');
          resetForm();
        } else {
          toast.error('Грешка');
        }
      } catch (error) {
        toast.error('Грешка');
      }
    },
  });
  console.log(formik);
  return (
    <div>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          placeholder="Внесете го Вашето име"
          label="Име и презиме"
          name="username"
          type="text"
          field="username"
          formik={formik}
          isRequired
        />
        <TextInput
          placeholder="Внесете ја Вашата емаил адреса"
          label="E-mail"
          name="email"
          type="email"
          field="email"
          formik={formik}
          isRequired
        />
        <TextArea
          placeholder="What tickles your brain?"
          label="Твојата порака"
          name="message"
          field="message"
          formik={formik}
          isRequired
        />
        <CaptchaWidget name="contact" />
        <Button href="" type="submit" buttonClass={['primaryButton']} buttonText="Испрати" />
      </form>
    </div>
  );
};

export default ContactForm;

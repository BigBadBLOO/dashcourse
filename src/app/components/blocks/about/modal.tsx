import React, {useContext, useRef} from "react";
import emailjs from "@emailjs/browser";
import {CSSTransition} from "react-transition-group";
import {Button} from "@/app/components/dsm/Button/button";
import {ContextForScreenSize} from "@/app/components/screenSize/context";

import st from "./modal.module.scss";
import {Icon} from "@/app/components/dsm/Icon";
import {Link} from "@/app/components/dsm/Link/link";
import {Input} from "@/app/components/dsm/Input/input";
import {TextError} from "@/app/components/dsm/TextError/textError";

type ErrorsType = {
  network?: boolean;
  name?: boolean;
  phone?: boolean;
  email?: boolean;
}

export const ModalButton = () => {
  const {screenSize} = useContext(ContextForScreenSize);
  const formRef = useRef(null);
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [errors, setErrors] = React.useState<ErrorsType>({});
  const [isSended, setIsSended] = React.useState(false);

  const onClose = () => {
    setIsOpen(false);
    setErrors({});
  }

  const isValid = (name: string, phone: string, email: string) => {
    let hasErrors = false;

    if (name.length < 2) {
      hasErrors = true;
      setErrors(prevState => ({...prevState, 'name': true}));
    } else {
      setErrors(prevState => ({...prevState, 'name': false}));
    }

    if (phone.length < 8) {
      hasErrors = true;
      setErrors(prevState => ({...prevState, 'phone': true}));
    } else {
      setErrors(prevState => ({...prevState, 'phone': false}));
    }

    if (email.length > 0 && !/\S+@\S+\.\S+/.test(email)) {
      hasErrors = true;
      setErrors(prevState => ({...prevState, 'email': true}));
    } else {
      setErrors(prevState => ({...prevState, 'email': false}));
    }

    return !hasErrors;
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (isValid(event.target.name.value, event.target.phone.value, event.target.email.value)) {
      emailjs.init('rFDswXAxHYBpZMiAa');
      emailjs.sendForm('service_ikt4wvd', 'template_c34t2qs', formRef.current || '')
        .then(
          () => {setIsSended(true)},
          () => {setErrors({network: true})})
        .catch(() => {setErrors({network: true})});
    }
  }

  return <>
    <Button
      className={st.imageButton}
      withoutIcon={screenSize !== 'xl'}
      onClick={() => setIsOpen(true)}
    >
      Инвестировать
    </Button>
    <CSSTransition
      nodeRef={modalRef}
      timeout={700}
      classNames={{
        enter: st.enter,
        enterActive: st.enterActive,
        exit: st.exit,
        exitActive: st.exitActive,
      }}
      unmountOnExit
      in={isOpen}
    >
      <div ref={modalRef}>
        <div className={st.modalWrap}>
          <div className={st.headerWrap}>
            {
              isSended
                ? <p className={st.title}>
                  Заявка отправлена! <br/> Ответим вам в&nbsp;течение двух рабочих дней
                </p>
                : <p className={st.title}>
                  Оставьте контакты&nbsp;&mdash; мы&nbsp;свяжемся с&nbsp;вами, чтобы обсудить детали
                </p>
            }

            <Icon onClick={onClose} className={st.iconClose} type="close"/>
          </div>
          {errors.network &&
            <TextError>Что-то&nbsp;пошло не&nbsp;так:(Попробуйте заполнить форму чуть позже</TextError>}

          {
            isSended
              ?  <Button
                className={st.closeButton}
                onClick={onClose}
              >
                Вернуться на главную
              </Button>
              : <>
                {/* @ts-ignore*/}
                <form className={st.form} ref={formRef} novalidate="novalidate" onSubmit={onSubmit}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ваше имя *"
                    isError={errors.name}
                    message={errors.name ? 'Введите пожалуйста ваше имя' : ''}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона *"
                    isError={errors.phone}
                    message={errors.phone ? 'Некорректный формат телефона' : ''}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                    isError={errors.email}
                    message={errors.email ? 'Некорректная почта' : ''}
                  />
                  <Input type="text" name="comment" placeholder="Комментарий" message="Не более 100 символов"
                         maxLength={100}/>
                  <Button
                    className={st.submit}
                    type="submit"
                  >
                    Отправить заявку
                  </Button>
                </form>
                <p className={st.policy}>Нажимая кнопку, вы&nbsp;соглашаетесь на&nbsp;обработку <Link
                  link="/files/policy.pdf">персональных&nbsp;данных</Link></p>
              </>
          }

        </div>
        <div className={st.backgroundModal} onClick={onClose}/>
      </div>
    </CSSTransition>
  </>
}
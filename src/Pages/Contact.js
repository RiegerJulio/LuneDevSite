import emailjs from 'emailjs-com';
import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';

class Contact extends React.Component {
  render() {
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('gmail', 'template_9egqzeg', e.target, 'user_0lbJoNhqutJjDpJXegj0V').then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
    };

    return (
      <div>
        <Title title={'Contato'} />
        <section className="content">
          <form onSubmit={sendEmail} id="userForm">
            <label htmlFor="userName">
              Nome
            </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="userName"
                id="userName"
                required
              />
            <label htmlFor="userEmail">
              Email
            </label>
              <input
                onChange={this.handleChange}
                type="email"
                name="userEmail"
                id="userEmail"
                required
              />
            <label htmlFor="userPhone">
              Telefone
            </label>
              <input
                onChange={this.handleChange}
                type="tel"
                name="userPhone"
                id="userPhone"
                maxLength="15"
                required
              />
            <label htmlFor="userText" className="message">
              Como podemos te ajudar?
            </label>
              <textarea
                onChange={this.handleChange}
                name="userText"
                id="userText"
                form="userForm"
                required
              />
            <Button typeButton="submit" infoButton="Enviar" />
          </form>
          <div>
            <iframe
              title="mapsApi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1092.9363132483695!2d-43.29881685246381!3d-22.86962668246256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997cf24b6e5217%3A0xbbf636667b110b82!2sR.%20C%C3%A9sar%20do%20R%C3%AAgo%20Monteiro%20Filho%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020765-630!5e0!3m2!1spt-BR!2sbr!4v1640196372752!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              className="contact-map"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;

// inserir posteriormente componente address

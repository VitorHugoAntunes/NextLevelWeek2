import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThy5-gDRkfT9M8Y5NZb71OxJSkqtogjckAeg&usqp=CAU"
          alt="‎Gustav Åhr"
        />
        <div>
          <strong>‎Gustav Åhr</strong>
          <span>Música</span>
        </div>
      </header>

      <p>
        Apaixonado por música desde pequeno e desejo ensinar o maior número
        possível de pessoas.
        <br /> <br />O meu objetivo é que meus alunos se expressem através dessa
        arte.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

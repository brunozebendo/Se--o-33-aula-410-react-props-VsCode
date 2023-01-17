/*Seção 33, aula 410. Nessa aula foi introduzido o conceito de Props, que é um tipo de função para reduzir o código 
e criar um padrão, ou seja, uma template. Esse é um conceito do React e para ser implantado, cria-se uma função,
com o atributo por padrão chamado de props, depois, dentro do ReactDom.render, lembrando
que só se pode passar um elemento html por vez, mas vários dentro dele, assim, dentro da div, é chamada
a função <Card> e dentro dessa função são criados os campos, por fim, esses campos são retornados
dentro da div da função Card através do código props.nomedoelemento. Atentar que caso se queira passar um html
atribute como uma cor para a fonte das letras, por exemplo, isso pode ser feito na function, mas não dentro
do Card, pois ali ele vai ser visto como um prop, ou seja, ali só podem ser inseridos componenetes padrões.
Também exclui os node_modules para conseguir fazer um backup do arquivo. */

import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
    <Card
      name="JUremino"
      img="https://th.bing.com/th/id/OIP.hdvHhZGWZnIJEcbA7w6cUwAAAA?pid=ImgDet&rs=1"
      tel="+223 456 789"
      email="b@juremino.com"
    />
  </div>,
  document.getElementById("root")
);

import React from "react";

function Dadosuser(props){
  return(
    <div class="usuario">
      <img src={props.img} alt="" onClick={props.clickImg} />
      <div class="texto">
        <strong>
          {props.nome === "" || props.nome === null ? "Seu nome aqui" : `${props.nome.toLowerCase()}`}
        </strong>
        <span>
          {props.nome === "" || props.nome === null ? "Click no lapis" : `${props.nome}`}
          <ion-icon
            onClick={props.clickNome}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  )
}

export default function Usuario() {
  const imgPadrao = "assets/img/user-check_1.svg";
  const [nome, setNome] = React.useState("");
  const [img, setImg] = React.useState(imgPadrao);

  function inserirImg() {
    const imgPrompt = prompt("Insira o link de sua imagem de perfil!");
    if (imgPrompt === "" || imgPrompt === null) {
      setImg(imgPadrao)
    }else{
      setImg(imgPrompt)
    }
  }

  function inserirNome(){
    setNome(prompt("Insira o seu nome"))
  }

  return (
    <Dadosuser nome = {nome} img = {img} clickImg = {inserirImg} clickNome = {inserirNome} />
  );
}

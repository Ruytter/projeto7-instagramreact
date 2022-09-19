import React from "react";

function Post(props) {
  const [cColor, setCColor] = React.useState({color: ''});
  const [heart, setHeart] = React.useState('heart-outline');
  const [sPost, setSPost] = React.useState('bookmark-outline');
  const [nPessoas, setNpessoas] = React.useState(props.nPessoas);

  

  function  clicado(){
    setHeart(`heart-sharp`)
    setCColor({
      color: `red`,
    })
  }

  function  curtir(){
    if (cColor.color === 'red' && nPessoas === props.nPessoas){
      setNpessoas(nPessoas + 1)
    }else if (nPessoas > props.nPessoas){
      setHeart(`heart-outline`)
      setCColor({
        color: ``
      })
      setNpessoas(nPessoas - 1)
    }
  }

  function  salvar(){
    setSPost(`bookmark-sharp`)
  }

    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.img} alt={props.user} />
            {props.user}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
  
        <div onClick={clicado} class="conteudo">
          <img src={props.imgCont} alt="" />
        </div>
  
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon onClick={curtir} style={cColor} name={heart}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={salvar} name={sPost}></ion-icon>
            </div>
          </div>
  
          <div class="curtidas">
            <img src={props.curtidasImg} />
            <div class="texto">
              Curtido por <strong>{props.curtiu}</strong> e{" "}
              <strong>outras {nPessoas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default function Posts() {
    const postUsers = [
      {
        img: "assets/img/meowed.svg",
        user: "meowed",
        imgCont: "assets/img/gato-telefone.svg",
        curtidasImg: "assets/img/respondeai.svg",
        curtiu: "respondeai",
        nPessoas: 101523
      },
      {
        img: "assets/img/barked.svg",
        user: "barked",
        imgCont: "assets/img/dog.svg",
        curtidasImg: "assets/img/adorable_animals.svg",
        curtiu: "adorable_animals",
        nPessoas: 99159
      }
    ];
    
    return (
      <div class="posts">
        {postUsers.map((p) => (
          <Post
            img={p.img}
            user={p.user}
            imgCont={p.imgCont}
            curtidasImg={p.curtidasImg}
            curtiu={p.curtiu}
            nPessoas={p.nPessoas}
          />
        ))}
      </div>
    );
  }
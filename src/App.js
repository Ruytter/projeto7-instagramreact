//import Corpo from "./Corpo"
//import SideBar from "./SideBar"
//import NavBar from "./NavBar"

function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  );
}

function SideBar() {
  return (
    <div class="sidebar">
      <Usuario />
      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

function NavBar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="../assets/img/logo.png" />
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

function Usuario() {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          Catana
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} />
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  );
}

const storiesUsuario = [
  {
    img: "assets/img/9gag.svg",
    user: "9gag",
  },
  {
    img: "assets/img/meowed.svg",
    user: "meowed",
  },
  {
    img: "assets/img/barked.svg",
    user: "barked",
  },
  {
    img: "assets/img/nathanwpylestrangeplanet.svg",
    user: "nathanwpylestrangeplanet",
  },
  {
    img: "assets/img/wawawicomics.svg",
    user: "wawawicomics"
  },
  {
    img: "assets/img/respondeai.svg",
    user: "respondeai"
  },
  {
    img: "assets/img/filomoderna.svg",
    user: "filomoderna"
  },
  {
    img: "assets/img/memeriagourmet.svg",
    user: "memeriagourmet"
  }
];

function Stories() {
  return (
    <div class="stories">
      {storiesUsuario.map((s) => (
        <Story img={s.img} user={s.user} />
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div class="posts">
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="assets/img/meowed.svg" />
            meowed
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="assets/img/gato-telefone.svg" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/respondeai.svg" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="assets/img/barked.svg" />
            barked
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="assets/img/dog.svg" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/adorable_animals.svg" />
            <div class="texto">
              Curtido por <strong>adorable_animals</strong> e{" "}
              <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/bad.vibes.memes.svg" />
          <div class="texto">
            <div class="nome">bad.vibes.memes</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/chibirdart.svg" />
          <div class="texto">
            <div class="nome">chibirdart</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/razoesparaacreditar.svg" />
          <div class="texto">
            <div class="nome">razoesparaacreditar</div>
            <div class="razao">Novo no Instagram</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/adorable_animals.svg" />
          <div class="texto">
            <div class="nome">adorable_animals</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/smallcutecats.svg" />
          <div class="texto">
            <div class="nome">smallcutecats</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <Corpo />

      <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </>
  );
}

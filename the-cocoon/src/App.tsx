import "./index.css";

function App() {
  return (
    <>
      <div className="bg-black h-auto w-full flex flex-col items-center">
        <h1 className="text-white flex h-auto w-auto p-4">
          The Solar Soul Cocoon
        </h1>
        <div className="flex flex-col p-4">
          <p className="flex text-white p-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            ducimus deleniti odit! Minima provident dolore omnis repellendus
            nesciunt mollitia praesentium debitis officia delectus ipsa, fugit
            voluptates pariatur, saepe velit? Consequatur numquam qui animi
            ipsum architecto saepe optio voluptatibus! Accusamus impedit eveniet
            doloremque? Vel laboriosam saepe quam voluptatem, vero porro beatae?
          </p>
          <img
            src="/public/Cover-2.jpg"
            alt="Cover of the EP. A Robot and the name of the band"
            className="flex"
          />
          <div>
            <h3 className="text-white">Go listen to it</h3>
            <button>Spotify</button>
            <button>Apple Music</button>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <p className="flex text-white p-4 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            repudiandae fugiat unde saepe nemo ab ad necessitatibus corporis
            esse minus commodi ipsum rem officia dicta maiores dolorem expedita
            ratione eius, eaque magni nobis eos ipsam. Libero rerum provident
            dicta. Enim labore sed temporibus provident consequatur, assumenda
            fuga laborum nam aut!
          </p>
          <img
            src="/public/poly.png"
            alt="Cover of the EP. A Robot and the name of the band"
            className="flex"
          />
          <h2 className="text-white">LISTEN</h2>
          <p className="text-white">Download the song</p>
        </div>
      </div>
    </>
  );
}

export default App;

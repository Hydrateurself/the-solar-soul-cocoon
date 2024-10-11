import "./index.css";

function App() {
  return (
    <>
      <div className="bg-black h-auto w-full flex flex-col items-center">
        <h1 className="text-white flex h-auto w-auto p-4 font-ultra text-2xl text-center md:text-4xl">
          The Solar Soul Cocoon
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col p-4">
            <p className="flex text-white py-2 text-left font-ibm md:max-w-lg mb-1">
              It happend! The Cocoon has successfully landed and is again ready
              to launch into space. The journey goes on as live goes by. <br />
              Sharing is caring and so will The Cocoon share his music with the
              world now. It's as free as it can be ,you can do with it whatever
              you want. Special thanks goes out to my fellow soul Stefan for
              recording sick guitar on song No. 4. Everything else was recorded
              and mixed by The Cocoon itself. With love from space,
              <br />
              Sincerly The Cocoon &lt;3
            </p>
            <img
              src="/public/Cover-2.jpg"
              alt="Cover of the EP. A Robot and the name of the band"
              className="flex min-w-80 md:max-w-lg md:justify-evenly"
            />
            <div>
              <h3 className="text-white font-ibm flex justify-center p-4">
                Go listen to it
              </h3>
              <div className="flex justify-around">
                <a
                  href="https://open.spotify.com/album/2KyUlt8le2yBXwSRVpNYWn?si=hMdg2X0BR9OWjQ_PGPTjjg"
                  target="_blank"
                >
                  <button className="text-white rounded-full border-2 border-white px-6 py-2">
                    Spotify
                  </button>
                </a>
                <a
                  href="https://music.apple.com/de/album/everything-in-time-ep/1772822468"
                  target="_blank"
                >
                  <button className="text-white rounded-full border-2 border-white px-6 py-2">
                    Apple Music
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4">
            <p className="flex text-white py-2 text-left font-ibm md:max-w-lg mb-1">
              This one is for YOU! You weirdo, you freak. I want to thank you
              for vibing with me in front of the stage and slipping on the
              drippiest drip mankind could imagine. <br />
              This song is not available on streaming cause we keeping it down
              under you know. You can download it for free here and do with it
              whatever you want. This piece of music is not ment for commercial
              use. It's a hommage to YOU and to the music of King Gizz. <br />
              Thank you Gizzy's , see you next time. <br />
              With Love, The Cocoon &lt;3
            </p>
            <img
              src="/public/poly.png"
              alt="Cover of the EP. A Robot and the name of the band"
              className="flex md:max-w-lg"
            />
            <h2 className="text-white font-ibm text-center p-4">
              A Fairytale Of The Unknown
            </h2>
            <audio controls>
              <source src="/public/Music/a-fairytale-of-the-unknown_master.wav" />
            </audio>
            <a
              className="flex justify-center mb-1"
              href="/public/Music/a-fairytale-of-the-unknown_master.wav"
            >
              <button className="text-white font-ibm rounded-full border-2 border-white px-6 py-2 m-2">
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

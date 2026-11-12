
import { useEffect, useRef, useState } from "react";
import {
  Heart, Sparkles, Music2, Image as ImageIcon, X, Play, Pause,
  Volume2, ArrowDown, Flower2, Star, Smile, Feather, HandHeart
} from "lucide-react";

const qualities = [
  { icon: HandHeart, title: "Your kindness", text: "The little ways you make people feel cared for.", color: "pink" },
  { icon: Flower2, title: "Your humble heart", text: "The quiet goodness in the way you carry yourself.", color: "peach" },
  { icon: Heart, title: "Your caring nature", text: "The warmth you show, sometimes without even realising it.", color: "lavender" },
  { icon: Feather, title: "Your honesty", text: "The sincerity that makes your words mean something.", color: "mint" },
  { icon: Star, title: "Your thoughtful mind", text: "The way you see the world and the beauty in your ideas.", color: "butter" },
  { icon: Smile, title: "Your smile & laughter", text: "A little brightness that can make an ordinary day better.", color: "sky" },
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <span>♡</span> for my favourite human
      </a>
      <nav>
        <a href="#home">Home</a>
        <a href="#gratitude">Thank you</a>
        <a href="#letter">My letter</a>
        <a href="#memories">Memories</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <Sparkles size={15} /> A LITTLE NOTE, JUST FOR YOU
        </div>

        <h1>
          In a world of many,<br />
          <span>my heart smiles</span> at you.
        </h1>

        <p className="hero-lead">
          For AAMBA, my AMU — a small collection of gratitude,
          gentle thoughts, and two memories I never want to lose.
        </p>

        <a className="primary-btn" href="#gratitude">
          Come on in <Heart size={17} fill="currentColor" />
        </a>

        <p className="signature">
          always with a soft corner for you, Your Bawra
        </p>
      </div>

      <div className="hero-art">
        <div className="sun-glow" />
        <div className="heart-card">
          <span className="tiny-star star-one">✦</span>
          <span className="tiny-star star-two">✧</span>
          <div className="big-heart">♡</div>
          <p>you make<br />ordinary days glow</p>
          <span className="heart-card-bottom">a little reminder ✿</span>
        </div>
        <div className="float-note note-one">you are appreciated</div>
        <div className="float-note note-two">a smile worth remembering ♡</div>
      </div>

      <a className="scroll-hint" href="#gratitude">
        <ArrowDown size={16} /> scroll gently
      </a>
    </section>
  );
}

function Gratitude() {
  return (
    <section className="section-wrap gratitude-section" id="gratitude">
      <div className="section-heading">
        <span className="eyebrow">THE LITTLE THINGS</span>
        <h2>Things I appreciate <em>about you</em></h2>
        <p>Not a list of expectations. Just a few things worth saying thank you for.</p>
      </div>

      <div className="quality-grid">
        {qualities.map(({ icon: Icon, title, text, color }, index) => (
          <article
            className={`quality-card quality-${color}`}
            style={{ "--delay": `${index * 100}ms` }}
            key={title}
          >
            <div className="quality-icon">
              <Icon size={23} strokeWidth={1.8} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="quality-sparkle">✦</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function LoveLetter() {
  return (
    <section className="letter-section" id="letter">
      <div className="letter-paper">
        <div className="letter-top">
          <span>✿ a note from the heart</span>
          <span>♡</span>
        </div>

        <h2>Dear AAMBA,</h2>

        <p>
          Some people become special in our lives without even trying.
          You are one of those people for me.
        </p>

        <p>
          I wanted to make this little space to thank you — for your kindness,
          your humble nature, your care, your honesty, your thoughtful words,
          and the smile and laughter that make you, you.
        </p>

        <p>
          I know that feelings do not always have to be equal, and I never
          want you to feel that you owe me anything. I respect your comfort,
          your choices, and the boundaries you have shared with me.
          Your happiness and peace matter.
        </p>

        <div className="fear-highlight">
          <span className="fear-label">
            <Heart size={15} fill="currentColor" />
            SOMETHING I FEAR, AND HOPE FOR
          </span>

          <p>
            I have told you many times that my biggest fear is losing you.
            Sometimes, the thought of losing you feels like losing a quiet
            piece of my own soul. You have become a beautiful part of my days,
            and the idea of a world where we no longer share even the smallest
            moments makes my heart ache.

            I never want to lose the connection we have. I hope life gives us
            the chance to stay close, walk beside each other, and keep choosing
            one another — not out of obligation, but because our hearts
            genuinely want to.
          </p>
        </div>

        <p>
          I simply wanted you to know that knowing you has meant something
          to me. Whatever life brings, I will always be grateful for the
          kindness and memories you shared.
        </p>

        <p>
          Keep being the lovely person you are. I wish you happiness,
          calm days, and all the beautiful things life can offer.
        </p>

        <div className="letter-signoff">
          With affection,
          <strong>Your Bawra</strong>
        </div>
      </div>
    </section>
  );
}

function Memories({ onPhoto, onAudio }) {
  return (
    <section className="section-wrap memories-section" id="memories">
      <div className="section-heading">
        <span className="eyebrow">TWO LITTLE TREASURES</span>
        <h2>Memories I’ll <em>keep close</em></h2>
        <p>One to look at. One to listen to. Both shared with me, and both precious.</p>
      </div>

      <div className="memory-grid">
        <button className="memory-card photo-memory" onClick={onPhoto}>
          <div className="memory-art photo-art">
            <div className="photo-frame">
              <ImageIcon size={36} />
              <span>a page to remember</span>
            </div>
          </div>

          <div className="memory-info">
            <div>
              <span className="memory-number">MEMORY 01</span>
              <h3>A page from you</h3>
              <p>A handwritten thought, saved just as you shared it.</p>
            </div>
            <span className="round-arrow">↗</span>
          </div>
        </button>

        <button className="memory-card audio-memory" onClick={onAudio}>
          <div className="memory-art audio-art">
            <div className="record">
              <div className="record-center">
                <Music2 size={25} />
              </div>
            </div>
            <span className="sound-wave">〰 〰 〰</span>
          </div>

          <div className="memory-info">
            <div>
              <span className="memory-number">MEMORY 02</span>
              <h3>A voice to remember</h3>
              <p>Open the player and listen whenever you want.</p>
            </div>
            <span className="round-arrow">↗</span>
          </div>
        </button>
      </div>

      <p className="memory-caption">
        Two little pieces of a moment. Kept with gratitude, never with expectation. ♡
      </p>
    </section>
  );
}

function PhotoModal({ onClose }) {
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Handwritten memory"
      onClick={onClose}
    >
      <div className="photo-modal" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close photo">
          <X />
        </button>

        <img
          src="/assets/aamu.jpeg"
          alt="The handwritten note titled Someone of Mine"
        />

        <p>“Someone of Mine” · 01/11/2026</p>
      </div>
    </div>
  );
}

function AudioModal({
  playing,
  volume,
  onTogglePlayback,
  onVolumeChange,
  onClose,
  error
}) {
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Voice memory player"
      onClick={onClose}
    >
      <div className="audio-modal" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close audio">
          <X />
        </button>

        <span className="eyebrow">MEMORY 02 · A VOICE TO KEEP</span>

        <div
          className={`heartbeat-heart ${playing ? "is-playing" : ""}`}
          style={{ "--heart-scale": 0.78 + volume * 0.42 }}
        >
          <button
            className="heart-control"
            onClick={onTogglePlayback}
            aria-label={playing ? "Pause recording" : "Play recording"}
          >
            <Heart
              className="heart-outline"
              size={104}
              fill="currentColor"
              strokeWidth={1.1}
            />
            <span className="heart-control-icon">
              {playing
                ? <Pause fill="white" size={30} />
                : <Play fill="white" size={30} />}
            </span>
          </button>

          {playing && <span className="pulse-ring pulse-one" />}
          {playing && <span className="pulse-ring pulse-two" />}
        </div>

        <h2>{playing ? "A little heartbeat…" : "A little piece of a moment."}</h2>

        <p>
          Tap the heart to play or pause. Adjust the volume and watch the heart change size.
        </p>

        <div className="volume-control">
          <Volume2 size={19} />

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(event) => onVolumeChange(Number(event.target.value))}
            aria-label="Recording volume"
            style={{ "--volume-progress": `${volume * 100}%` }}
          />

          <span>{Math.round(volume * 100)}%</span>
        </div>

        <div className="player-hint">
          {playing
            ? "Playing · tap the heart to pause"
            : "Paused · tap the heart when you're ready"}
        </div>

        {error && <p className="audio-error">{error}</p>}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-heart">♡</div>
      <p>Thank you for being a beautiful part of this little story.</p>
      <strong>For AAMBA, my AMU</strong>
      <span>— from Your Bawra</span>
      <small>made with care, and no expectations.</small>
    </footer>
  );
}

export default function App() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [audioError, setAudioError] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const openAudio = () => {
    // Opening the player does not restart or autoplay the recording.
    setShowAudio(true);
    setAudioError("");
  };

  const closeAudio = () => {
    // Pause but preserve the current playback position.
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setShowAudio(false);
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
        setAudioError("");
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch {
      setAudioError("The recording could not start. Please tap the heart again.");
      setPlaying(false);
    }
  };

  const handleVolumeChange = (nextVolume) => {
    setVolume(nextVolume);

    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Gratitude />
        <LoveLetter />

        <Memories
          onPhoto={() => setShowPhoto(true)}
          onAudio={openAudio}
        />
      </main>

      <Footer />

      {showPhoto && (
        <PhotoModal onClose={() => setShowPhoto(false)} />
      )}

      {/* Audio remains mounted so reopening the player preserves its position. */}
      <audio
        ref={audioRef}
        src="/assets/amuu.ogg"
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => setAudioError("Audio file could not be loaded. Check public/assets/amuu.ogg.")}
      />

      {showAudio && (
        <AudioModal
          playing={playing}
          volume={volume}
          onTogglePlayback={togglePlayback}
          onVolumeChange={handleVolumeChange}
          onClose={closeAudio}
          error={audioError}
        />
      )}
    </>
  );
}

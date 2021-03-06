import { FilmStructure } from '../../types/films';

type MoviePlayer = {
  playerStructure: FilmStructure;
};

function VideoPlayer(props: MoviePlayer): JSX.Element {
  const { playerStructure } = props;

  return (
    <>
      <video
        autoPlay
        muted
        src={playerStructure.videoLink}
        className="player__video"
        poster={playerStructure.previewImage}
      >
      </video>
      {}
    </>
  );
}

export default VideoPlayer;

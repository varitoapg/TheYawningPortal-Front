import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { CharacterForm } from "../../redux/features/characterSlice/reducer/types";
import setStatsModifier from "../../utils/setStatsModifier/setStatsModifier";
import DetailCharacterStyled from "./DetailCharacterStyled";
import Button from "../Button/Button";
import { useAppSelector } from "../../redux/hooks";
import useCharacter from "../../hooks/useCharacter/useCharacter";

interface DetailCharacterProps {
  character: CharacterForm;
}
const DetailCharacter = ({
  character: {
    imageBackup,
    background,
    details,
    characterClass,
    charisma,
    constitution,
    dexterity,
    intelligence,
    strength,
    wisdom,
    name,
    race,
    speed,
  },
}: DetailCharacterProps): JSX.Element => {
  const { deleteCharacter, getUserCharacters } = useCharacter();
  const {
    pages: { currentPage },
    filter,
  } = useAppSelector((state) => state.ui);

  const { idCharacter } = useParams();

  const deleteCharacterAction = () => {
    deleteCharacter(idCharacter as string);
    getUserCharacters(currentPage, filter);
  };

  return (
    <DetailCharacterStyled>
      <div className="character-image-container">
        <img
          src={imageBackup}
          alt={`${name} Avatar`}
          className="character-image__image"
          aria-label={`${name} Avatar`}
        />
        <Button
          classname="button icon"
          ariaLabel="Delete character"
          action={deleteCharacterAction}
          children={<FontAwesomeIcon icon={faHeartBroken} className="icon" />}
        />
        <Link to={`/edit/${idCharacter}`}>
          <FontAwesomeIcon icon={faPen} className="icon" />
        </Link>
      </div>

      <div className="character-information">
        <h2 className="character-information__label">name:</h2>
        <span className="character-information__value">{name}</span>
        <h2 className="character-information__label">race:</h2>
        <span className="character-information__value">{race}</span>
        <h2 className="character-information__label">class:</h2>
        <span className="character-information__value">{characterClass}</span>
      </div>

      <div className="secondary-stats">
        <div className="secondary-stats-container">
          <h3 className="secondary-stats-title">armor class</h3>
          <h2 className="secondary-stats-value" aria-label="armor class score">
            {10 + +setStatsModifier(dexterity)}
          </h2>
        </div>
        <div className="secondary-stats-container">
          <h3 className="secondary-stats-title">initiative</h3>
          <h2 className="secondary-stats-value" aria-label="initiative score">
            {setStatsModifier(dexterity)}
          </h2>
        </div>
        <div className="secondary-stats-container">
          <h3 className="secondary-stats-title">speed</h3>
          <h2 className="secondary-stats-value" aria-label="speed score">
            {speed}
          </h2>
        </div>
      </div>

      <div className="main-stats">
        <div className="main-stats__item">
          <h2 className="main-stats__label">strength</h2>
          <h3 className="main-stats__value" aria-label="strength score">
            {strength}
          </h3>
          <div className="main-stats__modifier">
            {setStatsModifier(strength)}
          </div>
        </div>
        <div className="main-stats__item">
          <h2 className="main-stats__label">dexterity</h2>
          <h3 className="main-stats__value" aria-label="dexterity score">
            {dexterity}
          </h3>
          <div className="main-stats__modifier">
            {setStatsModifier(dexterity)}
          </div>
        </div>
        <div className="main-stats__item">
          <h2 className="main-stats__label">constitution</h2>
          <h3 className="main-stats__value" aria-label="constitution score">
            {constitution}
          </h3>
          <div className="main-stats__modifier">
            {setStatsModifier(constitution)}
          </div>
        </div>
        <div className="main-stats__item">
          <h2 className="main-stats__label">intelligence</h2>
          <h3 className="main-stats__value" aria-label="intelligence score">
            {intelligence}
          </h3>
          <div className="main-stats__modifier">
            {setStatsModifier(intelligence)}
          </div>
        </div>
        <div className="main-stats__item">
          <h2 className="main-stats__label">wisdom</h2>
          <h3 className="main-stats__value" aria-label="wisdom score">
            {wisdom}
          </h3>
          <div className="main-stats__modifier">{setStatsModifier(wisdom)}</div>
        </div>
        <div className="main-stats__item">
          <h2 className="main-stats__label">charisma</h2>
          <h3 className="main-stats__value" aria-label="charsima score">
            {charisma}
          </h3>
          <div className="main-stats__modifier">
            {setStatsModifier(charisma)}
          </div>
        </div>
      </div>

      <div className="character-story">
        <h2 className="character-story__label">background:</h2>
        <span className="character-story__value">{background}</span>
        <h2 className="character-story__label">details:</h2>
        <span className="character-story__value">{details}</span>
      </div>
    </DetailCharacterStyled>
  );
};

export default DetailCharacter;
function getUserCharacters(currentPage: any, filter: any) {
  throw new Error("Function not implemented.");
}

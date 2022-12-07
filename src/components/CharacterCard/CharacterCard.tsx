import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faAnkh,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import { Character } from "../../redux/features/characterSlice/reducer/types";
import Button from "../Button/Button";
import CharacterCardStyled from "./CharacterCardStyled";
import { useAppSelector } from "../../redux/hooks";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character: {
    name,
    race,
    charisma,
    constitution,
    dexterity,
    intelligence,
    strength,
    wisdom,
    isAlive,
    imageBackup,
    id,
    characterClass,
  },
}: CharacterCardProps): JSX.Element => {
  const { deleteCharacter, getUserCharacters } = useCharacter();
  const {
    pages: { currentPage },
    filter,
  } = useAppSelector((state) => state.ui);

  const deleteCharacterAction = () => {
    deleteCharacter(id);
    getUserCharacters(currentPage, filter);
  };

  return (
    <CharacterCardStyled>
      <div className="character-state">
        <Link to={`/character/${id}`}>
          {imageBackup ? (
            <img
              src={imageBackup}
              alt={`${name}`}
              className={`character__image character__image${
                isAlive ? "" : "--dead"
              } `}
            />
          ) : (
            <div
              aria-label="Empty image"
              className={`character__image character__image${
                isAlive ? "" : "--dead"
              } `}
            ></div>
          )}
        </Link>
        <div className="button-container">
          {isAlive ? (
            <Button
              classname="button button-icon"
              ariaLabel="Kill character"
              children={<FontAwesomeIcon icon={faSkull} className="icon" />}
            />
          ) : (
            <Button
              classname="button button-icon"
              ariaLabel="Resurrect character"
              children={<FontAwesomeIcon icon={faAnkh} className="icon" />}
            />
          )}
          <Button
            classname="button button-icon"
            ariaLabel="Delete character"
            action={deleteCharacterAction}
            children={<FontAwesomeIcon icon={faHeartBroken} className="icon" />}
          />
        </div>
      </div>

      <div className="character-container">
        <h2 className="character__name">{name}</h2>
        <span className="character__information">{characterClass}</span>
        <span className="character__information">{race}</span>
      </div>
      <div className="character__atributes">
        <div className="character__stat-container">
          <h3 className="character__stat-title">str</h3>
          <span className="character__stat-value">{strength}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">dex</h3>
          <span className="character__stat-value">{dexterity}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">con</h3>
          <span className="character__stat-value">{constitution}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">int</h3>
          <span className="character__stat-value">{intelligence}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">wis</h3>
          <span className="character__stat-value">{wisdom}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">cha</h3>
          <span className="character__stat-value">{charisma}</span>
        </div>
      </div>
    </CharacterCardStyled>
  );
};

export default CharacterCard;

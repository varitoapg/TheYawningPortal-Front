import { FaSkull, FaAnkh, FaHeartBroken } from "react-icons/fa";
import useCharacter from "../../hooks/useCharacter/useCharacter";

import { Character } from "../../redux/features/characterSlice/reducer/types";
import Button from "../Button/Button";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character: {
    class: characterClass,
    name,
    race,
    stats,
    isAlive,
    imageBackup,
    id,
  },
}: CharacterCardProps): JSX.Element => {
  const { deleteCharacter } = useCharacter();

  const deleteCharacterAction = () => {
    deleteCharacter(id);
  };
  return (
    <CharacterCardStyled>
      <div className="character-state">
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
        <div className="button-container">
          {isAlive ? (
            <Button
              classname="button button-icon"
              ariaLabel="Kill character"
              children={<FaSkull className="icon" />}
            />
          ) : (
            <Button
              classname="button button-icon"
              ariaLabel="Resurrect character"
              children={<FaAnkh className="icon" />}
            />
          )}
          <Button
            classname="button button-icon"
            ariaLabel="Delete character"
            action={deleteCharacterAction}
            children={<FaHeartBroken className="icon" />}
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
          <span className="character__stat-value">{stats.strength}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">dex</h3>
          <span className="character__stat-value">{stats.dexterity}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">con</h3>
          <span className="character__stat-value">{stats.constitution}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">int</h3>
          <span className="character__stat-value">{stats.intelligence}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">wis</h3>
          <span className="character__stat-value">{stats.wisdom}</span>
        </div>
        <div className="character__stat-container">
          <h3 className="character__stat-title">cha</h3>
          <span className="character__stat-value">{stats.charisma}</span>
        </div>
      </div>
    </CharacterCardStyled>
  );
};

export default CharacterCard;

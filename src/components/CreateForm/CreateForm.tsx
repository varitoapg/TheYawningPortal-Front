import { useState } from "react";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import { CharacterForm } from "../../redux/features/characterSlice/reducer/types";
import { useAppSelector } from "../../redux/hooks";
import setStatsModifier from "../../utils/setStatsModifier/setStatsModifier";
import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const initialDataCharacter: CharacterForm = {
  background: "",
  details: "",
  characterClass: "",
  image: {} as File,
  name: "",
  race: "",
  charisma: 0,
  wisdom: 0,
  intelligence: 0,
  constitution: 0,
  dexterity: 0,
  strength: 0,
  speed: 0,
};

const CreateForm = (): JSX.Element => {
  const { currentPage } = useAppSelector((state) => state.ui.pages);
  const filter = useAppSelector((state) => state.ui.filter);
  const [createCharacterData, setCreateCharacterData] =
    useState(initialDataCharacter);

  const { createCharacter, getUserCharacters } = useCharacter();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateCharacterData({
      ...createCharacterData,
      [event.target.id]:
        event.target.id === "image"
          ? (event.target as HTMLInputElement).files![0]
          : event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const createdCharacter: CharacterForm = {
      background: createCharacterData.background,
      characterClass: createCharacterData.characterClass,
      details: createCharacterData.details,
      image: createCharacterData.image,
      name: createCharacterData.name,
      race: createCharacterData.race,
      charisma: createCharacterData.charisma,
      wisdom: createCharacterData.wisdom,
      intelligence: createCharacterData.intelligence,
      constitution: createCharacterData.constitution,
      dexterity: createCharacterData.dexterity,
      strength: createCharacterData.strength,
      speed: createCharacterData.speed,
    };

    await createCharacter(createdCharacter);
    await getUserCharacters(currentPage, filter);
  };

  return (
    <CreateFormStyled onSubmit={handleSubmit}>
      <div className="create-form__item--image">
        <label className="create-form__label" htmlFor="image">
          {(createCharacterData.image as File).name ? (
            <img
              src={URL.createObjectURL(createCharacterData.image as File)}
              alt="Your avatar"
              className="edit-profile__image"
              aria-label="Your avatar"
            />
          ) : (
            <div
              aria-label="Empty image"
              className={"edit-profile__image"}
            ></div>
          )}
        </label>
        <input
          data-testid="input image"
          className="create-form__input--image"
          type="file"
          id="image"
          onChange={handleFormChange}
        />
      </div>

      <div className="character-container">
        <div className="create-form__item">
          <label className="create-form__label--character" htmlFor="name">
            name:
          </label>
          <input
            value={createCharacterData.name}
            className="create-form__input"
            type="text"
            id="name"
            placeholder="Insert name here"
            onChange={handleFormChange}
            autoComplete="off"
          />
        </div>
        <div className="create-form__item">
          <label className="create-form__label--character" htmlFor="race">
            race:
          </label>
          <input
            value={createCharacterData.race}
            className="create-form__input"
            type="text"
            id="race"
            placeholder="Insert race here"
            onChange={handleFormChange}
            autoComplete="off"
          />
        </div>
        <div className="create-form__item">
          <label
            className="create-form__label--character"
            htmlFor="characterClass"
          >
            class:
          </label>
          <select
            className="create-form__input create-form__input--select"
            onChange={handleFormChange}
            id="characterClass"
          >
            {/* <option>select a class</option> */}
            <option value="artificer">artificer</option>
            <option value="barbarian">barbarian</option>
            <option value="warlock">warlock</option>
            <option value="fighter">fighter</option>
            <option value="monk">monk</option>
            <option value="druid">druid</option>
            <option value="rogue">rogue</option>
            <option value="cleric">cleric</option>
            <option value="ranger">ranger</option>
            <option value="wizard">wizard</option>
            <option value="sorcerer">sorcerer</option>
            <option value="bard">bard</option>
            <option value="paladin">paladin</option>
          </select>
        </div>
      </div>

      <div className="secondary-stats">
        <div className="secondary-stats-container">
          <h3 className="secondary-stats-title">armor class</h3>
          <h2 className="secondary-stats-value">16</h2>
        </div>
        <div className="secondary-stats-container">
          <h3 className="secondary-stats-title">initiative</h3>
          <h2 className="secondary-stats-value">+2</h2>
        </div>
        <div className="secondary-stats-container">
          <div className="secondary-stats__item">
            <label className="secondary-stats__label" htmlFor="speed">
              speed
            </label>
            <input
              className="secondary-stats__input"
              type="number"
              id="speed"
              placeholder="5"
              onChange={handleFormChange}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className="main-stats">
        <div className="main-stats__item">
          <label className="main-stats__label" htmlFor="strength">
            strength
          </label>
          <input
            className="main-stats__input"
            type="number"
            id="strength"
            placeholder="5"
            onChange={handleFormChange}
            autoComplete="off"
            max={20}
          />
          <div className="main-stats__modifier">
            {setStatsModifier(createCharacterData.strength)}
          </div>
          {/* <Button
            children={<FaDiceD20 className="icon--randomize" />}
            ariaLabel="Randomize strength"
            classname="button button--randomize"
            buttonType="button"
          /> */}
        </div>

        <div className="main-stats__item">
          <label className="main-stats__label" htmlFor="constitution">
            constitution
          </label>
          <input
            max={20}
            min={0}
            className="main-stats__input"
            type="number"
            id="constitution"
            placeholder="5"
            onChange={handleFormChange}
            autoComplete="off"
          />
          <div className="main-stats__modifier">
            {setStatsModifier(createCharacterData.constitution)}
          </div>
          {/* <Button
            children={<FaDiceD20 className="icon--randomize" />}
            ariaLabel="Randomize constitution"
            classname="button button--randomize"
            buttonType="button"
          /> */}
        </div>

        <div className="main-stats__item">
          <label className="main-stats__label" htmlFor="dexterity">
            dexterity
          </label>
          <input
            max={20}
            min={0}
            className="main-stats__input"
            type="number"
            id="dexterity"
            placeholder="5"
            onChange={handleFormChange}
            autoComplete="off"
          />
          <div className="main-stats__modifier">
            {setStatsModifier(createCharacterData.dexterity)}
          </div>
          {/* <Button
            children={<FaDiceD20 className="icon--randomize" />}
            ariaLabel="Randomize dexterity"
            classname="button button--randomize"
            buttonType="button"
          /> */}
        </div>

        <div className="main-stats__item">
          <label className="main-stats__label" htmlFor="intelligence">
            intelligence
          </label>
          <input
            className="main-stats__input"
            type="number"
            id="intelligence"
            placeholder="5"
            onChange={handleFormChange}
            autoComplete="off"
            max={20}
            min={0}
          />
          <div className="main-stats__modifier">
            {setStatsModifier(createCharacterData.intelligence)}
          </div>
          {/* <Button
            children={<FaDiceD20 className="icon--randomize" />}
            ariaLabel="Randomize intelligence"
            classname="button button--randomize"
            buttonType="button"
          /> */}
        </div>

        <div className="main-stats__item">
          <label className="main-stats__label" htmlFor="wisdom">
            wisdom
          </label>
          <input
            className="main-stats__input"
            type="number"
            id="wisdom"
            placeholder="5"
            onChange={handleFormChange}
            autoComplete="off"
            max={20}
            min={0}
          />
          <div className="main-stats__modifier">
            {setStatsModifier(createCharacterData.wisdom)}
          </div>
          {/* <Button
            children={<FaDiceD20 className="icon--randomize" />}
            ariaLabel="Randomize wisdom"
            classname="button button--randomize"
            buttonType="button"
          /> */}
        </div>

        <div className="main-stats__item">
          <label className="main-stats__label" htmlFor="charisma">
            charisma
          </label>
          <input
            className="main-stats__input"
            type="number"
            id="charisma"
            placeholder="5"
            onChange={handleFormChange}
            autoComplete="off"
            max={20}
            min={0}
          />
          <div className="main-stats__modifier">
            {setStatsModifier(createCharacterData.charisma)}
          </div>
          {/* <Button
            children={<FaDiceD20 className="icon--randomize" />}
            ariaLabel="Randomize charisma"
            classname="button button--randomize"
            buttonType="button"
          /> */}
        </div>
      </div>

      <div className="character-information-container">
        <div className="character-information__item">
          <label className="character-information__label" htmlFor="background">
            background:
          </label>
          <input
            className="character-information__input"
            type="text"
            id="background"
            placeholder="Insert your background here"
            onChange={handleFormChange}
            autoComplete="off"
          />
        </div>
        <div className="character-information__item">
          <label className="character-information__label" htmlFor="details">
            details:
          </label>
          <textarea
            id="details"
            placeholder="Insert your details here"
            rows={10}
            onChange={handleFormChange}
            className="character-information__input character-information__input--textArea"
          />
        </div>
      </div>

      <Button
        classname="button button--create"
        children={"Create"}
        ariaLabel="Create"
        buttonType="submit"
      />
    </CreateFormStyled>
  );
};

export default CreateForm;

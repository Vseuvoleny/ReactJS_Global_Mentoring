import React, { FC } from "react";
import Ovals from "../../../elements/Icon/Icons/Ovals/Ovals";
import DropDawn from "../../../elements/DropDawn/DropDawn";
import { ICardControler } from "./types";

const CardControler: FC<ICardControler> = ({
  isDropDawnOpen,
  setDropDawnOpen,
}) =>
  isDropDawnOpen ? (
    <DropDawn setDropDawnOpen={setDropDawnOpen} />
  ) : (
    <Ovals
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      classes={"card__image-icon"}
      onClick={() => setDropDawnOpen(true)}
    />
  );

export default CardControler;

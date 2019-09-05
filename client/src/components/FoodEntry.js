import React, { useState } from 'react';
import styled from 'styled-components';
import {
  EventEntry,
  EventIcon,
  EventDate,
  EventContent,
  EventEdit,
  EventDelete,
  EventDetails
} from './EventEntry';
import FoodForm from './FoodForm';
import foodIcon from '../icons/food.svg';

const Type = styled.span`
  font-weight: bold;
  margin-right: 4px;
`;

function FoodEntry({ type, amount, date, onDelete, onUpdate }) {
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!edit);
  }

  function handleUpdate(values) {
    setEdit(false);
    onUpdate(values);
  }

  return (
    <>
      <EventEntry>
        <EventIcon src={foodIcon} />
        <EventContent>
          <EventDetails>
            <Type>
              {amount}ml von {type}
            </Type>
          </EventDetails>
          <EventDate date={date} />
        </EventContent>
        {onUpdate && <EventEdit onClick={handleEdit} />}
        {onDelete && <EventDelete onClick={onDelete} />}
      </EventEntry>
      {edit && (
        <FoodForm
          header="Bearbeiten"
          submitLabel="Speichern"
          onSubmit={handleUpdate}
          initalValues={{ type, amount, date: new Date(date) }}
        />
      )}
    </>
  );
}

export default FoodEntry;
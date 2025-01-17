import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import { FaEdit } from "react-icons/fa";
import { IoDuplicate } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./cabin-hooks/useDeleteCabin";
import { useCreateCabin } from "./cabin-hooks/useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const {
    name,
    id: cabinId,
    image,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;
  const handleDuplicate = () => {
    createCabin({
      name: `A Copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  };

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to : {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <IconContainer>
          <FaEdit
            size={24}
            onClick={() => setShowForm(!showForm)}
            cursor="pointer"
          />
          <IoDuplicate
            size={isCreating ? 28 : 24}
            cursor="pointer"
            onClick={handleDuplicate}
          />
          <MdDelete
            size={isDeleting ? 28 : 24}
            cursor="pointer"
            onClick={() => deleteCabin(cabinId)}
          />
        </IconContainer>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

export default CabinRow;

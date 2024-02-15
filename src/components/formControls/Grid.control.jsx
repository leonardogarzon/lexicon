import React, { useState } from "react";
import { Body, Cell, Head, Row, Table } from "@clayui/core";
import { ClayPaginationBarWithBasicItems } from "@clayui/pagination-bar";

const spritemap = "/images/icons/icons.svg";

const GridControl = ({ rows, columns, offset }) => {
  const [delta, setDelta] = useState(offset);
  const [items, setItems] = useState(rows.slice(0, delta));

  const handleDeltaChange = (val) => {
    let start = (val - 1) * delta;
    let end = start + delta;
    let newRows = rows.slice(start, end);
    setItems(newRows);
  };

  return (
    <>
      <Table>
        <Head items={columns}>
          {columns.map((column) => {
            return <Cell key={column.id}>{column.name}</Cell>;
          })}
        </Head>

        <Body>
          {items.map((row) => (
            <Row key={row.id}>
              {columns.map((column) => {
                return <Cell key={column.id}>{row[column.id]}</Cell>;
              })}
            </Row>
          ))}
        </Body>
      </Table>
      <ClayPaginationBarWithBasicItems
        activeDelta={delta}
        defaultActive={1}
        ellipsisBuffer={3}
        ellipsisProps={{ "aria-label": "More", title: "More" }}
        onDeltaChange={setDelta}
        onActiveChange={handleDeltaChange}
        showDeltasDropDown={false}
        totalItems={rows.length}
        spritemap={spritemap}
      />
    </>
  );
};

export default GridControl;

import React from 'react';
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
interface PaginationProps {
  onNext: (newPage: number) => void;
  onPrev: (newPage: number) => void;
  page: number;
  totalItems: number;
  itemsCount: number;
  itemsPerPage: number;
}

const Container = styled.div`
  color: white;
  display: flex;
  margin-top: 35px;
  margin-bottom: 24px;
  svg {
  }
`;
const Row = styled.div<{ isDisabled: boolean }>`
  display: flex;
  align-items: center;
  /* cursor: ${(props) => (!!props.isDisabled ? 'default' : 'pointer')}; */
  opacity: ${(props) => (!!props.isDisabled ? 0.4 : 1)};
`;
const Text = styled.p<{ marginLeft?: boolean; marginRight?: boolean }>`
  margin-right: ${(props) => (!!props.marginRight ? 4 : 0)}px;
  margin-left: ${(props) => (!!props.marginLeft ? 4 : 0)}px;
  font-size: 14px;
`;

const Pagination = (props: PaginationProps) => {
  const canGoBack = props.page !== 1;
  const canGoNext =
    props.page * props.itemsPerPage - 9 + props.itemsCount < props.totalItems;
  return (
    <Container>
      <Row
        style={{
          marginRight: '24px',
        }}
        onClick={() => (!!canGoBack ? props.onPrev(props.page - 1) : {})}
        isDisabled={!canGoBack}
      >
        <AiOutlineLeft size={14} />
        <Text marginLeft>Prev</Text>
      </Row>
      <Row
        onClick={() => (!!canGoNext ? props.onNext(props.page + 1) : {})}
        isDisabled={!canGoNext}
      >
        <Text marginRight>Next</Text>

        <AiOutlineRight size={14} />
      </Row>
    </Container>
  );
};

export default Pagination;

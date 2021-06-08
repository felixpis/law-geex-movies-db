import PropTypes from 'prop-types';
import { Button, Input, Select, Spin } from 'antd';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { queryState } from '../state/atoms';
const { Option } = Select;

const Form = styled.form`
  display: flex;
`;

const StyledInput = styled(Input)`
  width: 200px;
`;

const StyledSelect = styled(Select)`
  width: 120px;
`;

const SearchForm = ({onSearch, years, year, onFilter, isLoading}) => {
  const [query, setQuery] = useRecoilState(queryState);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }
  const handleYearChange = (value) => {
    onFilter(value);
  }
  const handleSubmit = (e) => {
    onSearch(query);
    e.cancelBubble = true;
    e.preventDefault();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput placeholder="Search movie" value={query} onChange={handleQueryChange} />
      <Button type="primary" htmlType="submit" disabled={query?.length < 3 || isLoading}>{isLoading ? <Spin size="small" /> : "Search"}</Button>
      {years.length > 0 && <StyledSelect placeholder="Release year" value={year} onChange={handleYearChange} allowClear>
        {years.map(year => <Option key={year} value={year}>{year}</Option>)}
      </StyledSelect>}
    </Form>
  )
}

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  years: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.string,
  onFilter: PropTypes.func,
  isLoading: PropTypes.bool
}

export default SearchForm

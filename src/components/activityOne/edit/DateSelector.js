import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { RangePicker } = DatePicker;
const DateSelectorWrap = styled.div``;

const StyledRangePicker = styled(RangePicker)`
  height: 3rem;
  width: 18.8vw;
  border: none;
  margin-top: 0.4vw;

  &:hover {
    background-color: #eeeeee !important;
  }
`;

const DateSelector = props => {
  const { startPlaceholer, endPlaceholer, onChange } = props;
  return (
    <DateSelectorWrap>
      <Space direction="vertical" size={12}>
        <StyledRangePicker
          suffixIcon=""
          placeholder={[startPlaceholer, endPlaceholer]}
          onChange={onChange}
        />
      </Space>
    </DateSelectorWrap>
  );
};

export default DateSelector;

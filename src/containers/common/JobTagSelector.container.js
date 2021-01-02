import React from 'react';
import {
  setJobItems,
  setJobName,
  setJobArray,
} from '../../store/modules/jobTag';
import { setJob } from '../../store/modules/activity';
import { useDispatch, useSelector } from 'react-redux';
import TagSelector from '../../components/createActivity/TagSelector';

const JobTagSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveItems = data => dispatch(setJobItems(data));
  const saveName = data => dispatch(setJobName(data));
  const saveJob = data => dispatch(setJob(data));

  const name = useSelector(state => state.jobTag.name);
  const items = useSelector(state => state.jobTag.items);
  const job = useSelector(state => state.activity.job);

  const onNameChange = event => {
    saveName(event.target.value);
  };
  const addItem = () => {
    if (name != null && !items.includes(name)) {
      saveItems([...items, name]);
    }
    saveName('');
  };
  const onChange = event => {
    saveJob(event);
  };
  return (
    <TagSelector
      onNameChange={onNameChange}
      onChange={onChange}
      addItem={addItem}
      items={items}
      name={name}
      placeholder="직무 태그 추가"
      selected={job}
    />
  );
};

export default JobTagSelectorContainer;
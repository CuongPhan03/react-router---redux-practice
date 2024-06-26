import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { Switch } from 'antd';

import { toggle } from '../../redux/slices/themeSlice';

function ThemeButton() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  return (
    <Switch
      checkedChildren="light"
      unCheckedChildren="dark"
      value={theme === 'light'}
      onChange={() => dispatch(toggle())}
    />
  );
}

export default ThemeButton;

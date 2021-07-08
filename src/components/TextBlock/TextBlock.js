import cn from 'classnames';
import { EditableText } from '@blueprintjs/core';

import styles from './TextBlock.module.scss';
import printStyles from './TextBlock.print.module.scss';

const TextBlock = () =>
  <EditableText
    className={cn(styles.editableText, printStyles.editableText)}
    multiline
    minLines={3}
    placeholder='Insert text here...'
  />;

export default TextBlock;

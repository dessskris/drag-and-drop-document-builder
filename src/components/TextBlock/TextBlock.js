import { EditableText } from '@blueprintjs/core';

import styles from './TextBlock.module.scss';

const TextBlock = () =>
  <EditableText
    className={styles.editableText}
    multiline
    minLines={3}
    placeholder='Insert text here...'
  />;

export default TextBlock;

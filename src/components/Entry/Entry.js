import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';
import { Button, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import styles from './Entry.module.scss';
import printStyles from './Entry.print.module.scss';

const Entry = ({ id, content, index, withDragHandle, onDeleteEntry }) => (
  <Draggable
    draggableId={id}
    index={index}
  >
    {(provided, snapshot) => {
      const containerDragHandleProps = withDragHandle ? {} : provided.dragHandleProps;
      return (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...containerDragHandleProps}
          className={cn(styles.container, printStyles.container, { [styles.dragging]: snapshot.isDragging })}
        >
          {withDragHandle
            ? <div className={styles.draggable}>
                <div className={cn(styles.utils, printStyles.hidden)}>
                  <Button
                    {...provided.dragHandleProps}
                    className={styles.dragHandle}
                    icon={IconNames.ARROWS_VERTICAL}
                    intent={Intent.PRIMARY}
                    minimal
                  />
                  <Button
                    onClick={onDeleteEntry}
                    icon={IconNames.TRASH}
                    intent={Intent.DANGER}
                    minimal
                  />
                </div>
                {content}
              </div>
            : content
          }
        </div>
      );
    }}
  </Draggable>
);

export default Entry;

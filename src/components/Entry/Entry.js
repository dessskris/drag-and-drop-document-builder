import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import styles from './Entry.module.scss';

const Entry = ({ id, content, index, withDragHandle }) => (
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
          className={cn(styles.container, { [styles.dragging]: snapshot.isDragging })}
        >
          {withDragHandle
            ? <div className={styles.draggable}>
                <Icon {...provided.dragHandleProps} className={styles.dragHandle} icon={IconNames.ARROWS_VERTICAL} iconSize={12} />
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

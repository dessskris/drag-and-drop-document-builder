import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';

import styles from './Entry.module.scss';

const Entry = ({ id, entry, index }) => {
  return (
    <Draggable
      draggableId={id}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cn(styles.container, { [styles.dragging]: snapshot.isDragging })}
        >
          {entry.content}
        </div>
      )}
    </Draggable>
  );
};

export default Entry;

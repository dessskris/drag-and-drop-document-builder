import { Droppable } from 'react-beautiful-dnd';
import cn from 'classnames';

import styles from './Column.module.scss';

const Column = ({ column, entries, isDropDisabled, className }) => (
  <div className={cn(styles.container, className)}>
    <h3 className={styles.title}>{column.title}</h3>
    <Droppable
      droppableId={column.id}
      isDropDisabled={isDropDisabled}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={cn(styles.taskList, { [styles.draggingOver]: snapshot.isDraggingOver })}
        >
          {entries}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default Column;

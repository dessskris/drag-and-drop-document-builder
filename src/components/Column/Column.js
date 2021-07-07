import { Droppable } from 'react-beautiful-dnd';
import cn from 'classnames';

import styles from './Column.module.scss';
import printStyles from './Column.print.module.scss';

const Column = ({ column, entries, isDropDisabled, className, rightElement }) => (
  <div className={cn(styles.container, className)}>
    <div className={cn(styles.header, printStyles.hidden)}>
      <h3>{column.title}</h3>
      {rightElement}
    </div>
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

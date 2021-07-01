import { Droppable } from 'react-beautiful-dnd';
import cn from 'classnames';

import Task from '../Task/Task';

import styles from './Column.module.scss';

const Column = ({ column, tasks, isDropDisabled }) => (
  <div className={styles.container}>
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
          {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default Column;

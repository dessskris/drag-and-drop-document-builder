import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';

import styles from './Task.module.scss';

const Task = ({ task, index }) => (
  <Draggable
    draggableId={task.id}
    index={index}
  >
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={cn(styles.container, { [styles.dragging]: snapshot.isDragging })}
      >
        {task.content}
      </div>
    )}
  </Draggable>
);

export default Task;

import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import styles from './App.module.scss';
import Column from './components/Column/Column';

const App = () => {
  const [data, setData] = useState(initialData);
  const [homeIndex, setHomeIndex] = useState();

  /*
  const onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  }

  const onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(data.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  }
  */

  const onDragStart = (start) => {
    setHomeIndex(data.columnOrder.indexOf(start.source.droppableId));
  }

  const onDragEnd = (result) => {
    //document.body.style.color = 'inherit';
    //document.body.style.backgroundColor = 'inherit';
    setHomeIndex(null);
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };
      setData({
        ...data,
        columns: { ...data.columns, [newColumn.id]: newColumn },
      });
      return;
    }

    // Moving from one column to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, taskIds: finishTaskIds };
    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  return (
    <DragDropContext
      onDragStart={onDragStart}
      //onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <div className={styles.container}>
        {data.columnOrder.map((columnId, index) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
          return <Column
            key={column.id}
            column={column}
            tasks={tasks}
            isDropDisabled={index < homeIndex}
          />;
        })}
      </div>
    </DragDropContext>
  );
};

export default App;
